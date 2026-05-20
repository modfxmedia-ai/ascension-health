import type { Metadata } from "next";
import { ConditionStub } from "@/components/ConditionStub";

export const metadata: Metadata = {
  title: "Scoliosis | Ascension Health",
  description:
    "Scoliosis care in Fernley, NV. Ascension Health offers non-surgical chiropractic care for scoliosis and related postural conditions.",
  alternates: { canonical: "/conditions-treated/scoliosis/" },
};

export default function Page() {
  return (
    <ConditionStub
      title="Scoliosis"
      slug="scoliosis"
      intro="Many cases of scoliosis do not require surgery or extensive treatment, but if the curvature becomes more severe, medical intervention may be needed. Scoliosis appears equally in boys and girls, but typically girls are more likely to develop significant curvature that warrants treatment."
    />
  );
}
