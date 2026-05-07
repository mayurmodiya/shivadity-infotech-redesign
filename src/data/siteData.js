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
  Stethoscope,
  Dumbbell,
  Users,
  Home,
  Truck,
  Settings,
  Briefcase,
  Sun,
  Trophy,
  Heart,
  Music,
} from 'lucide-react';
import { portfolioImages } from '../constant/image';

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
  { label: 'Industry', href: '/industry' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  // { label: 'Contact', href: '/contact' },
];

export const projects = [
  {
    slug: 'play-amigos',
    title: 'Play Amigos',
    category: 'Sports Community App',
    summary: 'A mobile-first platform to join games, create matches, book venues, and chat with teammates — all in one guided flow.',
    coverImage: portfolioImages.playAmigos,
    services: ['UI/UX', 'Mobile App Development', 'Backend APIs'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase Notifications'],
    highlights: [
      'Location + skill-based discovery',
      'Create-a-game flow with approvals',
      'Venue booking embedded into setup',
      'In-app chat and match coordination',
    ],
    detail: {
      context:
        'Sports coordination usually happens across scattered groups and messages. The goal was to reduce planning friction while keeping the experience lightweight and social.',
      challenge:
        'Users needed to quickly understand who is playing, where to meet, and what skill level is expected — without long forms or confusing steps.',
      solution:
        'We designed a guided match creation and discovery experience with early intent signals (location + skill), clear join/create actions, and chat at the moment commitment is confirmed.',
      outcomes: [
        'Faster time-to-join for new users',
        'Fewer drop-offs during match setup',
        'Clearer expectations via skill signals',
      ],
    },
  },
  {
    slug: 'dirty100',
    title: 'Dirty100',
    category: 'Motocross Ranking Platform',
    summary: 'A high-performance web platform with a custom point calculation engine and real-time leaderboards.',
    coverImage: portfolioImages.dirty100,
    services: ['Web App Development', 'Product Engineering', 'UI/UX'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    highlights: [
      'Custom weighted scoring algorithm',
      'Searchable rider and event database',
      'Class filters + historical analytics',
      'Mobile-first dark UI patterns',
    ],
    detail: {
      context:
        'The client needed a unified ranking system that felt credible, fast, and exciting for a high-energy sports audience.',
      challenge:
        'Complex scoring rules and large datasets required both correctness and speed, especially on mobile.',
      solution:
        'We built a modular calculation engine, optimized queries and caching, and paired it with a bold interface for rapid browsing and filtering.',
      outcomes: [
        'Reliable leaderboard updates',
        'Faster page loads on mobile',
        'Clear, trustworthy rankings display',
      ],
    },
  },
  {
    slug: 'migraine-tracker',
    title: 'Migraine Tracker',
    category: 'Healthcare App',
    summary: 'A patient-friendly tracking experience for symptoms, triggers, patterns, and shareable reports.',
    coverImage: portfolioImages.migraineTracker,
    services: ['Mobile App Development', 'UI/UX', 'Data Visualization'],
    techStack: ['Flutter', 'Firebase', 'Cloud Functions'],
    highlights: [
      'Daily symptom + trigger tracking',
      'Pattern insights and summaries',
      'Exportable reports for clinicians',
      'Privacy-first data approach',
    ],
    detail: {
      context:
        'Users needed a calmer, more supportive alternative to basic headache diaries with better insight and reporting.',
      challenge:
        'Health logging must be quick enough for daily use while still capturing meaningful detail.',
      solution:
        'We created a low-friction logging flow, gentle data visualizations, and a report format that’s easy to share during appointments.',
      outcomes: ['Higher tracking consistency', 'Better trigger awareness', 'More useful clinical conversations'],
    },
  },
  {
    slug: 'logistics-ops-dashboard',
    title: 'Logistics Ops Dashboard',
    category: 'Operations Dashboard',
    summary: 'A role-based dashboard for tracking orders, dispatch status, and exception handling in one place.',
    coverImage: portfolioImages.logisticsOpsDashboard,
    services: ['Custom Software', 'Web App Development', 'UI/UX'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Maps API'],
    highlights: [
      'Role-based access and views',
      'Order + dispatch tracking timelines',
      'Exception queues and quick actions',
      'Map-assisted visibility',
    ],
    detail: {
      context:
        'Operations teams needed a single source of truth for shipments, driver status, and customer updates.',
      challenge:
        'Information was fragmented across spreadsheets and messages, slowing responses to exceptions.',
      solution:
        'We designed a clean dashboard with timelines, queue-based workflows, and map context so teams can resolve issues faster.',
      outcomes: ['Faster exception resolution', 'Higher operational visibility', 'Reduced manual coordination'],
    },
  },
  {
    slug: 'desiverse',
    title: 'Desiverse',
    category: 'Community Ecosystem',
    summary: 'A unified platform connecting the Indian diaspora with essential services and community support through a verified and secure network.',
    coverImage: portfolioImages.desiverse,
    services: ['UI/UX Design', 'Web App Development', 'Community Platform'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    highlights: [
      'Verified Face ID & ID authentication',
      'Integrated carpooling & housing systems',
      'Interest-based networking (Desi Circles)',
      'Real-time event discovery & classifieds',
    ],
    detail: {
      context:
        'The Indian diaspora abroad often faces challenges finding safe transport, reliable roommates, and a sense of belonging in a new country.',
      challenge:
        'Information is often fragmented across unverified social groups, leading to security concerns and difficulty in building trust.',
      solution:
        'We built a secure, all-in-one ecosystem centered on safety, using mandatory verification and specialized portals for essential community needs.',
      outcomes: [
        'Higher trust through mandatory verification',
        'Simplified access to shared community resources',
        'Stronger sense of belonging for Indians abroad',
      ],
    },
  },
  {
    slug: 'lead-edge-logistics',
    title: 'Lead Edge Logistics',
    category: 'Global Freight Forwarding',
    summary: 'A comprehensive global logistics platform specialized in specialty chemicals, air & ocean freight, and end-to-end supply chain transparency.',
    coverImage: portfolioImages.leadEdgeLogistics,
    services: ['Web App Development', 'Supply Chain Management', 'UI/UX Strategy'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Maps API'],
    highlights: [
      'Specialized chemicals logistics handling',
      'Real-time shipment tracking & transparency',
      'Global network integration (24/7 support)',
      'Customs brokerage & documentation automation',
    ],
    detail: {
      context:
        'Lead Edge Logistics needed a digital foundation to manage global freight operations, specifically for the complex requirements of specialty chemicals.',
      challenge:
        'Fragmented communication and lack of real-time visibility in international shipping often lead to delays and safety concerns, especially with hazardous materials.',
      solution:
        'We developed a unified platform that integrates air, ocean, and land transport tracking with specialized compliance modules for chemical logistics and real-time provider communication.',
      outcomes: [
        'Enhanced operational transparency',
        'Improved safety compliance for chemical freight',
        'Streamlined global partner coordination',
      ],
    },
  },
  {
    slug: 'lodenrand-marines',
    title: 'Lodenrand Marines',
    category: 'Maritime Logistics & Tracking',
    summary: 'A specialized NVOCC and maritime logistics platform providing real-time global tracking for air and ocean freight.',
    coverImage: portfolioImages.lodenrandMarines,
    services: ['Web App Development', 'Maritime Logistics', 'Real-time Tracking'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Shipping APIs'],
    highlights: [
      'Unified Air & Ocean freight tracking',
      'Multi-identifier tracking (BL, Container, Bill)',
      'NVOCC operations management',
      'Singapore-centered global logistics hub',
    ],
    detail: {
      context:
        'Lodenrand Marines needed a dedicated digital portal to unify their maritime logistics operations and provide customers with transparent shipment visibility.',
      challenge:
        'Tracking international shipments across different carriers and modes (Air/Ocean) often results in fragmented data and customer confusion.',
      solution:
        'We built a high-performance tracking portal that centralizes data from various shipping sources, allowing users to track via multiple identifiers through a single, intuitive interface.',
      outcomes: [
        'Consolidated tracking experience',
        'Increased customer self-service efficiency',
        'Enhanced transparency for global maritime trade',
      ],
    },
  },
  {
    slug: 'mfa-alliance',
    title: 'Multinational Forwarders Alliance',
    category: 'Global Logistics Network',
    summary: 'A digital ecosystem for a global alliance of 344+ freight forwarding offices, featuring a dedicated mobile app for member networking and coordination.',
    coverImage: portfolioImages.mfaAlliance,
    services: ['Mobile App Development', 'Network Management Platform', 'UI/UX Strategy'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure'],
    highlights: [
      'Global network of 344+ member offices',
      'Dedicated MFA networking app',
      'Presence in 75+ countries',
      'Digital marketing & collaboration tools',
    ],
    detail: {
      context:
        'The Multinational Forwarders Alliance needed to modernize their global networking capabilities, moving from manual coordination to a digital-first ecosystem for their members.',
      challenge:
        'Managing a network of independent freight forwarders across 150+ cities requires high-trust communication and real-time collaboration tools that work across time zones.',
      solution:
        'We developed a unified digital platform and mobile application that allows members to discover partners, communicate securely, and manage logistics collaborations through a centralized interface.',
      outcomes: [
        'Streamlined member-to-member communication',
        'Increased business generation within the alliance',
        'Modernized digital presence for a 20+ year old network',
      ],
    },
  },
  {
    slug: 'chicago-entertainment-services',
    title: 'Chicago Entertainment Services',
    category: 'Interactive Entertainment Platform',
    summary: 'A luxury event entertainment platform integrating interactive photo booths, 360 video technology, and professional event coordination.',
    coverImage: portfolioImages.chicagoEntertainment,
    services: ['UI/UX Design', 'Event Tech Integration', 'Web App Development'],
    techStack: ['React', 'Node.js', 'Interactive Booth APIs', 'Real-time Sharing'],
    highlights: [
      '360 Cinematic Video Booth integration',
      'Mirror Photo Booth interactive interfaces',
      'Full-scale Event Planning & DJ coordination',
      'Corporate & Luxury wedding specializations',
    ],
    detail: {
      context:
        'Chicago Entertainment Services needed a high-trust digital identity that balanced luxury hospitality with modern interactive technology.',
      challenge:
        'Event hosts often struggle with vendor fragmentation. The client needed a single-source solution for premium entertainment and planning.',
      solution:
        'We built a high-end digital presence centered on "Unforgettable Moments," featuring an integrated booking system and specialized modules for interactive event tech.',
      outcomes: [
        'Elevated brand authority in the luxury event space',
        'Streamlined inquiry and planning workflows',
        'Enhanced guest engagement through tech-driven experiences',
      ],
    },
  },
  {
    slug: 'dirty100-gate-checkin',
    title: 'Dirty100 Gate Check-in',
    category: 'Event Access Control',
    summary: 'A rugged, high-performance mobile check-in system for Motocross events, featuring QR scanning, real-time sync, and offline reliability.',
    coverImage: portfolioImages.dirty100GateCheckin,
    services: ['Mobile App Development', 'Event Operations Tech', 'UI/UX Strategy'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'QR Code Engine'],
    highlights: [
      'Rapid QR-based participant verification',
      'Offline-first data sync for remote tracks',
      'Real-time gate operation analytics',
      'Automated digital check-in receipts',
    ],
    detail: {
      context:
        'The Dirty100 Motocross events needed a reliable way to manage rider check-ins in high-volume, often remote environments where paper systems were failing.',
      challenge:
        'Race day coordination involves handling hundreds of riders in dusty, outdoor locations with inconsistent internet connectivity.',
      solution:
        'We engineered a ruggedized mobile-first check-in application with offline data capture, instant QR verification, and a real-time dashboard for event organizers.',
      outcomes: [
        'Significant reduction in rider check-in wait times',
        'Eliminated paper-based data entry errors',
        'Enhanced event safety and operational transparency',
      ],
    },
  },
  {
    slug: 'fleetvelos',
    title: 'Fleetvelos',
    category: 'Fleet Management Platform',
    summary: 'A comprehensive mobile-first ecosystem for transport owners to digitize trip logs, track real-time profits, and manage driver operations.',
    coverImage: portfolioImages.fleetvelos,
    services: ['Mobile App Development', 'Financial Dashboard', 'UI/UX Strategy'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Cloud Reporting'],
    highlights: [
      'Real-time trip & driver tracking',
      'Automated Trip Hisab & Profit/Loss analytics',
      'Professional PDF billing & report generation',
      'Unified digital ledger for maintenance & salaries',
    ],
    detail: {
      context:
        'Fleet owners often rely on fragmented paper registers and manual calculations, leading to financial leakage and operational blind spots.',
      challenge:
        'Transport businesses need a reliable way to track every expense, trip, and maintenance event while providing clear financial reporting to stakeholders.',
      solution:
        'We developed Fleetvelos as a high-performance mobile platform that digitizes the entire logistics workflow, from driver assignments to final billing and profit analysis.',
      outcomes: [
        'Eliminated manual calculation errors',
        'Provided instant financial clarity on trip profitability',
        'Modernized fleet operations for better scalability',
      ],
    },
  },
  {
    slug: 'vizag-florist',
    title: 'Vizag Florist',
    category: 'E-commerce & Gifting Platform',
    summary: 'A global e-commerce ecosystem for flower and gift delivery, featuring midnight delivery options, real-time tracking, and international shipping across 100+ countries.',
    coverImage: portfolioImages.vizagFlorist,
    services: ['E-commerce Development', 'UI/UX Strategy', 'Logistics Integration'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Secure Payment Gateways'],
    highlights: [
      'Global delivery network (200+ cities in India, 100+ countries)',
      'Advanced delivery modes (Midnight, Same-day, Early Morning)',
      'Integrated real-time order tracking system',
      'Custom B2B Vendor Inquiry & Order modules',
    ],
    detail: {
      context:
        'Vizag Florist needed to scale their local floristry business into a global gifting platform that could handle complex delivery schedules and international logistics.',
      challenge:
        'Managing time-sensitive deliveries (like midnight surprises) across different time zones and regions requires extreme operational precision and a robust technical foundation.',
      solution:
        'We built a comprehensive e-commerce platform with a sophisticated scheduling engine, secure multi-currency payments, and a centralized tracking portal for global shipments.',
      outcomes: [
        'Successful expansion into international markets',
        'Higher customer satisfaction through precision delivery timing',
        'Scalable infrastructure for high-volume holiday seasons',
      ],
    },
  },
  {
    slug: 'sahayta',
    title: 'Sahayta',
    category: 'Shelter Home & NGO Management',
    summary: 'An AI-enabled community management platform that streamlines donations, expenses, and shelter home operations with automated invoice scanning.',
    coverImage: portfolioImages.sahayta,
    services: ['Web App Development', 'AI Automation', 'Financial Systems'],
    techStack: ['React', 'Next.js', 'Node.js', 'AI-powered OCR'],
    highlights: [
      'AI-powered automated expense entry from bills',
      'Centralized multi-shelter management dashboard',
      'Automated donation receipting & donor tracking',
      'Real-time financial analytics & transparency',
    ],
    detail: {
      context:
        'NGOs and charitable trusts often struggle with manual administration, fragmented records, and lack of operational transparency.',
      challenge:
        'Managing multiple shelter homes, tracking donor contributions, and processing thousands of invoices manually is time-consuming and prone to error.',
      solution:
        'We developed Sahayta as a smart ecosystem that uses AI to automate financial workflows, allowing organizations to focus more on their mission and less on administration.',
      outcomes: [
        'Significant reduction in manual data entry through AI scanning',
        'Improved financial transparency for stakeholders',
        'Unified operational control over multiple community facilities',
      ],
    },
  },
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

export const industry = [
  {
    slug: 'healthcare-solutions',
    title: 'Healthcare Solutions',
    category: 'Healthcare',
    summary: 'Patient-focused healthcare apps and digital care platforms built to improve engagement, symptom tracking, education, and operational clarity.',
    results: ['Patient empowerment', 'Data-driven care insights', 'Secure healthcare product design'],
    icon: Stethoscope,
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
    icon: Dumbbell,
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
      {
        title: 'Dirty100: Motocross Performance Tracking',
        subtitle: 'The premier ranking system and community platform for the motocross industry',
        summary: 'Dirty100 is a high-performance web platform with a custom point calculation engine that transforms raw event data into a prestigious meritocratic leaderboard for amateur and professional riders.',
        challenge: 'The industry lacked a unified, weighted ranking system. The client needed a platform that handled complex data aggregation while matching the "high-octane" spirit of the sport.',
        approach: 'We engineered a custom scoring algorithm to weight events by prestige and delivered a dark-mode interface with real-time rankings and historical performance analytics.',
        highlights: [
          'Custom Point Calculation Engine',
          'Dynamic Leaderboards with class filtering',
          'Weighted Event Management system',
          'Historical performance data comparison',
          'Mobile-first responsive interface',
          'Searchable rider and event database',
        ],
      },
      {
        title: 'Dirty100: Rugged Event Access Control',
        subtitle: 'Digitizing high-octane event logistics for the Motocross industry',
        summary: 'The Dirty100 Gate Check-in system is a specialized mobile solution that ensures seamless entry management for large-scale sports events, even in the most demanding environments.',
        challenge: 'Managing access for high-speed sports events requires both extreme speed and data accuracy, often in locations with limited infrastructure.',
        approach: 'We focused on an offline-first architecture and a high-contrast, mobile-optimized UI that field staff could operate reliably during fast-paced race days.',
        highlights: [
          'Instant Pass & QR verification',
          'Real-time data synchronization across all entry points',
          'Comprehensive participant logs and entry history',
          'Optimized for remote, low-connectivity environments',
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
    icon: Users,
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
      {
        title: 'Desiverse: Community Ecosystem',
        subtitle: 'A secure, all-in-one ecosystem for the Indian diaspora abroad',
        summary: 'Desiverse is a community-driven platform that connects users through verified services like carpooling, shared housing, and interest-based circles, ensuring every interaction is backed by trust.',
        challenge: 'Moving abroad involves complex hurdles—finding safe transport, reliable roommates, and a sense of belonging. Scattering these needs across unverified groups leads to security concerns.',
        approach: 'We built a mobile-first experience centered on safety, using mandatory ID verification and specialized portals for rides, housing, and social networking.',
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
    slug: 'real-estate-solutions',
    title: 'Real Estate Solutions',
    category: 'Real Estate',
    summary: 'AI-enhanced real estate products built for property discovery, smarter valuation, lead generation, and operational visibility.',
    results: ['AI-assisted valuation', 'Market transparency', 'Smarter property decisions'],
    icon: Home,
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
    icon: Truck,
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
      {
        title: 'Lead Edge Logistics: Speciality Chemicals & Global Freight',
        subtitle: 'Simplifying complex supply chains with precision and transparency',
        summary:
          'Lead Edge Logistics provides world-class freight forwarding with a niche focus on specialty chemicals, ensuring safe and efficient global trade through a robust digital network.',
        challenge:
          'The specialty chemicals industry requires extreme precision, strict compliance, and constant monitoring, which traditional manual logistics systems struggle to provide at scale.',
        approach:
          'We built a logistics ecosystem centered on reliability and safety, incorporating real-time tracking, automated documentation for customs, and dedicated modules for hazardous material handling.',
        highlights: [
          'End-to-end Air, Ocean, and Land transport solutions',
          'Specialized expertise in hazardous & non-hazardous chemical logistics',
          'Automated Customs Brokerage and regulatory compliance',
          '24/7 global support network with real-time status updates',
        ],
      },
      {
        title: 'Lodenrand Marines: Unified Maritime Tracking',
        subtitle: 'Connecting global trade through transparent maritime logistics',
        summary:
          'Lodenrand Marines leverages a digital-first approach to NVOCC services, offering a unified platform for tracking global shipments across air and sea.',
        challenge:
          'Maritime logistics involves complex coordination between agents, vessels, and carriers, often lacking a single source of truth for shipment status.',
        approach:
          'We engineered a robust track-and-trace system integrated with global maritime data, focusing on speed, accuracy, and ease of use for international clients.',
        highlights: [
          'End-to-end NVOCC and liner shipping solutions',
          'Integrated Air and Ocean freight tracking portal',
          'Real-time visibility into Singapore-based global shipping hubs',
          'Support for multiple tracking modes (Container, BL, Bill)',
        ],
      },
      {
        title: 'MFA: Scaling Global Logistics Networks',
        subtitle: 'Empowering independent forwarders through digital connectivity',
        summary:
          'MFA is a premier global logistics alliance that uses digital innovation to connect freight forwarders across 75+ countries, enabling them to compete on a global scale.',
        challenge:
          'Independent forwarders often lack the global reach of multinational giants. They need a reliable, high-tech network to find trusted partners and manage international shipments.',
        approach:
          'We built a robust networking and management platform centered on the "Moving Forward" philosophy, integrating a mobile app that facilitates real-time business generation and communication.',
        highlights: [
          'Global reach across 150+ cities and 75+ countries',
          'Centralized Member Directory and App-based networking',
          'Innovative digital tools for logistics business development',
          'Trusted network ecosystem for high-level logistics partnerships',
        ],
      },
      {
        title: 'Fleetvelos: Digitizing Transport Operations',
        subtitle: 'Transforming paper-based fleet management into a digital growth engine',
        summary:
          'Fleetvelos is a specialized logistics platform that empowers fleet owners with real-time visibility and deep financial insights into their day-to-day transport operations.',
        challenge:
          'The transport industry is traditionally paper-heavy, making it difficult for owners to manage diverse costs and track long-term profitability accurately.',
        approach:
          'We built a user-friendly mobile experience centered on financial precision, incorporating automated billing and visual profit charts to help owners make data-driven decisions.',
        highlights: [
          'Live Trip status and location monitoring',
          'Instant Profit & Loss tracking per vehicle',
          'Centralized Driver and Maintenance registry',
          'One-click professional PDF report generation',
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
    icon: Settings,
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
    icon: Briefcase,
    liveSource: 'https://shivadityainfotech.com/business-apps/',
    intro:
      'Custom business apps are often the fastest way to improve team productivity when off-the-shelf tools no longer fit the way a company actually operates.',
    challenge:
      'Many companies continue using spreadsheets or generic SaaS products long after their workflows become too specific, too manual, or too slow.',
    solution:
      'We build focused business applications for internal teams, client processes, workflow visibility, and operational efficiency across multiple business functions.',
    features: ['Internal workflow dashboards', 'Client and operations portals', 'Role-specific toolsets', 'Reporting and performance visibility'],
    outcomes: ['Higher team productivity', 'Better process control', 'More scalable internal systems'],
    caseStudies: [
      {
        title: 'Vizag Florist: Scaling Gifting Logistics',
        subtitle: 'From local floristry to a global e-commerce powerhouse',
        summary: 'Vizag Florist leverages a high-performance e-commerce platform to deliver emotions across borders, combining local expertise with global logistics scale.',
        challenge: 'The gifting industry relies on emotional timing. A missed midnight delivery or a wilted bouquet can break a customer\'s trust, making reliability the most critical feature.',
        approach: 'We designed the platform around "Delivery Confidence," incorporating real-time WhatsApp support, precision scheduling, and a transparent tracking system that keeps customers informed at every step.',
        highlights: [
          'Multi-category storefront (Flowers, Cakes, Hampers, Plants)',
          'Global-to-Local logistics and vendor management',
          'High-trust secure payment ecosystem (Visa, PayPal, RuPay)',
          'Personalized user dashboards and occasion calendars',
        ],
      },
      {
        title: 'Sahayta: AI-Powered Community Management',
        subtitle: 'Empowering NGOs through intelligent operational automation',
        summary: 'Sahayta is an advanced digital platform designed to simplify daily operations for NGOs and shelter homes through AI-assisted financial processing and member tracking.',
        challenge: 'Community organizations often operate with limited staff, making manual management of donations, expenses, and residents a major bottleneck for growth and impact.',
        approach: 'We shaped the platform around "Mission-First Automation," integrating AI-based OCR for bill scanning and a secure role-based dashboard that unifies all organizational functions.',
        highlights: [
          'Smart resident and capacity tracking for shelter homes',
          'Integrated donor management and automated receipting',
          'Real-time expense categorization and visual analytics',
          'Secure, role-based access for staff and volunteers',
        ],
      },
    ],
  },
  {
    slug: 'lifestyle-apps',
    title: 'Lifestyle Apps',
    category: 'Lifestyle',
    summary: 'Feature-rich apps for wellness, travel, productivity, personal habits, and everyday services with strong UI and retention-focused experiences.',
    results: ['Daily-use engagement', 'Modern UI/UX', 'Subscription-ready flows'],
    icon: Sun,
    liveSource: 'https://shivadityainfotech.com/lifestyle/',
    intro:
      'Lifestyle products need to feel intuitive, visually engaging, and useful enough to become part of a user’s regular routine.',
    challenge:
      'These products often need to combine personal utility, habit-forming UX, reminders, subscriptions, and personalized experiences without becoming cluttered.',
    solution:
      'We create lifestyle apps focused on retention, smooth onboarding, personalized journeys, and modern interaction patterns across mobile and web.',
    features: ['Personalized dashboards and reminders', 'Subscription and payment flows', 'Progress tracking and analytics', 'Content, utility, or habit-based experiences'],
    outcomes: ['Higher day-to-day engagement', 'Better retention loops', 'More polished consumer-facing products'],
    caseStudies: [
      {
        title: 'Chicago Entertainment Services',
        subtitle: 'Elevating event experiences with tech-driven interactive entertainment',
        summary: 'A unified digital presence and operational framework for a premier event production company, integrating 360 video booths, professional DJ services, and seamless planning tools.',
        challenge: 'Event hosts struggled with vendor fragmentation and technical logistics. The client needed a single-source solution that balanced luxury hospitality with modern interactive technology.',
        approach: 'We built a high-trust digital identity centered on "Unforgettable Moments," emphasizing interactive elements like Mirror Booths alongside reliable professional coordination.',
        highlights: [
          'Interactive 360 Video and Mirror Photo Booths',
          'Professional DJ & Sound Production integration',
          'Full-scale Event Coordination & Planning tools',
          'Mobile-responsive platform for client booking',
          'Cinematic capture of key moments via high-end media teams',
        ],
      },
    ],
  },
];


export const getProjectBySlug = (slug) => industry.find((project) => project.slug === slug);


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
