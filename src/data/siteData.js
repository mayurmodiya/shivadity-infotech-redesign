import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  BrainCircuit,
  Code2,
  Globe,
  Layers3,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Workflow,
} from 'lucide-react';

export const company = {
  name: 'Shivaditya Infotech',
  email: 'info@shivadityainfotech.com',
  phone: '+91 96623 58364',
  address: 'Ahmedabad, Gujarat, India',
  tagline: '',//Engineering digital products with clarity, speed, and trust.
  description:
    'Shivaditya Infotech helps startups and growing businesses launch web platforms, mobile apps, and digital systems with modern engineering, UX-led thinking, and long-term product support.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '60+', label: 'Projects delivered' },
  { value: '24+', label: 'Industries served' },
  { value: '97%', label: 'Client retention' },
  { value: '24/7', label: 'Support mindset' },
];

export const services = [
  {
    title: 'AI Solutions Development',
    description: 'AI-powered products and business workflows designed to automate tasks, improve decisions, and create smarter customer experiences.',
    icon: BrainCircuit,
    bullets: ['AI chatbots and virtual assistants', 'Workflow automation with AI', 'Custom AI integration for web and mobile apps'],
  },
  {
    title: 'Web App Development',
    description: 'High-performance React, Next.js, and custom web platforms built for scale, conversion, and maintainability.',
    icon: Globe,
    bullets: ['Responsive frontend systems', 'Admin dashboards and portals', 'API and third-party integrations'],
  },
  {
    title: 'Mobile App Development',
    description: 'User-friendly Android and iOS experiences for product-led brands that need speed without sacrificing quality.',
    icon: Smartphone,
    bullets: ['Cross-platform app delivery', 'App modernization and redesigns', 'Analytics and push integration'],
  },
  {
    title: 'UI/UX Strategy',
    description: 'Modern, conversion-focused interfaces shaped by user journeys, accessibility, and product storytelling.',
    icon: Layers3,
    bullets: ['Wireframes and design systems', 'Interactive prototypes', 'Usability-led improvements'],
  },
  {
    title: 'Custom Software Solutions',
    description: 'Business workflow tools, dashboards, and automation solutions that reduce manual effort and improve visibility.',
    icon: Workflow,
    bullets: ['Internal business tools', 'Process automation', 'Custom CRM and ERP modules'],
  },
  {
    title: 'Ecommerce Development',
    description: 'Conversion-focused online stores and commerce platforms built for smooth shopping journeys, secure checkout, and scalable growth.',
    icon: ShoppingCart,
    bullets: ['Custom storefront development', 'Payment gateway integration', 'Cart, checkout, and order management'],
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product delivery from MVP planning to deployment, iteration, and technical growth support.',
    icon: Code2,
    bullets: ['MVP architecture planning', 'Agile delivery squads', 'Cloud deployment and maintenance'],
  },
  {
    title: 'Quality and Security',
    description: 'Reliable release practices with performance tuning, quality assurance, and secure-by-default implementation.',
    icon: ShieldCheck,
    bullets: ['Testing and regression checks', 'Performance optimization', 'Security review support'],
  },
];

