const data = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Ascension Health",
  url: "https://www.ascensionhealthnv.com",
  telephone: "+1-775-575-9922",
  address: {
    "@type": "PostalAddress",
    streetAddress: "415 HWY 95A Suite 503",
    addressLocality: "Fernley",
    addressRegion: "NV",
    postalCode: "89408",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/Ascension-Chiropractic-734015263631952",
    "https://twitter.com/AscensionChiro1",
    "https://g.page/FernleyChiropractor?share",
  ],
  medicalSpecialty: [
    "Chiropractic",
    "PainMedicine",
    "PhysicalTherapy",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
