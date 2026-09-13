<?php
/**
 * Contact form handler for Build Compliance 360.
 *
 * Receives the enquiry form as JSON (matching the site's fetch() call),
 * validates it, runs a few anti-bot checks, and emails the result to
 * enquiries@buildcompliance360.com (or whatever TO_EMAIL is set to below).
 *
 * This file lives in the site's document root (public_html/contact.php)
 * as part of a fully static export, no Node.js server is needed.
 */

// ---- Configuration -------------------------------------------------

$toEmail = "enquiries@buildcompliance360.com";
$siteName = "Build Compliance 360";

// The domain(s) this form is allowed to be submitted from. Update if the
// site's domain changes, or add www./non-www. variants as needed.
$allowedOrigins = [
    "https://buildcompliance360.com",
    "https://www.buildcompliance360.com",
];

// Minimum seconds between page load and form submission. Real visitors
// take at least a couple of seconds to fill in a form; bots that submit
// instantly get rejected. Set to 0 to disable.
$minSecondsToSubmit = 3;

// ---- Helpers ---------------------------------------------------------

header("Content-Type: application/json");

function respond(bool $ok, string $error = "", int $status = 200): void {
    http_response_code($status);
    echo json_encode($error === "" ? ["ok" => $ok] : ["ok" => $ok, "error" => $error]);
    exit;
}

function isValidEmail(string $value): bool {
    return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

// ---- Method + origin checks -------------------------------------------

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    respond(false, "Method not allowed.", 405);
}

// Loose origin check: only enforced if the browser actually sent one
// (some setups/older browsers omit it), so this narrows spam without
// breaking legitimate submissions.
$origin = $_SERVER["HTTP_ORIGIN"] ?? $_SERVER["HTTP_REFERER"] ?? "";
if ($origin !== "") {
    $originAllowed = false;
    foreach ($allowedOrigins as $allowed) {
        if (str_starts_with($origin, $allowed)) {
            $originAllowed = true;
            break;
        }
    }
    if (!$originAllowed) {
        respond(false, "Request origin not allowed.", 403);
    }
}

// ---- Parse body (JSON, matching the site's fetch() call) --------------

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    // Fall back to a normal form POST in case this is ever used with a
    // plain <form> submit instead of fetch().
    $data = $_POST;
}

$name = trim((string)($data["name"] ?? ""));
$email = trim((string)($data["email"] ?? ""));
$phone = trim((string)($data["phone"] ?? ""));
$county = trim((string)($data["county"] ?? ""));
$service = trim((string)($data["service"] ?? ""));
$message = trim((string)($data["message"] ?? ""));
$honeypot = trim((string)($data["company"] ?? ""));
$formLoadedAt = (float)($data["loadedAt"] ?? 0);

// ---- Anti-bot checks ---------------------------------------------------

// 1. Honeypot: a field real visitors never see or fill in. If it's
//    non-empty, silently pretend success so bots don't learn to leave it
//    blank next time.
if ($honeypot !== "") {
    respond(true);
}

// 2. Time trap: reject submissions that arrive suspiciously fast.
if ($minSecondsToSubmit > 0 && $formLoadedAt > 0) {
    $elapsed = microtime(true) - ($formLoadedAt / 1000);
    if ($elapsed < $minSecondsToSubmit) {
        respond(true); // pretend success rather than tipping off the bot
    }
}

// ---- Real validation ----------------------------------------------------

if ($name === "" || $email === "") {
    respond(false, "Name and email are required.", 400);
}
if (!isValidEmail($email)) {
    respond(false, "Please provide a valid email address.", 400);
}
if (strlen($name) > 200 || strlen($message) > 5000) {
    respond(false, "That submission looks too long, please shorten it and try again.", 400);
}

// ---- Send the email -----------------------------------------------------

$subject = "New enquiry from $name" . ($service !== "" ? ": $service" : "");

$fields = [
    "Name" => $name,
    "Email" => $email,
    "Phone" => $phone !== "" ? $phone : "Not provided",
    "County" => $county !== "" ? $county : "Not specified",
    "Service needed" => $service !== "" ? $service : "Not specified",
];

$bodyLines = ["New enquiry from the $siteName website contact form.", ""];
foreach ($fields as $label => $value) {
    $bodyLines[] = "$label: $value";
}
$bodyLines[] = "";
$bodyLines[] = "Message:";
$bodyLines[] = $message !== "" ? $message : "(No message provided)";
$body = implode("\n", $bodyLines);

// Reply-To is the visitor's own address so replying from the inbox works
// naturally; From must stay on your own domain, most mail servers will
// reject or spam-flag mail claiming to be From a domain it isn't sent
// through.
$fromEmail = "enquiries@buildcompliance360.com"; // sending mailbox on your domain
$headers = [
    "From: $siteName Website <$fromEmail>",
    "Reply-To: $name <$email>",
    "Content-Type: text/plain; charset=UTF-8",
];

$sent = mail($toEmail, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(false, "Something went wrong sending your enquiry. Please try again or email us directly.", 502);
}

respond(true);
