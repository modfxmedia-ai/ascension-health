/**
 * Rich content blocks for programmatic SEO pages.
 *
 * Per-service and per-condition narrative paragraphs, related-topic lists,
 * and an FAQ generator. Content is original copy written in the Ascension
 * Health voice (Fernley, NV — conservative, drug-free, root-cause care).
 *
 * Paragraphs accept `{city}` and `{region}` placeholders; the template
 * interpolates them at render time so every page is unique while sharing
 * a single source of truth.
 */

import { PSEO_SERVICES, PSEO_CONDITIONS, type PSEOCity, type PSEOService, type PSEOCondition } from "./pSEO-data";
import { PSEO_TARGET_CITIES as TARGET } from "./pSEO-routing";

export const CLINIC_FOUNDING_YEAR = 2010;

// ────────────────────────────────────────────────────────────────────────
// Service narrative content
// ────────────────────────────────────────────────────────────────────────

type TopicContent = {
  /** 3–4 paragraph "What is" block. Supports {city} / {region} tokens. */
  paragraphs: string[];
  /** Slugs from PSEO_CONDITIONS this service commonly treats. */
  relatedConditionSlugs?: string[];
  /** Slugs from PSEO_SERVICES we offer for this condition. */
  relatedServiceSlugs?: string[];
};

