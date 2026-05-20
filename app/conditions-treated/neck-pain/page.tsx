import type { Metadata } from "next";
import { ConditionStub } from "@/components/ConditionStub";

export const metadata: Metadata = {
  title: "Neck Pain | Ascension Health",
  description:
    "Neck pain treatment in Fernley, NV. Ascension Health offers non-surgical care for chronic and acute neck pain — chiropractic, decompression and physical therapy.",
  alternates: { canonical: "/conditions-treated/neck-pain/" },
};

export default function Page() {
  return (
    <ConditionStub
      title="Neck Pain"
      slug="neck-pain"
      intro="Having neck pain can be extremely painful and uncomfortable. You forget how important your neck health is until you begin having neck pain."
    />
  );
}
