export type LocationInfo = {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  capital: string;
  keyCities: string[];
  gazetteTypeDescription: string;
  newspaperGuidelines: string;
  recommendedNewspapers: { english: string[]; vernacular: string[] };
  stampDutyInfo: string;
  passportOffices: string[];
  faqs: { q: string; a: string }[];
};

export const locations: LocationInfo[] = [
  {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    title: "Gazette Name Change in Andhra Pradesh | Online Procedure & Newspaper Publication",
    metaTitle: "Gazette Name Change Andhra Pradesh | Central & State Gazette Online",
    metaDescription: "Apply for Gazette Name Change in Andhra Pradesh online. Complete assistance for Telugu & English newspaper ads, affidavit drafting, and Central Gazette filing.",
    capital: "Amaravati",
    keyCities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry"],
    gazetteTypeDescription: "Residents of Andhra Pradesh can choose between the Andhra Pradesh State Gazette (published through the AP Government Printing Press) or the sovereign Central Gazette of India. For Passport updates at Regional Passport Offices in Vijayawada and Visakhapatnam, Central Government employment, or overseas visas, the Central Gazette of India is universally preferred.",
    newspaperGuidelines: "Statutory rules require publishing your name change notice in at least one Telugu regional daily circulated in your district along with one national English daily for full passport compliance.",
    recommendedNewspapers: {
      english: ["The Times of India", "Deccan Chronicle", "The Hindu", "The New Indian Express"],
      vernacular: ["Eenadu", "Andhra Jyothi", "Sakshi", "Prajasakti"],
    },
    stampDutyInfo: "Affidavit must be executed on Non-Judicial e-Stamp Paper purchased via the Andhra Pradesh IGRS / Stock Holding (SHCIL) portal with an authorized Notary Public seal.",
    passportOffices: ["RPO Vijayawada", "PSK Visakhapatnam", "POPSK Tirupati", "POPSK Guntur"],
    faqs: [
      {
        q: "Is Central Gazette or AP State Gazette better for passport renewal in Vijayawada?",
        a: "The Central Gazette (The Gazette of India) is universally recognized by the Regional Passport Office (RPO) in Vijayawada and Visakhapatnam without requiring additional local verifications.",
      },
      {
        q: "Can I do the entire Andhra Pradesh Gazette name change online?",
        a: "Yes. Our team handles the Telugu translation for newspaper advertisements, notarized affidavit drafting, and Central Gazette dossier submission remotely without requiring travel.",
      },
      {
        q: "Which Telugu newspapers are accepted for name change in Andhra Pradesh?",
        a: "Leading registered Telugu dailies such as Eenadu, Sakshi, and Andhra Jyothi are accepted by the Department of Publication and Passport Seva Kendras.",
      },
    ],
  },
  {
    name: "Telangana",
    slug: "telangana",
    title: "Gazette Name Change in Telangana | Hyderabad Central Gazette Online",
    metaTitle: "Gazette Name Change Telangana | Hyderabad Name Change Procedure & Ads",
    metaDescription: "Legal Gazette Name Change in Telangana & Hyderabad online. End-to-end guidance for Telugu & English newspaper publication, affidavit, and Central Gazette.",
    capital: "Hyderabad",
    keyCities: ["Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahabubnagar"],
    gazetteTypeDescription: "While Telangana maintains a Government Central Press at Chanchalguda, Hyderabad, most IT professionals, defense personnel, and overseas visa applicants in Hyderabad opt for the Central Gazette of India because it carries universal legal validity across all Indian states and foreign embassies.",
    newspaperGuidelines: "Must be published in one leading daily circulated in Hyderabad / your district (e.g. Eenadu or Namasthe Telangana) and an English daily (e.g. Deccan Chronicle or The Times of India).",
    recommendedNewspapers: {
      english: ["Deccan Chronicle", "The Times of India", "The Hindu", "Telangana Today"],
      vernacular: ["Eenadu", "Namasthe Telangana", "Sakshi", "Andhra Bhoomi"],
    },
    stampDutyInfo: "Executed on Non-Judicial Stamp Paper / e-Stamp paper available through the Telangana Registration & Stamps Department and attested by a Notary Public in Hyderabad or your home district.",
    passportOffices: ["RPO Hyderabad (Secunderabad)", "PSK Begumpet", "PSK Ameerpet", "PSK Tolichowki"],
    faqs: [
      {
        q: "Is Central Gazette valid for IT employees in HITEC City / Gachibowli?",
        a: "Yes. The Central Gazette of India is the gold standard for IT professionals in Hyderabad for updating PF records (EPFO), US/UK H1B/work visas, and bank accounts.",
      },
      {
        q: "How fast can I get a newspaper notice published in Hyderabad?",
        a: "We can book and publish your name change classified ad in leading Hyderabad editions of Deccan Chronicle, Eenadu, or Times of India within 24 to 48 hours.",
      },
    ],
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    title: "Gazette Name Change in Karnataka | Bengaluru Legal Gazette Procedure",
    metaTitle: "Gazette Name Change Karnataka | Bengaluru Procedure, Fees & Ads",
    metaDescription: "Apply for Gazette Name Change in Karnataka & Bengaluru online. Full assistance for Kannada & English newspaper ads, affidavit, and Central Gazette notification.",
    capital: "Bengaluru",
    keyCities: ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi", "Davanagere", "Ballari"],
    gazetteTypeDescription: "Karnataka residents can apply either for the Karnataka State Gazette through the Government Central Press, Bengaluru, or for the Central Gazette of India. For multinational employment, passport updates at RPO Bangalore, and CBSE/ICSE certificates, the Central Gazette is the most reliable option.",
    newspaperGuidelines: "Publication is required in one Kannada regional daily (e.g. Prajavani or Vijayavani) and one English national daily (e.g. Deccan Herald or The Times of India).",
    recommendedNewspapers: {
      english: ["Deccan Herald", "The Times of India", "The New Indian Express", "The Hindu"],
      vernacular: ["Prajavani", "Vijayavani", "Kannada Prabha", "Udayavani"],
    },
    stampDutyInfo: "Executed on Non-Judicial e-Stamp Paper under the Karnataka Stamp Act via KAVERI portal / SHCIL and notarized by an authorized Notary in Karnataka.",
    passportOffices: ["RPO Bangalore (Koramangala)", "PSK Lalbagh", "PSK Marathahalli", "PSK Hubli", "PSK Mangalore"],
    faqs: [
      {
        q: "Is Gazette notification required for changing surname after marriage in Bengaluru?",
        a: "Yes, for updating your passport at PSK Bangalore, renewing PAN, or registering joint property, a Gazette notification is mandatory.",
      },
      {
        q: "Can tech workers in Bengaluru complete the application remotely?",
        a: "Yes. Our digital service is 100% online. You do not need to take time off work or visit government offices.",
      },
    ],
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    title: "Gazette Name Change in Maharashtra | Mumbai & Pune Procedure",
    metaTitle: "Gazette Name Change Maharashtra | Mumbai & Pune e-Gazette Online",
    metaDescription: "Comprehensive Gazette Name Change assistance in Maharashtra, Mumbai, and Pune. Marathi & English newspaper ads, affidavit drafting, and Gazette filing.",
    capital: "Mumbai",
    keyCities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Navi Mumbai"],
    gazetteTypeDescription: "In Maharashtra, citizens can utilize the Maharashtra e-Gazette portal (Directorate of Government Printing, Charni Road, Mumbai) or the Central Gazette of India. For central government undertakings, defense establishments in Pune, and international travel, the Central Gazette is globally honored.",
    newspaperGuidelines: "Mandates one Marathi daily (e.g. Lokmat or Maharashtra Times) and one national English daily (e.g. Times of India or Indian Express) circulated in Mumbai/Pune/district.",
    recommendedNewspapers: {
      english: ["The Times of India", "The Indian Express", "Free Press Journal", "Hindustan Times"],
      vernacular: ["Lokmat", "Maharashtra Times", "Sakal", "Loksatta", "Pudhari"],
    },
    stampDutyInfo: "Prepared on Maharashtra Non-Judicial e-Stamp Paper via GRAS / SHCIL and attested by a Notary Public.",
    passportOffices: ["RPO Mumbai (BKC)", "RPO Pune", "PSK Andheri", "PSK Lower Parel", "PSK Malad"],
    faqs: [
      {
        q: "What is the difference between MahaOnline e-Gazette and Central Gazette?",
        a: "MahaOnline publishes the Maharashtra State Gazette. The Central Gazette of India is published by the Government of India in New Delhi and is valid across all states in India and abroad.",
      },
    ],
  },
  {
    name: "Delhi",
    slug: "delhi",
    title: "Gazette Name Change in Delhi NCR | Central Gazette Office Filing",
    metaTitle: "Gazette Name Change Delhi NCR | Central Gazette Procedure, Civil Lines",
    metaDescription: "Apply for Central Gazette Name Change in Delhi NCR online. Expert assistance for Department of Publication (Civil Lines), Hindi & English newspaper ads.",
    capital: "New Delhi",
    keyCities: ["New Delhi", "Central Delhi", "South Delhi", "Dwarka", "Rohini", "Noida", "Gurgaon", "Faridabad"],
    gazetteTypeDescription: "Delhi is the home of the Controller of Publications (Department of Publication, Civil Lines, Delhi-110054). All applications for The Gazette of India (Part IV) are reviewed and published here.",
    newspaperGuidelines: "Publication in at least one daily newspaper circulated in Delhi NCR (e.g. Navbharat Times, Dainik Jagran, Hindustan Times, or The Times of India).",
    recommendedNewspapers: {
      english: ["Hindustan Times", "The Times of India", "The Indian Express", "The Pioneer"],
      vernacular: ["Navbharat Times", "Dainik Jagran", "Amar Ujala", "Hindustan"],
    },
    stampDutyInfo: "Executed on Delhi e-Stamp Paper (SHCIL) with notary attestation.",
    passportOffices: ["RPO Delhi (Bhikaji Cama Place)", "PSK Herald House (ITO)", "PSK Shalimar Place", "PSK Gurgaon"],
    faqs: [
      {
        q: "Do I have to physically visit the Department of Publication in Civil Lines?",
        a: "No. Our team prepares the complete dossier, CD formatting, and handles filing coordination so you do not have to wait in government lines.",
      },
    ],
  },
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    title: "Gazette Name Change in Tamil Nadu | Chennai Procedure & Ads",
    metaTitle: "Gazette Name Change Tamil Nadu | Chennai Central & State Gazette",
    metaDescription: "Apply for Gazette Name Change in Tamil Nadu & Chennai online. Tamil & English daily newspaper ads, affidavit drafting, and Central Gazette filing.",
    capital: "Chennai",
    keyCities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore"],
    gazetteTypeDescription: "Tamil Nadu citizens can register with the Tamil Nadu Government Gazette (Directorate of Stationery and Printing, Anna Salai, Chennai) or the Central Gazette of India. For IT hubs in OMR Chennai and passport offices, Central Gazette is strongly recommended.",
    newspaperGuidelines: "Requires publishing in one Tamil daily (Daily Thanthi or Dinamalar) and one English daily (The Hindu or Indian Express).",
    recommendedNewspapers: {
      english: ["The Hindu", "The New Indian Express", "The Times of India", "Deccan Chronicle"],
      vernacular: ["Daily Thanthi", "Dinamalar", "Dinamani", "Maalai Malar"],
    },
    stampDutyInfo: "Executed on Tamil Nadu e-Stamp Paper with Notary Public attestation.",
    passportOffices: ["RPO Chennai (Royapettah)", "PSK Saligramam", "PSK Aminjikarai", "PSK Tambaram", "PSK Coimbatore"],
    faqs: [
      {
        q: "Is Tamil translation required for newspaper notice?",
        a: "Yes. If publishing in a Tamil daily, our team formulates the exact Tamil legal text corresponding to your affidavit.",
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    title: "Gazette Name Change in Uttar Pradesh | Lucknow & Noida Procedure",
    metaTitle: "Gazette Name Change Uttar Pradesh | Lucknow & UP Online Procedure",
    metaDescription: "Online Gazette Name Change in Uttar Pradesh. Assistance for Hindi & English newspaper ads, affidavit, and Central Gazette filing in UP.",
    capital: "Lucknow",
    keyCities: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Ghaziabad", "Noida", "Meerut"],
    gazetteTypeDescription: "Uttar Pradesh residents benefit from direct access to the Central Gazette of India, which is essential for central government employment, military personnel, and passport updates at RPO Lucknow and Bareilly.",
    newspaperGuidelines: "One Hindi daily (Dainik Jagran, Amar Ujala, or Hindustan) and one English national daily.",
    recommendedNewspapers: {
      english: ["The Times of India", "Hindustan Times", "The Pioneer", "The Indian Express"],
      vernacular: ["Dainik Jagran", "Amar Ujala", "Hindustan", "Rashtriya Sahara"],
    },
    stampDutyInfo: "Prepared on UP Non-Judicial e-Stamp Paper with Notary attestation.",
    passportOffices: ["RPO Lucknow", "RPO Bareilly", "PSK Gomti Nagar", "PSK Kanpur", "PSK Varanasi"],
    faqs: [
      {
        q: "Is Gazette notification required for government jobs in UP (UPPSC / Teaching)?",
        a: "Yes. Document verification committees for state and central government jobs in UP require a Central Gazette notification for any name spelling discrepancy.",
      },
    ],
  },
  {
    name: "Gujarat",
    slug: "gujarat",
    title: "Gazette Name Change in Gujarat | Ahmedabad & Surat Procedure",
    metaTitle: "Gazette Name Change Gujarat | Ahmedabad Procedure, Fees & Ads",
    metaDescription: "Apply for Gazette Name Change in Gujarat, Ahmedabad, and Surat online. Gujarati & English newspaper publication, affidavit, and Central Gazette filing.",
    capital: "Gandhinagar",
    keyCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh"],
    gazetteTypeDescription: "Gujarat citizens can file through the Gujarat Government Central Press (Gandhinagar) or the Central Gazette of India. For foreign immigration, Canada/US student visas, and passport updates, Central Gazette is widely preferred.",
    newspaperGuidelines: "One Gujarati daily (Gujarat Samachar, Sandesh, or Divya Bhaskar) and one national English daily.",
    recommendedNewspapers: {
      english: ["The Times of India", "The Indian Express", "Ahmedabad Mirror"],
      vernacular: ["Gujarat Samachar", "Sandesh", "Divya Bhaskar", "NavGujarat Samay"],
    },
    stampDutyInfo: "Executed on Gujarat e-Stamp Paper via jantri norms and notarized.",
    passportOffices: ["RPO Ahmedabad", "RPO Surat", "PSK Mithakhali", "PSK Vijay Cross Roads", "PSK Vadodara"],
    faqs: [
      {
        q: "Is Central Gazette accepted for Canadian student visas and WES verification?",
        a: "Yes. World Education Services (WES) and Canadian immigration (IRCC) require an official Central Gazette notification for name discrepancies in educational certificates.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
