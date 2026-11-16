// Questions and answers shown on each treatment page and published as FAQPage structured data,
// so Google AI Overviews and AI assistants can quote a direct answer.
// Every answer restates facts already on that treatment page (src/data/services.tsx);
// keep them in sync, and have a doctor review any change.

export interface Faq {
  question: string;
  answer: string;
}

export const CLINIC_ADDRESS =
  'Lot 1.02, Menara BRDB, BSC South Tower, 285 Jalan Maarof, Bangsar, 59000 Kuala Lumpur';

/** Added to every treatment page: answers the "near me / in Kuala Lumpur" question directly. */
export const locationFaq = (treatment: string): Faq => ({
  question: `Where can I get ${treatment} in Kuala Lumpur?`,
  answer: `Montis Specialist Clinic offers ${treatment} at ${CLINIC_ADDRESS}, near Bangsar Shopping Centre. The clinic is open daily from 9am to 6pm. Call or WhatsApp +60 10-264 8685, or book online at wellness.montis-clinic.com/appointment.`,
});

export const serviceFaqs: Record<string, { treatmentName: string; faqs: Faq[] }> = {
  'heart-recovery-health': {
    treatmentName: 'EECP heart therapy',
    faqs: [
      {
        question: 'What is EECP (angiotherapy) heart treatment?',
        answer:
          'EECP, also called angiotherapy, is a non-invasive treatment for chronic angina (chest pain) in people with heart disease. It applies timed pressure to the blood vessels in the legs and feet, which improves blood flow back to the heart and helps it work better. It needs no medication and no surgery.',
      },
      {
        question: 'How many EECP sessions do I need?',
        answer:
          'A typical course is at least one hour a day, five days a week, for seven weeks. Your doctor at Montis confirms the plan after assessing you.',
      },
      {
        question: 'Who is suitable for EECP?',
        answer:
          'EECP suits people whose heart medications are no longer as effective, or who are not eligible for invasive heart surgery. You should have a normal Heart Rate Variability (HRV) result, no pacemaker, and no valve disease, pulmonary hypertension, peripheral artery disease or aortic insufficiency.',
      },
      {
        question: 'Does EECP have side effects?',
        answer:
          'Side effects are minimal. Some people notice skin irritation, muscle fatigue or aches, bruising, or tingling in the legs and feet.',
      },
    ],
  },
  'diabetic-management': {
    treatmentName: 'diabetes management',
    faqs: [
      {
        question: 'Can diabetes be cured?',
        answer:
          'Diabetes has no permanent cure, but good management keeps blood sugar in a healthy range and prevents complications such as heart disease, nerve damage, kidney damage and eye damage.',
      },
      {
        question: 'How does Montis help manage diabetes?',
        answer:
          'Montis combines diet changes, regular physical activity and consistent blood sugar monitoring with medication or insulin where needed. The clinic also offers EECP therapy to lower the cardiovascular risk that comes with diabetes.',
      },
      {
        question: 'Can EECP therapy help blood sugar control?',
        answer:
          'A 2015 study by Sardina et al. found that EECP improved fasting plasma glucose, post-meal glucose and HbA1c in people with diabetes, with results lasting up to three months after therapy.',
      },
      {
        question: 'What are the early signs of diabetes?',
        answer:
          'Common signs are increased thirst, frequent urination, excessive hunger, fatigue, unexplained weight loss, slow-healing wounds and tingling in the hands or feet.',
      },
    ],
  },
  'weight-loss': {
    treatmentName: 'medical weight loss',
    faqs: [
      {
        question: 'What is a healthy BMI?',
        answer:
          'A healthy BMI is 18.5 to 24.9. A BMI of 25 to 29.9 is overweight and 30 or above is obese. BMI is your weight in kilograms divided by your height in metres squared.',
      },
      {
        question: 'What waist size is a health risk?',
        answer:
          'For men, a waist of 94 to 102 cm is high risk and above 102 cm is very high risk. For women, 80 to 88 cm is high risk and above 88 cm is very high risk. Abdominal fat is linked to diabetes and heart disease.',
      },
      {
        question: 'What weight loss treatments does Montis offer?',
        answer:
          'Alongside diet and exercise plans, Montis offers colon hydrotherapy, weight loss IV drips with vitamin B12, minerals and MIC compounds, intermittent hypoxia therapy and EECP therapy to support metabolism.',
      },
      {
        question: 'Which tests are done before a weight loss programme?',
        answer:
          'Besides BMI and waist measurement, tests can include skinfold measurements, a blood lipid panel, blood sugar tests, metabolism tests and DNA tests for genetic risk of obesity.',
      },
    ],
  },
  'inflammation-root-causes': {
    treatmentName: 'chronic inflammation treatment',
    faqs: [
      {
        question: 'What is the difference between acute and chronic inflammation?',
        answer:
          'Acute inflammation is a short response to injury or illness that lasts a few days, with swelling, pain, heat and redness. Chronic inflammation continues for months or years after the cause is gone and can show up as joint pain, fatigue, persistent fever or skin rashes.',
      },
      {
        question: 'How is chronic inflammation tested?',
        answer:
          'Tests include C-Reactive Protein (CRP), Erythrocyte Sedimentation Rate (ESR), serum electrophoresis and imaging. At Montis, the Dried Layer test, Heart Rate Variability (HRV) and Live Blood Analysis add further detail.',
      },
      {
        question: 'Which diseases are linked to chronic inflammation?',
        answer:
          'Chronic inflammation contributes to heart disease (through artery plaque), type 2 diabetes (through insulin resistance), arthritis, lung conditions and some cancers.',
      },
      {
        question: 'How does Montis treat chronic inflammation?',
        answer:
          'Treatment combines lifestyle changes with antioxidant drips, vitamin D and CoQ10 injections, colon hydrotherapy, oxygen therapy and intermittent hypoxia training.',
      },
    ],
  },
  'autoimmune-treatment': {
    treatmentName: 'autoimmune treatment',
    faqs: [
      {
        question: 'Can autoimmune diseases be cured?',
        answer:
          'There is no known cure for most autoimmune diseases, but therapies can relieve symptoms and improve quality of life. Symptoms often flare up and then settle during remission.',
      },
      {
        question: 'How are autoimmune diseases diagnosed?',
        answer:
          'Key tests are the Antinuclear Antibody (ANA) test, anti-dsDNA for lupus, Rheumatoid Factor and anti-CCP for rheumatoid arthritis, hair tissue mineral analysis and the dried blood layer test.',
      },
      {
        question: 'What autoimmune support does Montis offer?',
        answer:
          'Montis offers detox drips with colon hydrotherapy, IV vitamin and mineral drips, glutathione drips, chelation therapy for heavy metals, and Immune BREATH+, a probiotic formula with Lactobacillus sakei ProBio65 to help balance immunity.',
      },
      {
        question: 'Why are women more affected by autoimmune disease?',
        answer:
          'About 78% of autoimmune cases occur in women, which is linked to hormonal changes during puberty, pregnancy and menopause.',
      },
    ],
  },
  'fatty-liver': {
    treatmentName: 'fatty liver treatment',
    faqs: [
      {
        question: 'What is fatty liver disease?',
        answer:
          'A healthy liver is less than 5% fat. Fatty liver disease can develop when fat reaches 10% or more. It is either alcoholic (AFLD) or non-alcoholic (NAFLD); NAFLD affects about 25% of people worldwide.',
      },
      {
        question: 'Does fatty liver cause symptoms?',
        answer:
          'Often not in the early stages, which is why regular screening matters. Left untreated it can lead to cirrhosis, liver cancer, fluid in the abdomen or liver failure.',
      },
      {
        question: 'How is fatty liver screened?',
        answer:
          'Screening includes a health history, liver function blood tests and imaging such as CT or MRI. Montis also uses Bio-Resonance Scanning and the blood layer test; a biopsy gives the most detail.',
      },
      {
        question: 'How can I improve fatty liver?',
        answer:
          'Cut down on alcohol, eat more fruit, vegetables, whole grains and fibre, and exercise regularly. Montis also offers liver detox support with glutathione and vitamin B complex.',
      },
    ],
  },
  'overall-cleansing': {
    treatmentName: 'detox and cleansing',
    faqs: [
      {
        question: 'What is body cleansing?',
        answer:
          'Cleansing removes toxins and harmful substances from the body and goes beyond detox teas. It includes diet and lifestyle changes that reduce the toxins you take in and support the liver and kidneys, your natural detox organs.',
      },
      {
        question: 'Who should do a cleanse?',
        answer:
          'Cleansing is suitable for people of all ages and health levels. Even without symptoms, regular cleansing helps the body work at its best.',
      },
      {
        question: 'What are natural ways to detox?',
        answer:
          'Limit alcohol, drink plenty of water, eat probiotic foods such as yoghurt, reduce salt, eat antioxidant-rich berries, vegetables and nuts, and avoid sugary food and drinks.',
      },
      {
        question: 'How does Montis help with cleansing?',
        answer:
          'Montis health professionals give a consultation to guide your cleansing plan and provide supervised therapies to flush toxic materials from your system.',
      },
    ],
  },
  'men-vitality-program': {
    treatmentName: "men's health treatment",
    faqs: [
      {
        question: "What does the Montis Men's Vitality Program cover?",
        answer:
          'It addresses the root causes of low energy, hormonal imbalance and sexual health, including erectile dysfunction, with diet changes, exercise and stopping alcohol and smoking as part of every programme.',
      },
      {
        question: 'What causes erectile dysfunction?',
        answer:
          'ED can be vascular (poor blood flow, often linked to high blood pressure and cholesterol), neurogenic (nerve problems) or psychogenic (stress and anxiety). Chronic disease, smoking and obesity raise the risk.',
      },
      {
        question: 'What treatments does Montis offer for ED and low energy?',
        answer:
          'Montis offers EECP therapy to improve blood flow, oxygen therapy, IV vitamin drips, Montis Dynamic Stem Cell Therapy and hypoxia therapy.',
      },
      {
        question: 'Does testosterone drop with age?',
        answer:
          'Yes. Testosterone naturally declines with age and affects energy and vitality. The programme explains these hormonal changes and uses exercise and lifestyle changes to counter them.',
      },
    ],
  },
  'menopause-perimenopause': {
    treatmentName: 'menopause care',
    faqs: [
      {
        question: 'What is the difference between menopause and perimenopause?',
        answer:
          'Menopause is the natural end of periods, usually between ages 45 and 55, confirmed after 12 months without a period. Perimenopause is the transition before it, which can start in the mid-40s and last several years with fluctuating hormones.',
      },
      {
        question: 'What are the symptoms of menopause?',
        answer:
          'Irregular or heavy periods, hot flashes and night sweats, vaginal dryness, low libido, poor sleep, fatigue, mood swings, anxiety, headaches and frequent urinary tract infections.',
      },
      {
        question: 'How does Montis test for menopause?',
        answer:
          'Montis uses FSH test kits, thyroid function tests to rule out conditions often mistaken for menopause, and comprehensive hormone testing with a doctor consultation.',
      },
      {
        question: 'What menopause treatments are available at Montis?',
        answer:
          'Options include Hormone Replacement Therapy (HRT), vaginal estrogen, antidepressants such as SSRIs for mood, vitamin D supplements and drips for bone health, clonidine patches for hot flashes, and stem cell programmes.',
      },
    ],
  },
  'digestive-health': {
    treatmentName: 'digestive health treatment',
    faqs: [
      {
        question: 'When should I see a doctor about digestive problems?',
        answer:
          'See a doctor for ongoing diarrhoea, nausea, vomiting or abdominal pain. Seek care urgently for bloody diarrhoea, high fever, vomiting blood or severe dehydration.',
      },
      {
        question: 'What is colon hydrotherapy?',
        answer:
          'Colon hydrotherapy gently flushes water into the colon through the rectum to clear its contents and bad bacteria, so good gut bacteria can grow.',
      },
      {
        question: 'What is Montis Gut+?',
        answer:
          'Gut+ is a patented probiotic formulation from Montis that helps maintain healthy gut flora and prevent the growth of harmful bacteria.',
      },
      {
        question: 'How common are functional gut disorders?',
        answer:
          'A 2021 Rome Foundation global study found that about 40% of people have a functional gastrointestinal disorder, which shows how important a stable gut microbiome is.',
      },
    ],
  },
  'revitalization-healthy-aging': {
    treatmentName: 'anti-aging and healthy aging treatment',
    faqs: [
      {
        question: 'What is healthy aging?',
        answer:
          'The World Health Organization defines healthy aging as developing and maintaining the functional ability that enables well-being in older age. Lifestyle and environment often matter more than genetics.',
      },
      {
        question: 'Can aging be reversed?',
        answer:
          'Reversing aging is not yet possible, but medical advances can delay its effects and help you stay healthier for longer.',
      },
      {
        question: 'What anti-aging therapies does Montis offer?',
        answer:
          'Montis offers the Montis Stem Cell Program, Beauty IV Drips with glutathione, vitamin C and collagen, immune system drips, colon hydrotherapy, oxygen therapy and intermittent hypoxia therapy.',
      },
      {
        question: 'How can I age more healthily?',
        answer:
          'Exercise regularly, eat whole grains, fruit, vegetables and healthy fats, keep a healthy weight, stop smoking, keep up hobbies you enjoy, and have regular health screenings.',
      },
    ],
  },
  'hormone-balancing': {
    treatmentName: 'hormone balancing',
    faqs: [
      {
        question: 'What are the signs of a hormone imbalance?',
        answer:
          'Common signs are weight gain or loss, muscle and joint pain, irregular periods, insomnia, feeling too hot or cold, mood changes, low libido and fertility problems.',
      },
      {
        question: 'Which hormone tests does Montis offer?',
        answer:
          'Montis offers a full hormone blood profile, saliva hormone tests, thyroid function (TSH, T3, T4), estrogen, progesterone, cortisol and testosterone tests, DNA genomic tests and radiation-free Bio-Resonance Scanning, with premium screening packages for men and women.',
      },
      {
        question: 'What causes hormone imbalance?',
        answer:
          'Causes include some medications, tumours, stress, injuries and treatments such as chemotherapy, as well as puberty, pregnancy, menopause and aging.',
      },
      {
        question: 'Do men get hormone imbalances?',
        answer:
          'Yes. Testosterone and growth hormone start to fall from about age 40. Low testosterone can cause low sex drive, reduced stamina and less physical strength.',
      },
    ],
  },
};
