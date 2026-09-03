export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  audience: string[];
  whatWeHelpWith: string[];
  faqs: FAQ[];
  relatedServices: string[]; // slugs
  ctaLabel: string;
  priority: 1 | 2 | 3;
  category: "stuck-approvals" | "land" | "construction-approvals" | "bank-mortgage";
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "construction-approvals",
    title: "Construction Approvals",
    shortTitle: "Construction Approvals",
    tagline: "Get approved before you break ground",
    shortDescription:
      "End-to-end guidance through architectural, structural, NEMA, NCA and change of use approvals.",
    description: [
      "Construction in Kenya typically requires sign-off from several different bodies before work can legally begin, covering design, structural safety, environmental impact and contractor registration.",
      "We help clients understand which approvals apply to their project, prepare the required documentation, and manage submission and follow-up with the relevant authorities.",
    ],
    audience: [
      "Homeowners planning a new build or major renovation",
      "Developers preparing a new project for approval",
      "Contractors needing NCA registration in order",
    ],
    whatWeHelpWith: [
      "Identifying every approval your specific project needs",
      "Coordinating with architects and engineers on documentation",
      "Preparing NEMA and NCA applications",
      "Submitting and following up on approval applications",
      "Advising on change of use where applicable",
    ],
    faqs: [
      {
        q: "What approvals are required before construction in Kenya?",
        a: "Most projects require architectural approval, structural approval, and depending on scale and location, NEMA and NCA registration. Some projects also require a change of use approval. The exact combination depends on your project.",
      },
      {
        q: "Do I need NEMA approval for a small residential project?",
        a: "This depends on the scale, location and nature of the project. We review your specific plans before advising whether NEMA licensing applies.",
      },
    ],
    relatedServices: ["architectural-approval", "structural-approval", "nema-approval", "nca-approval", "change-of-use"],
    ctaLabel: "Discuss Your Project",
    priority: 1,
    category: "construction-approvals",
    seo: {
      title: "Construction Approvals in Kenya | Build Compliance 360",
      description:
        "Architectural, structural, NEMA, NCA and change of use approvals for construction projects in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "land-subdivision",
    title: "Land Subdivision",
    shortTitle: "Land Subdivision",
    tagline: "Subdividing land, done properly",
    shortDescription:
      "Guidance through the process of subdividing land into smaller parcels for sale, development or family transfer.",
    description: [
      "Subdividing land in Kenya involves survey work, planning approvals and registration steps that vary by county and by the type of land involved.",
      "We help property owners understand what a subdivision requires, coordinate the relevant documentation, and support the process through to registration of the new parcels.",
    ],
    audience: [
      "Owners planning to subdivide land for sale",
      "Families dividing inherited or shared land",
      "Developers preparing parcels for individual titles",
    ],
    whatWeHelpWith: [
      "Explaining the subdivision process for your specific parcel",
      "Coordinating survey and mapping requirements",
      "Preparing and submitting subdivision applications",
      "Liaising with the relevant county planning office",
      "Supporting the process through to registration",
    ],
    faqs: [
      {
        q: "What is required for land subdivision in Kenya?",
        a: "Requirements vary by county, zoning and the size and use of the land, and typically involve survey work, a subdivision scheme, and approval from the relevant planning authority. We review your specific parcel before advising on what applies.",
      },
      {
        q: "How long does land subdivision take?",
        a: "Timelines depend on the county, the complexity of the parcel and how quickly documentation and approvals move through the relevant offices. We can give you a realistic picture once we understand your situation.",
      },
    ],
    relatedServices: ["title-deed-transfer", "stuck-approvals"],
    ctaLabel: "Discuss Your Subdivision",
    priority: 1,
    category: "land",
    seo: {
      title: "Land Subdivision Services in Kenya | Build Compliance 360",
      description:
        "Subdividing land in Kiambu, Nairobi, Murang'a or Nakuru? We guide property owners through the survey, approval and registration process.",
    },
  },
  {
    slug: "title-deed-transfer",
    title: "Title Deed Transfer",
    shortTitle: "Title Deed Transfer",
    tagline: "Transferring ownership, handled carefully",
    shortDescription:
      "Support through the documentation and process required to transfer a title deed from one party to another.",
    description: [
      "Transferring a title deed involves several documents and verification steps at the relevant land registry, and a missing or incorrect step can cause significant delay.",
      "We assist clients in preparing, verifying and submitting the required documentation, and in following up with the relevant land registry office.",
    ],
    audience: [
      "Buyers and sellers completing a property transfer",
      "Families transferring land between relatives",
      "Developers transferring subdivided parcels to new owners",
    ],
    whatWeHelpWith: [
      "Explaining the title transfer process step by step",
      "Reviewing and preparing required documentation",
      "Submitting transfer applications to the relevant registry",
      "Following up on the status of a submitted transfer",
      "Flagging documentation issues before they cause delay",
    ],
    faqs: [
      {
        q: "How does a title deed transfer work?",
        a: "In general, a transfer requires a valid sale agreement or transfer instrument, land rates and rent clearance, and submission of documents to the relevant land registry, though the specific requirements depend on the property and county involved.",
      },
      {
        q: "Can you help if my transfer has stalled?",
        a: "Yes. If a transfer has already been submitted and is delayed, this overlaps with our stuck approvals service. We review the file and help identify what is holding it up.",
      },
    ],
    relatedServices: ["land-subdivision", "stuck-approvals"],
    ctaLabel: "Get Transfer Assistance",
    priority: 1,
    category: "land",
    seo: {
      title: "Title Deed Transfer Services in Kenya | Build Compliance 360",
      description:
        "Assistance with title deed transfer documentation and land registry submission in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "land-survey-services",
    title: "Land Survey Services",
    shortTitle: "Land Survey",
    tagline: "Accurate boundaries, properly recorded",
    shortDescription:
      "Coordination of licensed survey work to confirm boundaries, area and beacon placement for subdivision, transfer or construction.",
    description: [
      "Accurate survey work underpins almost everything else in a property transaction or construction project, from confirming a parcel's true boundaries to preparing the mutation and deed plans a subdivision or transfer depends on.",
      "We coordinate with licensed land surveyors to get the right survey done for your situation, whether that's boundary confirmation, beacon re-establishment, topographical survey ahead of design, or the survey work a subdivision requires.",
      "Because survey requirements depend on the parcel, its registration history and what you're trying to achieve, we start by understanding your specific situation before recommending what kind of survey is actually needed.",
    ],
    audience: [
      "Owners confirming or disputing a boundary",
      "Developers needing topographical survey before design work begins",
      "Anyone subdividing or transferring land where beacons are missing or unclear",
    ],
    whatWeHelpWith: [
      "Coordinating with a licensed land surveyor on your behalf",
      "Confirming what type of survey your situation requires",
      "Boundary and beacon re-establishment",
      "Topographical survey ahead of architectural design",
      "Preparing survey documentation needed for subdivision or transfer",
    ],
    faqs: [
      {
        q: "Do I need a survey before I can subdivide land?",
        a: "Yes, subdivision requires accurate survey work to define the new parcel boundaries before a mutation can be registered. We coordinate this as part of the subdivision process.",
      },
      {
        q: "What if my beacons are missing or disputed?",
        a: "A licensed surveyor can re-establish beacons from the official survey records. We help coordinate this and clarify the next steps if a boundary is genuinely in dispute.",
      },
      {
        q: "Can survey work help before I start building?",
        a: "Yes. A topographical survey gives your architect and engineer accurate information about the site, which helps avoid design issues or approval complications later.",
      },
    ],
    relatedServices: ["land-subdivision", "title-deed-transfer"],
    ctaLabel: "Discuss Your Survey Needs",
    priority: 1,
    category: "land",
    seo: {
      title: "Land Survey Services Kenya | Build Compliance 360",
      description: "Coordination of licensed land survey work for subdivision, transfer and construction projects in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "change-of-use",
    title: "Change of Use",
    shortTitle: "Change of Use",
    tagline: "Changing how a property is used",
    shortDescription: "Guidance through the approval process for changing a property's approved use.",
    description: [
      "Changing a property from its currently approved use, for example from residential to commercial, requires formal approval from the relevant county planning office.",
      "We help clients understand the requirements for their specific property and support the application through to submission and follow-up.",
      "Because change of use decisions are tied to a county's zoning and planning framework, what's realistic for one property or area may not apply to another, which is why we review the specific site before advising.",
    ],
    audience: [
      "Owners converting property use",
      "Developers repurposing existing buildings",
      "Owners who acquired a property already being used differently from its approved designation",
    ],
    whatWeHelpWith: [
      "Assessing what a change of use requires for your property",
      "Checking the property's current zoning and approved use",
      "Preparing the required application documentation",
      "Submitting and following up with the relevant county office",
    ],
    faqs: [
      {
        q: "What is change of use in property development?",
        a: "It is the formal process of changing a property's legally approved use, such as from residential to commercial, which requires county planning approval.",
      },
      {
        q: "What if a property is already being used differently from its approved use?",
        a: "This is worth addressing directly rather than leaving unresolved, since it can complicate a future sale, mortgage or bank verification. We can review the situation and advise on realistic next steps.",
      },
    ],
    relatedServices: ["construction-approvals", "stuck-approvals"],
    ctaLabel: "Discuss Your Approval",
    priority: 2,
    category: "construction-approvals",
    seo: {
      title: "Change of Use Approval Kenya | Build Compliance 360",
      description: "Support with change of use approval for property in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "architectural-approval",
    title: "Architectural Approval",
    shortTitle: "Architectural",
    tagline: "Plans that meet county requirements",
    shortDescription: "Guidance on securing architectural approval for your building plans from the relevant county office.",
    description: [
      "Architectural approval confirms that a building's design meets planning, zoning and building code requirements before construction can proceed.",
      "We work alongside your architect to help ensure documentation is complete and correctly submitted to the relevant county planning office.",
      "Because requirements can vary by county and by the type and scale of the project, we review your specific plans and site before advising on what your submission needs to include.",
    ],
    audience: [
      "Homeowners with new building plans",
      "Developers submitting design drawings for approval",
      "Owners planning an extension or major renovation to an existing structure",
    ],
    whatWeHelpWith: [
      "Reviewing plan documentation ahead of submission",
      "Coordinating with your architect on requirements",
      "Checking submissions against common causes of rejection or query",
      "Submitting to the relevant county planning office",
      "Following up on the status of your application",
    ],
    faqs: [
      {
        q: "Who prepares the architectural drawings?",
        a: "A registered architect prepares the drawings. We help coordinate the approval process around those drawings and liaise with the relevant county office.",
      },
      {
        q: "How long does architectural approval take?",
        a: "Timelines vary by county and by how complete the submission is at the outset. We can give you a clearer picture once we've reviewed your specific plans and the office they're going to.",
      },
      {
        q: "What happens if my plans are queried or rejected?",
        a: "We review the query alongside your architect to understand exactly what's needed, then help you prepare and resubmit a corrected application rather than starting the process from scratch.",
      },
    ],
    relatedServices: ["structural-approval", "construction-approvals", "stuck-approvals"],
    ctaLabel: "Discuss Your Approval",
    priority: 2,
    category: "construction-approvals",
    seo: {
      title: "Architectural Approval Services Kenya | Build Compliance 360",
      description: "Support securing architectural approval for construction projects in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "structural-approval",
    title: "Structural Approval",
    shortTitle: "Structural",
    tagline: "Confirmed structural integrity, on file",
    shortDescription: "Support obtaining structural approval to confirm your building design is structurally sound.",
    description: [
      "Structural approval verifies that a building's design can safely support the loads it will carry, and is typically required alongside architectural approval.",
      "We help coordinate the submission of structural drawings and calculations prepared by your engineer to the relevant county authority.",
      "For multi-storey buildings, unusual designs, or sites with challenging ground conditions, structural sign-off often needs closer coordination between the engineer, architect and approving office, which is where we typically add the most value.",
    ],
    audience: [
      "Developers and homeowners submitting engineering drawings",
      "Projects requiring multi-storey or complex structural sign-off",
      "Owners whose architectural approval is conditional on structural confirmation",
    ],
    whatWeHelpWith: [
      "Coordinating with your structural engineer",
      "Preparing documentation for submission",
      "Making sure structural and architectural submissions stay consistent with each other",
      "Submitting to the relevant approving authority",
      "Tracking application status",
    ],
    faqs: [
      {
        q: "Is structural approval separate from architectural approval?",
        a: "Yes, though the two are usually submitted as part of the same overall building approval process, and inconsistencies between them are a common cause of delay.",
      },
      {
        q: "Do I need a structural engineer for a small residential project?",
        a: "This depends on the design, scale and the requirements of the relevant county office. We can advise once we understand your specific project.",
      },
    ],
    relatedServices: ["architectural-approval", "construction-approvals"],
    ctaLabel: "Discuss Your Approval",
    priority: 2,
    category: "construction-approvals",
    seo: {
      title: "Structural Approval Services Kenya | Build Compliance 360",
      description: "Assistance securing structural approval for construction projects in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "nema-approval",
    title: "NEMA Approval",
    shortTitle: "NEMA",
    tagline: "Environmental sign-off, handled",
    shortDescription: "Guidance through NEMA licensing for projects that require environmental review.",
    description: [
      "Projects above a certain scale, or in environmentally sensitive locations, require review and licensing by the National Environment Management Authority before construction begins.",
      "We help determine whether your project needs NEMA review, and support preparation and submission of the relevant application.",
      "Where a project sits near a wetland, riparian reserve or other protected area, NEMA requirements can significantly affect what can be built and where, so we recommend checking this early, before architectural plans are finalised.",
    ],
    audience: [
      "Larger developments",
      "Projects near wetlands, riparian areas or protected zones",
      "Developers who need environmental clearance confirmed before financing or construction proceeds",
    ],
    whatWeHelpWith: [
      "Assessing whether NEMA licensing applies to your project",
      "Preparing the required application and supporting documents",
      "Coordinating any environmental impact assessment your project may need",
      "Submitting and following up with NEMA",
    ],
    faqs: [
      {
        q: "Does every project need NEMA approval?",
        a: "No. It depends on the scale, nature and location of the project. We assess your specific case before advising.",
      },
      {
        q: "What happens if a project proceeds without required NEMA approval?",
        a: "This can expose a project to enforcement action and complications later, including at the point of sale, mortgage or bank verification. It's best to confirm whether NEMA licensing applies before construction begins.",
      },
    ],
    relatedServices: ["construction-approvals", "nca-approval"],
    ctaLabel: "Discuss Your Approval",
    priority: 2,
    category: "construction-approvals",
    seo: {
      title: "NEMA Approval for Construction Projects Kenya | Build Compliance 360",
      description: "Support determining and securing NEMA environmental licensing for construction projects in Kenya.",
    },
  },
  {
    slug: "nca-approval",
    title: "NCA Approval",
    shortTitle: "NCA",
    tagline: "Contractor registration, in order",
    shortDescription: "Support with National Construction Authority registration and compliance requirements.",
    description: [
      "The National Construction Authority regulates contractors and construction projects to ensure work is carried out to required standards.",
      "We help clients and contractors understand NCA requirements relevant to their project and support the registration and compliance process.",
      "For developers, confirming that a contractor is properly registered before work begins can also matter later, for example if a bank or buyer wants to verify that a project was carried out compliantly.",
    ],
    audience: [
      "Developers engaging contractors",
      "Contractors needing NCA registration",
      "Buyers or lenders wanting to confirm a project was built by a properly registered contractor",
    ],
    whatWeHelpWith: [
      "Explaining NCA requirements for your project",
      "Supporting contractor registration compliance",
      "Coordinating documentation for submission",
      "Helping confirm a contractor's NCA standing where this matters for a transaction",
    ],
    faqs: [
      {
        q: "Is NCA registration required for all construction projects?",
        a: "Requirements depend on the scale and nature of the project and the contractor engaged. We review your specific situation before advising.",
      },
      {
        q: "Can you confirm whether a contractor is properly registered?",
        a: "We can help you understand what to check and how to interpret what you find, which is often relevant during due diligence or bank verification.",
      },
    ],
    relatedServices: ["construction-approvals", "nema-approval"],
    ctaLabel: "Discuss Your Approval",
    priority: 2,
    category: "construction-approvals",
    seo: {
      title: "NCA Requirements for Construction Projects Kenya | Build Compliance 360",
      description: "Guidance on National Construction Authority requirements and registration for construction projects in Kenya.",
    },
  },
  {
    slug: "bank-mortgage-approvals",
    title: "Mortgage / Bank Client Approvals",
    shortTitle: "Bank & Mortgage",
    tagline: "Approvals your bank will accept",
    shortDescription: "Assistance securing the property approvals banks and mortgage lenders require for transactions.",
    description: [
      "Banks and mortgage lenders often require confirmation that a property's construction and land status is properly documented and approved before financing is released.",
      "We help mortgage clients understand what documentation their transaction needs and support obtaining or organizing the relevant approvals.",
    ],
    audience: ["Mortgage applicants", "Property buyers financing through a bank", "Developers seeking construction financing"],
    whatWeHelpWith: [
      "Identifying which approvals your bank or lender requires",
      "Organizing existing approval documentation",
      "Supporting applications for outstanding approvals",
      "Explaining the process in plain terms for non-professionals",
    ],
    faqs: [
      { q: "What approvals do banks usually require for mortgage financing?", a: "This varies by lender and property, but commonly includes confirmation of title status and, for construction, approved building plans. Your bank can confirm their specific requirements." },
    ],
    relatedServices: ["approval-verification", "title-deed-transfer"],
    ctaLabel: "Discuss Your Requirements",
    priority: 2,
    category: "bank-mortgage",
    seo: {
      title: "Mortgage & Bank Property Approvals Kenya | Build Compliance 360",
      description: "Assistance with property approvals required for mortgage and bank financing in Kiambu, Nairobi, Murang'a and Nakuru.",
    },
  },
  {
    slug: "approval-verification",
    title: "Approval Verification",
    shortTitle: "Approval Verification",
    tagline: "Confirming approvals are what they claim to be",
    shortDescription: "Independent review of submitted approvals for bank, mortgage or due-diligence purposes.",
    description: [
      "Banks, buyers and investors sometimes need confirmation that a set of building or land approvals is genuine, complete and correctly issued before proceeding with a transaction.",
      "We review the approval documents provided and help clarify what they cover, what may be missing, and what questions are worth raising before a transaction proceeds.",
    ],
    audience: ["Banks and mortgage lenders", "Property buyers doing due diligence", "Investors reviewing a development"],
    whatWeHelpWith: [
      "Reviewing submitted approval documentation",
      "Identifying gaps or inconsistencies worth raising",
      "Explaining findings in plain, non-technical terms",
    ],
    faqs: [
      { q: "Can you help verify approvals submitted to a bank?", a: "Yes. We review the documentation provided and help explain what it covers, flagging anything that looks incomplete or worth confirming further." },
    ],
    relatedServices: ["bank-mortgage-approvals", "stuck-approvals"],
    ctaLabel: "Request Verification Assistance",
    priority: 2,
    category: "bank-mortgage",
    seo: {
      title: "Building Approval Verification Kenya | Build Compliance 360",
      description: "Independent verification of construction and land approvals for mortgage, bank and due-diligence purposes in Kenya.",
    },
  },
  {
    slug: "stuck-approvals",
    title: "Stuck Approvals",
    shortTitle: "Stuck Approvals",
    tagline: "Has your approval been stuck?",
    shortDescription:
      "Get help when a building, land or compliance application has stalled and the next step is unclear.",
    description: [
      "A submitted application that goes quiet is one of the most stressful parts of building or developing property in Kenya. Requirements change, files sit with the wrong office, or feedback never comes back at all.",
      "We review where your application currently stands, identify what is missing or unclear, and help you understand the realistic next steps to move it forward with the relevant county or authority.",
    ],
    audience: [
      "Applications pending for longer than expected",
      "No clear feedback after submission",
      "Uncertainty about outstanding requirements",
      "Conflicting information from different offices",
    ],
    whatWeHelpWith: [
      "Reviewing your application file and current status",
      "Identifying missing or incomplete documentation",
      "Clarifying which requirements still apply",
      "Helping you prepare a clear path to follow up",
      "Advising on realistic next steps with the relevant authority",
    ],
    faqs: [
      {
        q: "What should I do if my building approval is stuck?",
        a: "Start by gathering everything you have submitted so far, including reference numbers and any correspondence. We can then review the file with you, identify what is outstanding, and help you understand what a realistic next step looks like.",
      },
      {
        q: "Can you guarantee my approval will be unstuck quickly?",
        a: "No. Timelines depend on the relevant county or authority, the completeness of the file, and factors outside our control. We focus on giving you clarity and a realistic path forward rather than promising a fixed outcome.",
      },
      {
        q: "Do you work directly with county offices?",
        a: "We help clients understand requirements and prepare documentation for submission and follow-up with the relevant offices. The application itself is reviewed and decided by the relevant county or national authority.",
      },
    ],
    relatedServices: ["construction-approvals", "approval-verification"],
    ctaLabel: "Get Help With Your Approval",
    priority: 2,
    category: "stuck-approvals",
    seo: {
      title: "Stuck Building Approval in Kenya? Get Assistance | Build Compliance 360",
      description:
        "Is your building or land approval stuck with a county or national authority in Kenya? We review your application and help you understand the next steps.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}

export const featuredServices = ["construction-approvals", "land-subdivision", "title-deed-transfer", "land-survey-services", "stuck-approvals"]
  .map((slug) => getServiceBySlug(slug)!)
  .filter(Boolean);
