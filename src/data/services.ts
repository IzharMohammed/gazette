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
    description: "Guided assistance for preparing and submitting name-change Gazette documentation with clear updates at every stage.",
    timeline: "Timelines depend on the relevant authority and completeness of documents.",
    documents: ["Identity proof", "Address proof", "Passport-size photograph", "Affidavit or supporting declaration", "Newspaper publication, where applicable"],
    steps: [
      { title: "Initial review", text: "We understand your requirement and verify the documents needed for your situation." },
      { title: "Document preparation", text: "Required declarations and application details are prepared for your review." },
      { title: "Publication support", text: "We guide the newspaper and Gazette submission steps that apply to your request." },
      { title: "Progress updates", text: "You receive updates until the applicable process is completed." },
    ],
    faqs: [
      { question: "Is Gazette publication required in every case?", answer: "Requirements vary by purpose, authority and jurisdiction. We first review where the changed name will be used." },
      { question: "Can I apply from another city?", answer: "Many steps can be coordinated remotely, subject to document and authority requirements." },
      { question: "Are timelines guaranteed?", answer: "No. Processing is controlled by newspapers and government authorities, but complete documentation helps avoid preventable delays." },
    ],
  },
  {
    slug: "newspaper-publication",
    title: "Name Change Newspaper Publication",
    shortTitle: "Newspaper Publication",
    description: "Assistance with drafting and placing name-change notices in suitable newspapers as part of the documentation process.",
    timeline: "Publication timing depends on newspaper schedules and acceptance.",
    documents: ["Old and new name details", "Contact and address information", "Identity proof", "Supporting affidavit, where applicable"],
    steps: [
      { title: "Details collected", text: "We collect the exact old name, new name and other required publication particulars." },
      { title: "Notice drafted", text: "The notice is prepared in the format relevant to the newspaper and intended use." },
      { title: "Approval", text: "You confirm spellings and details before the notice is submitted." },
      { title: "Publication", text: "Publication is coordinated and a copy is shared when available." },
    ],
    faqs: [
      { question: "Which newspaper should I choose?", answer: "That depends on the authority requesting proof and your location. We help identify the applicable publication format." },
      { question: "Can a published notice be corrected?", answer: "A fresh corrective publication may be required, so every detail should be checked before submission." },
    ],
  },
  {
    slug: "gender-change-gazette",
    title: "Gender Change Gazette Assistance",
    shortTitle: "Gender Change Gazette",
    description: "Respectful, confidential guidance for Gazette-related name and gender change documentation.",
    timeline: "The exact process and timeline depend on the authority and documents involved.",
    documents: ["Identity proof", "Address proof", "Photograph", "Required declarations or certificates", "Supporting publication records, where applicable"],
    steps: [
      { title: "Private consultation", text: "We discuss the intended changes and applicable documentation confidentially." },
      { title: "Requirement review", text: "Documents are checked against the process relevant to your request." },
      { title: "Application support", text: "We assist with preparing and organizing the submission." },
      { title: "Status assistance", text: "We provide process updates and help address document queries." },
    ],
    faqs: [
      { question: "Will my information remain private?", answer: "Personal documents are handled as confidential information and should be stored using restricted access." },
      { question: "Can the process be completed remotely?", answer: "Some stages may be handled remotely, while others can depend on current authority requirements." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
