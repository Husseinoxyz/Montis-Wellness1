import { Activity, Droplets, HeartPulse, Microscope } from 'lucide-react';

export interface Screening {
  id: string;
  title: string;
  shortName: string;
  icon: React.ElementType;
  image: string;
  description: string;
  content: React.ReactNode;
}

export const screenings: Screening[] = [
  {
    id: 'bio-resonance-scanning',
    title: 'Bio-Resonance Scanning',
    shortName: 'BR Scan',
    icon: Activity,
    image: '/screening/Bio-Resonance Scanning (BR Scan).png',
    description: "See what standard tests can't before symptoms even appear.",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">See What Standard Tests Can't - Before Symptoms Even Appear</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most people wait until something feels wrong before they seek help. But by the time symptoms appear, the body has already been under stress for some time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bio-Resonance Scanning (BR Scan) is a non-invasive, 3D health screening tool that detects functional imbalances in the body's organ systems, often long before physical symptoms develop. It is painless, radiation-free, and requires no needles or medication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, the BR Scan is part of our D1 Discovery stage, the essential first step in understanding your body's current state before we design your personalised wellness plan.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Does It Work?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every cell in a healthy body communicates through balanced, organised frequency patterns. When cells are under stress from toxicity, poor nutrition, or inflammation, those signals change.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The BR Scan captures these subtle biological signals and compares them against reference patterns of balanced organ function. It identifies areas of "interference" or imbalance across key body systems including metabolic, immune, and digestive, giving our clinical team a clear functional picture of where your body needs support.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of it like a modern digital stethoscope. Just as a stethoscope helps a doctor decide whether a deeper investigation is needed, the BR Scan evaluates your body's functional signals to determine the right next steps whether that's lifestyle changes, further testing, or targeted wellness support.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Does It Reveal?</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Early functional imbalances across organ systems, before they become symptoms</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Areas of metabolic, immune, or digestive stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">A personalised foundation for your Montis journey</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Key Benefits</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Non-invasive:</strong> No needles, no radiation, no discomfort</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Fast and efficient:</strong> Suitable for almost all individuals</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Proactive:</strong> Identifies functional trends early, supporting prevention rather than reaction</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Personalised:</strong> Results directly inform your customised wellness plan</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Important to Know</h3>
          <p className="text-gray-700 leading-relaxed">
            The BR Scan is a screening and discovery tool, not a medical diagnosis. It does not replace blood tests, imaging (MRI/X-ray), or professional medical consultation. Any significant findings are always reviewed by our medical team, who will advise on the appropriate next steps.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'heart-rate-variability',
    title: 'Heart Rate Variability',
    shortName: 'HRV Analysis',
    icon: HeartPulse,
    image: '/screening/Heart Rate Variability (HRV) Analysis.png',
    description: "Your heart tells the truth - even when you think you're fine.",
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Your Heart Tells the Truth - Even When You Think You're Fine</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You may feel like you're managing well. But underneath the surface, your nervous system may be under far more strain than you realise.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Is HRV Analysis?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heart Rate Variability (HRV) measures the millisecond-level variation between your heartbeats. While it may sound subtle, this variation is one of the most powerful and accurate non-invasive indicators of how your body is truly coping with stress, recovery, and daily life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, HRV Analysis is part of our D1 Discovery stage used as a proactive tool to identify functional imbalances before they develop into symptoms or burnout.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Does It Work?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your body is regulated by the Autonomic Nervous System (ANS), the control centre for involuntary functions like heart rate, digestion, and your stress response. It operates through two modes:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>The Sympathetic System (Gas Pedal):</strong> "Fight or Flight" - active during stress, pressure, and danger.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>The Parasympathetic System (Brake Pedal):</strong> "Rest and Digest" - active during recovery, sleep, and healing.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            A healthy nervous system switches fluidly between both. High HRV means your system is flexible and resilient. Low HRV means your body is stuck in stress mode, with a reduced capacity to recover, heal, and adapt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of it like a car's RPM gauge. If your engine is constantly running at high RPM - even when parked - it will wear out faster. HRV tells us whether your internal engine is responsive and well-tuned or running too hot for too long.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Does It Reveal?</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Your current stress vs. recovery balance</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">How resilient your nervous system is to new stressors</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Early signs of physiological overload or burnout, before they become symptoms</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">The relationship between your emotional state and physical health</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Key Benefits</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Completely non-invasive:</strong> No medication, radiation, or electrical stimulation</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Objective data:</strong> Reveals hidden stress accumulation your mind may not yet register</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Personalised insights:</strong> Results guide targeted recommendations including breathing techniques, sleep hygiene, and supplement protocols</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Preventive:</strong> Identifies burnout territory before you consciously feel it</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How to Improve Your HRV</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based on your results, your Montis team may recommend:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Breathing exercises:</strong> A 5.5-second inhale and exhale, practised for 10-20 minutes daily, is one of the fastest ways to improve HRV. Box Breathing (4-4-4-4) is also used for immediate stress resets.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Foundational supplements:</strong> Magnesium glycinate, Vitamin D3, B-Complex, and Probiotics</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Lifestyle adjustments:</strong> 7-9 hours of consistent sleep, and balancing intense activity with adequate recovery time</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Important to Know</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HRV Analysis is a functional screening tool. It reflects your nervous system's current state, not a structural or medical condition. It does not diagnose heart conditions or clinical anxiety. Any significant findings are referred to an appropriate medical professional for further evaluation.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            "Your heart doesn't lie. HRV reveals your true state - before your mind catches up."
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'dried-layer-blood-encryption',
    title: 'Dried Layer Blood Encryption',
    shortName: 'DLBE',
    icon: Droplets,
    image: '/screening/Dried Layer Blood Encryption (DLBE).png',
    description: 'Uncover what your immune system has been hiding.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Uncover What Your Immune System Has Been Hiding</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most immune imbalances are silent. They accumulate quietly, driving fatigue, inflammation, and accelerated ageing long before any symptoms appear on a standard blood test.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Is DLBE?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dried Layer Blood Encryption (DLBE), also known as the Immunity Test, is a specialised screening technique that analyses dried layers of capillary blood to evaluate the functional status of your immune system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Through pattern recognition and quantitative markers, DLBE maps your immune landscape with a level of detail that conventional tests simply cannot capture.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, DLBE is a cornerstone of the D1 Discovery stage, establishing your immune baseline before any therapeutic intervention begins.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Does It Work?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A small capillary blood sample is applied in layers and allowed to dry. Each layer reveals different biological compartments, from acute inflammation markers in the outer rings to deeper systemic immune patterns closer to the centre. This creates a multi-dimensional immune profile without any invasive procedures.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of your immune system as a building's security system. Some systems are hypersensitive, constantly triggering false alarms (over-reactivity). Others are underperforming, missing real threats entirely (immune suppression). You won't know which until you run a full diagnostic. DLBE is that diagnostic.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Does It Reveal?</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Inflammaging:</strong> chronic low-grade inflammation that silently accelerates cellular ageing</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immune over-reactivity:</strong> the immune system attacking indiscriminately, as seen in allergies and autoimmune tendencies</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immune suppression:</strong> where the body fails to mount an adequate defence, leading to frequent illness and slow recovery</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxidative stress patterns:</strong> linked to specific organs, including the kidneys, liver, cardiovascular system, and gut</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin C and micronutrient status:</strong> a reliable indicator of immune fuel reserves and antioxidant capacity</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Key Benefits</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Multi-dimensional:</strong> Reveals immune patterns that liquid blood panels cannot detect</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Early detection:</strong> Identifies hidden inflammatory drivers before symptoms develop</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Personalised:</strong> Results directly inform your D2 Detox and D3 Defence protocols</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Targeted:</strong> Ensures every therapy we recommend is working with your biology, not against it</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Who Should Consider DLBE?</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Those who fall ill frequently, recover slowly, or feel persistently drained despite adequate rest</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Anyone with known or suspected autoimmune tendencies, chronic pain, or persistent inflammation</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Clients preparing for stem cell therapy, IV drip protocols, or advanced wellness programs</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Anyone on a longevity or anti-ageing program who wants to understand their biology at a cellular level</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Frequently Asked Questions</h3>
          <div className="space-y-5">
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">Is this the same as a regular blood test?</h4>
              <p className="text-gray-700 leading-relaxed">
                Not quite. Standard blood tests analyse fixed markers in a liquid sample. DLBE analyses functional patterns within dried layers of blood, revealing dynamic immune behaviours like how actively your immune system is responding to hidden inflammation that liquid panels often miss.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">Does it hurt?</h4>
              <p className="text-gray-700 leading-relaxed">
                No. It uses a very small capillary sample, similar to a finger-prick, and takes only a few minutes to collect.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">What does "inflammaging" mean for me?</h4>
              <p className="text-gray-700 leading-relaxed">
                It means your immune system may be running a low-grade "background fire", chronic inflammation that is quietly accelerating how quickly your cells age. Once we identify it, we can directly address it through your D2 and D3 protocols.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">I feel healthy. Why would I need this?</h4>
              <p className="text-gray-700 leading-relaxed">
                Many immune imbalances are silent for years before symptoms appear. This test gives us the biological picture beneath the surface so we can build a defence strategy before problems develop, not after.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Important to Know</h3>
          <p className="text-gray-700 leading-relaxed">
            DLBE is an immune status screening tool, not a diagnostic test for medical conditions. Results are communicated in terms of functional patterns and biological terrain, and any clinical concerns are always referred to our medical team for formal investigation.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'live-blood-analysis',
    title: 'Live Blood Analysis',
    shortName: 'LBA',
    icon: Microscope,
    image: '/screening/Live Blood Analysis (LBA).png',
    description: 'See your living biology in real time and understand your body like never before.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">See Your Living Biology in Real Time - and Understand Your Body Like Never Before</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard blood tests give you numbers. Live Blood Analysis gives you a window.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Is Live Blood Analysis?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Live Blood Analysis (LBA) is a non-invasive screening technique in which a single drop of living capillary blood taken from a simple finger-prick is placed under a high-powered dark-field microscope and examined in real time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You see your own blood cells moving, behaving, and existing as they do right now, not in a processed lab sample, but live.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Montis, LBA is the most direct tool in our D1 Discovery stage for assessing your biological terrain, the internal environment that determines how well your cells, tissues, and organs function.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Does It Work?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike conventional blood tests that analyse fixed or processed samples, Live Blood Analysis evaluates the actual behaviour, shape, and movement of living blood cells as they exist in your body right now.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Think of it as Google Maps for your internal biology. A standard blood test is like a paper map, static, delayed, and missing the detail of what's happening right now. Live Blood Analysis is live navigation showing you the real-time condition of your cellular environment, where the congestion is, and the most direct route to your health goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our clinical team guides you through what the patterns mean and how they shape your personalised wellness plan.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What Does It Reveal?</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Red Blood Cell Morphology:</strong> Healthy red blood cells are round, uniform, and move freely. LBA reveals deformities, irregular shapes, and rouleaux formation, where cells stack like coins indicating inflammation or protein excess, all of which impair oxygen delivery throughout the body.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>White Blood Cell Activity:</strong> The real-time view shows white blood cell movement, responsiveness, and quantity, revealing whether your immune system is active, suppressed, or in a state of chronic inflammatory burden.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Plasma Environment:</strong> The liquid surrounding your blood cells reflects systemic purity and toxicity. Cloudy or particle-laden plasma reveals high toxic load, compromised detoxification, and a terrain prone to inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxidative Stress Markers:</strong> Distorted cell shapes and dark-field patterns provide direct visual indicators of oxidative stress, the cumulative cellular damage that accelerates ageing and drives chronic disease.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Nutrient Absorption Status:</strong> Cell membrane integrity and red blood cell shape reliably indicate nutritional sufficiency, revealing deficiencies in key minerals, B vitamins, and essential fatty acids that standard panels often miss.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Key Benefits</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immediate visual feedback:</strong> You see your own biology in real time, creating instant understanding and motivation</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Biological terrain mapping:</strong> Provides the clinical foundation for all D2, D3, and D4 interventions</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxidative stress identification:</strong> Directly visualises cellular damage and informs your antioxidant strategy</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immune readiness assessment:</strong> Confirms your immune state before any therapeutic intervention begins</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Nutrient absorption insights:</strong> Reveals intracellular nutritional status that standard panels cannot match</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Who Is It Best For?</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Anyone beginning the Montis wellness journey providing an immediate biological baseline</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Clients with unexplained fatigue or brain fog whose standard tests return normal</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Those with chronic inflammation, joint pain, or immune imbalances</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Clients reviewing progress after completing a wellness protocol</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Frequently Asked Questions</h3>
          <div className="space-y-5">
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">Does it hurt?</h4>
              <p className="text-gray-700 leading-relaxed">
                Not at all. We use a simple finger-prick to collect a single small drop of blood. It takes only a moment and is very well tolerated.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">How is this different from a regular blood test?</h4>
              <p className="text-gray-700 leading-relaxed">
                Standard blood tests process and analyse fixed samples. The results reflect a snapshot taken out of context. Live Blood Analysis shows your blood as it is right now, alive and moving, revealing cellular behaviours and terrain qualities that standard panels simply cannot capture.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">What does it mean if my red blood cells are "stacking"?</h4>
              <p className="text-gray-700 leading-relaxed">
                This is called rouleaux formation, where red blood cells stack like coins. It indicates elevated inflammatory proteins or excess acidity in the plasma, reducing the cells' ability to carry oxygen efficiently. It is a clear signal that your terrain needs support, which our D2 Detox protocols are designed to address.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">Can this tell me what diseases I have?</h4>
              <p className="text-gray-700 leading-relaxed">
                No. Live Blood Analysis is a terrain assessment, not a medical diagnosis. It tells us about the functional quality and environment of your blood and that information guides your wellness protocols. Any clinical concerns identified are always referred to our medical team for formal investigation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green mb-2">Will I be able to see my own blood?</h4>
              <p className="text-gray-700 leading-relaxed">
                Yes, and most clients find this the most compelling part of the experience. Seeing your own living biology in real time creates an immediate and powerful understanding of why the protocols we recommend matter.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Important to Know</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Live Blood Analysis is a functional health assessment tool, not a diagnostic procedure for medical conditions. It does not replace clinical laboratory investigations or physician diagnosis.
          </p>
          <h3 className="text-2xl font-semibold text-green mb-4">Begin with Discovery</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before we treat, we listen. Before we intervene, we understand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Montis D1 Discovery stage - BR Scan, HRV Analysis, DLBE, and Live Blood Analysis - gives you and our clinical team a complete, real-time picture of your body's current state. Every treatment, every protocol, and every recommendation that follows is grounded in this foundation.
          </p>
        </section>
      </div>
    ),
  },
];
