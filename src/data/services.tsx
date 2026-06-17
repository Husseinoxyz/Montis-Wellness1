import { Heart, FlaskConical, Flame, User, UserCog, Apple, Sparkles, Scale } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconImage: string;
  heroImage: string;
  description: string;
  content: React.ReactNode;
}

const serviceOrder = [
  'heart-recovery-health',
  'weight-loss',
  'inflammation-root-causes',
  'men-vitality-program',
  'revitalization-healthy-aging',
  'digestive-health',
  'hormone-balancing',
  'menopause-perimenopause',
];

const placeholderContent = (serviceName: string) => (
  <div className="space-y-8">
    <section>
      <h3 className="text-2xl font-semibold text-green mb-4">{serviceName}</h3>
      <p className="text-gray-700 leading-relaxed">
        Full service content will be added soon.
      </p>
    </section>
  </div>
);

const serviceCatalog: Service[] = [
  {
    id: 'diabetic-management',
    title: 'Diabetic Management',
    subtitle: 'Integrated metabolic and blood sugar support',
    icon: FlaskConical,
    iconImage: '/service icons/Slenderize for Weight Loss.png',
    heroImage: '/hero-slenderize.png',
    description: 'Advanced diabetes management support for blood sugar control, complication prevention, and cardiovascular risk reduction.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Diabetic Management</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diabetes mellitus is one of the most prevalent chronic diseases, impacting millions worldwide. This condition arises when the body cannot effectively process and utilize blood sugar (glucose), leading to elevated blood sugar levels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, we are committed to offering advanced solutions to manage diabetes and its complications, improving overall health and quality of life.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Understanding Diabetes</h3>
          <h4 className="text-xl font-semibold text-green mb-3">What is Diabetes?</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diabetes occurs when insulin, the hormone responsible for regulating blood sugar, is insufficient or ineffective. There are three primary types:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Type 1 Diabetes:</strong> An autoimmune condition causing the destruction of insulin-producing cells.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Type 2 Diabetes:</strong> Characterized by insulin resistance, often linked to obesity and lifestyle factors.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Gestational Diabetes:</strong> Develops during pregnancy, increasing the risk of type 2 diabetes later in life.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Complications of Diabetes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Without proper management, diabetes can lead to severe health issues, including:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heart Disease:</strong> Atherosclerosis, hypertension, heart attacks, and strokes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Neuropathy:</strong> Nerve damage causing tingling, pain, and loss of sensation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Nephropathy:</strong> Kidney damage leading to potential failure.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Retinopathy:</strong> Eye damage that can result in blindness.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Foot Ulcers:</strong> Poor wound healing that may require amputation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Erectile Dysfunction:</strong> Common in men with diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Preeclampsia:</strong> A pregnancy complication in gestational diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Neurological Issues:</strong> Conditions like dementia.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Managing Diabetes Effectively</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While diabetes has no permanent cure, effective management can help maintain healthy blood sugar levels and prevent complications.
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">Management Strategies</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>For Type 1 Diabetes:</strong> Regular insulin injections to regulate blood sugar.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>For Type 2 Diabetes:</strong> Diet modifications, regular physical activity, blood sugar monitoring, and medications or insulin shots as needed.</span></li>
          </ul>
          <ul className="space-y-2 mb-4 ml-4">
            <li className="text-gray-700">* Limit sugar and incorporate whole foods.</li>
            <li className="text-gray-700">* Maintain regular physical activity.</li>
            <li className="text-gray-700">* Monitor blood sugar consistently.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Innovative Solutions at Montis</h3>
          <h4 className="text-xl font-semibold text-green mb-3">EECP Therapy for Diabetic Heart Disease</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enhanced External Counter pulsation (EECP) is a non-invasive treatment for improving cardiovascular health in diabetes. Research by Sardina et al. (2015) shows EECP enhances glycemic control, reducing fasting plasma glucose, postprandial glucose, and HbA1c levels. Results persist for up to three months post-therapy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our clinics offer EECP Therapy, enabling diabetic patients to manage cardiovascular risks effectively and from the comfort of their homes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Risk Factors for Diabetes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding risk factors can help in early detection and prevention:
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">Type 1 Diabetes</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Family history of autoimmune diseases.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Viral infections or pancreatic injuries.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Type 2 Diabetes</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Family history and genetics.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Obesity and physical inactivity.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High blood pressure or cholesterol levels.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Gestational Diabetes</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Obesity during pregnancy.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Family history or ethnic predisposition.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Recognizing Symptoms of Diabetes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Common signs include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increased thirst (Polydipsia).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Frequent urination (Polyuria).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Excessive hunger (Polyphagia).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fatigue, weight loss, and slow-healing wounds.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Tingling sensations in extremities.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Recurrent infections (e.g., yeast or UTIs).</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Why Choose Montis?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we provide personalized care and cutting-edge therapies for managing diabetes and its complications. From innovative treatments like EECP to holistic care plans, we prioritize your health and well-being.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Contact us today to begin your journey toward better health.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'overall-cleansing',
    title: 'Overall Cleansing',
    subtitle: 'Whole-body detoxification and wellness reset',
    icon: Sparkles,
    iconImage: '/service icons/Revitalization & Healthy Aging.png',
    heroImage: '/hero-revitalization.png',
    description: 'Safe and effective cleansing support to help remove toxins, strengthen natural detox pathways, and promote overall vitality.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Overall Cleansing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Daily activities often produce toxic waste materials that can accumulate in the body, leading to potential damage over time. While the body has natural mechanisms to remove some of these toxins, regular cleansing is recommended as part of a healthy lifestyle.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is Cleansing?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cleansing involves removing toxins and harmful substances from the body, going beyond mere detoxification. It encompasses lifestyle changes, such as reducing the intake of unhealthy foods and beverages, to maintain overall well-being.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cleansing is beneficial for individuals of all ages and health statuses. Even without symptoms, regular cleansing keeps the body functioning at its best.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">The Clinical Basis of Cleansing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cleansing and detoxification aim to eliminate toxins to enhance health and optimize bodily functions. Toxins can originate from internal cellular processes or external environmental factors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The body's natural detox systems, primarily the liver and kidneys, work to neutralize and excrete these toxins. However, excessive accumulation of toxins can overwhelm these systems. Cleansing supports and enhances these natural processes, ensuring better health and vitality.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cleansing is a common practice that helps remove toxins from your system. Whenever we hear of cleansing or detox, we would probably think of those expensive teas, cocktails, and elixirs that promise to flush "your system" and make you feel refreshed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Complete overall cleansing is more than these. Overall cleansing also includes changes to diet and lifestyle to reduce the intake of toxins into your body. At Montis, we are experts at cleansing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our health professionals provide consultations to guide you on your cleansing journey. Our therapies are safe and effective to really flush your system of toxic materials.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Natural Ways to Detox</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before turning to commercial detox products, consider natural methods to cleanse your body:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Limit Alcohol Consumption:</strong> Overloading the liver with alcohol can cause long-term damage. Consuming alcohol in moderation supports liver health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Stay Hydrated:</strong> Water facilitates metabolic processes and helps transport toxins out of the body. Drink plenty of water daily for effective natural detoxification.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Increase Probiotics in Your Diet:</strong> Probiotics, found in foods like yogurt, support gut health by breaking down toxins and maintaining bacterial balance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Reduce Salt Intake:</strong> Excess salt can lead to water retention and high blood pressure. Cutting back helps the kidneys excrete waste more efficiently.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Incorporate Antioxidants:</strong> Foods rich in antioxidants, such as berries, fruits, vegetables, and nuts, combat harmful oxidative stress that can damage cells and DNA.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Avoid Sugary Foods and Drinks:</strong> High sugar consumption is linked to obesity, heart disease, and diabetes. Reducing sugar intake supports natural detox efforts.</span></li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: 'fatty-liver',
    title: 'Fatty Liver',
    subtitle: 'Liver health and metabolic restoration support',
    icon: Apple,
    iconImage: '/service icons/Montis Digestive Health.png',
    heroImage: '/hero-digestive.png',
    description: 'Targeted liver health support for fatty liver screening, detoxification, lifestyle adjustment, and long-term prevention.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Fatty Liver</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The liver, the largest internal organ in the human body, plays a pivotal role in maintaining overall health. Its functions include:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Regulating blood sugar levels</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Producing essential blood proteins</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Storing iron</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Detoxifying the blood</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Additionally, the liver stores carbohydrates, proteins, and fats, providing energy during periods of hunger or fasting. In a healthy liver, fat constitutes less than 5% of its total weight. However, when fat levels rise to 10% or more, fatty liver disease may develop, leading to potentially irreversible damage.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Understanding Liver Health</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fatty liver disease manifests in two primary forms, depending on its cause:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Alcoholic Fatty Liver Disease (AFLD):</strong> Triggered by excessive alcohol consumption.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Non-Alcoholic Fatty Liver Disease (NAFLD):</strong> Occurs in individuals who may have never consumed alcohol.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Globally, NAFLD is more prevalent, affecting about 25% of the population. If left untreated, NAFLD can progress to non-alcoholic steatohepatitis (NASH), which may result in cirrhosis or liver cancer.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Risk Factors for Fatty Liver</h3>
          <h4 className="text-xl font-semibold text-green mb-3">For Alcoholic Fatty Liver Disease (AFLD)</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Heavy alcohol consumption (more than 4 drinks per day for men, 3 drinks per day for women).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Chronic liver diseases like hepatitis C.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Genetic predisposition.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Obesity or malnutrition.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Advancing age.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">For Non-Alcoholic Fatty Liver Disease (NAFLD)</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            The exact cause remains unclear, but it is associated with:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Obesity.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Type 2 diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High cholesterol.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Sedentary lifestyle.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Fatty Liver Screening and Diagnosis</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fatty liver often remains asymptomatic in its early stages, making regular screening crucial for early detection. Recommended diagnostic methods include:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Health History Assessment:</strong> To identify risk factors like alcohol use or metabolic conditions.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Liver Function Tests:</strong> To evaluate enzyme levels in the blood.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Imaging:</strong> CT scans or MRIs can detect liver enlargement.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Bio Resonance Scanning:</strong> Detects unhealthy liver cells through energy emissions.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Liver Biopsy:</strong> Provides detailed insights into liver damage.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood Layer Encryption:</strong> Simple blood tests that assess liver health.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Potential Complications</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If left untreated, fatty liver disease may lead to severe complications:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Cirrhosis:</strong> Permanent liver scarring.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Liver cancer.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Ascites:</strong> Fluid buildup in the abdomen.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Liver failure.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Esophageal varices:</strong> Swollen blood vessels that may rupture.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Liver Detoxification and Lifestyle Adjustments</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Improving liver health requires a proactive approach, including:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reducing alcohol consumption to prevent AFLD.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Adopting a liver-friendly diet by incorporating fruits, vegetables, whole grains, and fiber.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Preventing hepatitis infections through vaccinations and precautions.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Exercising regularly to manage NAFLD and boost overall health.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Liver Detox Support at Montis</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certain detox treatments can support liver health, including:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Glutathione:</strong> A potent antioxidant that repairs tissue and removes toxins.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin B Complex:</strong> Available in various forms to boost energy and support liver function.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fatty liver disease is a global health concern that often progresses silently. Both alcoholic and non-alcoholic fatty liver diseases can lead to severe health complications if left unaddressed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Early diagnosis, lifestyle modifications, and liver detoxification are essential steps in managing and preventing fatty liver disease. By embracing holistic approaches, individuals can protect their liver health and lead a healthier, more vibrant life.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'heart-recovery-health',
    title: 'Heart Recovery Health',
    subtitle: 'Non-invasive heart recovery and cardiovascular wellness',
    icon: Heart,
    iconImage: '/service icons/Heart via Angiotherapy.png',
    heroImage: '/hero-heart.png',
    description: 'Advanced non-invasive angiotherapy treatment for chronic angina, heart disease recovery, and COQ10 therapy.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Don't Miss a Beat</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heart diseases are a growing concern worldwide and an important cause of sickness and death globally. Multiple treatment options are available for the treatment of the various types of heart diseases that can improve heart health and promote recovery.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diet and lifestyle changes are common treatment options used to improve heart health. Modern medicines, such as statins and beta blockers are also available that help to treat heart diseases. These medicines can also be used together with diet and lifestyle changes to improve heart health.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Selecting the right heart treatment plan is an important first step in heart disease recovery. It is important to be familiar with the side effects of heart medications, especially on your body. This information should guide the creation of a heart care management plan that is effective in heart disease treatment and recovery.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Types of Heart Medications</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The treatment of heart disease has improved over the past decades. Exercises, lifestyle changes, and improved diet are usually the first interventions recommended by doctors before the administration of medications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">To discuss heart recovery, it is important to understand the drugs used to treat heart diseases. Some of the heart drugs commonly administered include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Beta-blockers</strong> - Beta-blockers block the action of chemicals, such as adrenaline that can excite your heart. Beta-blockers are used to treat hypertension, irregular heartbeats, and heart failure, and prevent heart attacks. Propanolol and metoprolol are examples of beta-blockers commonly prescribed by doctors.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Calcium blockers</strong> - Calcium blockers block the entry of calcium into the heart and blood vessels. These drugs are used to relax the heart and reduce the workload. Calcium blockers are used to treat hypertension and prevent heart attacks. Amlodipine is a very common calcium blocker.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Statins</strong> - Statins are used to reduce the level of bad cholesterol in the blood. Bad cholesterol is the LDL cholesterol and can build up to cause heart and vessel disease. Statins include simvastatin and atorvastatin.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Anticoagulants</strong> - Just like antiplatelet agents, anticoagulants also prevent the formation of blood clots but they do this differently. Anticoagulants work by preventing clotting factors from getting activated. Examples of anticoagulants include warfarin and heparin.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>ACE Inhibitors</strong> - Angiotensin Converting Enzyme (ACE) Inhibitors block the production of angiotensin in the body. ACE inhibitors are also used to treat hypertension, and can prevent heart attacks. Examples include captopril and benazepril.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Selecting a Heart Treatment Plan</h3>
          <p className="text-gray-700 leading-relaxed mb-4">When choosing a treatment plan, make sure to consult with your doctor with questions like:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">How can these medications help relieve my symptoms?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">How can these medications interfere with other drugs I am on?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">What other adjustments to my lifestyle and diet can I make to improve recovery?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">What side effects can be caused by the use of these heart medications?</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Every heart medication can cause different side effects that can make recovery challenging. Common side effects include: cough (caused by ACE inhibitors), dehydration and thirst, increased urination, dark-red colored urine, headache, and abnormal nose and gum bleeding.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Monitoring Heart Recovery</h3>
          <p className="text-gray-700 leading-relaxed mb-4">When you are using heart medications, or other heart treatment therapies, it is important to monitor heart recovery. Various tests are available that can be used to check heart performance and make sure treatment is working. Tests that can be used to monitor recovery include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Echocardiogram</strong> - Echocardiograms or heart echo scans use ultrasound to visualize the heart and blood vessels. These scans can be used to monitor heart muscle and valve performance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Electrocardiogram (ECG)</strong> - ECG is used to monitor the electrical activity of the heart. This test can be used to monitor heart rate and proper heart conduction.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood Test</strong> - Routine blood tests can be used to check for heart enzymes in the blood. Cardiac enzymes such as troponin and creatinine phosphokinase (CPK) are elevated after a heart attack.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Full body scans</strong> - such as imaging scans (CT and MRI)</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heart Rate Variability Analysis</strong> - This test measures the variations in the time interval between consecutive heartbeats. Heart rate variability analysis can be used to predict the adverse effects of heart disease in high-risk persons.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Heart Recovery using Non-invasive Method</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Angio therapy is a non-invasive treatment therapy used to treat chronic angina (chest pain) in patients with heart disease. Angio therapy makes use of specific pressures to improve blood flow in the body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Angio therapy works by applying pressure on the blood vessels in the legs and feet to improve blood flow. Improved blood flow in the lower limbs can improve blood flow back to the heart, and make the heart function better.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our heart recovery program has also been shown to improve positive outcomes in the patients' management. A 2015 study revealed the effects of Angio therapy to improve glycemic indexes in patients, including fasting plasma glucose (FPG), postprandial random plasma glucose (RPG), and glycated hemoglobin (HbA1c) within 48 hours, and 2 weeks after the start of therapy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">To be eligible for Angio therapy you need to pass certain criteria which include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Free of heart diseases such as valvular disease, pulmonary hypertension, peripheral artery disease, and aortic insufficiency.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Must have a normal Heart Rate Variability (HRV) Analysis</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">You do not currently use a pacemaker</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">You are ineligible for invasive heart surgeries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Medications are no longer as effective as before</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Angio therapy can be done at home by trained professionals and does not require any medications. Angio therapy is normally done at least one hour a day, five days every week, for seven total weeks.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Angio therapy is a great alternative for heart medications and surgery, especially for heart disease that is not severe. Side effects and complications are minimal, and may include: skin irritation, muscle fatigue and aches, bruising, and tingling in legs and feet.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Coenzyme Q10 (COQ10) Therapy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coenzyme Q10, also known as ubiquinone and ubiquinol is a powerful antioxidant that is naturally found in the body. COQ10 is produced in most body cells to protect them from damage due to oxidative stress. Coenzyme Q10 can also be found naturally in foods, such as fish, meat, and healthy vegetable oils.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The levels of COQ10 are seen to reduce with age, and this is associated with an increased risk of heart diseases, faster disease progression, and impaired heart recovery, especially in older patients. Coenzyme Q10 has also been shown to have anti-inflammatory properties and it is effective in the management of heart failure in patients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Administration of COQ10 injections restores the levels of COQ10 in the plasma. COQ10 injections provide an alternative in the management of heart diseases, prevention of recurrence, and promotion of healthy heart recovery. At our centers, we are specialized in COQ10 therapy in the management of heart health. COQ10 at our centers are administered IV for quick action and restoration of normal COQ10 levels in the body.
          </p>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">How to Get Started</h3>
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">1</span><span className="text-gray-700">Contact us via calls or on WhatsApp</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">2</span><span className="text-gray-700">Speak with any of our medical representatives</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">3</span><span className="text-gray-700">Provide your past medical reports and any other relevant medical history</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">4</span><span className="text-gray-700">Fix an appointment date and confirm with our reps</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">5</span><span className="text-gray-700">Visit our centers on your appointment date. It's advisable to avoid coffee before coming to appointments</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">6</span><span className="text-gray-700">Consult with our doctors to plan your recovery and understand the expectations of your treatment</span></li>
          </ol>
        </section>
      </div>
    ),
  },
  {
    id: 'hormone-balancing',
    title: 'Hormone Balancing',
    subtitle: 'Comprehensive hormone balance and replacement therapy',
    icon: FlaskConical,
    iconImage: '/service icons/Hormone Systemic Therapy.png',
    heroImage: '/hero-hormone.png',
    description: 'Expert hormone screening, profiling, and Bioidentical Hormone Replacement Therapy (BHRT) for men and women.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Systemic Therapy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones are chemical substances produced by special glands in your body and released directly into the bloodstream. Small amounts of hormones are enough to produce significant effects on body systems and processes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These hormones play an important role in the control of metabolism and growth. Hormones are also influential in the maintenance of sexual health. The levels of certain hormones are constantly fluctuating and can be affected by conditions such as stress and aging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hormone imbalances can occur when too much or too little hormones are produced. Tiny imbalances in hormone levels in the blood can result in various changes in normal body processes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Causes of Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Several factors can cause different kinds of hormone imbalances in men and women. The causes of hormone imbalance depend on whether the person is male or female, the hormones affected and the glands that cause the imbalance.</p>
          <p className="text-gray-700 leading-relaxed mb-4">General causes of hormone imbalance to everyone include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Several medications</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Tumors</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Injuries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Treatments, such as chemotherapy</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">In addition to these, hormone imbalance can also be caused by conditions and diseases that are specific to men and women. Puberty, pregnancy, and menopause can cause a surge or drop in hormones in women and are associated with hormone imbalance in women.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Hormone Imbalance in Women</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones are essential in every woman's life and imbalance can affect their overall health and well-being. Female hormones such as estrogen and progesterone start to rise during puberty and control the menstrual cycle in women. The levels of estrogen and progesterone fluctuate during the cycle and cause the changes seen during ovulation and menstruation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Other hormones such as prolactin and oxytocin are produced more in pregnant women and breastfeeding mothers. Prolactin stimulates milk production while oxytocin causes milk release. Oxytocin is also important during labor and childbirth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormonal imbalance in women can also be caused by several factors such as stress, diabetes, thyroid diseases, and medications such as contraceptives. Hormonal imbalance is a serious concern in women and can cause irregular menstrual cycles, heavy periods, infertility, and diseases such as endometriosis.
          </p>
          <p className="text-gray-700 leading-relaxed">Menopause is another cause of hormonal imbalance in older women. Menopause is normal, happens in every woman, and is a phase when the reproductive cycle of a woman comes to a halt.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Hormone Imbalance in Men</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Male hormones such as testosterone also rise in puberty and contribute to the growth changes seen in teenage boys. Testosterone and growth hormones start to fall from age 40 and become extremely low at age 80.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aging is a normal process that causes a decline in male hormones. In addition to aging, genetics, stress, injuries, medications, poor exercise and nutrition can also cause hormonal imbalance in males.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">It is more common for men to experience imbalances in testosterone compared to other hormones. When testosterone levels drop in males, it can cause "male menopause" which can result in low sex drive, stamina, and reduced strength for physical activities.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Hormonal imbalance in men can present in several ways including:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Muscle loss:</strong> Testosterone increases muscle growth, especially in people who exercise regularly. A reduction in testosterone can cause a loss of muscle mass in men.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Reduced sex drive</strong> - Low testosterone levels can cause reduced sex drive in men. High estrogen levels can also cause this reduced sex drive in men with hormonal imbalances.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Erectile dysfunction</strong> - Low levels of testosterone can make it difficult for men to maintain an erection during sex. Although this happens normally as men grow older, stress, lack of sleep, heart disease, and depression can also cause erectile dysfunction in young people.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Gynecomastia</strong> - Gynecomastia is the abnormal appearance of breasts caused by abnormally high estrogen levels in men. Although gynecomastia is not a disease condition, it can affect the self-esteem of young boys.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Mental Changes</strong> - Low testosterone levels can also cause mood swings, anxiety, and depression.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Stress and Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's world, stress is almost unavoidable. From long hours in traffic to long queues at the gas station to unhealthy work behavior, stress is everywhere. The body can adjust to various levels of stress by producing stress hormones, such as cortisol and adrenaline.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These stress hormones cause changes in body physiology to adapt to stress. Changes such as an increase in blood sugar helps to provide energy to handle stressful activities. The problem arises when consistent levels of stress result in high levels of these stress hormones being maintained in the body.
          </p>
          <p className="text-gray-700 leading-relaxed">Chronic stress, especially in corporate workers can result in excessive weight gain, high blood sugar, high blood pressure, thyroid problems, and a higher risk of infection.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening for Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">The first step in the screening of hormonal imbalances is the early identification of symptoms. The appearance of these symptoms can help paint a picture of the hormones that are being secreted, either too much or too little. Early non-specific symptoms seen in most hormone imbalances include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Weight gain or loss</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Muscle and joint pain</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Irregular menstrual cycles</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Insomnia</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Heat and cold intolerance</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mood changes and depression</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduced libido</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fertility issues</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Screening tests commonly employed include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hormone saliva test</strong> - Can be used to check the level of hormones (such as estrogen and testosterone) in the saliva</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Full hormone profile</strong> - A rise or fall in hormone levels can be checked by a blood test. At Montis, we provide full hormone profile screening to check the levels of several hormones in the blood.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Thyroid function test</strong> - A thyroid function test checks the level of the thyroid hormones, TSH, T3, and T4 to screen for thyroid diseases.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Estrogen test</strong> - This test can be used to measure estrogen levels at different phases in the menstrual cycle. It is also an important fertility test.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Progesterone test</strong> - Used to monitor progesterone levels, especially during pregnancy.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Cortisol test</strong> - To measure the level of cortisol in response to stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Testosterone test</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DNA genomic tests</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Bio resonance scan</strong> at our centre can check most of your hormone organs (completely radiation free)</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Here we do have customized men and women premium screening covering all the parameters of the hormones at a special rate customized by our panel of international medical team.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Hormone Imbalance can affect Fertility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our approach to hormone begins with cleansing (why detox helps to build up some hormones, liver relate to hormone). Concept of managing hormones in a drug free methodology.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones play an important role in reproduction, and imbalances can result in infertility. The female hormones FSH, LH, estrogen, and progesterone are all essential in the maintenance of healthy menstrual cycles. Progesterone also plays a major role in the maintenance of pregnancy. The male hormone testosterone promotes sperm production and vitality.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            An imbalance in any of these reproductive hormones can affect fertility greatly. Although a decline in hormone production is a common occurrence with aging, hormonal imbalance can also be caused by several conditions such as polycystic ovary disease (PCOS). These conditions can make getting pregnant quite difficult and affect couples.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To manage fertility caused by hormone insufficiencies, artificial hormone supplements can be administered. Bioidentical hormones replacement therapy (BHRT) uses processed hormones gotten from plants to replace natural body hormones. BHRT supplements can be employed in the management of menopause and perimenopause.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'inflammation-root-causes',
    title: 'Inflammation and Root Causes',
    subtitle: 'Identify and manage chronic inflammation at its source',
    icon: Flame,
    iconImage: '/service icons/Inflammation & Root Cause.png',
    heroImage: '/hero-inflammation.png',
    description: 'Comprehensive inflammation assessment and root-cause support for chronic conditions, immune balance, and long-term health.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Inflammation and Root Causes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation is one of the body's natural defence mechanisms, activated when the immune system detects harmful foreign agents like bacteria, parasites, viruses, or physical irritants. While essential for protection and healing, inflammation must be well-regulated to function optimally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Poor regulation can lead to autoimmune diseases, such as lupus, where the body attacks its tissues, or immunodeficiencies, like HIV/AIDS, where the immune response is insufficient.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chronic inflammation is also a contributing factor to various diseases, including heart disease and diabetes. At Montis, we provide comprehensive solutions to manage inflammation effectively, supporting the treatment of chronic conditions.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Types of Inflammation</h3>
          
          <h4 className="text-xl font-semibold text-green mb-3">Acute Inflammation</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Acute inflammation is an immediate response to injury or illness and lasts only a few days. It is characterized by:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Swelling:</strong> Fluid buildup at the inflammation site.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Pain:</strong> Common in the affected area.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heat:</strong> The area becomes hot to the touch.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Redness:</strong> Caused by increased blood flow.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Loss of Function:</strong> Temporary impairment in the affected area.</span></li>
          </ul>

          <h4 className="text-xl font-semibold text-green mb-3">Chronic Inflammation</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chronic inflammation persists even after the initial cause has been resolved and can last for months or years. Symptoms include:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Joint stiffness and pain</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Persistent fever</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fatigue</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Skin rashes</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Chronic inflammation is linked to diseases such as heart disease, diabetes, arthritis, and pulmonary conditions. It is often seen in individuals with hypersensitivity, autoimmune disorders, or those exposed to long-term irritants.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Monitoring Inflammation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation can be assessed using various diagnostic tools, including:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>C-Reactive Protein (CRP):</strong> Produced by the liver during inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Erythrocyte Sedimentation Rate (ESR):</strong> Measures red blood cell settlement speed.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Serum Electrophoresis:</strong> Evaluates protein levels in the blood.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Imaging Tests:</strong> X-rays, CT scans, and MRIs visualize the impact of inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Dried Layer Test:</strong> Analyzes a blood sample for signs of inflammation, toxins, and deficiencies.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heart Rate Variability (HRV):</strong> Assesses the effects of inflammation on cardiovascular health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Live Blood Cell Analysis:</strong> Examines blood cells under a microscope for abnormalities.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Inflammation and Its Role in Diseases</h3>
          
          <h4 className="text-xl font-semibold text-green mb-3">Heart Disease</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chronic inflammation contributes to cardiovascular conditions like atherosclerosis. Here, fatty plaques deposit on artery walls, blocking blood flow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This can lead to heart attacks or strokes as plaques detach and travel to vital organs.
          </p>

          <h4 className="text-xl font-semibold text-green mb-3">Diabetes</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Type 1 diabetes, the immune system attacks insulin-producing cells in the pancreas, leading to insulin deficiency.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Type 2 diabetes, obesity-induced inflammation produces chemicals that cause insulin resistance, affecting glucose metabolism.
          </p>

          <h4 className="text-xl font-semibold text-green mb-3">Cancer</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation promotes tumor development by creating a tumor microenvironment (TME) that enables cancer cells to thrive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chronic inflammation generates reactive oxygen species (ROS) that damage DNA, causing mutations that may lead to cancer.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Managing Inflammation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Management strategies include:</p>
          <h4 className="text-xl font-semibold text-green mb-3">Lifestyle Adjustments</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Avoiding smoking and reducing alcohol consumption.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increasing physical activity and regular exercise.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Eliminating pro-inflammatory foods, such as sugar and fried foods.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Following Montis's anti-inflammatory diet.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Practicing stress management techniques.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Therapies and Treatments</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Antioxidant Drips:</strong> Reduce inflammation by neutralizing oxidants.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin D and CoQ10 Injections:</strong> Support cellular health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon Hydrotherapy:</strong> Removes toxins from the colon.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen Therapy:</strong> Activates the body's antioxidant systems, effective for conditions like diabetic foot ulcers.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Intermittent Hypoxia Training:</strong> Improves endurance, energy levels, and reduces arterial hardening.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed">
            Inflammation is a critical process that protects the body, but when unregulated, it can cause harm. Understanding and managing inflammation effectively can prevent and alleviate chronic diseases, enhancing overall health and well-being. At Montis, we are committed to providing tailored solutions to help you achieve optimal health.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'men-vitality-program',
    title: "Men's Vitality Program",
    subtitle: 'Comprehensive men vitality and wellness program',
    icon: User,
    iconImage: '/service icons/Men Up Program.png',
    heroImage: '/hero-men-up.png',
    description: 'A holistic men’s health program addressing energy, hormonal balance, sexual health, lifestyle, and long-term vitality.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Men's Vitality Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we emphasize a holistic approach to male vitality, addressing the root causes of declining energy, hormonal imbalance, and sexual health rather than simply treating symptoms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vitality is about overall health and well-being, extending far beyond sexual performance.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Natural Approaches for Improved Vitality</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lifestyle plays a significant role in male vitality. We incorporate the following as part of every programme:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Dietary Modifications:</strong> Optimize your nutrition for better health and energy levels.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Increased Exercise:</strong> Enhance overall fitness and vitality through regular physical activity.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Elimination of Alcohol and Smoking:</strong> Avoid substances that negatively impact energy and well-being.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These lifestyle adjustments not only boost energy but also promote a higher quality of life.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Factors Affecting Men's Vitality</h3>
          <h4 className="text-xl font-semibold text-green mb-3">The Impact of Aging</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aging naturally leads to a decline in testosterone levels, affecting vitality. Our programme addresses this through:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Understanding the hormonal changes and their effects on energy levels.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Lifestyle interventions including regular exercise and smoking cessation to counteract aging's impact.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Lifestyle Choices and Their Influence</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Men's vitality is significantly shaped by daily lifestyle choices. Key factors include:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Smoking and alcohol consumption, which reduce physical and mental health over time.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mental health conditions such as depression, which can lower libido and energy levels.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Medications and Their Role</h4>
          <p className="text-gray-700 leading-relaxed">
            Certain medications for chronic conditions may have side effects that impact vitality. We provide practical advice on maintaining energy and well-being while managing medication side effects.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Understanding Erectile Dysfunction (ED)</h3>
          <h4 className="text-xl font-semibold text-green mb-3">Causes of Erectile Dysfunction</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            ED can stem from various underlying causes, including:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vasculogenic Causes:</strong> Issues with blood flow, often linked to high blood pressure and cholesterol.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Neurogenic Causes:</strong> Nerve-related dysfunctions.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Psychogenic Causes:</strong> Mental health challenges such as stress and anxiety.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Risk Factors and Preventive Measures</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Key contributors to ED include chronic diseases, smoking, and obesity. Preventive steps include:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Maintaining a balanced diet, regular exercise, and avoiding harmful substances.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Empowering men with the knowledge to sustain sexual vitality at every stage of life.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Treatment for Erectile Dysfunction</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Montis offers a variety of advanced therapies for improving men's vitality and treating ED:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>EECP Therapy:</strong> Enhance blood flow and cardiovascular health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen Therapy:</strong> Boost cellular health and energy levels.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>IV Vitamin Drips:</strong> Deliver essential nutrients directly into the bloodstream.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Montis Dynamic Stem Cell Therapy:</strong> Leverage cutting-edge regenerative medicine.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hypoxia Therapy:</strong> Improve oxygen delivery and reduce inflammation.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Our Locations</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our specialised therapies are available across Malaysia, offering comprehensive solutions for men's health. We are conveniently located in:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Bangsar, Kuala Lumpur</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Eco Botanic, Johor</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">R&amp;F Mall, Johor</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Conclusion: Embracing a Holistic Approach to Men's Vitality</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vitality is about overall health and well-being, extending far beyond sexual performance. Understanding the key factors, making informed lifestyle choices, and seeking effective treatments are vital steps to sustaining long-term health.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Montis offers a comprehensive Men Vitality Program to support men of all ages. Whether addressing erectile dysfunction or proactively improving your lifestyle, we are here to guide you every step of the way. Embrace this holistic approach and take control of your vitality today.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'autoimmune-treatment',
    title: 'Autoimmune Treatment',
    subtitle: 'Immune balance and chronic inflammation support',
    icon: Flame,
    iconImage: '/service icons/Inflammation & Root Cause.png',
    heroImage: '/hero-inflammation.png',
    description: 'Personalized support for autoimmune concerns, immune resilience, inflammation patterns, and long-term symptom management.',
    content: placeholderContent('Autoimmune Treatment'),
  },
  {
    id: 'menopause-perimenopause',
    title: 'Menopause and Perimenopause',
    subtitle: 'Specialized care for women transitioning through menopause',
    icon: UserCog,
    iconImage: '/service icons/Menopause & Perimenopause.png',
    heroImage: '/hero-menopause.png',
    description: 'Compassionate menopause and perimenopause care with hormone testing, symptom support, and personalized treatment planning.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Menopause and Perimenopause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every woman's journey through menopause is different. But one thing is certain: you do not have to navigate it alone. At Montis, we provide compassionate, expert care to help you understand what your body is going through and take control of how you feel.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is Menopause?</h3>
          <p className="text-gray-700 leading-relaxed">
            Menopause is the natural end of a woman's menstrual cycle, typically occurring between the ages of 45 and 55. It is confirmed after 12 consecutive months without a period and marks a significant shift in hormone levels throughout the body.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is Perimenopause?</h3>
          <p className="text-gray-700 leading-relaxed">
            Perimenopause is the transition phase leading up to menopause. It can begin as early as the mid-40s and last anywhere from 8 to 10 years. During this time, hormone levels fluctuate, and symptoms can come and go unpredictably.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Recognising the Symptoms</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both stages share many of the same symptoms, including:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Irregular or heavy periods</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Hot flashes and night sweats</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Vaginal dryness and loss of libido</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Sleep disturbances and fatigue</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mood swings, irritability, and anxiety</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Headaches and migraines</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Frequent urinary tract infections</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            <strong>Note:</strong> Heavy bleeding, severe pain, or unusual symptoms should always be assessed by a medical professional, as they may point to other underlying conditions.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Could It Be Early Menopause?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some women experience menopause earlier than expected due to:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Surgeries such as oophorectomy or hysterectomy</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Autoimmune diseases such as lupus</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Hormonal imbalances, chemotherapy, or radiation therapy</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening and Diagnosis</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every symptom is caused by menopause. At Montis, we help you get clarity through:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>FSH home test kits</strong> to detect hormonal changes</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Thyroid function tests</strong> to rule out conditions often mistaken for menopause</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Professional consultation and comprehensive hormone testing</strong></span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Seek medical advice if you notice unusual bleeding, spotting, or severe psychological changes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How We Help at Montis</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer a range of personalised treatment options to manage symptoms and improve your quality of life:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hormone Replacement Therapy (HRT)</strong> to address hot flashes and hormonal decline</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vaginal Estrogen</strong> via creams or tablets to relieve dryness and discomfort</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Antidepressants including SSRIs</strong> to support mood stability</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin D supplements and drips</strong> to protect bone health</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Stem Cell Programs</strong> for innovative symptom relief</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Clonidine Patches</strong> to reduce the frequency of hot flashes</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Simple Lifestyle Changes That Make a Difference</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Avoid alcohol and caffeine, especially in the evening, to improve sleep</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Eat a nutrient-rich diet built around whole foods, fruits, and vegetables</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stay active to support hormonal balance and overall wellbeing</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">You Are Not Alone in This</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Menopause is a transition, not a decline. With the right support and a personalized plan, you can move through this phase feeling strong, informed, and in control.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Contact Montis today and let us help you build a plan that works for you.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'digestive-health',
    title: 'Digestive Health',
    subtitle: 'Comprehensive gut health and digestive wellness solutions',
    icon: Apple,
    iconImage: '/service icons/Montis Digestive Health.png',
    heroImage: '/hero-digestive.png',
    description: 'Advanced digestive disease screening, colon hydrotherapy, detox programs, and our patented Gut+ Probiotic formulation.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Digestive Health</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The digestive system is a long digestive tract that starts at the mouth and ends at the anus. This system is involved in the breakdown of complex food materials into smaller units that can then be absorbed into the bloodstream. The activities of the digestive system, the "gut" are essential for the healthy functioning of the human body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The complexity of the digestive tract and its activities can leave the gut exposed to infectious diseases, toxins, and other toxic substances that can adversely affect digestive health.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digestive diseases can also be caused by internal derangements such as genetic factors and autoimmune attacks on the digestive organs.
          </p>
          <p className="text-gray-700 leading-relaxed">A healthy gut environment is also maintained by specific bacteria and microorganisms present in the gut. Diet and lifestyle factors such as stress, alcohol intake, and medications can kill gut bacteria and result in a disruption of the normal gut environment.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Digestive Diseases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Digestive diseases can affect any part of the digestive system including the stomach, intestines, anus, and even the liver. Digestive diseases can either be infectious or non-infectious.</p>
          <p className="text-gray-700 leading-relaxed mb-4">When a disease is infectious, it means it can easily spread from one person to another and can cause community outbreaks. Infectious diseases can be caused by viruses, bacteria, fungi, or parasites.</p>
          <p className="text-gray-700 leading-relaxed mb-4">On the other hand, non-infectious diseases cannot be spread from one person to another. Non-infectious diseases are caused by poisons, toxins, and even when the immune system attacks the digestive system.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Non-infectious digestive diseases can also be functional gastrointestinal diseases associated with dysfunctional motility, altered gut flora, gut hypersensitivity, dysfunctional mucosal functional, altered central nervous system control, or a combination of any of these.</p>
          <p className="text-gray-700 leading-relaxed">In 2021, a study was carried out by the Rome Foundational Global Study which revealed a global prevalence of functional gastrointestinal diseases of about 40%. This study shows a need to maintain a stable gut microflora for good digestive health, and optimal overall health.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening for Digestive Diseases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Just like other diseases, comprehensive screening for digestive diseases starts with taking a medical history, checking for symptoms, and physical examination of patients. A comprehensive screening plan is recommended by your medical team and is essential to narrow down the cause of the disease to begin treatment early.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Diarrhea and abdominal discomfort are often seen in almost every digestive disease. They are what you see that tells you to seek treatment. The type of diarrheal stool is often used by doctors to tell the cause of the disease. For example, in salmonella, the stool usually has a strong smell and may contain blood, while the stool in cholera looks like rice water.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Common symptoms caused by most digestive diseases include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Diarrhea - may be bloody or non-bloody</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Nausea</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Vomiting</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Abdominal pain and discomfort</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Early intervention is essential to control symptoms and prevent severe disease. Severe symptoms in digestive diseases include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Bloody diarrhea</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High-grade fever</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Bloody vomiting</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Severe dehydration</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">At Montis, we provide comprehensive screening panels that can narrow down the specific cause of your digestive issues. Comprehensive and Advance Gut screening usually contains tests used in the screening of digestive diseases which may include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Fecal occult blood test</strong> - Used to check for blood in the stool.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Stool culture</strong> - Culture tests are used to check for bacteria in the stool.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Urea Breath test</strong> - Test for Helicobacter pylori, the bacteria that causes stomach ulcers</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colonoscopy</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Electromagnetic Resonance Scan (BR) scans</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DLBE test</strong> (Inflammation in the stomach and colon)</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Treating Gut Illnesses</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Untreated diarrhea and vomiting can result in excessive fluid loss and shock. Some pathogens can also produce toxins that can spread to other sites to cause disease. The treatment of digestive diseases is focused on improving disease symptoms, and preventing severe disease.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Fluid replacement and treatment of diarrhea and vomiting are part of the earliest interventions to treat digestive diseases. Oral rehydration therapy with zinc is always recommended to replace fluids lost from diarrhea. Loperamide (Imodium) is an effective anti-diarrheal that is often prescribed to control diarrhea.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Following tests to diagnose the specific cause of the disease, targeted therapy can then start to treat the disease. Antibiotics can be prescribed to treat bacterial diseases, antivirals to treat viral while antiparasitic drugs can be used to treat diseases caused by parasites. At Montis we also provide modern treatment options such as:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon hydrotherapy</strong> - Colon hydrotherapy helps to clear bad bacteria out of the gut to enable good gut bacteria to grow. The process forces cleansing water into the colon through the rectum to flush out colon contents.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Coffee enemas</strong> - Coffee enemas are another form of colon hydrotherapy where coffee is used. In this procedure, brewed coffee is passed into the colon through the colon to clean the colon</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Detox drips</strong> - Detox drips are also helpful to detoxify the blood. Detox drips can contain detox cocktails mixed with vitamins and minerals as a supplement</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Gut Plus</strong> - Probiotics refer to healthy bacteria that are residents of the gut. Gut plus help to maintain healthy gut flora and prevent the growth of bad bacteria that can cause disease. Certain foods also contain probiotics, such as yogurts to restore the normal gut flora. Probiotic supplements are also available that can help improve the probiotics population in the gut.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Gut+ Probiotic (Patented formulation)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The gut is a host to trillions of bacteria - both good and bad. Keeping a constant gut flora population has been proven to be effective in the prevention of digestive diseases, and the maintenance of a healthy gut.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our probiotic supplement, Gut+ probiotic, is loaded with over 20 billion colony-forming units (CFU) of the bacteria, Pylopass. Pylopass is a patented strain of Lactobacillus reuteri from Denmark that has been proven to reduce the bacterial load of Helicobacter pylori in the gut. In turn, it can prevent gastrointestinal symptoms related to H. pylori infection such as heartburn and acid reflux.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 1994, the World Health Organization also labeled Helicobacter pylori as a class 1 carcinogen making it more concerning. Chronic Helicobacter pylori infection can cause metaplastic changes in the stomach which can progress to cancer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pylopass in our Gut+ probiotic supplement offers a safe, non-invasive, non-pharmacological approach to prevent the colonization of the gut by H.pylori. The Pylopass strain in the Gut+ probiotic is designed to target H. pylori without disturbing the normal gut flora.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'revitalization-healthy-aging',
    title: 'Revitalization and Healthy Aging',
    subtitle: 'Anti-aging therapies and revitalization programs',
    icon: Sparkles,
    iconImage: '/service icons/Revitalization & Healthy Aging.png',
    heroImage: '/hero-revitalization.png',
    description: 'Innovative therapies and lifestyle support for healthy aging, vitality, immune function, and long-term well-being.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Revitalization and Healthy Aging</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aging is a natural, continuous process that begins at birth and continues throughout life. While it is inevitable, aging can bring about challenges such as a decline in body functions, leaving individuals more susceptible to conditions like cataracts, osteoarthritis, pulmonary diseases, and dementia.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we are committed to supporting individuals on their journey to healthy aging through innovative therapies and programs that promote vitality, health, and well-being.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is Healthy Aging?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The World Health Organization (WHO) defines healthy aging as: "The process of developing and maintaining the functional ability necessary for well-being in older age."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As we age, the risk of conditions like geriatric syndromes, which impair both physical and mental capacities, increases. While genetics play a role, lifestyle and environment are often the biggest contributors to aging-related health issues.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to help individuals not just age but age healthily, preserving their quality of life and vitality.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Understanding Anti-Aging</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anti-aging encompasses scientific research and medical practices aimed at slowing or preventing age-related diseases. While reversing aging is not yet possible, advances in medical science have made it possible to delay its effects, promoting longer, healthier lives.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, we focus on solutions that enable healthy aging while addressing the early signs of age-related conditions.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Our Therapies and Programs for Revitalization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer a variety of cutting-edge therapies to support healthy aging and revitalization:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Montis Stem Cell Program</strong> utilizes ethically sourced stem cells to replace damaged tissues and rejuvenate the body.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Montis Beauty IV Drips</strong> are packed with antioxidants like Glutathione, Vitamin C, and Collagen Forte to keep your skin radiant and smooth.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon Hydrotherapy</strong> detoxifies the body by cleansing the colon of harmful toxins.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immune System Drips</strong> strengthen your immune system with antioxidant-rich formulas for optimal health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen Therapy</strong> boosts oxygen levels in your body, improving metabolism and overall vitality.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Intermittent Hypoxia Therapy</strong> is a supervised training program in low-oxygen environments to enhance endurance, strength, and energy levels.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Tips for Healthy Aging</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Healthy aging begins with lifestyle choices. Here are key factors to help you age gracefully:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Exercise Regularly:</strong> Maintain physical activity to prevent chronic diseases. Seek guidance for age-appropriate exercises.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Adopt a Healthy Diet:</strong> Focus on nutrient-rich foods like whole grains, fruits, vegetables, and healthy fats while avoiding refined sugars and alcohol.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Maintain a Healthy Weight:</strong> Balance diet and physical activity to prevent obesity and related conditions.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Quit Smoking:</strong> Smoking is a major cause of chronic illnesses. Quitting can significantly improve your health.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Pursue Hobbies:</strong> Engage in enjoyable activities to foster happiness and mental well-being.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Regular Health Screenings:</strong> Monitor health conditions and catch potential issues early. For example, prostate health screenings for men can detect issues early.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Benefits of Revitalization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Revitalization helps combat the decline in vitality and health associated with aging. Benefits include:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Restored energy and vitality.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Improved sexual performance and hormonal balance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduced stress and chronic disease risks.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Enhanced immune function for better disease resistance.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">The Journey to Healthy Aging Starts Here</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While aging is inevitable, how we age is a choice. By adopting healthy lifestyle changes and leveraging advanced therapies, you can maintain your vitality and well-being.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we are here to guide you every step of the way. Explore our revitalization programs and embrace a life of energy, health, and happiness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let's age beautifully, together.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    subtitle: 'Effective weight management and metabolic optimization',
    icon: Scale,
    iconImage: '/service icons/Slenderize for Weight Loss.png',
    heroImage: '/hero-slenderize.png',
    description: 'Professionally guided weight management with BMI screening, lifestyle planning, and supportive therapies for long-term success.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Weight Loss</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weight management is a topic of global importance, with weight loss often recommended for managing chronic diseases such as diabetes and heart disease. Effective weight loss requires careful planning and monitoring by trained professionals to achieve and maintain an optimal, healthy weight.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Understanding BMI</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Body Mass Index (BMI) is a commonly used metric to assess weight in relation to height. It serves as a screening tool for evaluating body fat levels and the potential risk of weight-related health issues.
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">BMI Ranges</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Underweight:</strong> Less than 18.5</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Normal (Healthy):</strong> 18.5 to 24.9</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Overweight:</strong> 25.0 to 29.9</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Obese:</strong> Higher than 30.0</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Severely Obese:</strong> Higher than 40.0</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            BMI can be calculated using the formula: weight in kg divided by height in meters squared. Alternatively, BMI charts provide a quick reference by matching weight and height.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Waist Circumference and Health Risks</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waist circumference is another critical measure for assessing abdominal fat, which is linked to diseases such as diabetes and heart disease.
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">Healthy Waist Circumference Ranges</h4>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Men:</strong></p>
          <ul className="space-y-1 mb-4 ml-4">
            <li className="text-gray-700">* Low Risk: Below 94 cm</li>
            <li className="text-gray-700">* High Risk: 94 to 102 cm</li>
            <li className="text-gray-700">* Very High Risk: Above 102 cm</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Women:</strong></p>
          <ul className="space-y-1 mb-4 ml-4">
            <li className="text-gray-700">* Low Risk: Below 80 cm</li>
            <li className="text-gray-700">* High Risk: 80 to 88 cm</li>
            <li className="text-gray-700">* Very High Risk: Above 88 cm</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">BMI and Its Link to Diseases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A healthy BMI (18.5 to 24.9) significantly reduces the risk of non-communicable diseases, including:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Type 2 Diabetes:</strong> Excess fat releases pro-inflammatory chemicals that contribute to insulin resistance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heart Disease:</strong> High BMI increases plaque buildup in arteries, leading to hypertension, coronary artery disease, and stroke.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Other Conditions:</strong> Obesity can result in mental health challenges, dyslipidemia, certain cancers, and increased mortality risks.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Weight Screening Tests</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to BMI and waist circumference, other diagnostic tests include:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Skinfold Measurements:</strong> Assess subcutaneous fat thickness.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood Lipid Panel:</strong> Measures levels of HDL (good fats) and LDL/triglycerides (bad fats).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood Sugar Tests:</strong> Monitor glucose levels for diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Metabolism Tests:</strong> Evaluate caloric energy expenditure.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DNA Tests:</strong> Identify genetic predispositions to obesity.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Effective Weight Loss Strategies</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Achieving sustainable weight loss involves a combination of dietary, lifestyle, and medical interventions:
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">Diet Adjustments</h4>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduce carbohydrates to lower caloric intake.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Incorporate lean proteins, healthy fats such as olive oil and nuts, and nutrient-dense vegetables.</span></li>
          </ul>
          <h4 className="text-xl font-semibold text-green mb-3">Increased Physical Activity</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regular exercise, including cardio and strength training, accelerates calorie burning and improves overall health.
          </p>
          <h4 className="text-xl font-semibold text-green mb-3">Medical Support</h4>
          <p className="text-gray-700 leading-relaxed">
            Medications, if prescribed, and therapies can complement lifestyle changes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Innovative Therapies at Montis</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer specialized therapies to aid in weight loss:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon Hydrotherapy:</strong> Flushes out toxins, enhancing digestion and metabolism.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Weight Loss Drips:</strong> IV infusions with vitamins such as B12, minerals, and MIC compounds that target fat breakdown.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hypoxia Therapy:</strong> Intermittent low-oxygen sessions improve lipid metabolism and energy levels.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>EECP Therapy:</strong> Enhances blood circulation, supporting metabolic efficiency and fat reduction.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weight loss is a crucial step toward better health and disease prevention. Monitoring weight through tools like BMI and waist circumference provides valuable insights, but sustainable weight loss requires expert guidance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we offer tailored therapies to complement your weight loss journey and ensure long-term success.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Take the first step to a healthier you today!
          </p>
        </section>
      </div>
    ),
  },
];

