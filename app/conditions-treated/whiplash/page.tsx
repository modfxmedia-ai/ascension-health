import type { Metadata } from "next";
import { ConditionStub } from "@/components/ConditionStub";

export const metadata: Metadata = {
  title: "Whiplash in Fernley, NV | Ascension Health",
  description:
    "Whiplash treatment in Fernley, NV. Ascension Health offers non-surgical care for whiplash and other auto-injury-related neck pain.",
  alternates: { canonical: "/conditions-treated/whiplash/" },
};

export default function Page() {
  return (
    <ConditionStub
      title="Whiplash"
      slug="whiplash"
      intro="Whiplash is a neck injury caused by a sudden, forceful back-and-forth motion of the head — most commonly from a rear-end auto collision. Symptoms can take hours or days to surface, and untreated whiplash often turns into chronic neck pain, headaches and stiffness."
    />
  );
}