export const projects = [
  {
    slug: 'healthcare-solutions',
    title: 'Healthcare Solutions',
    category: 'Healthcare',
    summary: 'Patient-focused healthcare apps and digital care platforms built to improve engagement, symptom tracking, education, and operational clarity.',
    results: ['Patient empowerment', 'Data-driven care insights', 'Secure healthcare product design'],
    liveSource: 'https://shivadityainfotech.com/healthcare/',
    intro:
      'We build healthcare products that make complex health journeys easier to understand, track, and manage for both patients and care-driven organizations.',
    challenge:
      'Healthcare products need to balance usability, trust, privacy, and meaningful insight. Many patient-facing tools fail because they are either too clinical, too generic, or too difficult for users to engage with consistently.',
    solution:
      'Our healthcare approach focuses on patient-centered UX, secure data flows, symptom and lifestyle tracking, and insight-rich interfaces that help users understand their health better while supporting long-term engagement.',
    features: ['Symptom and health event tracking', 'Personalized reports and dashboards', 'Educational content and self-guided resources', 'Secure user data and privacy-focused workflows'],
    outcomes: ['Higher user engagement', 'Better health awareness', 'More useful patient-facing digital experiences'],
    detailIntro:
      'For healthcare products, success depends on more than feature delivery. The experience must feel clear, supportive, and trustworthy enough for users to return to it during difficult or sensitive moments. That is where design, product thinking, and technical execution need to work together.',
    caseStudies: [
      {
        title: 'Migraine Tracker App',
        subtitle: 'Empowering patients, supporting better migraine management',
        summary:
          'This product was designed as a digital migraine companion that helps users move beyond a basic headache diary and toward a more informed, personalized understanding of their condition.',
        challenge:
          'Migraine sufferers often struggle to identify patterns across symptoms, triggers, treatment effectiveness, and relief methods. Many existing tools feel too manual or too limited to support daily use.',
        approach:
          'We approached the app as both a tracking tool and a patient empowerment platform. The experience needed to be simple enough for everyday use while still capturing meaningful health data in a structured way.',
        highlights: [
          'Seamless symptom tracking with triggers, symptoms, treatments, and relief logging',
          'Interactive visualizations and reports to reveal patterns and possible triggers',
          'Trusted migraine education resources to support self-management',
          'Privacy-focused product thinking with careful handling of personal health data',
        ],
      },
      {
        title: 'Gut Solution App',
        subtitle: 'A personalized gut health companion for better daily decisions',
        summary:
          'Gut Solution was envisioned as a more intelligent wellness product that helps users connect food, mood, sleep, and digestive symptoms through one guided experience.',
        challenge:
          'People trying to improve gut health often receive fragmented advice and struggle to understand how daily habits actually affect their well-being over time.',
        approach:
          'We shaped the app around personalization, expert-backed content, and easy lifestyle tracking so users could act on real insights instead of vague recommendations.',
        highlights: [
          'Food, symptom, mood, and sleep tracking for personalized analysis',
          'Insight into food-to-gut relationships and digestive patterns',
          'Tailored meal suggestions, educational content, and healthy living tips',
          'A collaborative product approach informed by nutrition and wellness expertise',
        ],
      },
    ],
  },
  {
    slug: 'fitness-and-sports-apps',
    title: 'Fitness and Sports Apps',
    category: 'Fitness & Sports',
    summary: 'Personalized fitness and sports products built around training, motivation, community engagement, and measurable performance progress.',
    results: ['Personalized training', 'Motivation-driven engagement', 'Performance insights'],
    liveSource: 'https://shivadityainfotech.com/fitness-and-sports/',
    intro:
      'We build fitness and sports products that keep users motivated with personalized training, progress visibility, and interactive experiences that support long-term engagement.',
    challenge:
      'Fitness products must combine coaching, progress tracking, payments, motivation, and community features in one consistent experience without becoming overwhelming for users.',
    solution:
      'Our approach focuses on personalized workout delivery, data-backed progress tracking, community engagement, and seamless premium subscription experiences across mobile apps.',
    features: ['On-demand workouts and video libraries', 'Progress dashboards and body metrics', 'Community challenges and rewards', 'Subscription and payment integrations'],
    outcomes: ['Stronger user motivation', 'Better fitness retention', 'More valuable digital membership experiences'],
    detailIntro:
      'Fitness products succeed when they do more than deliver workout content. They need to keep users motivated, help them measure progress, and create a sense of momentum that encourages regular use. That means product design has to support both performance and emotion.',
    caseStudies: [
      {
        title: 'Fitness App',
        subtitle: 'A personalized fitness platform designed to motivate, guide, and retain users',
        summary:
          'This fitness app was designed as a complete digital training companion with personalized workouts, measurement tracking, community mechanics, and premium subscription support.',
        challenge:
          'Many fitness apps struggle to keep users engaged because they offer generic content, weak progress visibility, or disconnected subscription experiences. The product needed to feel motivating, personal, and easy to use every day.',
        approach:
          'We treated the app as both a fitness utility and an engagement platform, combining personalized training tools, progress tracking, community interaction, and smooth monetization into one cohesive experience.',
        highlights: [
          'Curated on-demand workout library across different fitness levels and goals',
          'Body measurement tracking, HealthKit sync, and detailed progress reporting',
          'Points, rewards, and interactive challenges to strengthen user motivation',
          'Flexible premium subscriptions with secure multi-gateway payment support',
        ],
      },
    ],
  },
  {
    slug: 'social-media-platforms',
    title: 'Social Media Platforms',
    category: 'Social Media',
    summary: 'Custom social media platforms built for community engagement, real-time interaction, content sharing, and scalable user growth.',
    results: ['Real-time communication', 'Community engagement', 'Scalable social architecture'],
    liveSource: 'https://shivadityainfotech.com/social-media/',
    intro:
      'We design and develop social media applications that help people connect, engage, share content, and build communities through seamless digital experiences.',
    challenge:
      'Social products need to support fast interaction, rich media, personalization, moderation, and performance at scale while still feeling intuitive for every user.',
    solution:
      'Our social app approach combines engaging UI/UX, real-time features, scalable backend architecture, and community-focused functionality to support stronger retention and interaction.',
    features: ['User profiles and authentication', 'Chat, feeds, and media sharing', 'Push notifications and social interactions', 'Privacy controls and moderation systems'],
    outcomes: ['Higher engagement potential', 'Stronger community retention', 'Scalable social product foundation'],
    detailIntro:
      'Great social products are not built around features alone. They succeed when content, interaction, identity, and community mechanics come together in a way that feels natural, active, and rewarding to use regularly.',
    caseStudies: [
      {
        title: 'Social Media App Development',
        subtitle: 'Building social platforms that connect people and drive engagement',
        summary:
          'This solution area focuses on custom social media products ranging from niche communities to large-scale engagement platforms with real-time communication, media sharing, and strong user interaction patterns.',
        challenge:
          'Launching a social platform requires more than a timeline and a feed. It needs thoughtful product design, strong backend foundations, reliable messaging systems, content moderation, privacy controls, and room to scale as users grow.',
        approach:
          'We approach social apps as living ecosystems. That means balancing intuitive user experiences with scalable architecture, monetization opportunities, moderation tools, and features that support habit-forming engagement.',
        highlights: [
          'Custom social networking platforms, community apps, and fan engagement experiences',
          'Real-time chat, messaging, feeds, hashtags, likes, comments, and media sharing',
          'Privacy settings, moderation features, and secure account management',
          'Cross-platform product delivery with monetization support through subscriptions, ads, or in-app purchases',
        ],
      },
    ],
  },
  {
    slug: 'real-estate-solutions',
    title: 'Real Estate Solutions',
    category: 'Real Estate',
    summary: 'AI-enhanced real estate products built for property discovery, smarter valuation, lead generation, and operational visibility.',
    results: ['AI-assisted valuation', 'Market transparency', 'Smarter property decisions'],
    liveSource: 'https://shivadityainfotech.com/real-estate/',
    intro:
      'We create real estate products that help users evaluate properties faster, reduce uncertainty, and make better buying or selling decisions with digital confidence.',
    challenge:
      'Real estate users often rely on slow, manual, or inconsistent valuation processes that create uncertainty during buying, selling, and property comparison.',
    solution:
      'Our approach combines property-focused UX, location-aware data models, image-based analysis, and market intelligence to create more useful and transparent real estate experiences.',
    features: ['AI-powered property valuation tools', 'Photo-based property analysis', 'Market data and comparable listing insights', 'Location-aware pricing intelligence'],
    outcomes: ['Faster valuation decisions', 'Greater pricing transparency', 'More informed buying and selling journeys'],
    detailIntro:
      'Real estate products become more valuable when they reduce uncertainty. For buyers, sellers, and property-focused businesses, the biggest opportunity often lies in turning complex market data into fast, understandable, and trustworthy user experiences.',
    caseStudies: [
      {
        title: 'AI-Powered Property Valuation App',
        subtitle: 'Giving users faster, smarter property insights with minimal friction',
        summary:
          'This real estate app was positioned as a digital valuation assistant that helps users estimate property value instantly using location intelligence, image-based condition analysis, and local market context.',
        challenge:
          'Traditional valuation processes are often time-consuming, inconsistent, and dependent on manual appraisals. Users want quicker answers, but they still need results that feel credible and data-informed.',
        approach:
          'We designed the app around simplicity and trust: enable location, capture a property image, and generate a valuation experience backed by contextual market inputs and intelligent analysis.',
        highlights: [
          'Instant property valuation powered by AI, location, and market-aware logic',
          'Photo-based property condition analysis for more informed estimates',
          'Access to comparable listings and historical market context',
          'A user-friendly experience that reduces friction in early real estate decision-making',
        ],
      },
    ],
  },
  {
    slug: 'logistics-platforms',
    title: 'Logistics Platforms',
    category: 'Logistics',
    summary: 'Global logistics platforms built to simplify shipment creation, provider coordination, live tracking, and operational transparency.',
    results: ['Global shipment visibility', 'Provider connectivity', 'Operational transparency'],
    liveSource: 'https://shivadityainfotech.com/logistic/',
    intro:
      'We build logistics products that help businesses simplify shipping, connect with providers faster, and track operations with more confidence from origin to delivery.',
    challenge:
      'Logistics businesses often struggle with disconnected provider communication, fragmented shipment data, and weak visibility across the shipping lifecycle.',
    solution:
      'Our logistics approach focuses on centralized shipment creation, real-time provider communication, end-to-end tracking, and a more transparent experience for logistics-driven businesses.',
    features: ['Shipment creation and provider matching', 'Real-time chat and tracking', 'Manifest, invoice, and communication history', 'Operational dashboards and visibility tools'],
    outcomes: ['Simplified logistics coordination', 'Better shipment control', 'Stronger day-to-day operational clarity'],
    detailIntro:
      'In logistics, speed and visibility matter as much as execution. The best platforms do more than move shipment data around. They reduce friction between companies and providers, make status updates easier to follow, and help teams stay in control of complex operations.',
    caseStudies: [
      {
        title: 'Global Logistics Platform',
        subtitle: 'Connecting businesses and logistics providers through one streamlined shipping experience',
        summary:
          'This platform was designed as a global logistics companion that helps companies create shipments, connect with pre-vetted providers, communicate in real time, and monitor deliveries through a unified operational interface.',
        challenge:
          'Businesses managing international shipping often face delays and confusion due to fragmented provider communication, limited transparency, manual coordination, and disconnected tracking systems.',
        approach:
          'We shaped the product around operational simplicity: easy onboarding, fast shipment creation, real-time provider conversations, and detailed visibility across shipment progress, status, and supporting documents.',
        highlights: [
          'Fast company onboarding with access to a broad provider network',
          'Real-time provider chat for negotiation and shipment coordination',
          'Shipment creation workflows with route, cargo, and timing details',
          'Live tracking, manifests, invoices, and communication history in one place',
        ],
      },
    ],
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    category: 'ERP',
    summary: 'Custom ERP software built to unify operations, automate workflows, and give businesses real-time visibility across critical departments.',
    results: ['Unified operations', 'Workflow automation', 'Real-time business visibility'],
    liveSource: 'https://shivadityainfotech.com/erp/',
    intro:
      'We build ERP solutions that bring finance, HR, inventory, sales, and operational workflows into one connected system designed around how your business actually works.',
    challenge:
      'As businesses grow, disconnected tools and manual processes create delays, duplicate work, reporting gaps, and poor visibility across departments.',
    solution:
      'Our ERP approach focuses on modular architecture, workflow-specific customization, secure role-based access, and dashboards that help teams manage operations with more control and less manual effort.',
    features: ['Finance, HR, inventory, and CRM modules', 'Role-based dashboards and reporting', 'System integrations and deployment flexibility', 'Web and mobile ERP access'],
    outcomes: ['Lower operational friction', 'More accurate reporting', 'Better cross-department coordination'],
    detailIntro:
      'ERP systems are most effective when they reflect the reality of how a business operates, not just a generic software template. That means the product needs to fit actual workflows, users, approvals, and reporting needs across departments.',
    caseStudies: [
      {
        title: 'Custom ERP Software Development',
        subtitle: 'A tailored ERP platform designed to streamline business operations end to end',
        summary:
          'This ERP solution area focuses on building secure, scalable, and fully customized enterprise systems that connect finance, HR, inventory, projects, sales, and customer management into one operational environment.',
        challenge:
          'Businesses often rely on separate tools for accounting, payroll, inventory, CRM, and project coordination. Over time this creates duplicated effort, errors, weak reporting, and poor visibility across teams.',
        approach:
          'We approach ERP development as a business transformation layer, designing modules around real workflows, integrating with existing systems where needed, and delivering a structure that can scale with organizational growth.',
        highlights: [
          'Custom ERP architecture tailored to real business workflows',
          'Support for web, mobile, cloud, or on-premise deployment models',
          'Modules for analytics, inventory, HR, finance, CRM, and project management',
          'Third-party integrations, enterprise security, and post-launch support',
        ],
      },
    ],
  },
  {
    slug: 'business-apps',
    title: 'Business Apps',
    category: 'Business Applications',
    summary: 'Tailored business apps for internal teams, client operations, service workflows, and productivity-focused digital transformation.',
    results: ['Internal productivity', 'Custom workflows', 'Scalable business tools'],
    liveSource: 'https://shivadityainfotech.com/business-apps/',
    intro:
      'Custom business apps are often the fastest way to improve team productivity when off-the-shelf tools no longer fit the way a company actually operates.',
    challenge:
      'Many companies continue using spreadsheets or generic SaaS products long after their workflows become too specific, too manual, or too slow.',
    solution:
      'We build focused business applications for internal teams, client processes, workflow visibility, and operational efficiency across multiple business functions.',
    features: ['Internal workflow dashboards', 'Client and operations portals', 'Role-specific toolsets', 'Reporting and performance visibility'],
    outcomes: ['Higher team productivity', 'Better process control', 'More scalable internal systems'],
  },
  {
    slug: 'lifestyle-apps',
    title: 'Lifestyle Apps',
    category: 'Lifestyle',
    summary: 'Feature-rich apps for wellness, travel, productivity, personal habits, and everyday services with strong UI and retention-focused experiences.',
    results: ['Daily-use engagement', 'Modern UI/UX', 'Subscription-ready flows'],
    liveSource: 'https://shivadityainfotech.com/lifestyle/',
    intro:
      'Lifestyle products need to feel intuitive, visually engaging, and useful enough to become part of a user’s regular routine.',
    challenge:
      'These products often need to combine personal utility, habit-forming UX, reminders, subscriptions, and personalized experiences without becoming cluttered.',
    solution:
      'We create lifestyle apps focused on retention, smooth onboarding, personalized journeys, and modern interaction patterns across mobile and web.',
    features: ['Personalized dashboards and reminders', 'Subscription and payment flows', 'Progress tracking and analytics', 'Content, utility, or habit-based experiences'],
    outcomes: ['Higher day-to-day engagement', 'Better retention loops', 'More polished consumer-facing products'],
  },
  {
    slug: 'play-amigos',
    title: 'Play Amigos',
    category: 'Sports & Fitness',
    summary: 'A mobile app that helps players find local games, book venues, and build teams faster with location-based discovery, skill matching, and in-app chat.',
    results: ['Faster match-making', 'Simpler team formation', 'Stronger local community'],
    liveSource: 'https://staging.playamigos.games/',
    intro:
      'Play Amigos is a sports-connection mobile app designed to remove the friction of finding teammates, joining nearby games, and securing venues—whether you are new in town or just want to play more often.',
    challenge:
      'People want to play, but coordinating is hard: discovering nearby games is fragmented across chats and groups, skill expectations are unclear, and booking venues adds extra steps that cause drop-offs.',
    solution:
      'We structured the product around a simple loop: sign up → discover games → join or create a match → fill spots → chat and play. Each flow is optimized for mobile clarity with location-based listings, skill cues, and streamlined venue booking.',
    features: [
      'Easy sign-up with location and skill level setup',
      'Nearby games discovery with filters by sport and schedule',
      'Join games and request to participate',
      'Create a game and post player requirements',
      'Venue booking with sport, player count, and preferences',
      'In-app chat to coordinate with teammates',
      'Team formation tools to review and accept player requests',
    ],
    outcomes: ['No-hassle player discovery', 'Inclusive experience for all levels', 'Flexible play: casual to competitive'],
    detailIntro:
      'Play Amigos is designed for repeated, real-world use. The experience needs to be fast on mobile, easy to understand in seconds, and structured around clear actions (join, create, book, chat) so players can move from intent to a confirmed game without unnecessary back-and-forth.',
    caseStudies: [
      {
        title: 'Play Amigos: Your Ultimate Sports Connection App',
        subtitle: 'Helping players join games, book venues, and build teams in minutes',
        summary:
          'Play Amigos connects local players with nearby games and available venues. Users can join existing matches, create their own game, post the skill levels they need, and coordinate details through chat—making it easier to play more often with less planning overhead.',
        challenge:
          'Most sports coordination happens in scattered groups. Players do not know who is available, what skill level is expected, or where to play. Venue booking is usually disconnected from team formation, which creates drop-offs and last-minute cancellations.',
        approach:
          'We built a mobile-first flow that keeps decisions simple: capture location and skill early, surface nearby games, provide clear “join” and “create” actions, and unify venue booking and team fill inside one guided experience. Chat is integrated at the moment it matters—after intent is confirmed.',
        highlights: [
          'Quick onboarding with location + skill matching signals',
          'Nearby sports discovery with joinable listings',
          'Create-a-game flow with player requirements and approvals',
          'Venue booking embedded into the match setup process',
          'In-app chat for coordination and community building',
          'Supports casual and competitive play preferences',
        ],
      },
    ],
  },
  {
    slug: 'dirty-100',
    title: 'Dirty100',
    category: 'Sports & Community',
    summary: 'The premier ranking system and community platform for the motocross industry, featuring dynamic leaderboards and weighted performance tracking.',
    results: ['Elite rider rankings', 'Performance analytics', 'Community engagement'],
    liveSource: 'https://www.dirty100.com/home',
    intro: 'Dirty100 is the definitive authority in motocross performance tracking, providing a meritocratic leaderboard that recognizes the most successful amateur and professional riders.',
    challenge: 'The motocross industry lacked a unified, weighted ranking system that could fairly compare rider performance across different event types and classes. The client needed a platform that felt as "high-octane" as the sport itself while handling complex data aggregation.',
    solution: 'We engineered a high-performance web platform with a custom point calculation engine that weights events based on prestige. The interface uses a dark-mode aesthetic with neon accents to match the motocross brand identity, delivering real-time rankings and historical performance data.',
    features: [
      'Custom Point Calculation Engine',
      'Dynamic Leaderboards with class filtering',
      'Weighted Event Management system',
      'Historical performance data comparison',
      'Mobile-first responsive interface',
      'Searchable rider and event database',
    ],
    outcomes: [
      'Established a definitive ranking authority',
      'Increased community engagement via leaderboard tracking',
      'Simplified event results management',
    ],
    detailIntro: 'For Dirty100, the data is the product. Every ranking, point, and event weight must be calculated with precision and presented in a way that resonates with the competitive spirit of motocross fans and riders.',
    caseStudies: [
      {
        title: 'The "Winningest" Ranking Engine',
        subtitle: 'Turning race results into merit-based status',
        summary: 'At the heart of Dirty100 is a custom algorithm that transforms raw event data into a prestigious "winningest" list.',
        challenge: 'Not all wins are equal. A win at a regional event shouldn\'t carry the same weight as a win at a national major like Daytona.',
        approach: 'We developed a weighted scoring system where each event is assigned a multiplier based on its significance. This ensures the Dirty100 list truly represents the elite tier of the sport.',
        highlights: [
          'Variable event weights for fair ranking',
          'Real-time leaderboard updates',
          'Search and filter by rider class',
          'Year-over-year performance tracking',
        ],
      },
    ],
  },
  {
    slug: 'desiverse',
    title: 'Desiverse',
    category: 'Community & Services',
    summary: 'The ultimate platform for the Desi community to connect, share, and thrive abroad with verified services like rides, roommates, and events.',
    results: ['Verified community network', 'Centralized essential services', 'Enhanced safety & trust'],
    liveSource: 'https://desiverse.fedbidllc.com/',
    intro: 'Desiverse is a comprehensive, community-driven platform designed specifically for the Indian diaspora living abroad, serving as a central hub for essential services and networking.',
    challenge: 'Indians living abroad often face difficulties finding trusted services and community support in a new country. Existing platforms often lack the necessary safety verification and community focus needed for sensitive services like carpooling and housing.',
    solution: 'We developed a secure, unified platform with mandatory user verification (Face ID/ID) that connects the Desi community through specialized sections for rides, roommates, events, and interest-based circles.',
    features: [
      'Verified Rides & Carpooling',
      'Shared Housing & Roommate Discovery',
      'Cultural Events Discovery',
      'Interest-based Desi Circles',
      'Localized Marketplace Classifieds',
      'Identity Verification System',
    ],
    outcomes: [
      'Built a trusted social network',
      'Simplified expatriate transitions',
      'Improved community safety and support',
    ],
    detailIntro: 'Desiverse prioritizes trust and accessibility. By combining essential lifestyle services with a robust verification layer, the platform helps users navigate life abroad with the confidence of a supportive community behind them.',
    caseStudies: [
      {
        title: 'Connecting the Indian Desiverse',
        subtitle: 'A secure, all-in-one ecosystem for Indians living abroad',
        summary: 'Desiverse bridges the gap for the Desi community by providing a centralized, verified platform for carpooling, housing, and social networking, ensuring every interaction is backed by trust.',
        challenge: 'Moving abroad involves complex hurdles—finding safe transport, reliable roommates, and a sense of belonging. Scattering these needs across unverified social groups often leads to security concerns and fragmented experiences.',
        approach: 'We built a mobile-first experience centered on safety and community utility. Every feature, from "Desi Circles" to "Verified Rides," was designed to foster meaningful connections while maintaining high security standards through government-issued ID verification.',
        highlights: [
          'Mandatory Face ID and ID verification for all users',
          'Integrated carpooling system for safe, affordable travel',
          'Specialized housing portal for finding community roommates',
          'Dynamic event discovery for cultural and professional meetups',
          'Interest-based networking through Desi Circles',
          'Mobile-first design for on-the-go community access',
        ],
      },
    ],
  },
  {
    slug: 'chicago-entertainment-services',
    title: 'Chicago Entertainment Services',
    category: 'Event Production & Entertainment',
    summary: 'A premier event production company delivering luxury interactive entertainment, high-energy DJ services, and seamless event planning for unforgettable experiences.',
    results: ['High-energy engagement', 'Stress-free coordination', 'Innovative event technology'],
    liveSource: 'https://chicagoentertainmentservices.com/',
    intro: 'Chicago Entertainment Services (CES) is a full-service event production and entertainment agency that transforms special moments into extraordinary experiences through creative technology and professional coordination.',
    challenge: 'Event hosts often struggle to balance multiple vendors, technical logistics, and guest engagement. Fragmented services for music, photography, and planning can lead to inconsistent quality and operational stress during high-stakes events.',
    solution: 'We delivered a unified digital presence and operational framework that highlights CES as a single-source solution for luxury photo booths, professional DJ services, and end-to-end event production.',
    features: [
      'Interactive 360 Video Booths',
      'Mirror Photo Booth Experiences',
      'Professional DJ & Sound Production',
      'Full-scale Event Coordination',
      'Creative Photography & Videography',
      'Integrated Booking & Planning Tools',
    ],
    outcomes: [
      'Streamlined vendor management for clients',
      'Increased interactive guest engagement',
      'Consistent, high-quality event branding',
    ],
    detailIntro: 'For Chicago Entertainment Services, the focus is on the intersection of technology and hospitality. By integrating modern interactive elements like 360-degree video with traditional high-end event planning, the platform positions CES as an industry leader in the Chicago event market.',
    caseStudies: [
      {
        title: 'Elevating Event Experiences',
        subtitle: 'A comprehensive production ecosystem for high-end celebrations',
        summary: 'CES provides a centralized, tech-driven entertainment solution that simplifies the complex logistics of weddings, corporate events, and private galas while maximizing guest interaction.',
        challenge: 'Special events require high reliability and "wow" factors. Traditional entertainment often lacks the interactive, shareable digital elements that modern guests expect, while planners struggle to find vendors who can handle both the technical and creative aspects of an event.',
        approach: 'We built a digital identity and service model centered on "Unforgettable Moments." The experience emphasizes the tactile, interactive nature of their products (like Mirror Booths) alongside the professional reliability of their DJ and planning services, creating a high-trust narrative for premium clients.',
        highlights: [
          'Cinematic 360 video booth integration for viral social sharing',
          'Curated DJ experiences with professional sound and lighting design',
          'End-to-end event management from concept to teardown',
          'Interactive mirror booths with customizable digital overlays',
          'Professional capture of key moments via high-end media teams',
          'Mobile-responsive platform for client booking and inquiries',
        ],
      },
    ],
  },
];


