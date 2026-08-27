import { site } from "@/lib/site";

const href = `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(site.whatsappMessage)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Build Compliance 360 on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-0 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:shadow-xl transition-shadow"
    >
      <span className="relative flex items-center justify-center w-14 h-14 shrink-0">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow" aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          className="relative w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.05 22h-.005a9.87 9.87 0 0 1-5.032-1.373L2.5 21.75l1.157-4.404A9.9 9.9 0 0 1 2.13 12.05C2.126 6.507 6.552 2 12.05 2c2.66 0 5.157 1.038 7.034 2.925A9.9 9.9 0 0 1 22 12.06c-.003 5.542-4.43 10.05-9.95 10.05zm5.13-14.96A7.9 7.9 0 0 0 12.05 4c-4.393 0-7.97 3.596-7.972 8.014a7.94 7.94 0 0 0 1.256 4.276l-.732 2.673 2.75-.72a7.98 7.98 0 0 0 4.203.98h.004c4.39 0 7.966-3.596 7.968-8.014-.045-2.017-.815-3.927-2.348-5.523z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:pr-5 transition-[max-width,padding] duration-300 ease-out text-[14px] font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}
