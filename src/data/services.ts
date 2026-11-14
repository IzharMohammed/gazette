export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  timeline: string;
  documents: string[];
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "name-change-gazette",
    title: "Name Change Gazette Publication",
    shortTitle: "Name Change Gazette",
    description: "End-to-end guidance for preparing, submitting, and publishing your legal Name Change notification in the official Gazette of India.",
    timeline: "Preparation: 1-2 days. Central Gazette publication cycle: typically 2 to 4 weeks depending on the Department of Publication schedule.",
    documents: [
      "Affidavit on Non-Judicial Stamp Paper (Duly Notarized)",
      "Original Newspaper Publication Copy (English or Regional daily)",
      "Prescribed Proforma Application (Duly signed)",
      "Identity Proof (Aadhaar Card, PAN Card, Voter ID or Passport)",
      "Address Proof (Electricity Bill, Ration Card or Aadhaar)",
      "Two recent passport-size photographs (Cross-signed)",
      "CD containing soft copy of application in prescribed format",
    ],
    steps: [
      { title: "Affidavit Drafting & Notarization", text: "We prepare the legally accurate name change affidavit stating old name, new name, and valid reason for change on stamp paper with notary attestation." },
      { title: "Newspaper Advertisement", text: "We draft and coordinate publishing your mandatory public notice in a leading daily newspaper as required by government guidelines." },
      { title: "Gazette Dossier & Govt Fee", text: "We compile the complete application file, digital CD soft copy, prescribed proforma, and process the non-judicial government fee challan." },
      { title: "Submission & E-Gazette Tracking", text: "The dossier is submitted to the Department of Publication, Civil Lines, Delhi. Once printed, we provide your verified downloadable e-Gazette copy." },
    ],
    faqs: [
      { question: "Is Gazette publication mandatory for changing my name?", answer: "Yes, for updating major official documents like Indian Passport, government service records, bank accounts, and educational certificates, an official Gazette of India notification is the supreme legally recognized proof." },
      { question: "Can I complete the entire name change process online?", answer: "Yes. With our remote documentation support, you can submit your details and scanned copies online. We handle drafting, newspaper ad placement, dossier compilation, and guide submission without needing you to travel." },
      { question: "What is the difference between Central Gazette and State Gazette?", answer: "The Central Gazette (The Gazette of India) is published by the Government of India and is universally valid across all 28 states, 8 UTs, central government departments, passport offices, and abroad. State Gazettes are published by individual state governments." },
      { question: "How will I receive my Gazette copy?", answer: "The Government of India now issues digital e-Gazettes through egazette.gov.in. Once published, we track and provide the official authenticated PDF carrying your notification, which is universally valid." },
    ],
  },
  {
    slug: "newspaper-publication",
    title: "Name Change Newspaper Publication",
    shortTitle: "Newspaper Publication",
    description: "Fast and compliant placement of legal name change notices and public announcements in leading national and regional daily newspapers across India.",
    timeline: "Published within 24 to 48 hours in your preferred national or regional daily newspaper.",
    documents: [
      "Duly executed and notarized Name Change Affidavit",
      "Applicant Identity Proof (Aadhaar, PAN, Passport or Voter ID)",
      "Full residential address proof",
      "Clear details of Old Name and proposed New Name",
    ],
    steps: [
      { title: "Details Collection", text: "We collect exact spellings, father's/husband's name, residential address, and affidavit date." },
      { title: "Ad Text Formulation", text: "Our legal drafting team formulates the advertisement text according to the statutory guidelines required for Gazette acceptance." },
      { title: "Newspaper Selection & Booking", text: "We coordinate placement in leading national English or vernacular dailies circulated in your home city." },
      { title: "Clipping & E-Paper Delivery", text: "We deliver full page e-paper PDF copies and coordinate dispatch of original physical newspaper copies for your records." },
    ],
    faqs: [
      { question: "Which newspaper is required for name change in India?", answer: "Central Gazette requires publication in at least one leading daily newspaper circulated in your district of residence. For passport updates, one national daily and one local language daily is recommended." },
      { question: "Can a spelling mistake in the newspaper ad be corrected?", answer: "Once printed, a newspaper advertisement cannot be modified. Any error requires publishing a fresh corrective notice, which is why our team meticulously confirms all spellings with you beforehand." },
      { question: "Do I need physical copies of the newspaper?", answer: "Yes, the Central Gazette office requires at least one original physical newspaper page displaying the published advertisement along with the date and newspaper name." },
    ],
  },
  {
    slug: "gender-change-gazette",
    title: "Gender Change Gazette Assistance",
    shortTitle: "Gender Change Gazette",
    description: "Confidential, respectful, and dignified assistance for legal name and gender marker change notification in the official Gazette of India.",
    timeline: "Dossier preparation: 2-3 days. Gazette publication adheres to government publication schedules.",
    documents: [
      "Medical Certificate from treating endocrinologist / surgeon or District Magistrate Certificate under Transgender Persons Rules",
      "Self-declaration Affidavit stating change of gender and name",
      "Newspaper advertisement in daily newspaper",
      "Identity Proof (Aadhaar Card, Voter ID, Passport or PAN)",
      "Address Proof",
      "Recent passport-size color photographs",
      "Prescribed proforma signed by applicant",
    ],
    steps: [
      { title: "Confidential Consultation", text: "A private consultation to understand your requirements and review medical declarations or District Magistrate certificates." },
      { title: "Affidavit & Notice Drafting", text: "Drafting the legal affidavit and newspaper notice adhering to Transgender Persons (Protection of Rights) Act and Rules." },
      { title: "Dossier Preparation", text: "Compiling the formal application file, digital CD soft copy, and processing official government publication fees." },
      { title: "Official Gazette Release", text: "Tracking the Department of Publication gazette release and providing authenticated e-Gazette copies." },
    ],
    faqs: [
      { question: "Is medical certification required for gender change in the Gazette?", answer: "Yes, under Government of India guidelines, a medical certificate from the concerned hospital/surgeon or a certificate of identity issued by the District Magistrate is required." },
      { question: "Is my privacy protected throughout the process?", answer: "Strict confidentiality is our highest priority. All medical records and personal documents are handled securely under strict privacy protocols." },
      { question: "Can I update my passport and Aadhaar after Gazette publication?", answer: "Yes. The official Central Gazette notification is the definitive legal document accepted by Passport Seva Kendras, UIDAI, and banks to update both your name and gender marker." },
    ],
  },
  {
    slug: "surname-change-gazette",
    title: "Surname Change Gazette Notification",
    shortTitle: "Surname Change",
    description: "Legal documentation and Central Gazette notification for adding, removing, or altering your surname post-marriage, divorce, or personal choice.",
    timeline: "Preparation: 1-2 days. Central Gazette publication cycle: typically 2 to 4 weeks.",
    documents: [
      "Notarized Surname Change Affidavit",
      "Marriage Certificate or Divorce Decree (if applicable)",
      "Identity Proof with current surname",
      "Residential Address Proof",
      "Newspaper advertisement in recognized daily",
      "Passport size photographs",
    ],
    steps: [
      { title: "Legal Review", text: "Reviewing the basis of surname modification (marriage, divorce, family heritage, or personal preference)." },
      { title: "Drafting & Notice", text: "Drafting the legal affidavit and publishing the statutory public announcement in a daily newspaper." },
      { title: "Gazette Submission", text: "Submitting the complete file with the Controller of Publications, Govt. of India." },
      { title: "Official Notification", text: "Delivery of the authenticated e-Gazette notification for updating bank, passport, and property records." },
    ],
    faqs: [
      { question: "Is a Gazette notification required to change surname after marriage?", answer: "While a Marriage Certificate suffices for some basic records, government departments, passport renewal, and overseas visa authorities often mandate an official Gazette notification." },
      { question: "Can I remove my husband's surname after divorce?", answer: "Yes. By submitting a notarized affidavit and a copy of the divorce decree or separation order, you can revert to your maiden surname through Gazette publication." },
    ],
  },
  {
    slug: "religion-change-gazette",
    title: "Religion Change Gazette Notification",
    shortTitle: "Religion Change",
    description: "Statutory Gazette publication and newspaper notification assistance for legal declaration of religious conversion in India.",
    timeline: "Preparation: 2-3 days. Gazette publication adheres to government schedules.",
    documents: [
      "Conversion Certificate / Declaration from authorized religious institution",
      "Notarized Affidavit confirming voluntary change of religion and name",
      "Newspaper publication announcement in local daily",
      "Government-issued Identity Proof & Address Proof",
      "Passport size photographs",
    ],
    steps: [
      { title: "Documentation Audit", text: "Verifying religious conversion certificates and voluntary declaration details." },
      { title: "Affidavit & Newspaper", text: "Drafting the legal affidavit and publishing the required public notice in a recognized newspaper." },
      { title: "Central Gazette Filing", text: "Preparing the official government dossier and submitting it to the Department of Publication." },
      { title: "Gazette Notification", text: "Obtaining and delivering the official government gazette notification." },
    ],
    faqs: [
      { question: "Why is Gazette notification needed after religion change?", answer: "To reflect your new religious identity and any corresponding name change across official documents like caste/community certificates, passport, voter ID, and employment records." },
      { question: "Is a conversion certificate mandatory?", answer: "Yes, an official certificate or declaration issued by the authorized religious institution where conversion took place is required." },
    ],
  },
  {
    slug: "minor-name-change-gazette",
    title: "Minor Child Name Change Gazette",
    shortTitle: "Minor Name Change",
    description: "Assistance for parents and legal guardians to legally change or correct a minor child's name in school records, birth certificates, and passport.",
    timeline: "Preparation: 1-2 days. Central Gazette cycle: 2 to 4 weeks.",
    documents: [
      "Affidavit executed by parents / legal guardian",
      "Child's Birth Certificate or School Transfer Certificate",
      "Parents' Identity & Address Proofs (Aadhaar / Passport)",
      "Newspaper publication in daily newspaper",
      "Two passport photographs of the minor child",
    ],
    steps: [
      { title: "Parental Affidavit", text: "Drafting the affidavit signed by father, mother, or legal guardian on stamp paper." },
      { title: "Newspaper Notice", text: "Publishing the minor name change announcement in a leading daily newspaper." },
      { title: "Govt Application File", text: "Compiling the application file with birth certificate and parental identity documents." },
      { title: "Gazette Issuance", text: "Publishing in the Gazette of India for school board (CBSE/ICSE) and passport updates." },
    ],
    faqs: [
      { question: "Can parents change a child's name in school records without Gazette?", answer: "Most educational boards (such as CBSE, ICSE, and State Boards) strictly require an official Gazette of India publication before modifying the student's name in marks sheets and certificates." },
      { question: "Do both parents need to sign the affidavit?", answer: "Generally yes, or the primary guardian with legal custody documents." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