export const SERVICE_CONTENT: Record<string, TopicContent> = {
  "chiropractic-care": {
    paragraphs: [
      "Chiropractic care is a hands-on, drug-free approach to spine and nervous-system health. By restoring proper motion to restricted joints — especially in the spine — your body can move better, recover faster, and stop sending the pain signals that come from irritated nerves. For {city} patients dealing with stiffness, headaches, or chronic discomfort, chiropractic is often the first step that actually moves the needle.",
      "At Ascension Health, every adjustment starts with a real evaluation. We don't run an assembly-line clinic — we look at your posture, range of motion, orthopedic and neurological responses, and (when needed) imaging before we touch your spine. That means the adjustment you receive is targeted to the segment that actually needs it, not a one-size-fits-all routine.",
      "Most {city} patients combine chiropractic with one or two supporting therapies — soft-tissue work, intersegmental traction, or physical-therapy exercise — so the joint stays mobile between visits. We'll build the smallest care plan that gets the result, then graduate you out of regular care. Long-term wellness visits are an option, never a requirement.",
      "If you've avoided chiropractic because of nightmare stories — endless visits, big up-front contracts, popping you don't understand — we hear that all the time. Our {region} patients tell us our approach feels closer to physical medicine than to traditional chiropractic, and the only way to know if it's right for you is a no-pressure consultation.",
    ],
    relatedConditionSlugs: ["back-pain", "neck-pain", "sciatica", "headaches", "migraines", "whiplash", "scoliosis", "shoulder-pain"],
  },
  "spinal-decompression": {
    paragraphs: [
      "Non-surgical spinal decompression uses a computer-controlled traction table to gently stretch the spine in precise cycles, creating negative pressure inside the disc. That pressure change can pull bulging disc material back toward center and bring in the water, oxygen, and nutrients a damaged disc needs to heal — without surgery, injections, or downtime.",
      "Patients in {city} typically come to us after trying everything else: months of muscle relaxers, an MRI showing a herniated disc, and a surgeon who recommended a microdiscectomy or fusion. Decompression isn't a fit for every disc problem, but when it is the right tool, the results can be life-changing — and you get to keep your spine.",
      "Each session at Ascension Health runs about 20–25 minutes and is genuinely comfortable — most patients listen to a podcast or rest with their eyes closed. We pair decompression with chiropractic care, supporting muscle-belief work, and a home-exercise plan so the discs and surrounding muscles stabilize together. A typical plan runs 4–6 weeks and we check progress on a clear schedule.",
      "If you're driving in from {city}, we'll coordinate appointment times in blocks so you're not making the trip twice a week for years. Same-week consults are usually available and we'll be honest about whether decompression is likely to help in your specific case.",
    ],
    relatedConditionSlugs: ["back-pain", "sciatica", "herniated-disc", "neck-pain"],
  },
  "physical-therapy": {
    paragraphs: [
      "Physical therapy at Ascension Health is one-on-one with a licensed therapist — not a 45-minute group session with a tech checking on three people at once. That means your exercises are the right level of hard, your form gets corrected in real time, and the plan changes as your body changes.",
      "For {city} patients recovering from surgery, an auto accident, or chronic mechanical pain, PT is often the piece that locks in everything else. The chiropractic adjustment restores motion; the PT work teaches your body how to keep it. Without that second piece, the gains tend to slip back.",
      "We use functional-movement screens, manual therapy, dry-needling-style trigger-point work, and a graded exercise progression you can keep doing at home or in your gym. Every patient leaves with a written program — no guessing what to do between visits.",
      "Most plans run 6–12 visits over 4–8 weeks. We'll document everything for your primary care doctor or surgeon when they need it, and we'll tell you the moment continued visits stop adding measurable value.",
    ],
    relatedConditionSlugs: ["back-pain", "neck-pain", "shoulder-pain", "knee-pain", "hip-pain", "sports-injuries", "work-injuries", "auto-accident-injuries"],
  },
  "joint-injections": {
    paragraphs: [
      "Joint injections deliver targeted anti-inflammatory medication directly into the painful joint capsule — knee, shoulder, hip, sacroiliac — so it can calm the inflammation without flooding your whole body with steroids or NSAIDs. For the right patient, a single well-placed injection can buy you weeks or months of relief.",
      "In our {city} patient population we use joint injections as a tool inside a larger plan, not as a standalone fix. The injection settles the fire; chiropractic, PT, and lifestyle work address why the fire started. That combination is what tends to keep the pain from coming back six weeks later.",
      "Our providers use image guidance when indicated to make sure the medication lands precisely where it should — sloppy injections are why patients sometimes feel let down by past treatments. We use small-gauge needles, numbing protocols, and clear pre/post instructions.",
      "If you've been told you need joint replacement but want to exhaust conservative options first, this is a reasonable next step to consider. We'll walk you through the realistic expectations for your specific joint.",
    ],
    relatedConditionSlugs: ["knee-pain", "shoulder-pain", "hip-pain", "joint-pain", "arthritis"],
  },
  "trigger-point-injections": {
    paragraphs: [
      "Trigger-point injections release the tight, painful knots in muscle tissue that don't let go with massage or stretching alone. A small amount of local anesthetic is injected directly into the trigger point, which deactivates the knot and lets the surrounding muscle relax — often providing relief that lasts long after the anesthetic wears off.",
      "{city} patients with chronic neck, upper-back, and shoulder pain — especially desk workers and drivers — often have a handful of repeat-offender trigger points that flare every few months. We map them on your first visit and only inject the ones that are actively driving symptoms.",
      "Most appointments take 15–20 minutes and you walk out the door. There's usually some local soreness for a day or two, then a noticeable drop in baseline tension. We pair injections with movement and posture coaching so the same knot doesn't keep coming back.",
      "Injections are never our only tool. If you're getting them somewhere else every month with no plan to graduate you out of them, that's a red flag worth asking about.",
    ],
    relatedConditionSlugs: ["neck-pain", "shoulder-pain", "back-pain", "fibromyalgia", "headaches", "tmj-pain"],
  },
  "medical-weight-loss": {
    paragraphs: [
      "Medical weight loss is physician-supervised — meaning your plan is built around your bloodwork, your hormones, your medications, and your real life. For {city} patients who've tried every diet and watched the weight come back, the missing piece is almost always the metabolic and hormonal context that diets ignore.",
      "Our program combines a clinical evaluation, lab work, nutrition coaching, and (when appropriate) medication support such as GLP-1 therapies prescribed and monitored by our medical team. We focus on body composition — losing fat and protecting muscle — not just a number on the scale.",
      "Accountability is built in. We don't hand you a printout and wish you luck. You'll have regular check-ins, measurable goals, and a coach who actually knows your name. The result is sustainable weight loss most patients can hold onto after the program ends.",
      "If you've felt judged or rushed at past weight-loss programs, our {region} patients consistently say Ascension feels different. We treat metabolic health as healthcare — because it is.",
    ],
    relatedConditionSlugs: ["hormonal-imbalance", "menopause-symptoms", "low-testosterone", "joint-pain"],
  },
  "nutritional-iv-therapy": {
    paragraphs: [
      "Nutritional IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream — bypassing the gut for 100% absorption. For patients dealing with low energy, frequent illness, post-workout recovery, or chronic nutrient deficiencies, an IV can move the needle in a single visit in a way oral supplements often can't.",
      "{city} patients use our IV protocols for everything from immune support during fire-and-flu season, to post-event athletic recovery, to ongoing maintenance for documented deficiencies. We don't believe in random vitamin cocktails — every drip is matched to your goals and, where relevant, your lab results.",
      "Sessions take 30–60 minutes in a comfortable recliner. Our most popular blends include the classic Myers' Cocktail (B-complex, magnesium, calcium, vitamin C), high-dose vitamin C, and energy/recovery formulas tuned for {region}'s active lifestyle.",
      "If you've been told an IV is just an expensive placebo, we hear you — that's why we test, document, and only recommend the protocol that fits the question we're trying to answer.",
    ],
    relatedConditionSlugs: ["hormonal-imbalance", "fibromyalgia", "menopause-symptoms"],
  },
  "bioidentical-hormone-replacement-therapy": {
    paragraphs: [
      "Bioidentical hormone replacement therapy (BHRT) uses hormones molecularly identical to the ones your body makes — not synthetic substitutes. For patients in {city} dealing with fatigue, mood swings, low libido, brain fog, sleep disruption, weight gain, or the full menopause/andropause picture, restoring those hormones to a healthy range can be the single biggest quality-of-life change in years.",
      "We start with comprehensive lab work — not a five-marker quickie panel — to see where you actually are. From there we design a personalized plan that may include creams, troches, pellets, or injections, depending on what fits your physiology and your life. Dosing is conservative and adjusted based on follow-up labs and how you feel.",
      "Hormones touch everything: energy, weight, libido, mood, joint pain, sleep, cognition, even how you handle stress. When they're off, treating the symptoms one at a time rarely works. When they're optimized, a lot of those symptoms quiet down together.",
      "{region} patients tell us BHRT done well felt like getting their twenties back without going overboard. Done badly, it's just expensive. We take the time to do it right.",
    ],
    relatedConditionSlugs: ["hormonal-imbalance", "menopause-symptoms", "low-testosterone", "erectile-dysfunction"],
  },
  "gainswave-therapy": {
    paragraphs: [
      "GAINSWave® is a drug-free, in-office acoustic-wave therapy for men dealing with erectile dysfunction, performance issues, or simply wanting better blood flow. Low-intensity sound waves break up micro-plaque and stimulate new blood-vessel growth — the same mechanism that keeps a young man's tissue healthy.",
      "For {city} patients who are tired of relying on Viagra or Cialis (or for whom those medications don't work or are contraindicated), GAINSWave is the only protocol with the science to address the root cause: blood flow. Most men feel a difference within the first few sessions and the full protocol's effects can last well over a year.",
      "Treatments are 20 minutes, completely non-invasive, and require no downtime — you can walk in on a lunch break. Conversations are 100% discreet and our providers are used to having frank, judgment-free discussions about sexual health.",
      "If you've been quietly putting this off, you're far from alone. The men who get the best results are the ones who start before the issue becomes severe. A no-pressure consult is the right first step.",
    ],
    relatedConditionSlugs: ["erectile-dysfunction", "low-testosterone"],
  },
  "neuropathy-treatment": {
    paragraphs: [
      "Peripheral neuropathy — burning, numbness, tingling, or sharp pain in the feet or hands — is one of the most frustrating conditions in medicine because the standard answer is usually a medication (gabapentin, Lyrica) that dulls symptoms without fixing anything. Our {city} neuropathy patients come to us looking for something that actually moves the needle.",
      "Our protocol combines targeted nerve stimulation, supportive nutrient infusions or supplementation, blood-sugar and metabolic optimization, and (where appropriate) chiropractic and soft-tissue work to address compression points along the nerve's path. We measure progress objectively — sensory testing, balance, functional metrics — not just \"how do you feel.\"",
      "Not every case of neuropathy is reversible, and we'll tell you that on day one if your story suggests it. But many cases that have been written off as \"you'll just have to live with it\" have meaningful gains to be made with the right combined approach.",
      "If you're losing your balance, your sleep, or your independence to numb feet, this is worth a conversation. Same-week consults usually available for {region} patients.",
    ],
    relatedConditionSlugs: ["neuropathy", "joint-pain"],
  },
  "pain-management": {
    paragraphs: [
      "Pain management at Ascension Health means drug-free, root-cause care — not a prescription pad. For {city} patients dealing with chronic pain, the question we ask first is \"why is this happening?\" rather than \"what can we throw at it?\" The answer often involves mechanics, soft tissue, posture, hormones, sleep, or a combination — and the plan should match.",
      "Our approach combines chiropractic, physical therapy, soft-tissue work, image-guided injections when needed, and lifestyle coaching. We coordinate inside one clinic so you're not driving from a chiro to a PT to an injection clinic and trying to be the project manager yourself.",
      "We measure progress and we graduate patients out of regular care when they're ready. If you've been told the only option is more medication or surgery, conservative care deserves a fair trial first — and Ascension is the kind of {region} clinic that does conservative care well.",
      "No long contracts, no \"come three times a week for six months\" sales pitch. Just an honest plan you can stick to.",
    ],
    relatedConditionSlugs: ["back-pain", "neck-pain", "joint-pain", "arthritis", "fibromyalgia", "headaches", "neuropathy", "sciatica"],
  },
  "myofascial-release": {
    paragraphs: [
      "Myofascial release is hands-on therapy that targets the fascia — the connective tissue webbing that wraps every muscle, organ, and nerve. When fascia gets restricted from injury, posture, or chronic tension, it can refer pain to places far from the source. Releasing those restrictions can unlock motion and pain relief that no amount of stretching at home will produce.",
      "{city} patients describe it as deeper and more lasting than a typical massage. The therapist works slowly into the tissue, holds the right pressure long enough for the fascia to actually release, and combines that with movement so the change sticks.",
      "Common presentations we see: chronic shoulder tightness, jaw and TMJ pain, headaches from a too-tight upper back, hip pain that's actually a fascial pattern from an old injury. The pattern matters as much as the spot that hurts.",
      "Most patients combine myofascial release with chiropractic and PT — the joint, the soft tissue, and the movement system all in the same plan.",
    ],
    relatedConditionSlugs: ["neck-pain", "shoulder-pain", "back-pain", "tmj-pain", "fibromyalgia", "headaches"],
  },
  "intersegmental-traction": {
    paragraphs: [
      "Intersegmental traction is a roller-table therapy that gently mobilizes each segment of your spine through its normal range — without forceful adjustment. It's a comfortable way to increase circulation, hydrate the discs, and prepare the spine for chiropractic care or PT.",
      "Patients in {city} use it both as a standalone wellness therapy and as a warm-up before a chiropractic adjustment. It feels like a slow, supportive massage along the back, and most patients are noticeably more relaxed after 10–15 minutes on the table.",
      "We particularly recommend it for patients with widespread tension, post-workout stiffness, or as a maintenance tool for those who've already finished a course of corrective care. It's also useful for patients who can't tolerate hands-on adjustments yet.",
      "It's not a substitute for active treatment when active treatment is what you need, but as a supportive tool it earns its place in the plan.",
    ],
    relatedConditionSlugs: ["back-pain", "neck-pain", "sciatica"],
  },
  "sports-injury-care": {
    paragraphs: [
      "Sports-injury care at Ascension Health is built for athletes — recreational and competitive — who want to get back to their sport, not just be \"pain free at rest.\" For {city} runners, cyclists, lifters, golfers, court athletes, and weekend warriors, that means a plan that respects your training calendar and your goals.",
      "Our approach starts with a movement evaluation: what got hurt, why it got hurt, and what biomechanical pattern made it likely. We then combine chiropractic, PT, soft-tissue work, and graded return-to-sport progressions so you build back stronger than you were before the injury.",
      "We work with athletes from the {region} — high-school, club, masters, recreational — and we adjust the plan based on competition timing. Sometimes the right answer is rest and rehab; sometimes it's modified training; we tell you which.",
      "If you've been told \"just stop running\" or \"you can't lift heavy anymore,\" that advice is sometimes right and often not. A good conservative-care plan can rewrite that story.",
    ],
    relatedConditionSlugs: ["sports-injuries", "knee-pain", "shoulder-pain", "back-pain", "hip-pain"],
  },
  "auto-accident-injury-care": {
    paragraphs: [
      "Auto-accident injury care is a specialty in itself — the injuries are different (whiplash, concussion symptoms, soft-tissue trauma), the timeline matters (some symptoms surface days later), and the paperwork is its own world. We do this work daily for {city} patients and we do it right.",
      "We document your injuries thoroughly, communicate with your insurance company or attorney as needed, and bill MedPay or your auto insurance directly so you don't pay out of pocket while the claim is open. You focus on healing; we handle the back-office grind.",
      "Treatment combines chiropractic, physical therapy, soft-tissue work, and (when needed) targeted injections to address whiplash, headaches, low-back pain, shoulder strain, and the other typical post-collision injuries. Plans run weeks-to-months depending on injury severity, with clear progress markers along the way.",
      "If you were in a wreck in {region}, the worst thing you can do is wait. The sooner we evaluate, the better both your recovery and your documentation. Same-week appointments for accident patients are standard.",
    ],
    relatedConditionSlugs: ["whiplash", "neck-pain", "back-pain", "headaches", "auto-accident-injuries"],
  },
  "work-injury-care": {
    paragraphs: [
      "Work-injury care under Nevada workers' compensation has specific documentation, reporting, and follow-up requirements — get any of them wrong and the claim becomes a headache for everyone. We're set up for it and we handle the paperwork side so {city} workers can focus on healing.",
      "Common cases we treat: low-back strain from lifting, repetitive-motion injuries (carpal tunnel, shoulder), slip-and-fall whiplash, knee injuries on uneven ground. Each gets a written treatment plan, regular progress notes, and the functional documentation your case manager needs.",
      "Treatment is conservative-first: chiropractic, PT, soft-tissue work, modalities, and a return-to-work plan that's realistic for your actual job demands. We coordinate with your employer and case manager on duty modifications when appropriate.",
      "If you've been told to wait weeks for an appointment, call us — accepting injured workers from across {region} is part of what we do.",
    ],
    relatedConditionSlugs: ["work-injuries", "back-pain", "carpal-tunnel", "shoulder-pain"],
  },
  "sexual-wellness-treatment": {
    paragraphs: [
      "Sexual wellness for men and women is one of the most under-treated areas in medicine — patients don't bring it up, and providers don't ask. At Ascension Health we ask, we listen, and we have actual tools that work. For {city} patients dealing with low libido, performance issues, dryness, painful intercourse, or relationship strain that traces back to physical issues, there are options beyond \"that's just getting older.\"",
      "Our protocols combine hormone optimization (when labs show a gap), GAINSWave® acoustic-wave therapy for men, PRP-based interventions for both men and women when appropriate, and lifestyle and nutritional support. Plans are private, conservative, and tailored to your goals.",
      "Every conversation in our clinic is 100% confidential. We treat these issues as medicine, not as something to be embarrassed about. {region} patients consistently tell us they wish they'd come sooner.",
      "If this is on your mind, a no-pressure consultation is the right first step. We'll tell you honestly what's likely to help in your specific case.",
    ],
    relatedConditionSlugs: ["erectile-dysfunction", "low-testosterone", "menopause-symptoms", "hormonal-imbalance"],
  },
};

