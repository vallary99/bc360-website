export type Location = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  context: string[];
  areasServed: string[];
  relevantServices: string[]; // slugs
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string };
};

export const locations: Location[] = [
  {
    slug: "kiambu",
    name: "Kiambu",
    region: "Kiambu County",
    intro:
      "Kiambu's rapid residential and commercial growth means a steady flow of building approvals, subdivisions and title transfers moving through the county planning office and land registry.",
    context: [
      "Kiambu County covers fast-growing towns including Ruiru, Thika, Kikuyu, Limuru and Juja, where demand for new residential development, gated communities and mixed-use projects has grown significantly.",
      "That growth has also meant longer queues and more scrutiny on applications at the county level, which is where applications most often stall.",
    ],
    areasServed: ["Ruiru", "Thika", "Kikuyu", "Limuru", "Juja", "Kiambu Town"],
    relevantServices: ["stuck-approvals", "land-subdivision", "title-deed-transfer", "construction-approvals"],
    faqs: [
      { q: "Do you assist with approvals in Kiambu?", a: "Yes. We support clients with construction approvals, land subdivision, title transfer and stuck applications across Kiambu County, including its main towns." },
      { q: "Why do building approvals get delayed in Kiambu?", a: "Common reasons include incomplete documentation, high application volumes at the county office, or unclear requirements for the specific zoning of a plot. We review each case individually rather than assuming a single cause." },
    ],
    seo: {
      title: "Construction & Land Compliance Services in Kiambu | Build Compliance 360",
      description:
        "Building approvals, stuck applications, land subdivision and title transfer support for property owners and developers across Kiambu County.",
    },
  },
  {
    slug: "nairobi",
    name: "Nairobi",
    region: "Nairobi County",
    intro:
      "As Kenya's capital and largest construction market, Nairobi has the most layered approval requirements, and the most applications sitting in queues awaiting review.",
    context: [
      "Nairobi County handles a high volume of building plan approvals, change of use applications and NEMA/NCA processes, spanning everything from single residential units to large mixed-use developments.",
      "Because of that volume, applications can move slowly or lose momentum without a clear reason, which is why many of our stuck approval enquiries come from Nairobi-based projects.",
    ],
    areasServed: ["Westlands", "Karen", "Langata", "Kasarani", "Embakasi", "Ruaraka", "Dagoretti"],
    relevantServices: ["stuck-approvals", "construction-approvals", "bank-mortgage-approvals", "title-deed-transfer"],
    faqs: [
      { q: "Do you serve Nairobi?", a: "Yes. We work with property owners and developers across Nairobi County, including stuck approval reviews, construction approvals, and bank/mortgage-related documentation." },
      { q: "How long does a building approval take in Nairobi?", a: "It varies widely depending on the project, documentation completeness and the specific office handling it. We can give a more informed estimate once we review your application." },
    ],
    seo: {
      title: "Construction & Compliance Services in Nairobi | Build Compliance 360",
      description:
        "Building approvals, stuck applications, land and title services, and bank/mortgage approval support for property owners in Nairobi County.",
    },
  },
  {
    slug: "muranga",
    name: "Murang'a",
    region: "Murang'a County",
    intro:
      "Murang'a's mix of agricultural land, family land subdivisions and growing town centres brings its own set of land and construction compliance needs.",
    context: [
      "Land subdivision and title transfer are especially common in Murang'a, where family land is frequently divided among heirs or sold in smaller parcels.",
      "Construction approvals in the county's growing towns follow the same core requirements as elsewhere, applied through the relevant county planning office.",
    ],
    areasServed: ["Murang'a Town", "Kenol", "Kangema", "Kandara", "Maragua"],
    relevantServices: ["land-subdivision", "title-deed-transfer", "stuck-approvals", "construction-approvals"],
    faqs: [
      { q: "Do you work in Murang'a?", a: "Yes. We assist property owners in Murang'a County with land subdivision, title transfer, construction approvals and stuck applications." },
      { q: "What is required for land subdivision in Murang'a?", a: "Requirements depend on the parcel, its zoning and its current registration, and generally involve survey work and county planning approval. We review each parcel individually." },
    ],
    seo: {
      title: "Land & Construction Compliance Services in Murang'a | Build Compliance 360",
      description:
        "Land subdivision, title deed transfer and construction approval support for property owners across Murang'a County.",
    },
  },
  {
    slug: "nakuru",
    name: "Nakuru",
    region: "Nakuru County",
    intro:
      "Nakuru's status as a major regional town means an active mix of residential development, commercial construction and land transactions, each with its own approval path.",
    context: [
      "As one of Kenya's fastest-growing urban centres, Nakuru sees a steady stream of new building applications alongside land subdivision and title transfer activity in surrounding areas.",
      "We support clients navigating the county's construction approval and land registry processes wherever an application has stalled or requires guidance.",
    ],
    areasServed: ["Nakuru Town", "Naivasha", "Njoro", "Molo", "Gilgil"],
    relevantServices: ["construction-approvals", "stuck-approvals", "land-subdivision", "bank-mortgage-approvals"],
    faqs: [
      { q: "Do you work in Nakuru and Naivasha?", a: "Yes. We assist clients across Nakuru County, including Nakuru Town and Naivasha, with construction approvals, stuck applications and land-related compliance." },
    ],
    seo: {
      title: "Construction & Land Compliance Services in Nakuru | Build Compliance 360",
      description:
        "Building approvals, stuck applications, land subdivision and title support for property owners and developers in Nakuru County.",
    },
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
