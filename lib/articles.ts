export type Article = {
  slug: string;
  title: string;
  dek: string;
  datePublished: string; // ISO date
  readingTime: string;
  relatedServices: string[]; // service slugs
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
  seo: { title: string; description: string };
};

export const articles: Article[] = [
  {
    slug: "building-approval-stuck-in-kenya",
    title: "What to Do When Your Building Approval Is Stuck in Kenya",
    dek: "A practical look at why applications stall with county and national authorities, and how to approach getting yours moving again.",
    datePublished: "2026-02-01",
    readingTime: "6 min read",
    relatedServices: ["stuck-approvals", "construction-approvals"],
    body: [
      {
        paragraphs: [
          "If you submitted a building or land application weeks or months ago and haven't heard anything since, you're not alone. Applications stall for a mix of reasons, some within your control and some not, and the first step is understanding where yours actually sits before deciding what to do about it.",
        ],
      },
      {
        heading: "Common reasons applications stall",
        paragraphs: [
          "There's rarely a single cause. In our experience reviewing stuck applications, a few patterns come up repeatedly:",
        ],
        list: [
          "Incomplete or outdated documentation that wasn't flagged clearly at submission",
          "High application volumes at a particular county office, especially in fast-growing areas",
          "A file that has moved between departments without a clear handover",
          "Zoning or land-use questions that need clarification before review can continue",
          "Missing sign-off from a related approval (for example, a NEMA or NCA requirement tied to the same project)",
        ],
      },
      {
        heading: "What to gather before you follow up",
        paragraphs: [
          "Before contacting the relevant office, it helps to have your own file in order: your application reference number, the date of submission, copies of everything you submitted, and a record of any correspondence or verbal updates you've already received.",
          "Having this on hand makes it much easier for anyone, whether that's you or an advisor helping you, to identify exactly where the application stands and what's genuinely outstanding, rather than guessing.",
        ],
      },
      {
        heading: "When it's worth getting a second set of eyes",
        paragraphs: [
          "If you've followed up more than once without a clear answer, or you're getting conflicting information from different people, it's often worth having someone review the file who works with these processes regularly. That doesn't mean skipping the queue or bypassing the authority. It means understanding the requirements clearly enough to know what's actually missing, and following up in a way that gets a real answer.",
          "We review stuck applications with clients regularly, and we're upfront that we can't guarantee a specific outcome or timeline. No one honestly can, since the decision sits with the county or national authority. What we can do is help you understand where things stand and what a realistic next step looks like.",
        ],
      },
    ],
    seo: {
      title: "What to Do When Your Building Approval Is Stuck in Kenya",
      description:
        "Why building and land applications stall with Kenyan authorities, what to gather before following up, and when it's worth getting help reviewing your file.",
    },
  },
  {
    slug: "land-subdivision-kenya-what-to-know",
    title: "Land Subdivision in Kenya: What Property Owners Should Know",
    dek: "An overview of what subdividing land typically involves, from survey work to registration, and the questions worth asking early.",
    datePublished: "2026-02-08",
    readingTime: "5 min read",
    relatedServices: ["land-subdivision", "title-deed-transfer"],
    body: [
      {
        paragraphs: [
          "Subdividing land, splitting one parcel into smaller, individually titled portions, is common in Kenya, whether it's a family dividing inherited land, an owner preparing plots for sale, or a developer planning individual units. The process touches survey work, county planning approval and land registry steps, and the details vary by county and by the type of land involved.",
        ],
      },
      {
        heading: "The general shape of the process",
        paragraphs: [
          "While specifics depend on your parcel's zoning, location and current registration status, subdivision generally involves confirming the land's current title and boundaries, engaging a licensed surveyor to define the new parcel boundaries, submitting a subdivision application to the relevant county planning office, and, once approved, registering the new, separate titles.",
          "Because requirements differ by county and by parcel, it's worth treating any general timeline or checklist you read online as a starting point rather than a guarantee for your specific situation.",
        ],
      },
      {
        heading: "Questions worth asking before you start",
        paragraphs: ["A few questions tend to shape how straightforward the process will be:"],
        list: [
          "Is the land's current title clear, with no disputes or pending charges?",
          "What is the parcel's current zoning, and does it allow the subdivision you have in mind?",
          "Are all existing co-owners or heirs in agreement, if the land is jointly held?",
          "Does the area have any existing planning restrictions, such as minimum plot sizes, that would affect how it can be divided?",
        ],
      },
      {
        heading: "Subdivision and title transfer often go together",
        paragraphs: [
          "Once new parcels are registered, owners frequently need to transfer title, whether that's selling a subdivided plot or formally allocating a portion to a family member. It's worth planning for both processes together rather than treating them as unrelated steps, since documentation from the subdivision stage is often needed again at transfer.",
        ],
      },
    ],
    seo: {
      title: "Land Subdivision in Kenya: What Property Owners Should Know",
      description:
        "What subdividing land in Kenya typically involves, from survey work to county approval and registration, plus questions to ask before you start.",
    },
  },
  {
    slug: "title-deed-transfer-kenya-guide",
    title: "Title Deed Transfer in Kenya: A Practical Guide",
    dek: "What's generally involved in transferring land ownership from one party to another, and where delays tend to happen.",
    datePublished: "2026-02-15",
    readingTime: "5 min read",
    relatedServices: ["title-deed-transfer", "land-subdivision"],
    body: [
      {
        paragraphs: [
          "A title deed transfer moves registered ownership of land from one party to another: a sale, an inheritance, a gift between family members, or the formal allocation of a subdivided plot. The paperwork is document-heavy, and the process runs through the relevant land registry, so accuracy and completeness at submission matter more than speed.",
        ],
      },
      {
        heading: "What a transfer generally requires",
        paragraphs: [
          "The exact documentation depends on the type of transfer and the specific registry involved, but most transfers involve confirming the current title is clear and unencumbered, preparing and executing a transfer instrument between the parties, settling any applicable land rates, rents or duties, and lodging the transfer with the relevant land registry for registration in the new owner's name.",
        ],
      },
      {
        heading: "Where transfers commonly get delayed",
        paragraphs: [
          "In our experience, delays usually trace back to one of a few things: outstanding land rates or rent that weren't cleared before lodging, a title with an unresolved caveat or dispute, missing consent where it's required (for example, from a spouse, co-owner, or relevant authority), or incomplete or inconsistent documentation between the parties involved.",
          "Because a transfer effectively becomes part of the land's permanent record, registries tend to be strict about documentation being complete and consistent the first time. That's why it's worth reviewing everything carefully before lodging, rather than after a rejection.",
        ],
      },
      {
        heading: "If you're buying, not just selling",
        paragraphs: [
          "If you're on the buying side of a transfer, it's worth confirming the title's status independently before committing, checking for existing charges, disputes or restrictions, rather than relying solely on what the seller has told you. This is also where document verification for a mortgage or bank facility often comes in, since lenders want the same assurance before releasing funds.",
        ],
      },
    ],
    seo: {
      title: "Title Deed Transfer in Kenya: A Practical Guide",
      description:
        "What's typically involved in a Kenyan title deed transfer, common causes of delay, and what buyers should check before committing.",
    },
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
