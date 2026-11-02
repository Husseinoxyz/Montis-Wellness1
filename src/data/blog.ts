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
  /** Named author; posts without one are credited to the medical team. */
  author?: string;
  body: Block[];
  faqs: { q: string; a: string }[];
  relatedService?: string;
  furtherReading?: { label: string; href: string }[];
}

const WP = 'https://wellness-blogs.montis-clinic.com';

export const blogPosts: BlogPost[] = [
  {
    slug: 'skin-issues-check-your-gut',
    title: 'Skin Issues? Check Your Gut',
    seoTitle: 'Skin Issues? Check Your Gut: The Gut-Skin Axis',
    description:
      'Breakouts that won’t clear up may start in your gut. A nutritionist explains the gut-skin axis, dysbiosis, and how fiber and fermented foods support clearer skin.',
    excerpt:
      'You’ve probably thought of skin issues as merely cosmetic, but there’s much more happening inside your body. Here is how your gut and skin “talk” to each other.',
    category: 'Digestive Health',
    date: '2026-11-02',
    image: '/blog/gut-skin.webp',
    imageAlt: 'Woman resting her chin in her hand, looking at her skin concerns',
    author: 'Nutritionist Cheryl Dorothy Jusuf',
    relatedService: 'digestive-health',
    body: [
      {
        type: 'p',
        text: 'A friend of mine struggled with breakouts for years, assuming they were just from stress. It wasn’t until she visited a dermatologist that she found the real cause: her diet. You’ve probably thought of skin issues as merely cosmetic, but there’s much more happening inside your body.',
      },
      { type: 'h2', text: 'The gut-skin axis' },
      {
        type: 'p',
        text: 'Did you know that your gut contains around 38–39 trillion bacteria? Nearly the same as the total number of cells in your body. They are the tiny organisms that aid your gut’s ability to absorb nutrients, like B vitamins, vitamin C, and zinc.',
      },
      {
        type: 'p',
        text: 'These gut bacteria are key players in a communication system called the **gut-skin axis** – the way your gut and skin constantly “talk” to each other. One example of their conversation: your gut bacteria facilitate your absorption of the nutrients mentioned earlier, which your skin uses to boost collagen production and stay healthy.',
      },
      { type: 'h2', text: 'How an unhealthy gut shows up' },
      {
        type: 'p',
        text: 'Yet like any conversation, things don’t always go smoothly. When your gut bacteria fall out of balance – known as **dysbiosis** – harmful bacteria can start to outnumber the beneficial bacteria. This imbalance often triggers inflammation, and because of the gut-skin axis, the effect can appear as breakouts, or other skin issues.',
      },
      { type: 'h2', text: 'Does that mean skincare is useless?' },
      {
        type: 'p',
        text: 'Of course not. Skincare can genuinely hydrate your skin, keeping the plumpness even as you age. The right ingredients can soothe irritation and shield your skin against sun and pollution.',
      },
      {
        type: 'p',
        text: 'That said, when the root cause starts in your gut, no matter how good your serum is, it won’t solve the problem. Topical products may be effective in treating the surface, but inflammation happens at a cellular level – deeper than anything you can apply.',
      },
      { type: 'h2', text: 'Feeding your gut bacteria' },
      {
        type: 'p',
        text: 'Think of your gut bacteria like a garden. Feed them properly, and they will flourish. Now, what should you feed them?',
      },
      {
        type: 'p',
        text: 'Gut bacteria’s favorite: **fiber**. Your small intestine absorbs most of the nutrients from the food you eat, except for fiber, as it passes through your large intestine, where your gut bacteria make their home. You’ll find fiber in whole grains, lentils, green leafy veggies, and sweet potatoes. If these examples aren’t part of your routine, you can simply swap them into your daily meals.',
      },
      {
        type: 'p',
        text: 'And then, there’s **fermented food**. While fiber feeds your gut bacteria, fermented food, such as yogurt, kimchi, miso, and tempeh, adds new bacteria directly to your gut. Together, the two keep your gut balanced.',
      },
      { type: 'h2', text: 'Your gut bacteria’s support system' },
      {
        type: 'p',
        text: 'Following a healthy diet encourages a balanced gut, but sometimes it’s easier said than done. Remember my friend from earlier? Alongside her diet changes, she took a probiotic supplement – OXYZ’s **Gut+ Probiotic** – to support her gut on days her meals alone weren’t enough.',
      },
      {
        type: 'p',
        text: 'Want to see if Gut+ Probiotic could support your gut too? [Talk to our team](/contact).',
      },
    ],
    faqs: [],
  },
  {
    slug: 'magnesium-for-sleep',
    title: 'Struggling to Sleep? The Secret May Be Hiding in Your Diet',
    seoTitle: 'Struggling to Sleep? Magnesium and Your Diet',
    description:
      'Why magnesium matters for sleep: how it supports GABA and melatonin, which types of magnesium help with sleep, and the everyday foods that contain it.',
    excerpt:
      'Ever laid in bed at 3am wondering why your body won’t switch off? Magnesium plays a bigger role in sleep quality than most people realize.',
    category: 'Sleep & Nutrition',
    date: '2026-11-02',
    image: '/blog/sleep-magnesium.webp',
    imageAlt: 'Woman sleeping peacefully in a white bed',
    author: 'Nutritionist Cheryl Dorothy Jusuf',
    relatedService: 'hormone-balancing',
    body: [
      {
        type: 'p',
        text: 'Have you ever laid in bed at 3am, tossing and turning, wondering why your body won’t switch off? Been there – way too many times, honestly. My mind would race through everything. I always figured it was just me overthinking something awkward I did yesterday, or last week. Turns out, that wasn’t the only thing.',
      },
      { type: 'h2', text: 'The missing piece: magnesium' },
      {
        type: 'p',
        text: 'I started digging deeper until I learned that magnesium plays a bigger role in managing sleep quality than people realize. Not exactly the first thing you would guess, right? Struggling to sleep often means your nervous system is stuck in overdrive mode. And here’s where magnesium steps up.',
      },
      {
        type: 'p',
        text: 'Magnesium works on two fronts. Let’s start with **GABA**. Think of GABA as a brake pedal. It stops your brain from racing so you can relax, especially at bedtime. As magnesium boosts GABA activity, your nervous system settles instead of staying alert. Second, there’s **melatonin**. Magnesium supports melatonin production, the hormone that whispers to your body, “Hey, time to sleep.” Every night, your melatonin levels naturally rise, making you feel sleepy until you drift off.',
      },
      {
        type: 'p',
        text: 'Now, we flip the script. What happens if you don’t have enough magnesium? Your brain’s brake pedal isn’t doing its job properly. That’s why you’ve been lying down with your eyes closed for a solid 20 minutes, still choosing what you’ll wear tomorrow.',
      },
      { type: 'h2', text: 'Magnesium isn’t one-size-fits-all' },
      {
        type: 'p',
        text: 'The catch is, you can’t just grab any bottle of magnesium and expect to sleep like a baby. There are multiple types of magnesium, and each serves its own purpose.',
      },
      {
        type: 'p',
        text: 'Magnesium malate, taurate, and orotate are taken by most people to enhance overall metabolic function. For people who want to support their digestion, magnesium citrate and oxide are the go-tos, while magnesium chloride and sulfate are commonly applied to the skin to reduce muscle soreness. Interestingly, outside of supplementation, the F&B industry uses magnesium lactate as a food additive.',
      },
      {
        type: 'p',
        text: 'And for sleep-related concerns, two stand out: **magnesium glycinate** and **L-threonate**.',
      },
      {
        type: 'p',
        text: 'The crowd favorite is magnesium glycinate – magnesium paired with glycine, known for giving you a calming effect to sleep. It’s gentle on digestion, safe for people with sensitive stomachs. Meanwhile, another choice worth knowing is magnesium L-threonate, the one that’s able to reach the brain effectively. With magnesium L-threonate, the goal goes beyond falling asleep alone – your body may slip into deep sleep, the phase for its real recovery.',
      },
      {
        type: 'p',
        text: 'Still, not everyone needs to immediately jump into a supplement. You’ll find magnesium in your daily foods too, like avocados, soybeans, bananas, or even a little chunk of dark chocolate in your fridge.',
      },
      { type: 'h2', text: 'Still guessing?' },
      {
        type: 'p',
        text: 'One thing to remember: I can’t say which magnesium is the best, but you can find out which one suits you the most. Rather than guessing by yourself, [talk to us](/contact). We won’t let you stare at the ceiling at 3am again.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'healing-leaky-gut-beyond-fiber',
    title: 'Beyond Fiber: The Three-Tier Approach to Healing a Leaky Gut',
    seoTitle: 'Beyond Fiber: A Three-Tier Approach to Leaky Gut',
    description:
      'Eating more fiber but still bloated? A nutritionist explains why fiber alone may not be enough, and how prebiotics, probiotics and postbiotics work together for gut health.',
    excerpt:
      '“I’ve been eating more vegetables and whole grains… so why do I still feel bloated?” Why fiber sometimes isn’t enough on its own, and what your gut may need instead.',
    category: 'Digestive Health',
    date: '2026-11-02',
    image: '/blog/leaky-gut-fiber.webp',
    imageAlt: 'Fresh fibre-rich vegetables, mushrooms and raspberries',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'digestive-health',
    body: [
      {
        type: 'p',
        text: '*“I’ve been eating more vegetables, switched to whole grains, and even started taking fiber supplements… So why do I still feel bloated?”*',
      },
      { type: 'p', text: 'It’s a question I hear surprisingly often.' },
      {
        type: 'p',
        text: 'Many people assume that once they start eating healthier, their digestive issues will disappear. But after speaking with clients who continue to struggle despite making all the “right” food choices, I began noticing a pattern.',
      },
      {
        type: 'p',
        text: 'It wasn’t that they weren’t eating enough fiber. It was that they were expecting fiber to do everything.',
      },
      { type: 'h2', text: 'When fiber isn’t the whole answer' },
      {
        type: 'p',
        text: 'As nutritionists, we’re taught that fiber is the foundation of gut health, and that’s absolutely true. Whole grains, fruits, vegetables, and legumes feed the beneficial bacteria living in our gut. In return, these bacteria produce **short-chain fatty acids (SCFAs)** that help nourish and protect the intestinal lining.',
      },
      {
        type: 'p',
        text: 'But here’s something I think we don’t talk about enough. What if those beneficial bacteria have already been reduced?',
      },
      {
        type: 'p',
        text: 'Many of us have gone through rounds of antibiotics, periods of chronic stress, illness, or years of inconsistent eating habits. Over time, these can disrupt the gut microbiome.',
      },
      {
        type: 'p',
        text: 'Imagine trying to feed a community that has slowly disappeared. No matter how much food you provide, there simply aren’t enough people left to make full use of it. That’s exactly why fiber sometimes isn’t enough on its own.',
      },
      { type: 'h2', text: 'Thinking beyond fiber' },
      {
        type: 'p',
        text: 'Once I understood this, the conversation around gut health started to make much more sense. Instead of asking, “How can I eat more fiber?” perhaps the better question is, “What does my gut actually need right now?”',
      },
      { type: 'p', text: 'A healthy gut ecosystem depends on three things:' },
      {
        type: 'ul',
        items: [
          '**It needs to be fed.** That’s where prebiotic fibers like psyllium husk come in.',
          '**It may need to be rebuilt.** Beneficial bacteria such as *Lactobacillus acidophilus* can help restore balance to the gut microbiome.',
          '**It needs support to repair itself.** This is where postbiotics – the beneficial compounds produced by healthy bacteria – play an important role. These compounds help support the intestinal barrier while the microbiome continues to recover.',
        ],
      },
      { type: 'p', text: 'Different jobs. Different roles. One healthier gut.' },
      { type: 'h2', text: 'Putting it all together' },
      {
        type: 'p',
        text: 'This is the idea behind **Tribiomic**. Rather than focusing on just one aspect of gut health, it combines psyllium husk to nourish beneficial bacteria, *Lactobacillus acidophilus* to support a balanced microbiome, and PosBion, a source of postbiotics, to help support the gut lining.',
      },
      {
        type: 'p',
        text: 'It’s not about replacing the advice to eat more fiber. It’s about recognizing that sometimes, the gut needs more than just fuel.',
      },
      { type: 'h2', text: 'Something worth thinking about' },
      {
        type: 'p',
        text: 'The next time your gut isn’t feeling its best, don’t just ask yourself, “Am I eating enough fiber?” Try asking instead, “Am I supporting my gut in every way it needs?”',
      },
      {
        type: 'p',
        text: 'Healing the gut isn’t usually about finding one magical ingredient. It’s about understanding that your gut is an ecosystem, and like any ecosystem, it thrives when every part works together.',
      },
      {
        type: 'p',
        text: 'So keep eating your fiber-rich foods. They’re still the foundation. But remember that sometimes, building a healthier gut means looking beyond the basics and giving your gut the complete support it deserves.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'h-pylori-digestion',
    title: 'The Silent Invader: How H. Pylori Hijacks Digestion (And How to Evict It)',
    seoTitle: 'H. Pylori: How It Hijacks Digestion and How to Evict It',
    description:
      'Bloating, fatigue and low iron or B12 that keep coming back may point to H. pylori. A nutritionist explains how it affects digestion and how it is tested and managed.',
    excerpt:
      '“I’ve been taking iron supplements for months, but I’m still exhausted.” Bloating, fatigue and recurring deficiencies can share one hidden culprit.',
    category: 'Digestive Health',
    date: '2026-11-02',
    image: '/blog/h-pylori-stomach.webp',
    imageAlt: 'Tired man sitting on the edge of his bed, feeling unwell',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'digestive-health',
    body: [
      {
        type: 'p',
        text: '*“I don’t understand. I’ve been taking iron supplements for months, but I’m still exhausted.”*',
      },
      { type: 'p', text: 'I’ve heard some version of this more than once.' },
      {
        type: 'p',
        text: 'Sometimes it’s bloating after almost every meal. Sometimes it’s a vitamin B12 deficiency that keeps coming back despite supplements. Others simply tell me, “I just don’t feel like myself anymore.”',
      },
      {
        type: 'p',
        text: 'At first, these seem like separate problems. A sensitive stomach. A busy lifestyle. Maybe just stress.',
      },
      {
        type: 'p',
        text: 'But every now and then, they point to the same hidden culprit: **Helicobacter pylori (H. pylori)**, a bacterium that quietly lives in the stomach. In fact, it’s estimated that nearly half of the world’s population carries it, often without realizing it.',
      },
      { type: 'h2', text: 'When the real problem isn’t what you think' },
      {
        type: 'p',
        text: 'One thing I’ve noticed is that many people focus on treating the symptoms. They take supplements for low iron. They avoid foods that seem to trigger bloating. They drink more coffee to push through the fatigue.',
      },
      {
        type: 'p',
        text: 'But if the underlying cause isn’t addressed, those symptoms often find a way back.',
      },
      {
        type: 'p',
        text: 'That’s because H. pylori doesn’t just sit in the stomach. Over time, it can interfere with stomach acid production and irritate the stomach lining. Since stomach acid plays an important role in breaking down food and absorbing nutrients like iron and vitamin B12, digestion becomes less efficient.',
      },
      {
        type: 'p',
        text: 'Suddenly, the bloating, tiredness, and nutrient deficiencies don’t seem like separate problems anymore. They’re all connected.',
      },
      { type: 'h2', text: 'A different way to think about treatment' },
      {
        type: 'p',
        text: 'For many years, antibiotics have been the standard treatment for H. pylori, and they continue to play an important role under medical supervision. But researchers have also been looking at ways to support the body using more targeted approaches.',
      },
      {
        type: 'p',
        text: 'One example is **Lactobacillus reuteri DSM 17648**, a specific probiotic strain with a fascinating mechanism. Instead of trying to kill H. pylori directly, it works through **coaggregation**, a process where different bacteria physically bind to one another.',
      },
      {
        type: 'p',
        text: 'I like to think of it as tiny pieces of Velcro. The probiotic attaches itself to H. pylori, making it harder for the bacteria to remain attached to the stomach lining. It can then pass through the digestive tract and be removed naturally.',
      },
      {
        type: 'p',
        text: 'This is the science behind **Gut+**, which uses *Lactobacillus reuteri* DSM 17648 to support a more targeted approach to managing H. pylori.',
      },
      { type: 'h2', text: 'Don’t just silence the symptoms' },
      {
        type: 'p',
        text: 'The next time your body keeps sending the same signals – persistent bloating, unexplained fatigue, or recurring low iron or vitamin B12 – pause before assuming they’re unrelated. Ask yourself: **“Am I treating the symptom… or looking for what’s causing it?”**',
      },
      {
        type: 'note',
        text: 'If these issues continue, speak with a healthcare professional. Simple tests, such as a breath or stool test, can determine whether H. pylori is present and help guide the most appropriate treatment.',
      },
      {
        type: 'p',
        text: 'Sometimes, better health doesn’t begin with another supplement. Sometimes, it begins with asking a better question. Because when we stop chasing symptoms and start understanding the story behind them, we’re one step closer to lasting gut health.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'weight-gain-same-calories',
    title: 'Why Do Some People Gain Weight on the Same Calories?',
    seoTitle: 'Why Do Some People Gain Weight on the Same Calories?',
    description:
      'Two people eat the same, yet only one gains weight. A nutritionist explains metabolic adaptation, the gut microbiome, visceral fat, and a smarter way to support metabolism.',
    excerpt:
      'Most of us grow up believing weight management is simple: eat less, move more. So why can the results be so different from one person to another?',
    category: 'Metabolic Health',
    date: '2026-11-02',
    image: '/blog/weight-scale.webp',
    imageAlt: 'Person standing on a digital bathroom scale',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'weight-loss',
    body: [
      {
        type: 'p',
        text: '**One thing that’s always fascinated me is how differently our bodies respond to food.**',
      },
      {
        type: 'p',
        text: 'I’ve seen two people with almost identical lifestyles. They eat similar meals, have similar activity levels, yet one maintains their weight effortlessly while the other struggles to lose even a few kilograms.',
      },
      { type: 'p', text: 'At first glance, it doesn’t seem fair.' },
      {
        type: 'p',
        text: 'Most of us grow up believing weight management is simple: eat less, move more. And while that’s certainly part of the picture, it doesn’t explain why the results can be so different from one person to another.',
      },
      {
        type: 'p',
        text: 'So I started asking a different question. What if it’s not just about how much we eat, but how our bodies process what we eat?',
      },
      { type: 'h2', text: 'When eating less stops working' },
      {
        type: 'p',
        text: 'Many people eventually reach a point where cutting calories no longer seems to help. They skip meals, avoid their favourite foods, and spend more time exercising. The scale might move at first, but after a while, everything slows down.',
      },
      {
        type: 'p',
        text: 'It’s frustrating because they’re putting in more effort than ever, yet seeing fewer results. The truth is, our bodies are designed to adapt.',
      },
      {
        type: 'p',
        text: 'When we consistently eat too little, the body can become more efficient at conserving energy. At the same time, blood sugar fluctuations may increase hunger and cravings, making it even harder to stay on track.',
      },
      {
        type: 'p',
        text: 'That’s why weight management isn’t always as straightforward as calories in versus calories out.',
      },
      { type: 'h2', text: 'There’s more happening inside your gut than you think' },
      {
        type: 'p',
        text: 'Over the past few years, scientists have uncovered something really interesting. The bacteria living in our gut don’t just help digest food; they also communicate with our metabolism.',
      },
      {
        type: 'p',
        text: 'Together, these microbes form the **gut microbiome**, which plays a role in how our bodies use energy, regulate fat storage, and respond to the foods we eat. This could help explain why some people are more likely to store excess body fat even when they’re making healthy choices.',
      },
      {
        type: 'p',
        text: 'One area researchers are particularly interested in is **visceral fat**, the fat that surrounds our internal organs. Unlike the fat just beneath the skin, visceral fat is more closely linked to metabolic and cardiovascular health risks.',
      },
      { type: 'h2', text: 'Supporting metabolism in a smarter way' },
      {
        type: 'p',
        text: 'One ingredient that caught my attention is **Bifidobacterium animalis subsp. lactis BPL1**, a heat-treated postbiotic used in **Meta Boost**.',
      },
      {
        type: 'p',
        text: 'What I find interesting is that its focus isn’t on helping people eat less. Instead, research suggests it may help support metabolic pathways involved in body composition and fat storage, particularly visceral fat.',
      },
      {
        type: 'p',
        text: 'Rather than relying on stricter diets or endless calorie counting, it’s about giving your metabolism the support it needs to function more effectively.',
      },
      { type: 'h2', text: 'Looking at weight management differently' },
      {
        type: 'p',
        text: 'The next time you find yourself thinking, “Maybe I just need to eat even less,” take a moment to consider another possibility. Could your metabolism simply need better support?',
      },
      {
        type: 'p',
        text: 'Healthy eating, regular exercise, quality sleep, and stress management will always be the foundation of good health. But understanding your gut adds another piece to the puzzle.',
      },
      {
        type: 'p',
        text: 'Because sometimes the goal isn’t to fight your body harder. It’s to understand how it works and give it the support it needs to do what it was designed to do.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'magnesium-calcium-metabolism',
    title: 'The Mineral Connection Between Your Metabolism and Magnesium and Calcium',
    seoTitle: 'Magnesium, Calcium and Your Metabolism',
    description:
      'Feeling tired with a “slow” metabolism despite eating well? A nutritionist explains how magnesium and calcium power ATP, muscle and cell signalling, and why the basics come first.',
    excerpt:
      'On paper, everything looked right, yet they still felt tired every afternoon. Sometimes it’s the small nutrients working behind the scenes that make all the difference.',
    category: 'Metabolic Health',
    date: '2026-11-02',
    image: '/blog/magnesium-almonds.webp',
    imageAlt: 'Magnesium-rich almonds spilling from a glass jar',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'weight-loss',
    body: [
      {
        type: 'p',
        text: 'I remember reviewing a client’s food diary once. On paper, everything looked right. There was enough protein, plenty of vegetables, regular exercise, and even a consistent sleep schedule.',
      },
      {
        type: 'p',
        text: 'Yet they still felt tired most afternoons and constantly described their metabolism as “slow.”',
      },
      {
        type: 'p',
        text: 'It made me think about something we don’t talk about often. Sometimes, it isn’t the big things holding us back. Sometimes, it’s the small nutrients quietly working behind the scenes that make all the difference.',
      },
      { type: 'h2', text: 'Your metabolism runs on more than calories' },
      {
        type: 'p',
        text: 'When most people think about metabolism, they immediately think about burning fat. But metabolism is much bigger than weight loss.',
      },
      {
        type: 'p',
        text: 'Every heartbeat, every breath, every step you take depends on thousands of chemical reactions happening inside your body every second. To keep those reactions running efficiently, your body relies on a steady supply of nutrients, including minerals that are often overlooked.',
      },
      { type: 'p', text: 'Two of the most important are **magnesium** and **calcium**.' },
      { type: 'h2', text: 'The nutrients your cells depend on' },
      {
        type: 'p',
        text: 'Every cell in your body needs energy to function. That energy comes from **ATP (adenosine triphosphate)**, often called the body’s energy currency.',
      },
      {
        type: 'p',
        text: 'Magnesium helps activate the processes that produce and use ATP, while calcium supports muscle contraction and allows cells to communicate with one another.',
      },
      {
        type: 'p',
        text: 'They may not receive the same attention as protein or vitamins, but without them, many of the body’s normal functions simply can’t work as efficiently.',
      },
      { type: 'h2', text: 'Why the basics matter' },
      {
        type: 'p',
        text: 'It’s easy to be drawn to the latest metabolism hacks or trending supplements. I understand why everyone wants results. But before we look for ways to optimize metabolism, we have to ask whether the body has the building blocks it needs in the first place.',
      },
      {
        type: 'p',
        text: 'Think of it like building a house. You wouldn’t start decorating before pouring the foundation. The same idea applies to your metabolism.',
      },
      {
        type: 'p',
        text: 'Magnesium and calcium provide part of that foundation by supporting the processes your body depends on every day. Once those basics are covered, targeted support like **Meta Boost** can complement your efforts by helping support metabolic pathways involved in energy balance. Read more in [why some people gain weight on the same calories](/blog/weight-gain-same-calories).',
      },
      { type: 'h2', text: 'Looking at metabolism differently' },
      {
        type: 'p',
        text: 'The next time you feel like your metabolism isn’t keeping up, don’t just ask, “What else should I add?” Instead, ask, “Have I covered the basics that my body relies on every day?”',
      },
      {
        type: 'p',
        text: 'Healthy metabolism isn’t built overnight, and it isn’t built on shortcuts. It starts with balanced nutrition, essential minerals, regular movement, and consistent habits.',
      },
      {
        type: 'p',
        text: 'Because sometimes, the strongest foundation isn’t the most exciting part of the journey, but it’s the part everything else depends on.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'gut-lung-axis-immunity',
    title: 'Healthy Lungs Begin in Your Gut',
    seoTitle: 'Healthy Lungs Begin in Your Gut: The Gut-Lung Axis',
    description:
      'Seasonal allergies, eczema and frequent colds may be linked to your gut. A nutritionist explains the gut-lung axis, cytokine balance and supporting immunity from the inside out.',
    excerpt:
      'A blocked nose every allergy season, eczema that flares for no reason, every cold going around. What if the real issue begins in your gut?',
    category: 'Immune Health',
    date: '2026-11-02',
    image: '/blog/gut-lung-breathing.webp',
    imageAlt: 'Woman taking a deep breath of fresh air outdoors',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'autoimmune-treatment',
    body: [
      {
        type: 'p',
        text: 'For some people, it’s a blocked nose that returns every allergy season. Others struggle with eczema that flares up for no obvious reason. Some seem to catch every cold that’s going around, even though they’re already taking vitamin C, zinc, or elderberry every day.',
      },
      {
        type: 'p',
        text: 'Most people assume the problem starts with their lungs, nose, or skin. But what if it actually starts somewhere else? What if the real issue begins in your gut?',
      },
      { type: 'h2', text: 'Your gut does more than digest food' },
      {
        type: 'p',
        text: 'When we think about gut health, digestion is usually the first thing that comes to mind. Bloating, constipation, or an upset stomach are easy to connect to the gut.',
      },
      {
        type: 'p',
        text: 'What many people don’t realize is that the gut also plays a major role in regulating the immune system. In fact, many immune-related issues that seem completely unrelated to digestion, like seasonal allergies, eczema, or frequent respiratory infections, may be linked to what’s happening inside your gut.',
      },
      {
        type: 'p',
        text: 'When the gut microbiome is healthy and balanced, it helps the immune system respond appropriately to harmful bacteria and viruses. But when that balance is disrupted, the immune system can become overly sensitive, triggering more inflammation than necessary.',
      },
      { type: 'h2', text: 'The hidden connection between your gut and your lungs' },
      {
        type: 'p',
        text: 'Scientists call this relationship the **gut-lung axis**. I think of it as a communication pathway between your gut and your respiratory system. They may seem far apart, but they’re constantly sending signals to each other.',
      },
      {
        type: 'p',
        text: 'One of the ways they communicate is through molecules called **cytokines**, which help control inflammation and immune responses. When these signals stay balanced, your immune system knows when to react and when to stay calm.',
      },
      {
        type: 'p',
        text: 'However, if cytokine signalling becomes unbalanced, the immune system may overreact. This can contribute to seasonal allergies, respiratory irritation, and inflammatory skin conditions such as eczema.',
      },
      {
        type: 'p',
        text: 'That’s why supporting your gut isn’t only about improving digestion. It’s also about helping your immune system stay balanced.',
      },
      { type: 'h2', text: 'Supporting immunity from the inside out' },
      {
        type: 'p',
        text: 'One probiotic strain that has attracted attention is **Lactobacillus sakei ProBio-65**, originally isolated from traditional fermented foods. Research suggests this strain may help support healthy immune communication by helping regulate cytokine activity.',
      },
      {
        type: 'p',
        text: 'By promoting a more balanced inflammatory response, it may support respiratory health while also helping to reduce symptoms associated with atopic dermatitis (eczema).',
      },
      {
        type: 'p',
        text: 'This is the idea behind **Immune Breathe**. Rather than simply masking symptoms, it focuses on supporting the body’s natural connection between the gut and the immune system.',
      },
      { type: 'h2', text: 'A different way to think about allergies' },
      {
        type: 'p',
        text: 'The next time allergy season arrives, or your eczema starts acting up again, try asking yourself a different question. Instead of wondering, “How do I stop these symptoms?” ask, “Could my gut be influencing how my immune system responds?”',
      },
      {
        type: 'p',
        text: 'Of course, nutrients like vitamin C, zinc, and a balanced diet are still important for maintaining a healthy immune system. But they may only be one part of the picture. Supporting your gut could be another missing piece.',
      },
      {
        type: 'p',
        text: 'Because when your gut and immune system work together, your body is better equipped to respond appropriately instead of overreacting. Sometimes, protecting your breath really does begin with protecting your gut.',
      },
    ],
    faqs: [],
  },
  {
    slug: 'whartons-jelly-vs-collagen',
    title: 'Why Wharton’s Jelly Signaling Matters More Than Collagen',
    seoTitle: 'Why Wharton’s Jelly Signaling Matters More Than Collagen',
    description:
      'Collagen provides the building blocks, but cells also need the right signals. A nutritionist explains the extracellular matrix, cell signalling and Wharton’s jelly for healthy ageing.',
    excerpt:
      '“I’ve finished so many tubs of collagen, but I don’t really know if it’s doing much anymore.” What if healthy ageing is about more than adding collagen?',
    category: 'Regenerative Medicine',
    date: '2026-11-02',
    image: '/blog/collagen-serum.webp',
    imageAlt: 'Woman applying a facial serum for healthy ageing skin',
    author: 'Nutritionist Nema Seeboruth',
    relatedService: 'revitalization-healthy-aging',
    body: [
      {
        type: 'p',
        text: 'A few months ago, I was chatting with someone who had been taking collagen every single day for almost a year. She smiled and said, “I’ve finished so many tubs of collagen, but I don’t really know if it’s doing much anymore.”',
      },
      {
        type: 'p',
        text: 'It wasn’t that the collagen wasn’t good. It simply made me think about something we don’t often talk about. What if healthy aging isn’t just about giving the body more collagen? What if our cells also need the right signals to know what to do with it?',
      },
      {
        type: 'p',
        text: 'That conversation stayed with me because it’s easy to assume that more is always better. More collagen, more protein, more supplements. But our bodies are far more intelligent than that.',
      },
      { type: 'h2', text: 'Collagen is important, but it’s only part of the story' },
      {
        type: 'p',
        text: 'Collagen is one of the main proteins that gives our skin, joints, and connective tissues their strength and structure. That’s why it’s often recommended for healthy aging, skin health, and joint support. And it absolutely has its place.',
      },
      {
        type: 'p',
        text: 'But providing the raw materials is only one part of the repair process. Our cells also need instructions that tell them when and how to repair damaged tissue.',
      },
      { type: 'h2', text: 'Your cells are constantly talking to each other' },
      {
        type: 'p',
        text: 'One thing I find fascinating is that our bodies are communicating all the time. Every day, billions of cells send and receive messages that help coordinate repair, recovery, and renewal.',
      },
      {
        type: 'p',
        text: 'Much of this happens within the **extracellular matrix**, the supportive framework surrounding our cells that helps maintain tissue strength, flexibility, and structure. It isn’t just a scaffold that holds everything together. It’s also part of the environment where cells receive the signals that guide how tissues grow and repair themselves.',
      },
      {
        type: 'p',
        text: 'As we get older, these communication signals naturally become less efficient, which is one reason our skin, joints, and recovery don’t feel quite the same as they used to.',
      },
      { type: 'h2', text: 'Looking beyond traditional collagen' },
      {
        type: 'p',
        text: 'This is why I became interested in **Sheep Umbilical Cord Wharton’s Jelly**, the key ingredient in **Oral MSC**.',
      },
      {
        type: 'p',
        text: 'Unlike collagen, which mainly provides structural proteins, Wharton’s jelly naturally contains signaling proteins, growth factors, and extracellular matrix components that researchers are studying for their role in supporting cellular communication.',
      },
      {
        type: 'p',
        text: 'I like to think of it this way: if collagen provides the bricks, Wharton’s jelly helps provide the blueprint that tells the builders where those bricks are needed.',
      },
      {
        type: 'p',
        text: 'It’s not about replacing collagen; it’s about understanding that healthy tissue repair involves much more than just one ingredient. For the wider science, see our guides to [stem cell therapy](/blog/stem-cell-therapy-kuala-lumpur) and [cell therapy](/blog/cell-therapy-guide).',
      },
      { type: 'h2', text: 'A different way to think about healthy aging' },
      {
        type: 'p',
        text: 'These days, whenever someone asks me whether collagen is enough, my answer is usually the same. Collagen is important. But healthy aging is about more than simply adding building blocks. Our bodies also rely on the biological signals that help guide repair and renewal every single day.',
      },
      {
        type: 'p',
        text: 'Of course, no supplement can replace a balanced diet, regular exercise, good sleep, and healthy lifestyle habits. But as our understanding of nutrition continues to evolve, we’re learning that supporting our cells isn’t only about giving them the materials they need.',
      },
      {
        type: 'p',
        text: 'Sometimes, it’s also about helping them remember what to do with those materials.',
      },
    ],
    faqs: [],
  },
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
