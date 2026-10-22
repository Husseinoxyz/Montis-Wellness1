export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'note'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter title for the browser tab and Google results (aim for under ~60 characters). */
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  body: Block[];
  faqs: { q: string; a: string }[];
  relatedService?: string;
  furtherReading?: { label: string; href: string }[];
}

const WP = 'https://wellness-blogs.montis-clinic.com';

export const blogPosts: BlogPost[] = [
  {
    slug: 'stem-cell-therapy-kuala-lumpur',
    title: 'Stem Cell Therapy in Kuala Lumpur: What It Is, Who It May Help and What to Ask',
    seoTitle: 'Stem Cell Therapy in Kuala Lumpur: A Patient Guide',
    description:
      'A clear guide to mesenchymal stem cell (MSC) therapy in Kuala Lumpur: how it works, the evidence so far, safety, regulation in Malaysia and questions to ask before treatment.',
    excerpt:
      'Mesenchymal stem cells are one of the most talked-about areas in regenerative medicine. Here is what the science says, where the limits are, and how to choose a clinic safely.',
    category: 'Regenerative Medicine',
    date: '2026-10-22',
    image: '/hero-revitalization.webp',
    imageAlt: 'Healthy ageing and regenerative medicine concept',
    relatedService: 'revitalization-healthy-aging',
    furtherReading: [
      { label: 'Infinite MSC stem cell therapy (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/infinite-msc.php' },
      { label: 'Cell therapy at OXYZ Cell', href: 'https://oxyzcell.com/cell-therapy/' },
    ],
    body: [
      {
        type: 'p',
        text: 'Stem cell therapy is one of the most searched topics in regenerative medicine, and also one of the most misunderstood. This guide explains what stem cells are, how **mesenchymal stem cell (MSC) therapy** is used in wellness and regenerative care, what the research does and does not show, and how to make a safe, informed decision in Kuala Lumpur.',
      },
      { type: 'h2', text: 'What are stem cells?' },
      {
        type: 'p',
        text: 'Stem cells are cells that can renew themselves and develop into more specialised cell types. Your body uses them every day to repair tissue. There are several kinds, but the ones most often discussed in regenerative wellness are **mesenchymal stem cells (MSCs)**, which can be sourced from umbilical cord tissue (Wharton’s jelly), bone marrow or fat (adipose) tissue.',
      },
      {
        type: 'p',
        text: 'MSCs are of interest less because they turn into new tissue and more because of the signals they release. They secrete growth factors and anti-inflammatory molecules that may help regulate the immune system and support the body’s own repair processes. This is often called the *paracrine effect*.',
      },
      { type: 'h2', text: 'What is MSC therapy used for?' },
      {
        type: 'p',
        text: 'MSC therapy is being studied in a wide range of conditions. Areas of active research and clinical use include:',
      },
      {
        type: 'ul',
        items: [
          '**Joint and musculoskeletal problems** such as knee osteoarthritis and tendon injuries.',
          '**Chronic inflammation and autoimmune conditions**, where MSCs’ immune-modulating effects are being investigated.',
          '**Healthy ageing and recovery**, including fatigue, frailty and slow recovery after illness.',
          '**Metabolic and vascular health**, including complications related to diabetes.',
        ],
      },
      {
        type: 'note',
        text: 'Stem cell science is moving quickly, and many uses are still being studied. Everyone responds a little differently, so our doctors will talk you through realistic goals before you begin.',
      },
      { type: 'h2', text: 'How is stem cell therapy given?' },
      {
        type: 'p',
        text: 'Depending on the goal, MSCs may be given by **intravenous (IV) infusion** for whole-body effects or by **local injection** into a joint or tissue. A typical journey at a medically supervised clinic looks like this:',
      },
      {
        type: 'ul',
        items: [
          '**Consultation and screening:** medical history, blood tests and a review of current medications to check you are a suitable candidate.',
          '**Treatment plan:** the cell source, dose and route are matched to your goals.',
          '**Treatment day:** an IV infusion usually takes about an hour and is done in a comfortable treatment room with monitoring.',
          '**Follow-up:** progress is reviewed over the following weeks and months, often alongside nutrition, exercise and other lifestyle support.',
        ],
      },
      { type: 'h2', text: 'Is stem cell therapy safe?' },
      {
        type: 'p',
        text: 'When cells come from a properly licensed laboratory and are given by trained doctors, MSC therapy has generally shown a good short-term safety profile in clinical studies. Common side effects are mild: tiredness, low-grade fever or headache for a day or two. Serious risks increase sharply when cells are poorly processed, contaminated, or injected in unproven ways, which is why where your cells come from matters so much.',
      },
      { type: 'h2', text: 'Stem cell therapy and regulation in Malaysia' },
      {
        type: 'p',
        text: 'In Malaysia, cell-based therapies fall under the oversight of the Ministry of Health and its National Pharmaceutical Regulatory Agency (NPRA). Before you commit to treatment anywhere, ask these questions:',
      },
      {
        type: 'ul',
        items: [
          'Where are the cells sourced and processed, and is the laboratory GMP-certified?',
          'How many cells are in each dose, and how is cell viability tested?',
          'Which doctor will assess me, and what screening is done beforehand?',
          'What results are realistic for my condition, and how will progress be measured?',
          'What happens if I have a reaction after treatment?',
        ],
      },
      { type: 'h2', text: 'Who should not have stem cell therapy?' },
      {
        type: 'p',
        text: 'Stem cell therapy is generally not suitable for people with active cancer or a recent cancer history, active serious infections, or pregnancy. People with complex medical conditions need careful individual assessment. This is why a doctor-led consultation always comes first.',
      },
      { type: 'h2', text: 'Stem cell therapy at Montis Specialist Clinic' },
      {
        type: 'p',
        text: 'At Montis, regenerative treatments are part of our [Revitalization and Healthy Aging](/services/revitalization-healthy-aging) programme. We start with [medical screening](/medical-screening) to understand your health. Where appropriate, we combine cell-based support with nutrition, detoxification and lifestyle care rather than offering it as a stand-alone “miracle” treatment. You can also read about the wider field in our guide to [cell therapy](/blog/cell-therapy-guide).',
      },
    ],
    faqs: [
      {
        q: 'How long does it take to see results from stem cell therapy?',
        a: 'Many people who respond notice changes gradually over 4 to 12 weeks, because MSCs work mainly by influencing inflammation and repair signals rather than by producing an instant effect. Some people notice little change. Your doctor should agree measurable goals with you before treatment.',
      },
      {
        q: 'Is stem cell therapy painful?',
        a: 'An IV infusion feels similar to a drip. A local joint injection can cause short-lived soreness at the injection site.',
      },
      {
        q: 'Are umbilical cord stem cells safe?',
        a: 'Umbilical cord–derived MSCs are widely used in clinical research because they can be collected without invasive procedures and are relatively young cells. Safety depends heavily on donor screening and on the laboratory that processes them, so always ask about sourcing and certification.',
      },
    ],
  },
  {
    slug: 'iv-drip-therapy-guide',
    title: 'IV Drip Therapy in Kuala Lumpur: NAD+, Myers’ Cocktail, CoQ10 and More',
    seoTitle: 'IV Drip Therapy in KL: NAD+, Myers’ Cocktail & More',
    description:
      'What IV drip therapy is, popular drips such as NAD+, Myers’ cocktail, liver cleanse and CoQ10, who they may suit, safety checks and what to expect at a Kuala Lumpur clinic.',
    excerpt:
      'IV drips deliver vitamins, minerals and nutrients straight into the bloodstream. Learn which drips are popular, who they may help, and the safety checks that should always come first.',
    category: 'IV Therapy',
    date: '2026-10-22',
    image: '/hero-services.webp',
    imageAlt: 'Comfortable IV drip treatment room at Montis Specialist Clinic',
    relatedService: 'revitalization-healthy-aging',
    furtherReading: [
      { label: 'NAD+ IV Drip', href: `${WP}/nad-iv-drip/` },
      { label: 'Myers’ Cocktail – The Ultimate Drip', href: `${WP}/myers-cocktail-the-ultimate-drip/` },
      { label: 'Liver Cleanse Drip', href: `${WP}/liver-cleanse-drip/` },
      { label: 'Cardiovascular Health Drip (CVS)', href: `${WP}/cardiovascular-health-drip-cvs/` },
      { label: 'IV drip therapy (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/iv-drip.php' },
      { label: 'Coenzyme Q10 jab (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/coenzyme-q10-jab.php' },
    ],
    body: [
      {
        type: 'p',
        text: '**IV drip therapy** (intravenous nutrient therapy) delivers fluids, vitamins, minerals and other nutrients directly into the bloodstream through a small cannula in the arm. Because it bypasses the digestive system, nutrients reach the blood at higher levels than tablets can achieve. This makes IV therapy popular for energy, recovery, immune support and healthy ageing.',
      },
      { type: 'h2', text: 'Popular IV drips and what they contain' },
      { type: 'h3', text: 'NAD+ IV drip' },
      {
        type: 'p',
        text: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell and is essential for energy production and DNA repair. NAD+ levels naturally fall with age, which is why NAD+ drips are popular for **energy, mental clarity and healthy ageing**. NAD+ is infused slowly, often over two to four hours, because a fast infusion can cause chest tightness, nausea or flushing.',
      },
      { type: 'h3', text: 'Myers’ cocktail' },
      {
        type: 'p',
        text: 'The classic Myers’ cocktail combines **magnesium, calcium, B vitamins and vitamin C**. It is one of the most widely used wellness drips and is often chosen for fatigue, recovery after illness or travel, and general wellbeing.',
      },
      { type: 'h3', text: 'Liver cleanse and antioxidant drips' },
      {
        type: 'p',
        text: 'These drips typically feature **glutathione**, the body’s master antioxidant, together with other liver-supporting nutrients. They are often used as part of a structured detox or [fatty liver](/services/fatty-liver) programme.',
      },
      { type: 'h3', text: 'Coenzyme Q10 (CoQ10)' },
      {
        type: 'p',
        text: 'CoQ10 is a vitamin-like compound that helps cells make energy, particularly heart muscle cells. Levels fall with age and can be lowered by cholesterol-lowering statin medicines. CoQ10 support is often included in [heart recovery](/services/heart-recovery-health) programmes.',
      },
      { type: 'h2', text: 'Who may benefit from IV drip therapy?' },
      {
        type: 'ul',
        items: [
          'People with confirmed nutrient deficiencies or poor absorption from the gut.',
          'Those recovering from illness, intense training or long-haul travel.',
          'Adults looking for structured support for energy and healthy ageing.',
          'Patients following a doctor-led programme for heart, liver or metabolic health.',
        ],
      },
      { type: 'h2', text: 'Safety checks before an IV drip' },
      {
        type: 'p',
        text: 'IV therapy is a medical procedure and should always be supervised by a doctor. Before your first drip, a responsible clinic will review your medical history and medications. Where relevant, it will also check:',
      },
      {
        type: 'ul',
        items: [
          '**Kidney function**, because the kidneys clear most infused nutrients.',
          '**G6PD status** before high-dose vitamin C. G6PD deficiency is relatively common in Malaysia, and high-dose vitamin C can cause red blood cells to break down in people who have it.',
          '**Heart conditions**, because some people cannot safely receive large fluid volumes.',
          '**Pregnancy and allergies.**',
        ],
      },
      {
        type: 'note',
        text: 'IV drips work best alongside a balanced diet and any medication you already take. Every drip at Montis starts with a short medical check, so it is matched safely to you.',
      },
      { type: 'h2', text: 'What to expect during your session' },
      {
        type: 'p',
        text: 'After your consultation, a nurse places a small cannula in your arm and you relax in a reclining chair while the drip runs. Most drips take 30 to 90 minutes; NAD+ takes longer. You can read, work or rest. Most people return to normal activities straight away.',
      },
      {
        type: 'p',
        text: 'At Montis we tailor each drip to your screening results and goals, and we often combine IV therapy with our wider [medical screening](/medical-screening) and [detox programmes](/blog/heavy-metal-detox-malaysia).',
      },
    ],
    faqs: [
      {
        q: 'How often should I have an IV drip?',
        a: 'It depends on your goal. Some programmes start with weekly sessions for four to six weeks and then move to monthly maintenance, while others are one-off sessions after illness or travel. Your doctor will recommend a schedule based on your results.',
      },
      {
        q: 'Does an IV drip hurt?',
        a: 'You will feel a small pinch when the cannula is inserted. After that, most people feel little more than a cool sensation in the arm.',
      },
      {
        q: 'Is an IV drip better than taking supplements?',
        a: 'IV delivery reaches higher blood levels and avoids absorption problems, which can help people with deficiencies or gut issues. For many healthy people, a good diet and oral supplements are enough. Your doctor can advise which approach suits you.',
      },
    ],
  },
  {
    slug: 'ozone-therapy-malaysia',
    title: 'Ozone Therapy: How It Works, Possible Benefits and Safety Considerations',
    seoTitle: 'Ozone Therapy in Malaysia: Benefits, Safety & FAQs',
    description:
      'Learn how medical ozone therapy works, how it is given, the conditions it is being studied for, its limitations, and who should avoid it, from Montis Specialist Clinic in Kuala Lumpur.',
    excerpt:
      'Medical ozone therapy uses a precise oxygen–ozone mixture to stimulate the body’s antioxidant and immune responses. Here is a balanced look at how it works and who it may suit.',
    category: 'Detox & Oxygen Therapy',
    date: '2026-10-22',
    image: '/hero-inflammation.webp',
    imageAlt: 'Inflammation and joint pain illustration',
    relatedService: 'inflammation-root-causes',
    body: [
      {
        type: 'p',
        text: '**Ozone therapy** is a complementary treatment that uses a carefully measured mixture of medical-grade oxygen and ozone (O₃). It is used in several European and Asian countries as part of integrative care for inflammation, circulation and recovery. This article explains how it is thought to work, how it is given, what the evidence shows, and the safety rules that matter.',
      },
      { type: 'h2', text: 'How does ozone therapy work?' },
      {
        type: 'p',
        text: 'Ozone is a highly reactive form of oxygen. In small, controlled doses it creates a brief, mild oxidative stress. This is thought to prompt the body to **switch on its own antioxidant defences**, improve how red blood cells release oxygen to tissues, and modulate immune activity. The dose matters: therapeutic ozone is given in precise concentrations from a medical ozone generator.',
      },
      { type: 'h2', text: 'How is ozone therapy given?' },
      {
        type: 'ul',
        items: [
          '**Major autohaemotherapy (MAH):** a small amount of your blood is drawn, mixed with oxygen–ozone gas, and returned through a drip.',
          '**Rectal insufflation:** a small volume of gas is introduced into the rectum, where it is absorbed.',
          '**Local injections:** ozone injected into or around joints, discs or soft tissue for pain.',
          '**Topical ozone:** ozonated oils or “bagging” used for skin and wound care.',
        ],
      },
      {
        type: 'note',
        text: 'Medical ozone is always given by trained clinicians using medical-grade equipment and precise dosing. It is never breathed in, so your treatment stays comfortable and safe.',
      },
      { type: 'h2', text: 'What is ozone therapy used for?' },
      {
        type: 'p',
        text: 'Research on ozone therapy is still developing. The most studied areas include:',
      },
      {
        type: 'ul',
        items: [
          '**Back pain from disc herniation and knee osteoarthritis**, using local injections.',
          '**Chronic wounds, including diabetic foot ulcers**, where ozone may support healing.',
          '**Chronic inflammation and fatigue**, as part of an integrative [inflammation and root-cause](/services/inflammation-root-causes) programme.',
          '**Circulation and recovery support.**',
        ],
      },
      {
        type: 'p',
        text: 'Ozone therapy is considered complementary. Major regulators such as the US FDA have not approved ozone for treating specific diseases, and larger high-quality trials are still needed. It works best as one part of a broader plan that also addresses diet, activity, sleep and any underlying medical conditions.',
      },
      { type: 'h2', text: 'Who should not have ozone therapy?' },
      {
        type: 'ul',
        items: [
          '**People with G6PD deficiency**, because ozone can trigger red blood cell breakdown. G6PD testing is important in Malaysia, where the condition is relatively common.',
          'Pregnant women.',
          'People with uncontrolled hyperthyroidism, severe anaemia or bleeding disorders.',
          'Anyone who has had a recent heart attack or stroke, or who has uncontrolled high blood pressure.',
        ],
      },
      { type: 'h2', text: 'What to expect' },
      {
        type: 'p',
        text: 'Your first visit includes a consultation and, where needed, blood tests. A typical MAH session takes 45–60 minutes. Most people feel well afterwards; some feel mildly tired. Courses usually involve several sessions, reviewed by your doctor as you go.',
      },
      {
        type: 'p',
        text: 'At Montis, oxygen-based therapies sit within our [Detox and Defence pillars](/5d). They are always planned after [medical screening](/medical-screening).',
      },
    ],
    faqs: [
      {
        q: 'Is ozone therapy safe?',
        a: 'When performed by trained clinicians with correct dosing and screening (including G6PD testing), serious side effects are uncommon. Risks rise with incorrect doses, poor technique or inhalation, which is why it should only be done in a medical setting.',
      },
      {
        q: 'How many ozone sessions will I need?',
        a: 'It varies with the goal. Courses of 5 to 10 sessions are common, followed by a review. Your doctor will tailor the plan and stop if you are not benefiting.',
      },
      {
        q: 'Can ozone therapy replace my medication?',
        a: 'No. Ozone therapy is complementary and should not replace medicines prescribed by your doctor.',
      },
    ],
  },
  {
    slug: 'heavy-metal-detox-malaysia',
    title: 'Heavy Metal Detox: Sources, Symptoms, Testing and Safe Treatment Options',
    seoTitle: 'Heavy Metal Detox in Malaysia: Testing & Treatment',
    description:
      'How heavy metals such as mercury, lead, arsenic and cadmium get into the body, symptoms of build-up, how testing works, and medically supervised heavy metal detox options in Kuala Lumpur.',
    excerpt:
      'Mercury, lead, arsenic and cadmium can build up quietly over years. Learn where exposure comes from, what testing can (and cannot) tell you, and how a supervised detox works.',
    category: 'Detox & Oxygen Therapy',
    date: '2026-10-22',
    image: '/Fatty Liver.webp',
    imageAlt: 'Liver health and the body’s natural detoxification',
    relatedService: 'overall-cleansing',
    furtherReading: [
      { label: 'Chelation Therapy', href: `${WP}/chelation-therapy/` },
      { label: 'Chelation therapy and heavy metal detox (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/chelation-therapy.php' },
    ],
    body: [
      {
        type: 'p',
        text: 'Heavy metals such as **mercury, lead, arsenic and cadmium** have no useful role in the human body. In small amounts the liver and kidneys clear them, but repeated exposure can lead to gradual build-up. This guide covers where exposure comes from, warning signs, how testing works, and what a **medically supervised heavy metal detox** involves.',
      },
      { type: 'h2', text: 'Common sources of heavy metal exposure' },
      {
        type: 'ul',
        items: [
          '**Mercury:** large predatory fish such as shark, swordfish and king mackerel; old amalgam fillings; and unregistered skin-lightening creams. Malaysian authorities have repeatedly warned about mercury found in illegal cosmetics.',
          '**Lead:** old paint and pipes, some imported ceramics and cookware, certain traditional remedies, and some occupations such as battery recycling and renovation.',
          '**Arsenic:** contaminated groundwater and, to a lesser degree, rice and some seafood.',
          '**Cadmium:** cigarette smoke (the most common source), some industrial work and contaminated soil.',
        ],
      },
      { type: 'h2', text: 'Possible symptoms of heavy metal build-up' },
      {
        type: 'p',
        text: 'Symptoms are often vague and overlap with many other conditions, which is why testing matters. People may report:',
      },
      {
        type: 'ul',
        items: [
          'Persistent fatigue, brain fog or poor concentration.',
          'Headaches, irritability or low mood.',
          'Tingling or numbness in the hands and feet.',
          'Digestive upset, metallic taste or poor appetite.',
          'High blood pressure or kidney changes with long-term exposure.',
        ],
      },
      { type: 'h2', text: 'How heavy metal testing works' },
      {
        type: 'p',
        text: 'Testing should be guided by your history and symptoms. **Blood tests** best reflect recent or ongoing exposure (especially for lead and mercury). **Urine tests** help assess metals such as arsenic and cadmium. **Hair tests** are sometimes used for screening but can be affected by external contamination.',
      },
      {
        type: 'p',
        text: 'Results must be read against proper reference ranges by a doctor. “Provoked” urine tests, taken after a chelating agent, naturally show higher levels and can overstate the problem. Ask how your results will be interpreted. Testing is part of our [medical screening](/medical-screening) pathway.',
      },
      { type: 'h2', text: 'Heavy metal detox options' },
      { type: 'h3', text: '1. Remove the source' },
      {
        type: 'p',
        text: 'The first and most important step is identifying and stopping ongoing exposure. Without this, no detox programme will work for long.',
      },
      { type: 'h3', text: '2. Support natural detox pathways' },
      {
        type: 'p',
        text: 'Your liver, kidneys and gut do most of the work. Adequate hydration, fibre, protein and minerals such as zinc and selenium, together with liver-supporting nutrients like glutathione, help these pathways function well. This is the focus of our [Overall Cleansing](/services/overall-cleansing) programme.',
      },
      { type: 'h3', text: '3. Chelation therapy (when indicated)' },
      {
        type: 'p',
        text: 'For significant, confirmed heavy metal burden, doctors may use **chelation therapy**: medicines that bind metals so they can be excreted in urine. Chelation needs careful screening and monitoring. Read our full guide to [chelation therapy](/blog/chelation-therapy-guide).',
      },
      {
        type: 'note',
        text: 'The safest detox is one guided by proper testing. Rather than online kits or foot baths, a doctor-led plan protects the minerals your body needs while clearing what it doesn’t.',
      },
      { type: 'h2', text: 'Heavy metal detox at Montis' },
      {
        type: 'p',
        text: 'Our approach follows the Montis [5D model](/5d): **Discovery** (testing and history), **Detox** (source removal, nutritional support and, where appropriate, chelation), then **Defence**, **Dietary** and **Dynamic** steps to keep you well long term.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if I have heavy metal toxicity?',
        a: 'Symptoms alone cannot confirm it. A doctor will consider your exposure history and order appropriate blood or urine tests, then interpret the results against reference ranges.',
      },
      {
        q: 'How long does a heavy metal detox take?',
        a: 'Removing the source and supporting natural detox pathways is an ongoing process over weeks to months. If chelation is needed, a course is planned and monitored with repeat testing.',
      },
      {
        q: 'Can diet alone remove heavy metals?',
        a: 'Diet supports the body’s natural clearance and is essential, especially once exposure stops. Higher confirmed levels may need medical treatment.',
      },
    ],
  },
  {
    slug: 'chelation-therapy-guide',
    title: 'Chelation Therapy: What It Is, How It Works and Who It Is For',
    seoTitle: 'Chelation Therapy in Kuala Lumpur: A Complete Guide',
    description:
      'A complete guide to IV chelation therapy in Kuala Lumpur: how EDTA and other chelating agents work, uses for heavy metal detox and heart health, the evidence, safety and what to expect.',
    excerpt:
      'Chelation therapy uses medicines that bind heavy metals so the body can flush them out. Here is how it works, what the research says, and why medical supervision is essential.',
    category: 'Detox & Oxygen Therapy',
    date: '2026-10-22',
    image: '/Overall Cleansing.webp',
    imageAlt: 'Medical model illustrating internal organs and cleansing',
    relatedService: 'overall-cleansing',
    furtherReading: [
      { label: 'Chelation Therapy', href: `${WP}/chelation-therapy/` },
      { label: 'Chelation therapy (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/chelation-therapy.php' },
    ],
    body: [
      {
        type: 'p',
        text: 'The word *chelation* comes from the Greek *chele*, meaning “claw”. **Chelation therapy** uses medicines called chelating agents that grip metal ions in the blood and form stable compounds the kidneys can excrete. It is an established medical treatment for heavy metal poisoning and is also used in integrative medicine as part of detox and cardiovascular programmes.',
      },
      { type: 'h2', text: 'Common chelating agents' },
      {
        type: 'ul',
        items: [
          '**EDTA (ethylenediaminetetraacetic acid):** given by slow IV infusion. Calcium disodium EDTA is used for lead poisoning.',
          '**DMSA (succimer):** an oral medicine used mainly for lead, and sometimes mercury and arsenic.',
          '**DMPS:** used for mercury and arsenic in some countries.',
        ],
      },
      { type: 'h2', text: 'What is chelation therapy used for?' },
      { type: 'h3', text: 'Heavy metal toxicity' },
      {
        type: 'p',
        text: 'This is the best-established use. When testing confirms a significant burden of lead, mercury or other metals, chelation can lower levels in the body. It works alongside removing the source of exposure, as described in our [heavy metal detox guide](/blog/heavy-metal-detox-malaysia).',
      },
      { type: 'h3', text: 'Cardiovascular health' },
      {
        type: 'p',
        text: 'EDTA chelation has been studied for heart disease. The large **TACT trial** (2013) found a modest reduction in cardiovascular events in people who had had a heart attack, with a stronger signal in people with diabetes. However, the follow-up **TACT2 trial**, published in 2024, did not confirm a benefit in that group. Chelation therefore should not replace proven heart treatments. Where it is used, it should be one part of a supervised programme alongside lifestyle change, medication and therapies such as [EECP](/blog/eecp-treatment-malaysia).',
      },
      { type: 'h2', text: 'Is chelation therapy safe?' },
      {
        type: 'p',
        text: 'Chelation is a medical treatment with real risks if done carelessly. These include low calcium levels, loss of essential minerals such as zinc and magnesium, and strain on the kidneys. Giving the wrong form of EDTA or infusing it too quickly has caused serious harm. In safe practice:',
      },
      {
        type: 'ul',
        items: [
          'A doctor assesses you first, including **kidney function**, blood count and mineral levels.',
          'The correct agent and dose are chosen, and IV infusions are given **slowly** (often over 1 to 3 hours).',
          'Essential minerals are replaced between sessions where needed.',
          'Kidney function and minerals are re-checked during the course.',
        ],
      },
      {
        type: 'note',
        text: 'Chelation is always planned and monitored by a doctor. We check your kidney health first, and it is not used during pregnancy or breastfeeding, so it is only offered when it is right for you.',
      },
      { type: 'h2', text: 'What to expect during treatment' },
      {
        type: 'p',
        text: 'After screening, you relax in a reclining chair while the infusion runs. Courses commonly involve a series of weekly sessions, with progress reviewed through repeat testing. Many people combine chelation with nutritional support and [IV nutrient therapy](/blog/iv-drip-therapy-guide).',
      },
    ],
    faqs: [
      {
        q: 'How many chelation sessions are needed?',
        a: 'This depends on why you are having treatment and on your test results. Your doctor will set a course and re-test to decide whether more sessions are needed.',
      },
      {
        q: 'Does chelation therapy remove plaque from arteries?',
        a: 'This has not been proven. Trial results on chelation for heart disease are mixed, so it should only be used as part of a broader, medically supervised heart-health plan.',
      },
      {
        q: 'Are there side effects?',
        a: 'Some people feel tired, light-headed or experience mild discomfort at the drip site. More serious effects, such as low calcium or kidney strain, are why screening and monitoring are essential.',
      },
    ],
  },
  {
    slug: 'colon-hydrotherapy-kuala-lumpur',
    title: 'Colon Hydrotherapy in Kuala Lumpur: Procedure, Benefits and Who Should Avoid It',
    seoTitle: 'Colon Hydrotherapy in Kuala Lumpur: What to Expect',
    description:
      'What colon hydrotherapy is, how a session works step by step, possible benefits, risks, who should avoid it, and how to prepare, from Montis Specialist Clinic, Bangsar, Kuala Lumpur.',
    excerpt:
      'Colon hydrotherapy gently flushes the large intestine with warm, filtered water. Here is a step-by-step look at the procedure, how to prepare, and the safety points to know.',
    category: 'Digestive Health',
    date: '2026-10-22',
    image: '/hero-digestive.webp',
    imageAlt: 'Digestive system and gut health illustration',
    relatedService: 'digestive-health',
    furtherReading: [
      { label: 'Colon Hydrotherapy', href: `${WP}/colon-hydrotherapy/` },
      { label: 'Colon hydrotherapy (OXYZ Wellness)', href: 'https://sg.oxyzwellness.com/colon-hydrotherapy.php' },
    ],
    body: [
      {
        type: 'p',
        text: '**Colon hydrotherapy**, also called colonic irrigation or a colon cleanse, gently introduces warm, filtered water into the large intestine to soften and flush out waste. It is commonly used as part of digestive wellness and detox programmes. Here is how it works, what people use it for, and the safety points everyone should know.',
      },
      { type: 'h2', text: 'How a colon hydrotherapy session works' },
      {
        type: 'ul',
        items: [
          '**Consultation:** your therapist or doctor reviews your health history to make sure the treatment is suitable.',
          '**Preparation:** you change into a gown and lie comfortably on a treatment bed. Privacy is maintained throughout.',
          '**The session:** a small, sterile, single-use nozzle is inserted gently. Warm, filtered water flows in at low pressure and then drains out, carrying waste with it. This is repeated in cycles while the therapist may gently massage the abdomen.',
          '**Duration:** about 40–50 minutes in total.',
          '**Afterwards:** most people return to normal activities the same day.',
        ],
      },
      { type: 'h2', text: 'Why do people choose colon hydrotherapy?' },
      {
        type: 'p',
        text: 'People most often report using it for **bloating, sluggish bowels and constipation**, as preparation for a detox or dietary reset, and to support a general sense of lightness and wellbeing. Scientific research on its wider health benefits is limited, so it is best seen as one supportive part of a digestive health plan. That plan should also include fibre, hydration, movement and gut-friendly nutrition such as probiotics.',
      },
      { type: 'h2', text: 'Is colon hydrotherapy safe?' },
      {
        type: 'p',
        text: 'In a clean clinical setting with trained staff, single-use equipment and proper screening, colon hydrotherapy is generally well tolerated. Possible side effects include temporary cramping, bloating or light-headedness. Rare but serious risks include dehydration, electrolyte imbalance and, very rarely, bowel injury. This is why choosing a medically supervised clinic matters.',
      },
      { type: 'h2', text: 'Who should not have colon hydrotherapy?' },
      {
        type: 'ul',
        items: [
          'People with active inflammatory bowel disease (Crohn’s disease or ulcerative colitis) or diverticulitis.',
          'Anyone who has recently had bowel surgery, or who has severe haemorrhoids, fissures or rectal bleeding.',
          'People with significant heart failure or kidney disease.',
          'Pregnant women.',
          'Anyone with undiagnosed abdominal pain, unexplained weight loss or a change in bowel habit. These need medical investigation first.',
        ],
      },
      {
        type: 'note',
        text: 'Colon hydrotherapy supports digestive wellness and works alongside routine bowel screening. If you are over 45, our doctors can also advise on the right screening for you.',
      },
      { type: 'h2', text: 'How to prepare' },
      {
        type: 'ul',
        items: [
          'Eat lightly and avoid heavy meals for 2–3 hours beforehand.',
          'Drink plenty of water the day before and after.',
          'Tell us about any medications or health conditions.',
          'Afterwards, eat simple, easily digested meals and consider probiotic support.',
        ],
      },
      {
        type: 'p',
        text: 'At Montis, colon hydrotherapy is offered within our [Digestive Health](/services/digestive-health) and [Overall Cleansing](/services/overall-cleansing) programmes, alongside gut screening and our Gut+ probiotic support.',
      },
    ],
    faqs: [
      {
        q: 'Is colon hydrotherapy painful?',
        a: 'Most people find it more unusual than painful. You may feel fullness or mild cramping as water flows in, which settles as it drains. The therapist adjusts the flow to keep you comfortable.',
      },
      {
        q: 'How many sessions do I need?',
        a: 'Some people have a single session; others follow a short course as part of a detox programme. Your clinician will recommend what is appropriate for you.',
      },
      {
        q: 'Does colon hydrotherapy remove good bacteria?',
        a: 'It can temporarily reduce gut bacteria in the colon, which is why probiotic and dietary support are often recommended afterwards.',
      },
    ],
  },
  {
    slug: 'cell-therapy-guide',
    title: 'Cell Therapy Explained: Types, Uses and How It Differs From Stem Cell Therapy',
    seoTitle: 'Cell Therapy in Malaysia: Types, Uses & Safety',
    description:
      'What cell therapy is, how it differs from stem cell therapy, the main types (MSC, immune cell and cellular nutrition therapies), what they are used for, and how to choose a safe clinic in Malaysia.',
    excerpt:
      '“Cell therapy” covers everything from stem cells to immune cell treatments. Learn the main types, what each is used for, and the questions to ask before choosing a clinic.',
    category: 'Regenerative Medicine',
    date: '2026-10-22',
    image: '/approach.webp',
    imageAlt: 'Montis Specialist Clinic 5D model and reception',
    relatedService: 'revitalization-healthy-aging',
    furtherReading: [
      { label: 'Montis Cellular Therapy', href: `${WP}/montis-cellular-therapy/` },
      { label: 'Cell therapy (OXYZ Cell)', href: 'https://oxyzcell.com/cell-therapy/' },
      { label: 'OXYZ Mega+ Cell', href: 'https://oxyzcell.com/oxyz-mega-cell-3/' },
    ],
    body: [
      {
        type: 'p',
        text: '**Cell therapy** means using living cells, or products made from them, to support the body’s repair, immunity or function. It is a broad term, and it is easy to confuse with stem cell therapy. This guide explains the main types, how they differ, and how to approach them safely.',
      },
      { type: 'h2', text: 'Cell therapy vs stem cell therapy' },
      {
        type: 'p',
        text: 'Stem cell therapy is **one type** of cell therapy. Cell therapy also includes treatments using other cell types, such as immune cells. In wellness medicine, the term is also used for cell-derived or cellular nutrition products. For a deep dive into stem cells specifically, read our [stem cell therapy guide](/blog/stem-cell-therapy-kuala-lumpur).',
      },
      { type: 'h2', text: 'Main types of cell therapy' },
      { type: 'h3', text: 'Mesenchymal stem cell (MSC) therapy' },
      {
        type: 'p',
        text: 'MSCs release anti-inflammatory and growth signals. They are being studied for joint problems, chronic inflammation, autoimmune conditions and healthy ageing.',
      },
      { type: 'h3', text: 'Immune cell therapy' },
      {
        type: 'p',
        text: 'This includes therapies using natural killer (NK) cells or engineered T cells (such as CAR-T). CAR-T is an approved hospital treatment for certain blood cancers. Most other immune cell therapies remain under research and are delivered mainly within oncology centres and clinical trials.',
      },
      { type: 'h3', text: 'Cellular and regenerative wellness therapies' },
      {
        type: 'p',
        text: 'Integrative clinics may offer cell-based or cell-derived products, such as cell extracts, peptides or secretome (signalling molecules released by cells). These are designed to support cellular energy, repair and vitality as part of a healthy ageing programme. Evidence varies by product, so ask what the product contains and what data support it.',
      },
      { type: 'h2', text: 'Who considers cell therapy?' },
      {
        type: 'ul',
        items: [
          'Adults focused on **healthy ageing**, energy and recovery.',
          'People with **chronic inflammation, joint problems or autoimmune conditions** looking for complementary options.',
          'Patients with metabolic conditions such as [diabetes](/blog/diabetes-treatment-kuala-lumpur), as part of a wider care plan.',
        ],
      },
      { type: 'h2', text: 'Choosing a cell therapy clinic: a checklist' },
      {
        type: 'ul',
        items: [
          'Is treatment led by a registered doctor, with a proper consultation and screening first?',
          'Where are the cells or products made, and is the laboratory certified (for example, GMP)?',
          'What does the evidence show for **your** condition, and what outcomes are realistic?',
          'How will progress be measured and followed up?',
          'Are all costs, risks and alternatives explained clearly in writing?',
        ],
      },
      {
        type: 'note',
        text: 'A good clinic will happily explain where its cells come from, what results are realistic and what each step costs. Take your time and ask as many questions as you like.',
      },
      { type: 'h2', text: 'Cellular therapy at Montis' },
      {
        type: 'p',
        text: 'Montis offers cellular therapies within our [Revitalization and Healthy Aging](/services/revitalization-healthy-aging) and [Menopause](/services/menopause-perimenopause) programmes. Every plan starts with [medical screening](/medical-screening) and is reviewed by our doctors as you progress.',
      },
    ],
    faqs: [
      {
        q: 'Is cell therapy the same as stem cell therapy?',
        a: 'No. Stem cell therapy is one form of cell therapy. Cell therapy also includes immune cell treatments and other cell-based or cell-derived products.',
      },
      {
        q: 'Is cell therapy legal in Malaysia?',
        a: 'Cell-based therapies in Malaysia are overseen by the Ministry of Health and the National Pharmaceutical Regulatory Agency (NPRA). Ask any provider how their treatment complies with current regulations.',
      },
      {
        q: 'How long do the effects of cell therapy last?',
        a: 'This varies widely by therapy and by person. Many programmes include follow-up reviews and lifestyle support to help maintain results.',
      },
    ],
  },
  {
    slug: 'diabetes-treatment-kuala-lumpur',
    title: 'Diabetes Treatment in Kuala Lumpur: An Integrated Approach to Blood Sugar Control',
    seoTitle: 'Diabetes Treatment in Kuala Lumpur: An Integrated Guide',
    description:
      'Integrated diabetes treatment in Kuala Lumpur: diagnosis, HbA1c targets, nutrition, exercise, medication, complication screening and supportive therapies at Montis Specialist Clinic.',
    excerpt:
      'Roughly one in six Malaysian adults has diabetes. Learn how integrated care, combining medical treatment, nutrition, activity and complication screening, helps protect your long-term health.',
    category: 'Metabolic Health',
    date: '2026-10-22',
    image: '/Diabetic Management.webp',
    imageAlt: 'Blood glucose meter showing a reading of 7.2 mmol/L',
    relatedService: 'diabetic-management',
    body: [
      {
        type: 'p',
        text: 'Diabetes is one of Malaysia’s biggest health challenges. National surveys suggest that **roughly one in six Malaysian adults** has diabetes, and many do not yet know it. Good **diabetes treatment** is about much more than blood sugar numbers. It means protecting your heart, kidneys, eyes, nerves and quality of life for decades to come.',
      },
      { type: 'h2', text: 'How diabetes is diagnosed' },
      {
        type: 'p',
        text: 'Type 2 diabetes is usually diagnosed using a fasting blood glucose test, an oral glucose tolerance test, or **HbA1c**, which reflects average blood sugar over about three months. Malaysian clinical practice guidelines use an HbA1c of **6.3% or higher** for diagnosis, confirmed with a repeat test. Results just below this range indicate **prediabetes**, which is the best time to act.',
      },
      { type: 'h2', text: 'The pillars of effective diabetes care' },
      { type: 'h3', text: '1. Personalised targets' },
      {
        type: 'p',
        text: 'Many adults aim for an HbA1c around 6.5–7.0%, but targets are personalised. They may be relaxed for older adults or people at risk of low blood sugar (hypoglycaemia). Blood pressure and cholesterol targets matter just as much for preventing heart disease.',
      },
      { type: 'h3', text: '2. Nutrition' },
      {
        type: 'p',
        text: 'Practical changes make the biggest difference: smaller portions of white rice, noodles and bread; more vegetables, legumes and protein; fewer sweetened drinks such as teh tarik, sirap and soft drinks; and consistent meal timing. A structured plan built around foods you actually eat works better than a strict diet you cannot keep.',
      },
      { type: 'h3', text: '3. Physical activity' },
      {
        type: 'p',
        text: 'Aim for at least 150 minutes of moderate activity a week plus muscle-strengthening exercise twice a week. Even a 10–15 minute walk after meals measurably lowers post-meal blood sugar.',
      },
      { type: 'h3', text: '4. Medication, used well' },
      {
        type: 'p',
        text: 'Modern diabetes medicines, including metformin, SGLT2 inhibitors, GLP-1 receptor agonists and insulin, are highly effective, and some also protect the heart and kidneys. Integrative care works **alongside** these medicines, never instead of them.',
      },
      {
        type: 'note',
        text: 'Keep taking your diabetes medication as prescribed. As your health improves, your doctor can review and adjust it with you safely.',
      },
      { type: 'h3', text: '5. Screening for complications' },
      {
        type: 'ul',
        items: [
          '**Kidneys:** yearly eGFR and urine albumin tests. Diabetes is the leading cause of kidney failure in Malaysia (see our [chronic kidney disease guide](/blog/chronic-kidney-disease-malaysia)).',
          '**Eyes:** regular retinal screening.',
          '**Feet:** checks for nerve damage, circulation and skin breakdown.',
          '**Heart and circulation:** blood pressure, cholesterol and assessment of symptoms such as chest pain or breathlessness.',
        ],
      },
      { type: 'h2', text: 'Supportive therapies in integrated diabetes care' },
      {
        type: 'p',
        text: 'Alongside standard treatment, some people benefit from supportive therapies chosen after screening. Examples include weight management programmes, nutrient support where deficiencies are found, and circulation-focused treatments such as [EECP](/blog/eecp-treatment-malaysia) for patients with angina. These are selected individually and reviewed against measurable goals such as HbA1c, weight and blood pressure.',
      },
      { type: 'h2', text: 'Diabetes care at Montis' },
      {
        type: 'p',
        text: 'Our [Diabetic Management](/services/diabetic-management) programme combines detailed [medical screening](/medical-screening), personalised nutrition and activity plans, and ongoing monitoring. We work alongside your existing doctor or specialist, so your care stays coordinated.',
      },
    ],
    faqs: [
      {
        q: 'Can type 2 diabetes be reversed?',
        a: 'Some people, especially those diagnosed recently, can bring blood sugar back to the non-diabetic range (often called remission) through significant weight loss and lifestyle change. It requires ongoing effort and monitoring, and it is not possible for everyone.',
      },
      {
        q: 'What is a normal HbA1c?',
        a: 'Below 5.7% is generally considered normal. Values between about 5.7% and 6.2% suggest prediabetes. Under Malaysian guidelines, 6.3% or above on repeat testing indicates diabetes.',
      },
      {
        q: 'Should I see a specialist for diabetes?',
        a: 'Many people are well managed in primary care. A specialist or integrated programme can help if targets are not being met, complications are developing, or you want more structured lifestyle support.',
      },
    ],
  },
  {
    slug: 'eecp-treatment-malaysia',
    title: 'EECP Treatment in Malaysia: A Non-Invasive Option for Angina and Heart Health',
    seoTitle: 'EECP Treatment in Malaysia: Non-Invasive Heart Therapy',
    description:
      'Enhanced External Counterpulsation (EECP) explained: how it works, who it helps (including refractory angina), the typical 35-session course, safety and contraindications, at Montis in Kuala Lumpur.',
    excerpt:
      'EECP uses timed cuff inflations on the legs to boost blood flow to the heart. It is a non-invasive, FDA-cleared option for chronic stable angina. Here is how it works and who it suits.',
    category: 'Heart Health',
    date: '2026-10-22',
    image: '/hero-heart.webp',
    imageAlt: 'Doctor holding an anatomical heart model',
    relatedService: 'heart-recovery-health',
    furtherReading: [
      { label: 'EECP – Enhanced External Counter-Pulsation', href: `${WP}/eecp-enhanced-external-counter-pulsation/` },
      { label: 'Cardiovascular Health Drip (CVS)', href: `${WP}/cardiovascular-health-drip-cvs/` },
    ],
    body: [
      {
        type: 'p',
        text: '**Enhanced External Counterpulsation (EECP)** is a non-invasive outpatient treatment that improves blood flow to the heart. It is cleared by the US FDA for **chronic stable angina** and is used worldwide for people who still have chest pain despite medication, or who are not suitable for further stents or bypass surgery.',
      },
      { type: 'h2', text: 'How does EECP work?' },
      {
        type: 'p',
        text: 'You lie on a treatment bed with blood-pressure-style cuffs wrapped around your calves, thighs and buttocks. Synchronised with your heartbeat by ECG, the cuffs **inflate in sequence while the heart relaxes**, pushing blood back towards the heart. They then **deflate instantly as the heart pumps**, reducing the work it has to do. Over a full course, this is thought to:',
      },
      {
        type: 'ul',
        items: [
          'Increase blood flow into the coronary arteries.',
          'Improve the function of the blood vessel lining (endothelium).',
          'Encourage the development of collateral circulation, the body’s natural “bypasses”.',
          'Reduce the heart’s workload.',
        ],
      },
      { type: 'h2', text: 'Who may benefit from EECP?' },
      {
        type: 'ul',
        items: [
          'People with **chronic stable angina**, especially refractory angina that persists despite optimal medication.',
          'Patients who are not candidates for, or prefer to avoid, further stents or bypass surgery.',
          'Selected patients with stable heart failure, as part of specialist-guided care.',
          'People with coronary artery disease who want to improve their exercise tolerance and quality of life.',
        ],
      },
      { type: 'h2', text: 'What does an EECP course involve?' },
      {
        type: 'p',
        text: 'The standard course is **35 one-hour sessions**, usually given five days a week over seven weeks. Sessions are painless, although the cuff pressure feels firm. Many people read, listen to music or nap. You can drive and return to normal activities straight afterwards. Studies have shown improvement in angina and exercise tolerance in many patients, with benefits that can last for years in responders.',
      },
      { type: 'h2', text: 'Who should not have EECP?' },
      {
        type: 'ul',
        items: [
          'People with significant leakage of the aortic valve (aortic regurgitation).',
          'Those who have had cardiac catheterisation or another arterial procedure within the past two weeks.',
          'People with an irregular heart rhythm that interferes with ECG timing, such as uncontrolled atrial fibrillation.',
          'People with severe leg artery disease, active leg vein clots (DVT) or phlebitis.',
          'Anyone with an aortic aneurysm, uncontrolled high blood pressure or severe lung disease, and pregnant women.',
        ],
      },
      {
        type: 'note',
        text: 'EECP works hand in hand with your heart medication and cardiology care. We are happy to keep your cardiologist updated on your progress.',
      },
      { type: 'h2', text: 'EECP at Montis Specialist Clinic' },
      {
        type: 'p',
        text: 'EECP is a core part of our [Heart Recovery Health](/services/heart-recovery-health) programme. It is combined with heart-focused screening such as [Heart Rate Variability analysis](/medical-screening/heart-rate-variability), CoQ10 support and lifestyle coaching. Patients with diabetes often benefit from addressing both together. See our guide to [diabetes treatment](/blog/diabetes-treatment-kuala-lumpur).',
      },
    ],
    faqs: [
      {
        q: 'Is EECP painful?',
        a: 'No. The cuffs squeeze firmly and rhythmically, which feels like a strong leg massage. Some people notice mild skin irritation, which is managed with padding and proper cuff fitting.',
      },
      {
        q: 'How soon will I notice a difference?',
        a: 'Many patients notice less angina or better stamina partway through the course, often after 15 to 20 sessions. The full benefit is usually assessed after completing all 35.',
      },
      {
        q: 'Can EECP replace a stent or bypass surgery?',
        a: 'Not in emergencies or for unstable disease. For people with stable angina, especially those who are not suitable for further procedures, EECP is a well-studied option. Your cardiologist should help decide.',
      },
    ],
  },
  {
    slug: 'chronic-kidney-disease-malaysia',
    title: 'Chronic Kidney Disease in Malaysia: Stages, Warning Signs and How to Protect Your Kidneys',
    seoTitle: 'Chronic Kidney Disease (CKD) in Malaysia: Stages & Care',
    description:
      'A guide to chronic kidney disease (CKD) in Malaysia: causes, stages by eGFR, early warning signs, tests, and practical steps, including diabetes and blood pressure control, to slow progression.',
    excerpt:
      'Chronic kidney disease often has no symptoms until it is advanced. Learn the stages, the tests that catch it early, and the everyday steps that help protect kidney function.',
    category: 'Kidney Health',
    date: '2026-10-22',
    image: '/hero-home.webp',
    imageAlt: 'Montis Specialist Clinic reception in Bangsar, Kuala Lumpur',
    relatedService: 'diabetic-management',
    body: [
      {
        type: 'p',
        text: '**Chronic kidney disease (CKD)** means the kidneys have been damaged or are working less well for three months or longer. It is common in Malaysia, and studies suggest it affects around **one in seven adults**. Because early CKD rarely causes symptoms, many people find out late. The good news: with early detection and good care, progression can often be slowed significantly.',
      },
      { type: 'h2', text: 'What causes chronic kidney disease?' },
      {
        type: 'ul',
        items: [
          '**Diabetes:** the leading cause of kidney failure in Malaysia, responsible for more than half of new dialysis patients.',
          '**High blood pressure:** both a cause and a consequence of kidney damage.',
          'Glomerulonephritis (inflammation of the kidney filters), polycystic kidney disease and recurrent kidney stones or infections.',
          'Long-term use of some medicines, especially regular painkillers such as NSAIDs, and unregulated supplements or traditional remedies.',
        ],
      },
      { type: 'h2', text: 'The stages of CKD' },
      {
        type: 'p',
        text: 'CKD is staged by **eGFR** (estimated glomerular filtration rate, calculated from a blood creatinine test) together with the level of albumin (protein) in the urine:',
      },
      {
        type: 'ul',
        items: [
          '**Stage 1:** eGFR 90 or above, with signs of kidney damage such as protein in the urine.',
          '**Stage 2:** eGFR 60–89, with signs of kidney damage.',
          '**Stage 3a / 3b:** eGFR 45–59 / 30–44, a moderate reduction in function.',
          '**Stage 4:** eGFR 15–29, a severe reduction; planning for future treatment begins.',
          '**Stage 5:** eGFR below 15, kidney failure; dialysis or transplant may be needed.',
        ],
      },
      { type: 'h2', text: 'Warning signs' },
      {
        type: 'p',
        text: 'Symptoms usually appear only in later stages. They can include swelling of the ankles or around the eyes, foamy urine, passing urine more often at night, tiredness, itching, poor appetite and difficult-to-control blood pressure. If you have diabetes or high blood pressure, **do not wait for symptoms**. Get tested at least yearly.',
      },
      { type: 'h2', text: 'Tests that detect CKD early' },
      {
        type: 'ul',
        items: [
          '**Blood creatinine and eGFR** to measure filtering function.',
          '**Urine albumin-to-creatinine ratio (uACR)**, the earliest marker of kidney damage in diabetes.',
          '**Blood pressure**, blood glucose and HbA1c.',
          'Kidney ultrasound when your doctor needs to look at kidney structure.',
        ],
      },
      { type: 'h2', text: 'How to protect your kidneys' },
      {
        type: 'ul',
        items: [
          '**Control blood sugar:** see our [diabetes treatment guide](/blog/diabetes-treatment-kuala-lumpur).',
          '**Control blood pressure:** often to below 130/80 mmHg, as advised by your doctor.',
          '**Use kidney-protective medicines** your doctor prescribes, such as ACE inhibitors, ARBs or SGLT2 inhibitors.',
          '**Reduce salt.** Watch out for soy sauce, instant noodles, processed meats and salty snacks.',
          '**Avoid unnecessary painkillers and unregistered supplements**, and always check with your doctor before starting new products.',
          '**Stop smoking, stay active and keep a healthy weight.**',
        ],
      },
      {
        type: 'note',
        text: 'If you have kidney disease, just share your latest kidney results with us. Some therapies need adjusting for kidney health, and we will tailor your plan and work alongside your nephrologist.',
      },
      { type: 'h2', text: 'Supporting kidney health at Montis' },
      {
        type: 'p',
        text: 'At Montis we focus on **early detection and risk-factor control**. Our [medical screening](/medical-screening) checks kidney markers alongside blood sugar, blood pressure and cholesterol. Our [Diabetic Management](/services/diabetic-management) and [Heart Recovery](/services/heart-recovery-health) programmes then help you manage the conditions that drive CKD. We work alongside your nephrologist where you already have one.',
      },
    ],
    faqs: [
      {
        q: 'Can chronic kidney disease be reversed?',
        a: 'Established kidney damage usually cannot be reversed, but progression can often be slowed significantly, especially when CKD is found early and blood sugar and blood pressure are well controlled. Some acute causes of reduced kidney function are reversible.',
      },
      {
        q: 'What foods should I avoid with CKD?',
        a: 'Most people should reduce salt and processed foods. Depending on your stage and blood tests, your doctor or dietitian may also advise limiting potassium, phosphate or protein. Dietary advice should be individual, so avoid restrictive diets without guidance.',
      },
      {
        q: 'How often should I check my kidneys?',
        a: 'If you have diabetes or high blood pressure, at least once a year with eGFR and a urine albumin test. If you already have CKD, your doctor will set a schedule based on your stage.',
      },
    ],
  },
];

const WORDS_PER_MINUTE = 220;

export function readingMinutes(post: BlogPost) {
  const text = post.body
    .map((b) => (b.type === 'ul' ? b.items.join(' ') : b.text))
    .concat(post.faqs.map((f) => `${f.q} ${f.a}`))
    .join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / WORDS_PER_MINUTE));
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** Formats YYYY-MM-DD without Date/locale APIs so server and browser output match. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
