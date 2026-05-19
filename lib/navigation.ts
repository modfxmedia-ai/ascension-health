export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const SITE = {
  phone: "(775) 575-9922",
  phoneHref: "tel:+17755759922",
  sms: "(775) 204-4640",
  smsHref: "sms:+17752044640",
  address: "415 HWY 95A Suite 503, Fernley, NV 89408",
  mapsHref: "https://g.page/FernleyChiropractor?share",
  appointmentsHref: "/appointments/",
  hours: "Mon–Thu · 9:00am – 6:00pm",
  social: {
    facebook:
      "https://www.facebook.com/Ascension-Chiropractic-734015263631952",
    google: "https://g.page/FernleyChiropractor?share",
    twitter: "https://twitter.com/AscensionChiro1",
  },
};

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/",
    children: [{ label: "Our Team", href: "/our-team/" }],
  },
  {
    label: "New Patients",
    href: "/new-patients/",
    children: [
      { label: "Online Forms", href: "/new-patients/online-forms/" },
    ],
  },
  { label: "Appointments", href: "/appointments/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Joint Injections", href: "/joint-injections/" },
      { label: "Trigger Point Injections", href: "/trigger-point-injections/" },
      { label: "Physical Therapy", href: "/physical-therapy/" },
      { label: "Chiropractic Care", href: "/services/chiropractic-care/" },
      { label: "Nutritional IVs", href: "/nutritional-ivs/" },
      {
        label: "Bioidentical Hormone Replacement Therapy",
        href: "/bioidentical-hormone-replacement-therapy/",
      },
      { label: "Spinal Decompression", href: "/services/spinal-decompression/" },
      { label: "GAINSWave®", href: "/gainswave/" },
      { label: "Medical Weight Loss", href: "/medical-weight-loss/" },
    ],
  },
  {
    label: "Conditions Treated",
    href: "/conditions-treated/",
    children: [
      { label: "Back Pain", href: "/conditions-treated/back-pain/" },
      { label: "Neck Pain", href: "/conditions-treated/neck-pain/" },
      { label: "Shoulder Pain", href: "/conditions-treated/shoulder-pain/" },
      { label: "Sciatica", href: "/conditions-treated/sciatica/" },
      { label: "Headaches & Migraines", href: "/conditions-treated/headaches-migraines/" },
      { label: "Myofascial Release", href: "/conditions-treated/myofascial-release/" },
      { label: "Intersegmental Traction", href: "/conditions-treated/intersegmental-traction/" },
      { label: "Sexual Dysfunction", href: "/sexual-dysfunction/" },
      { label: "Hormonal Imbalance", href: "/hormonal-imbalance/" },
      { label: "Neuropathy", href: "/neuropathy/" },
      { label: "Pain Relief", href: "/pain-relief/" },
      { label: "Joint Pain", href: "/joint-pain/" },
      { label: "Knee Pain", href: "/knee-pain/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
