const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Submit your enquiry with a brief description of your property, project or approval situation.",
  },
  {
    n: "02",
    title: "We review your situation",
    body: "We look at the property, documents and approval requirements involved before advising you.",
  },
  {
    n: "03",
    title: "We guide the process",
    body: "We help identify the relevant requirements, missing documents and realistic next steps.",
  },
  {
    n: "04",
    title: "Move forward with confidence",
    body: "You get clarity on exactly what needs to happen next, and support to follow it through.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
      {steps.map((step) => (
        <div key={step.n} className="bg-white p-6 sm:p-7">
          <span className="font-mono-tag text-[13px] text-forest">{step.n}</span>
          <h3 className="font-display text-[18px] text-ink mt-3 mb-2 leading-snug">{step.title}</h3>
          <p className="text-[14px] text-slate leading-relaxed">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