// ────────────────────────────────────────────────────────────────────────
// Condition narrative content
// ────────────────────────────────────────────────────────────────────────

export const CONDITION_CONTENT: Record<string, TopicContent> = {
  "back-pain": {
    paragraphs: [
      "Back pain is the single most common reason adults in {city} miss work, lose sleep, and end up on medications they don't want to be on. Most back pain is mechanical — a joint, disc, or soft-tissue issue — and most mechanical back pain responds well to conservative care if it's diagnosed correctly and treated consistently.",
      "At Ascension Health, your first visit is a real evaluation: where exactly does it hurt, what makes it better or worse, what's the range of motion, what do the orthopedic tests show, and (if needed) what do imaging studies tell us? From there we build a written plan — not a generic protocol.",
      "Treatment may combine chiropractic care, physical therapy, spinal decompression for disc issues, soft-tissue work, and (rarely) targeted injections. We measure progress at clear checkpoints. If you're not better, we change the plan or refer out — we don't just keep going.",
      "The {region} patients who get the best results are the ones who come in before the back pain has been there for years. But chronic cases get better too — they just take longer.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "spinal-decompression", "physical-therapy", "myofascial-release", "trigger-point-injections", "intersegmental-traction"],
  },
  "neck-pain": {
    paragraphs: [
      "Neck pain in our {city} patient base usually comes from one of three buckets: posture (desk work, phone use), trauma (rear-end collisions, falls), or referred mechanical pain from the upper back. The right treatment is wildly different depending on which bucket you're in — which is why a real evaluation matters.",
      "We start by figuring out the source: facet joint, disc, muscle, fascia, or nerve. Then the plan combines chiropractic adjustments, soft-tissue and myofascial work, postural and movement coaching, and (when indicated) trigger-point injections for stubborn muscle knots.",
      "Headaches and neck pain go together. If you've got both, treating the neck often resolves the headache pattern — something a lot of patients don't realize is possible.",
      "We're conservative-first and surgery-avoidant for the right cases. We'll also tell you clearly when an MRI or surgical consult is the right next step.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "physical-therapy", "myofascial-release", "trigger-point-injections", "intersegmental-traction"],
  },
  "shoulder-pain": {
    paragraphs: [
      "Shoulder pain can mean rotator-cuff irritation, frozen shoulder, AC joint problems, biceps tendinopathy, referred pain from the neck — there are a dozen things it could be. A proper orthopedic exam usually narrows it to two or three within the first visit, and from there we know what to treat.",
      "For {city} patients we combine joint-specific mobility work, soft-tissue therapy for the rotator cuff and surrounding fascia, graded strengthening, and (when needed) image-guided joint injections to settle inflamed structures. Most cases respond well within 6–10 visits if treated correctly.",
      "Sleep is often the canary in the coal mine for shoulder problems. If you're avoiding sleeping on it, the issue is past mild and deserves attention.",
      "If you've been told you need surgery, that may end up being true — but conservative care first is almost always worth the trial. Most {region} shoulders don't actually need a scalpel.",
    ],
    relatedServiceSlugs: ["physical-therapy", "chiropractic-care", "joint-injections", "myofascial-release"],
  },
  "knee-pain": {
    paragraphs: [
      "Knee pain in {city} patients spans the whole spectrum: runner's knee, IT-band irritation, meniscus issues, ligament strains, early osteoarthritis. The treatment depends entirely on the diagnosis — and a lot of knees are diagnosed wrong.",
      "We start with a movement and orthopedic evaluation, image when needed, and build a plan that combines manual therapy, targeted strengthening (knees mostly hurt because the hip and core aren't pulling their weight), and joint injections when inflammation is the limiting factor.",
      "For arthritic knees, the right conservative plan can delay or eliminate the need for replacement. For acute injuries, early proper care prevents the cycle of compensation that turns a six-week recovery into a six-month one.",
      "{region} patients should know: not every knee problem needs surgery, but every knee problem deserves a real plan.",
    ],
    relatedServiceSlugs: ["physical-therapy", "joint-injections", "chiropractic-care"],
  },
  "hip-pain": {
    paragraphs: [
      "Hip pain has a sneaky habit of presenting elsewhere — it can show up as low-back pain, knee pain, or groin discomfort. For {city} patients we start by sorting out where the pain is actually coming from before we treat anything.",
      "Common drivers: hip-flexor tightness, glute weakness, SI-joint dysfunction, labral irritation, early osteoarthritis. The plan combines manual therapy, targeted exercise, occasionally joint injections, and movement re-patterning.",
      "Sleep position, sitting habits, and how you walk all matter for the hip. We coach those just as much as we treat the joint itself.",
      "If a surgeon has mentioned hip replacement, that conversation may be appropriate — but the right conservative plan first is worth the trial.",
    ],
    relatedServiceSlugs: ["physical-therapy", "chiropractic-care", "joint-injections"],
  },
  "sciatica": {
    paragraphs: [
      "Sciatica — shooting pain down one leg, sometimes with numbness, tingling, or weakness — is most often caused by a disc bulge or piriformis irritation pressing on the sciatic nerve. The cause matters because it changes the treatment.",
      "For {city} patients, we use orthopedic testing and (when needed) imaging to confirm whether the nerve is being compressed at the spine or in the hip. Then the plan typically combines spinal decompression for disc cases, chiropractic care, soft-tissue work for the piriformis and surrounding muscles, and a specific exercise progression.",
      "Most sciatica improves with conservative care. The cases that don't — true progressive weakness, bowel/bladder symptoms — need a surgical consult and we'll tell you so.",
      "If you've been told to just take meds and wait it out, that's not your only option. Active treatment usually shortens the timeline meaningfully.",
    ],
    relatedServiceSlugs: ["spinal-decompression", "chiropractic-care", "physical-therapy", "myofascial-release"],
  },
  "herniated-disc": {
    paragraphs: [
      "A herniated disc happens when the soft inner material of a spinal disc pushes through the tougher outer ring and irritates a nearby nerve. For {city} patients, this often shows up as back pain plus a radiating symptom into the arm or leg — depending on whether the herniation is in the neck or low back.",
      "Surgery is one option but rarely the first or best one. Non-surgical spinal decompression, chiropractic care, targeted physical therapy, and (occasionally) interventional injections can resolve symptoms in most cases over a 6–12 week course.",
      "We use MRI findings when we have them, but we treat the patient — not the picture. Lots of healthy people have herniated discs on imaging and feel fine; symptoms and function are what guide the plan.",
      "The earlier you start a real plan, the better the odds. Stalling on a herniated disc rarely improves it.",
    ],
    relatedServiceSlugs: ["spinal-decompression", "chiropractic-care", "physical-therapy"],
  },
  "headaches": {
    paragraphs: [
      "Most chronic headaches are not random — they have a mechanical, postural, or muscular trigger. For {city} patients, we trace the pattern: where the headache starts, what time of day, what activities precede it, and what's happening in the neck and upper back muscles.",
      "Treatment usually involves chiropractic care for the upper neck, soft-tissue and trigger-point work for the muscles that refer pain into the head, postural and ergonomic coaching, and (sometimes) targeted injections for very stubborn trigger points.",
      "Most patients who've lived with chronic headaches for years see meaningful change inside 4–6 weeks of a real plan. That's not a guarantee — some headaches are migraine, hormonal, or neurological in origin and need a different team — but mechanical headache patterns are extremely treatable.",
      "If you're taking OTC pain relievers more than twice a week, that's a sign the headaches deserve a real workup rather than another bottle of Advil.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "trigger-point-injections", "myofascial-release", "physical-therapy"],
  },
  "migraines": {
    paragraphs: [
      "Migraines are different from tension headaches — they're a neurological event with vascular and inflammatory components — but the muscular and postural triggers in the neck still play a meaningful role for many {city} patients. Treating the neck and upper-back component can reduce migraine frequency and intensity even when it can't eliminate them.",
      "Our approach combines chiropractic care for the upper cervical spine, soft-tissue work, hydration and nutrient support (often via IV when severe), trigger identification (food, hormones, sleep, stress), and coordination with your primary care or neurology team for medication management.",
      "We won't pretend chiropractic cures migraines. We will tell you that many migraine patients see a real reduction in frequency with consistent conservative care alongside their other treatments.",
      "If migraines are running your life, a thoughtful multi-pronged plan is your best path forward.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "nutritional-iv-therapy", "myofascial-release", "trigger-point-injections"],
  },
  "whiplash": {
    paragraphs: [
      "Whiplash is the soft-tissue and ligamentous injury that happens when the head and neck snap back and forth — most commonly in a rear-end collision. For {city} drivers, even a low-speed crash can cause meaningful whiplash, and symptoms often surface days later as inflammation peaks.",
      "Early evaluation matters. We document the injury, image when indicated, and start treatment immediately to keep the soft tissue from stiffening into a long-term problem. Care combines chiropractic, physical therapy, soft-tissue work, modalities, and trigger-point injections when warranted.",
      "We handle the auto-insurance and MedPay billing side so you focus on healing, not on paperwork. If you have an attorney, we coordinate documentation directly.",
      "Most whiplash cases resolve well over 6–12 weeks of consistent care. The worst outcomes are almost always the people who waited too long to start.",
    ],
    relatedServiceSlugs: ["auto-accident-injury-care", "chiropractic-care", "physical-therapy", "trigger-point-injections", "myofascial-release"],
  },
  "scoliosis": {
    paragraphs: [
      "Scoliosis — a lateral curvature of the spine — exists on a spectrum from mild (often discovered incidentally) to severe (sometimes requiring bracing or surgery). For {city} adults and adolescents with mild-to-moderate scoliosis, conservative care can reduce pain, improve posture, and slow progression.",
      "We use a combination of specific corrective exercises, chiropractic care adapted to the curve pattern, soft-tissue work for the muscles that compensate, and postural education. We're realistic about what conservative care can and can't change — straightening a confirmed structural curve isn't the goal; living well with it is.",
      "Adolescents with progressive curves need orthopedic monitoring; we coordinate with the right specialists when bracing or surgical consideration enters the picture.",
      "Adults with longstanding scoliosis are often surprised at how much pain and stiffness can improve with the right plan — even when the curve itself doesn't change.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "physical-therapy", "myofascial-release"],
  },
  "carpal-tunnel": {
    paragraphs: [
      "Carpal tunnel syndrome — numbness, tingling, weakness, and pain in the hand from compression of the median nerve at the wrist — is one of the most common workplace injuries in {city}. The textbook answer is splinting, anti-inflammatories, and eventually surgery. The conservative-care answer is more nuanced.",
      "Often the nerve isn't only compressed at the wrist — it can be entrapped further up at the elbow, shoulder, or even the neck (a \"double crush\" pattern). Treating only the wrist when the upstream compression is the real driver is why some surgeries don't fully resolve symptoms.",
      "Our plan starts with a careful nerve-path exam, then combines chiropractic and soft-tissue work along the full neural path, specific exercises, ergonomic coaching, and night-splinting where it helps. Many patients can avoid surgery entirely with a thorough conservative trial.",
      "If symptoms are progressive — true muscle wasting in the thumb pad — that's a surgical-consult conversation and we'll tell you so.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "physical-therapy", "myofascial-release", "work-injury-care"],
  },
  "joint-pain": {
    paragraphs: [
      "Joint pain that isn't from an obvious injury is usually some combination of mechanical irritation, low-grade inflammation, and (often) hormonal or metabolic drivers. For {city} patients we evaluate the whole picture, not just the joint that hurts.",
      "Conservative care combines targeted joint mobilization, soft-tissue work, image-guided joint injections when inflammation is the limiting factor, anti-inflammatory nutritional support, and lifestyle work (sleep, weight, blood sugar) that move the underlying inflammation needle.",
      "We're not a quick-fix clinic for joints — most cases take 4–12 weeks of consistent care to feel meaningfully different. But many patients who've been told \"it's just arthritis, live with it\" find they have a lot more room to improve than they were promised.",
      "{region} patients with multiple painful joints especially deserve a workup beyond the joints themselves — that pattern often points to a systemic driver.",
    ],
    relatedServiceSlugs: ["joint-injections", "chiropractic-care", "physical-therapy", "nutritional-iv-therapy", "bioidentical-hormone-replacement-therapy"],
  },
  "arthritis": {
    paragraphs: [
      "Arthritis isn't a single disease — osteoarthritis, rheumatoid, post-traumatic, and other patterns all need different approaches. For {city} patients with osteoarthritis (the most common form), conservative care can reduce pain, improve function, and delay joint replacement by years.",
      "We combine joint-specific manual therapy, targeted strengthening (strong muscles take load off arthritic joints), joint injections when inflammation flares, weight optimization where it applies, and nutritional support for the chronic inflammation underneath it all.",
      "Hormonal health matters more than most people realize for arthritis — especially in post-menopausal women, where estrogen loss accelerates joint cartilage breakdown. BHRT, where appropriate, can be part of a comprehensive plan.",
      "If joint replacement is on the horizon, conservative care doesn't always prevent it but it can buy meaningful time and improve outcomes if surgery does happen.",
    ],
    relatedServiceSlugs: ["joint-injections", "physical-therapy", "chiropractic-care", "bioidentical-hormone-replacement-therapy", "nutritional-iv-therapy"],
  },
  "neuropathy": {
    paragraphs: [
      "Peripheral neuropathy is the umbrella term for nerve dysfunction in the hands or feet — burning, numbness, tingling, sharp pains, balance loss. The most common causes are diabetes, chemotherapy, B12 deficiency, alcohol use, and (importantly) mechanical compression of the nerves at the spine or extremities.",
      "For {city} patients, our protocol combines targeted nerve stimulation, metabolic and nutritional optimization (B12, alpha-lipoic acid, blood-sugar control), mechanical work along the nerve path, and IV nutrient support when needed. We measure progress objectively, not just by feel.",
      "Not every neuropathy reverses, and we'll tell you so on day one if the picture suggests it. But many cases that have been written off as permanent have meaningful gains to make.",
      "If you've been told gabapentin and Lyrica are your only options, that's worth a second opinion. Real conservative care for neuropathy looks different than that.",
    ],
    relatedServiceSlugs: ["neuropathy-treatment", "chiropractic-care", "nutritional-iv-therapy"],
  },
  "sports-injuries": {
    paragraphs: [
      "Sports injuries deserve a treatment plan built for athletes — one that respects return-to-sport timelines and rebuilds capacity, not just \"pain free at rest.\" For {city} athletes at every level, that's what we do.",
      "We evaluate movement, mechanics, and the specific demands of your sport, then build a plan that combines manual therapy, soft-tissue work, graded strengthening, and a return-to-sport progression. We document everything for trainers and coaches when needed.",
      "We treat recreational runners and cyclists, masters athletes, team-sport players, and the occasional pro. The principles are the same; the plan is individualized.",
      "{region}'s climate keeps people active year-round — which is great, except for the injuries that come with it. Get on top of them early.",
    ],
    relatedServiceSlugs: ["sports-injury-care", "physical-therapy", "chiropractic-care", "myofascial-release"],
  },
  "work-injuries": {
    paragraphs: [
      "Work injuries in {city} run the gamut: lifting strains, slip-and-falls, repetitive-motion problems, vehicle injuries on the job. Each carries its own paperwork requirements under Nevada workers' comp — and getting that paperwork right matters as much as the medical care itself.",
      "We do this work daily. Documentation, regular progress notes, functional capacity reporting, communication with case managers and employers — we handle the back-office side so you focus on healing.",
      "Treatment is conservative-first: chiropractic, PT, soft-tissue work, modalities, and a return-to-work plan that fits your actual job. We coordinate light-duty restrictions with your employer when appropriate.",
      "If you've been waiting for an appointment elsewhere, call us — accepting injured workers is part of what this clinic does.",
    ],
    relatedServiceSlugs: ["work-injury-care", "chiropractic-care", "physical-therapy"],
  },
  "auto-accident-injuries": {
    paragraphs: [
      "Auto-accident injuries are their own specialty. The injuries are specific (whiplash, concussion symptoms, back and shoulder strain), the timeline matters (symptoms often surface days later), and the insurance and legal context shape the documentation.",
      "We've treated thousands of {city} accident patients. We image when indicated, document thoroughly, and bill MedPay or auto insurance directly so you don't pay out of pocket while the claim is active.",
      "Treatment combines chiropractic, PT, soft-tissue work, modalities, and targeted injections when needed. Most cases resolve well over 6–12 weeks of consistent care.",
      "If you've been in a crash anywhere in {region}, the worst thing you can do is wait. The sooner we start, the better both the recovery and the documentation.",
    ],
    relatedServiceSlugs: ["auto-accident-injury-care", "chiropractic-care", "physical-therapy", "myofascial-release"],
  },
  "plantar-fasciitis": {
    paragraphs: [
      "Plantar fasciitis — that stabbing heel pain especially with the first steps of the morning — comes from inflammation and micro-tearing of the thick fascial band on the bottom of the foot. For {city} runners, walkers, and anyone on their feet all day, it's miserable and famously stubborn.",
      "The fastest-resolving cases combine soft-tissue work on the plantar fascia and calf complex, targeted strengthening for the foot and lower leg, footwear/orthotic guidance, and (when stubborn) trigger-point injections or shock-wave-style therapy.",
      "Treating only the heel where it hurts is usually why plantar fasciitis lingers — the calf, the ankle mobility, and the way the foot loads while you walk all need attention.",
      "Most cases resolve in 4–10 weeks with a real plan. The cases that don't usually had care that addressed only one piece of the picture.",
    ],
    relatedServiceSlugs: ["physical-therapy", "myofascial-release", "trigger-point-injections", "chiropractic-care"],
  },
  "tmj-pain": {
    paragraphs: [
      "TMJ pain — jaw clicking, locking, headaches, ear fullness, facial tension — is often dismissed as a dental problem when it's actually a joint and muscle problem. For {city} patients, conservative care for the jaw joint, the surrounding muscles, and the upper neck makes a real difference.",
      "Our approach combines specific intraoral and external soft-tissue work, gentle joint mobilization, posture and breathing coaching (jaw and neck mechanics are deeply linked), and trigger-point injections for stubborn muscle knots when needed.",
      "If you've been told you need a splint or oral appliance, that may still be the right answer — but it works better when paired with the muscular and joint work. We can coordinate with your dentist or TMJ specialist.",
      "Bruxism (clenching/grinding) and stress play a big role. We treat the mechanics; we'll also talk frankly about the stress and habit side.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "myofascial-release", "trigger-point-injections"],
  },
  "fibromyalgia": {
    paragraphs: [
      "Fibromyalgia is a chronic widespread pain condition with documented changes in how the central nervous system processes pain signals. It's real, it's not in your head, and it deserves a thoughtful multi-pronged plan — not just more medication.",
      "For {city} fibromyalgia patients, our approach combines gentle hands-on therapy (chiropractic and myofascial work tuned for sensitive nervous systems), supportive IV nutrient infusions, hormone evaluation (often a missing piece), sleep and nervous-system regulation work, and graded activity.",
      "Hard, aggressive treatment makes fibromyalgia worse. Gentle, consistent, comprehensive care is what moves the needle. We adjust intensity carefully.",
      "Many patients have been told \"there's nothing more we can do.\" That's almost always wrong — there are layers worth exploring that primary care doesn't have time for.",
    ],
    relatedServiceSlugs: ["chiropractic-care", "myofascial-release", "nutritional-iv-therapy", "bioidentical-hormone-replacement-therapy", "trigger-point-injections"],
  },
  "hormonal-imbalance": {
    paragraphs: [
      "Hormonal imbalance shows up as fatigue, weight changes, mood swings, low libido, brain fog, sleep disruption, joint pain, hair changes — and often as several of these at once. For {city} patients in their 30s, 40s, and 50s especially, treating the symptoms one at a time rarely works.",
      "We start with comprehensive lab work — sex hormones, thyroid, adrenals, key nutrients — not a five-marker quickie panel. From there, treatment may include bioidentical hormone replacement, targeted nutrient support, thyroid optimization, and lifestyle work around sleep, stress, and metabolic health.",
      "Done well, hormone optimization is one of the highest-leverage interventions in medicine. Done badly, it's expensive theater. We take the time to do it right.",
      "{region} patients tell us they wish they'd had this kind of workup years earlier — symptoms they'd just \"learned to live with\" turned out to be very treatable.",
    ],
    relatedServiceSlugs: ["bioidentical-hormone-replacement-therapy", "medical-weight-loss", "nutritional-iv-therapy"],
  },
  "low-testosterone": {
    paragraphs: [
      "Low testosterone in men shows up as low energy, low libido, mood and motivation changes, loss of muscle mass, weight gain (especially around the middle), and poor recovery from workouts. For {city} men, getting it diagnosed and treated properly is genuinely life-changing.",
      "We measure total and free testosterone, estradiol, SHBG, and the broader metabolic picture — testosterone doesn't operate in isolation. Treatment may include testosterone replacement (when labs confirm a gap and after a frank conversation about pros, cons, and fertility implications), lifestyle work, and (where indicated) GAINSWave® for sexual function.",
      "We monitor closely, follow up regularly, and adjust based on both labs and how you feel. We won't put you on a protocol and never see you again.",
      "Many {region} men have been told their numbers are \"in range\" when range and optimal are very different conversations. Worth a second look.",
    ],
    relatedServiceSlugs: ["bioidentical-hormone-replacement-therapy", "gainswave-therapy", "sexual-wellness-treatment", "medical-weight-loss"],
  },
  "menopause-symptoms": {
    paragraphs: [
      "Menopause symptoms — hot flashes, night sweats, mood changes, sleep disruption, low libido, brain fog, weight gain, joint pain — happen to most women and are dismissed by most providers. For {city} women, real treatment exists and it works.",
      "We start with comprehensive labs and a thorough symptom inventory. Treatment may include bioidentical hormone replacement (custom-dosed, conservatively monitored), targeted nutrient support, weight-management coaching, and IV therapy for energy and recovery support.",
      "We're conservative with hormone dosing, we follow up with repeat labs, and we adjust based on how you feel. We're not trying to make you 25 again — we're trying to make you feel like yourself again.",
      "If you've been told to \"just push through it,\" please get a second opinion. Decades of research now support thoughtful BHRT for the right candidates.",
    ],
    relatedServiceSlugs: ["bioidentical-hormone-replacement-therapy", "medical-weight-loss", "nutritional-iv-therapy", "sexual-wellness-treatment"],
  },
  "erectile-dysfunction": {
    paragraphs: [
      "Erectile dysfunction is far more common than men admit, and the standard answer — Viagra or Cialis — works for some and not for others. For {city} men, there are options beyond medication that address why ED is happening rather than masking it.",
      "Our approach starts with hormone evaluation (low testosterone is often a driver), cardiovascular and metabolic workup (ED is often the first sign of vascular issues), and a frank conversation about lifestyle factors. Treatment may include BHRT, GAINSWave® acoustic-wave therapy, lifestyle and nutritional optimization, and where appropriate, PRP-based interventions.",
      "Every conversation in our clinic is confidential. We treat this as medicine, not as something to be embarrassed about — and our {region} patients consistently tell us they wish they'd come sooner.",
      "If meds aren't working, can't be taken, or you simply want to address the cause rather than the symptom — there's a path forward.",
    ],
    relatedServiceSlugs: ["gainswave-therapy", "bioidentical-hormone-replacement-therapy", "sexual-wellness-treatment"],
  },
};

// ────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────

const SERVICE_BY_SLUG = new Map(PSEO_SERVICES.map((s) => [s.slug, s]));
const CONDITION_BY_SLUG = new Map(PSEO_CONDITIONS.map((c) => [c.slug, c]));

export function getServiceContent(slug: string): TopicContent {
  return SERVICE_CONTENT[slug] ?? { paragraphs: [], relatedConditionSlugs: [] };
}

export function getConditionContent(slug: string): TopicContent {
  return CONDITION_CONTENT[slug] ?? { paragraphs: [], relatedServiceSlugs: [] };
}

export function interpolate(text: string, vars: { city: string; region: string }): string {
  return text.replace(/\{city\}/g, vars.city).replace(/\{region\}/g, vars.region);
}

export function relatedConditionsForService(slug: string): PSEOCondition[] {
  const content = getServiceContent(slug);
  const out: PSEOCondition[] = [];
  for (const cs of content.relatedConditionSlugs ?? []) {
    const c = CONDITION_BY_SLUG.get(cs);
    if (c) out.push(c);
  }
  return out;
}

export function relatedServicesForCondition(slug: string): PSEOService[] {
  const content = getConditionContent(slug);
  const out: PSEOService[] = [];
  for (const ss of content.relatedServiceSlugs ?? []) {
    const s = SERVICE_BY_SLUG.get(ss);
    if (s) out.push(s);
  }
  return out;
}

/** Up to N nearby cities — same region, excluding the current one. */
export function nearbyCities(city: PSEOCity, count = 6): PSEOCity[] {
  return TARGET.filter((c) => c.slug !== city.slug && c.region === city.region).slice(0, count);
}

// ────────────────────────────────────────────────────────────────────────
// FAQ generation
// ────────────────────────────────────────────────────────────────────────

export type FAQ = { question: string; answer: string };

export function buildServiceCityFAQs(service: PSEOService, city: PSEOCity): FAQ[] {
  const s = service.name;
  const sLow = s.toLowerCase();
  const c = city.name;
  return [
    {
      question: `How much does ${sLow} cost in ${c}, NV?`,
      answer: `${s} pricing at Ascension Health varies by case complexity, the number of sessions in your written plan, and whether insurance applies. For most ${c} patients we run an initial consultation and exam, then quote a transparent plan price up front — no surprise bills. Call (775) 575-9922 for an exact quote or to verify your insurance.`,
    },
    {
      question: `Is ${sLow} covered by insurance in Nevada?`,
      answer: `Many ${sLow} services are covered by Nevada commercial insurance, Medicare, and (for crash-related care) auto MedPay. Coverage depends on your specific plan, medical necessity, and any prior-authorization requirements. We verify benefits before your first visit so you know exactly what's covered for ${c}-area patients before any treatment starts.`,
    },
    {
      question: `How long does ${sLow} take to work?`,
      answer: `Most ${c} patients begin noticing change inside the first 2–4 visits, with a typical plan running 6–12 sessions across 4–8 weeks depending on the issue. ${s} for acute problems often resolves faster; chronic cases need more consistency. We measure progress at clear checkpoints rather than asking you to keep coming indefinitely.`,
    },
    {
      question: `What conditions does ${sLow} treat?`,
      answer: `At Ascension Health we use ${sLow} for issues including ${(SERVICE_CONTENT[service.slug]?.relatedConditionSlugs ?? []).slice(0, 5).map((s2) => CONDITION_BY_SLUG.get(s2)?.name).filter(Boolean).join(", ") || "a range of musculoskeletal and metabolic concerns"}. During your evaluation we'll tell you honestly whether ${sLow} is the right tool for your specific situation.`,
    },
    {
      question: `Do I need a referral for ${sLow} in ${c}?`,
      answer: `In Nevada you do not need a referral to see Ascension Health for ${sLow}. Some insurance plans require one for coverage, however — we verify that for you when we check benefits. ${c} patients can self-refer and book directly.`,
    },
    {
      question: `How quickly can a ${c} patient be seen?`,
      answer: `Same-week appointments are usually available for new ${c} patients, and we hold same-day slots for acute injuries and post-accident care. Call (775) 575-9922 or request an appointment online — we'll confirm a time that works for your schedule and the drive from ${c}.`,
    },
  ];
}

export function buildConditionCityFAQs(condition: PSEOCondition, city: PSEOCity): FAQ[] {
  const cond = condition.name;
  const condLow = cond.toLowerCase();
  const c = city.name;
  return [
    {
      question: `How is ${condLow} treated in ${c}, NV?`,
      answer: `At Ascension Health, ${condLow} care for ${c} patients typically combines a thorough evaluation followed by a written plan — most often chiropractic, physical therapy, soft-tissue work, and (when warranted) targeted injections. We address the cause, not just the symptom, and we measure progress at clear checkpoints.`,
    },
    {
      question: `How long does it take to recover from ${condLow}?`,
      answer: `Most ${c} patients see meaningful change in 4–6 weeks of consistent care, with full plans running 6–12 weeks depending on severity and chronicity. Acute cases recover faster; chronic patterns take more time but are still very treatable.`,
    },
    {
      question: `Will insurance cover ${condLow} treatment in Nevada?`,
      answer: `Most Nevada commercial insurance plans, Medicare, and auto/work-injury coverage include treatment for ${condLow}. We verify your specific benefits before treatment starts so ${c} patients know exactly what's covered.`,
    },
    {
      question: `Can I avoid surgery for ${condLow}?`,
      answer: `Many ${condLow} cases respond well to a conservative-first approach — and the data supports trying conservative care before surgical intervention for most non-emergency presentations. We'll tell you honestly when surgery is the right next step and when it isn't.`,
    },
    {
      question: `What makes Ascension Health different for ${condLow}?`,
      answer: `${c} patients tell us the difference is the evaluation. We don't run an assembly-line clinic — every plan starts with a real exam, a written plan, and progress markers. If you're not improving, we change the plan or refer out. We don't just keep going.`,
    },
    {
      question: `How quickly can a ${c} patient be seen for ${condLow}?`,
      answer: `Same-week appointments are usually available for ${c} patients, with same-day options for acute pain and post-accident cases. Call (775) 575-9922 or request an appointment online.`,
    },
  ];
}

export function buildNearCityFAQs(service: PSEOService, city: PSEOCity): FAQ[] {
  const sLow = service.name.toLowerCase();
  const c = city.name;
  return [
    {
      question: `Is there ${sLow} near ${c}, NV?`,
      answer: `Yes — Ascension Health offers ${sLow} from our Fernley, NV clinic at 415 HWY 95A Suite 503, an easy drive from ${c} and the wider ${city.region} area. Same-week appointments are usually available.`,
    },
    {
      question: `How far is Ascension Health from ${c}?`,
      answer: `Ascension Health is located in Fernley, NV, a short drive from ${c}. We coordinate appointment times so patients making the drive aren't doing it more often than necessary, and we offer evening flexibility when needed.`,
    },
    {
      question: `Why drive to Fernley for ${sLow} instead of staying in ${c}?`,
      answer: `Many ${c} patients tell us the difference is the care plan — a real evaluation, a written program, and a clinic that combines chiropractic, physical therapy, regenerative and medical services under one roof. The drive is worth it for care that actually moves the needle.`,
    },
    {
      question: `Can I get same-day ${sLow} near ${c}?`,
      answer: `Same-day appointments are often available for acute issues and accident care for ${c} patients. Same-week consults are standard for non-emergency ${sLow}. Call (775) 575-9922 to check today's availability.`,
    },
    {
      question: `Do you accept insurance for ${c} patients?`,
      answer: `We accept most major Nevada insurance plans, Medicare, auto MedPay for crash-related care, and Nevada workers' comp for work injuries. We verify ${c} patients' benefits before the first visit.`,
    },
    {
      question: `What should ${c} patients bring to a first ${sLow} appointment?`,
      answer: `Photo ID, insurance card, a list of current medications, and any relevant imaging or records from past providers. For accident or work-injury cases, bring the claim or case-manager information. Plan for about 60 minutes for a first visit including paperwork.`,
    },
  ];
}

export function buildTreatmentFAQs(title: string, h1: string): FAQ[] {
  return [
    {
      question: `What is ${h1.replace(/[?]/g, "")}?`,
      answer: `This page explains how Ascension Health approaches ${h1.toLowerCase().replace(/[?]/g, "")} — the evaluation, the treatment options, and what to expect realistically from a course of care. Our team is based in Fernley, NV and serves patients across Nevada.`,
    },
    {
      question: "How long does treatment typically take?",
      answer: "Most patients see meaningful progress within 4–6 weeks of consistent care; full plans usually run 6–12 weeks. Acute issues resolve faster; chronic patterns take longer but are still very treatable with the right plan.",
    },
    {
      question: "Is this treatment covered by insurance?",
      answer: "Most Nevada commercial insurance, Medicare, auto MedPay (for accident-related care), and workers' comp cover the services in this treatment category. We verify your specific benefits before treatment begins.",
    },
    {
      question: "Do I need a referral?",
      answer: "Nevada does not require a referral to see Ascension Health directly. Some insurance plans require one for coverage — we check that for you when we verify benefits.",
    },
    {
      question: "How is Ascension Health different?",
      answer: "We don't run an assembly-line clinic. Every patient gets a real evaluation, a written plan, and clear progress markers. If you're not improving, we change the plan or refer out — we don't just keep you on the schedule indefinitely.",
    },
    {
      question: "How do I book an appointment?",
      answer: "Call (775) 575-9922, text (775) 204-4640, or request an appointment online. Same-week visits are usually available; same-day slots are held for acute issues.",
    },
  ];
}
