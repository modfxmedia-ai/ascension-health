import type { Metadata } from "next";
import { ConditionStub } from "@/components/ConditionStub";

export const metadata: Metadata = {
  title: "Shoulder Pain in Fernley, NV",
  description:
    "Shoulder pain treatment in Fernley, NV. Shoulder pain affects nearly half of Americans — Ascension Health offers non-surgical options that work.",
  alternates: { canonical: "/conditions-treated/shoulder-pain/" },
};

export default function Page() {
  return (
    <ConditionStub
      title="Shoulder Pain"
      slug="shoulder-pain"
      intro="Shoulder pain is very common and affects almost half of the U.S. population at some point in their lives. Although the causes may be different, many of the treatment options are similar."
    />
  );
}
