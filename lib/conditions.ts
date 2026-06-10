export type Condition = {
  slug: string;
  href: string;
  title: string;
  summary?: string;
};

export const CONDITIONS: Condition[] = [
  { slug: "back-pain", href: "/conditions-treated/back-pain/", title: "Back Pain" },
  { slug: "neck-pain", href: "/conditions-treated/neck-pain/", title: "Neck Pain" },
  { slug: "shoulder-pain", href: "/conditions-treated/shoulder-pain/", title: "Shoulder Pain" },
  { slug: "knee-pain", href: "/conditions-treated/knee-pain/", title: "Knee Pain" },
  { slug: "whiplash", href: "/conditions-treated/whiplash/", title: "Whiplash" },
  { slug: "joint-pain", href: "/conditions-treated/joint-pain/", title: "Joint Pain" },
  { slug: "sciatica", href: "/conditions-treated/sciatica/", title: "Sciatica" },
  { slug: "headaches-migraines", href: "/conditions-treated/headaches-migraines/", title: "Headaches / Migraines" },
  { slug: "scoliosis", href: "/conditions-treated/scoliosis/", title: "Scoliosis" },
  { slug: "carpal-tunnel", href: "/conditions-treated/carpal-tunnel/", title: "Carpal Tunnel" },
  { slug: "myofascial-release", href: "/conditions-treated/myofascial-release/", title: "Myofascial Release" },
  { slug: "intersegmental-traction", href: "/conditions-treated/intersegmental-traction/", title: "Intersegmental Traction" },
  { slug: "work-injury", href: "/conditions-treated/work-injury/", title: "Work Injury" },
  { slug: "sports-injuries", href: "/sports-injuries/", title: "Sports Injuries" },
  { slug: "pain-relief", href: "/conditions-treated/pain-relief/", title: "Pain Relief" },
  { slug: "neuropathy", href: "/conditions-treated/neuropathy/", title: "Neuropathy" },
  { slug: "hormonal-imbalance", href: "/conditions-treated/hormonal-imbalance/", title: "Hormonal Imbalance" },
  { slug: "sexual-dysfunction", href: "/conditions-treated/sexual-dysfunction/", title: "Sexual Dysfunction" },
];