export const services: Service[] = serviceOrder
  .map((id) => serviceCatalog.find((service) => service.id === id))
  .filter((service): service is Service => Boolean(service));

export const testimonials = [
  {
    name: "Sarah M.",
    service: "Hormone Balancing",
    text: "After struggling with hormonal imbalance for years, Montis Specialist Clinic helped me find balance. Their comprehensive screening and personalized treatment plan changed my life. I feel like myself again!",
    rating: 5,
  },
  {
    name: "James K.",
    service: "Men Vitality Program",
    text: "The Men Vitality Program at Montis is exceptional. The team's approach to men's vitality is both professional and effective. I've seen remarkable improvements in my overall health and energy levels.",
    rating: 5,
  },
  {
    name: "Dr. Elena R.",
    service: "Heart Recovery Health",
    text: "As a medical professional myself, I was impressed by the scientific rigor behind Montis's angiotherapy program. The results speak for themselves - my cardiovascular health has improved significantly.",
    rating: 5,
  },
  {
    name: "Patricia L.",
    service: "Menopause and Perimenopause",
    text: "Navigating menopause was challenging until I found Montis Specialist Clinic. Their compassionate care and effective treatments made this transition so much easier. Highly recommend their menopause program!",
    rating: 5,
  },
  {
    name: "Michael T.",
    service: "Weight Loss",
    text: "Lost 15kg in 3 months with Montis's weight loss program! The combination of IV therapy, hypoxia training, and nutritional guidance was exactly what I needed. Professional team, amazing results.",
    rating: 5,
  },
  {
    name: "Amanda S.",
    service: "Digestive Health",
    text: "Years of digestive issues resolved after just a few sessions at Montis. Their Gut+ probiotic and colon hydrotherapy program worked wonders. My gut health has never been better!",
    rating: 5,
  },
  {
    name: "David H.",
    service: "Heart Recovery Health",
    text: "I was skeptical about angiotherapy at first, but the results are undeniable. My chest pain has decreased dramatically, and I have more energy than I've had in years. The team at Montis is incredibly knowledgeable and supportive.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    service: "Revitalization and Healthy Aging",
    text: "The anti-aging program at Montis Specialist Clinic is absolutely transformative. From IV therapies to personalized wellness plans, every detail is thoughtfully designed. I look and feel 10 years younger!",
    rating: 5,
  },
];

export const contactInfo = {
  address: "Lot 1.02, Menara BRDB, BSC South Tower, 285, Jalan Maarof, Bangsar, 59000 Kuala Lumpur",
  phone: "+60 10-264 8685",
  email: "Oxyz.rabten@gmail.com",
  whatsapp: "+60 10-264 8685",
  hours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "09:00 - 18:00",
    sunday: "09:00 - 18:00",
  },
};