export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export const testimonials = [
  {
    name: 'Shrey Patel',
    role: 'Founder',
    quote:
      'Shivaditya Infotech brought structure to our product vision and delivered a polished interface that immediately improved stakeholder confidence.',
  },
  {
    name: 'Nikhil Verma',
    role: 'Operations Lead',
    quote:
      'Their team simplified a very complex workflow into a clean dashboard. The result felt faster, clearer, and much easier for our staff to use.',
  },
  {
    name: 'Siddhi Ranpariya',
    role: 'Product Manager',
    quote:
      'From planning to launch, communication stayed transparent and the final build felt modern, stable, and ready to scale.',
  },
];

export const processSteps = [
  {
    title: 'Discover',
    description: 'We understand your goals, audience, workflows, and product priorities so we can recommend the right technical direction early.',
  },
  {
    title: 'Design',
    description: 'We design interfaces, journeys, and component systems that feel modern, intuitive, and aligned with your brand.',
  },
  {
    title: 'Develop',
    description: 'We build fast, scalable apps with clean code, API integrations, and production-ready infrastructure.',
  },
  {
    title: 'Grow',
    description: 'We help you improve performance, ship new features, and scale based on real user data.',
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shivaditya-infotech/' },
];

export const blogPosts = [
  {
    title: 'How AI Can Actually Improve Business Operations Without Overcomplicating Your Workflow',
    excerpt: 'A practical guide to using AI for support, automation, lead handling, and internal productivity without turning your product into a trend-driven experiment.',
    readTime: '6 min read',
    category: 'AI Solutions',
    date: 'April 2026',
  },
  {
    title: 'What a Modern Ecommerce Website Needs to Convert Better in 2026',
    excerpt: 'From faster product pages and smoother checkout flows to mobile-first UX and trust signals, this covers what actually drives ecommerce performance.',
    readTime: '5 min read',
    category: 'Ecommerce',
    date: 'April 2026',
  },
  {
    title: 'Why Businesses Redesign Their Website Even When the Old One Still Works',
    excerpt: 'A website can be technically online but still cost you leads, trust, and clarity. Here is how redesign decisions usually connect to business growth.',
    readTime: '4 min read',
    category: 'Web Strategy',
    date: 'March 2026',
  },
  {
    title: 'How to Choose the Right Tech Stack for a New Web or Mobile Product',
    excerpt: 'The best stack is not the most hyped one. It is the one that supports your goals, team speed, integrations, and future maintenance.',
    readTime: '7 min read',
    category: 'Product Engineering',
    date: 'March 2026',
  },
  {
    title: 'Why UI/UX Is a Business Decision, Not Just a Design Decision',
    excerpt: 'Good interface design improves trust, task completion, and conversion. This article explains why UX directly affects product results.',
    readTime: '5 min read',
    category: 'UI/UX',
    date: 'February 2026',
  },
  {
    title: 'When Custom Software Is Better Than Another Spreadsheet or Off-the-Shelf Tool',
    excerpt: 'Teams often patch workflows for too long. Here is how to tell when a custom dashboard, portal, or internal tool will save real time and money.',
    readTime: '6 min read',
    category: 'Custom Software',
    date: 'February 2026',
  },
];

export const openings = [
  {
    title: 'Senior AI Engineer (ML / Deep Learning / GenAI)',
    type: 'Full-time',
    location: 'Ahmedabad / Remote',
    summary: 'Lead advanced AI initiatives across machine learning, deep learning, and generative AI while guiding architecture, model strategy, and production implementation.',
  },
  {
    title: 'React Frontend Developer',
    type: 'Full-time',
    location: 'Ahmedabad / Hybrid',
    summary: 'Build scalable interfaces, collaborate on design systems, and create polished user journeys.',
  },
  {
    title: 'Senior AI/ML Engineer',
    type: 'Full-time',
    location: 'Ahmedabad / Hybrid',
    summary: 'Build and optimize AI/ML systems, production pipelines, and intelligent features with a strong focus on model performance, scalability, and business impact.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract',
    location: 'Remote',
    summary: 'Shape product storytelling, wireframes, high-fidelity UI, and interactive prototypes for client projects.',
  },
  {
    title: 'Business Analyst',
    type: 'Full-time',
    location: 'Ahmedabad',
    summary: 'Translate client needs into product requirements, delivery plans, and high-trust collaboration loops.',
  },
];

export const highlights = [
  { icon: BriefcaseBusiness, title: 'Enterprise-ready thinking', text: 'Built for founders, teams, and operational decision-makers.' },
  { icon: Blocks, title: 'Reusable design system', text: 'A flexible foundation for landing pages, inner pages, and future growth.' },
  { icon: ArrowRight, title: 'Conversion-focused messaging', text: 'Clear CTAs, strong section hierarchy, and confidence-building proof.' },
];
