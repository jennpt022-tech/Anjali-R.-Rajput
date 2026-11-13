import { AcademicItem, AchievementItem, PortfolioProfile, ProjectItem } from '../types/portfolio';
import musewaveCoverImg from '../assets/images/musewave_music_hub_1794474147066.jpg';
import bombayCanteenCoverImg from '../assets/images/bombay_canteen_case_1794474147392.jpg';

export const initialProfile: PortfolioProfile = {
  name: "Anjali Rajput",
  role: "BBA Digital Business Student & Marketing Strategist",
  headlineBio: "BBA Digital Business student specializing in Digital Marketing, Brand Strategy, and Creative Execution.",
  bioLines: [
    "Hands-on experience leading academic and inter-collegiate projects focused on audience analysis, brand positioning, content creation, and AI-assisted marketing workflows.",
    "Skilled in utilizing modern digital platforms to deliver impact-driven marketing concepts, SEO architectures, and rapid web prototypes.",
    "Driven by visual storytelling, consumer psychology, and building engaging brand experiences."
  ],
  cgpa: "9.09",
  email: "anjaliranjitrajput2007@gmail.com",
  phone: "+91 8446426120",
  location: "Kalyan, Maharashtra · Mumbai",
  linkedinUrl: "https://www.linkedin.com/in/anjali-rajput-6550212a4",
  portraitUrl: "/assets/aistudio/file_0000000006087209aa239b699ec957b9_f95b059a.png",
  cvPdfUrl: "/assets/aistudio/Anjali_Rajput_CV.docx_20261028_134055_0000_a05a4cfc.pdf",
  currentCollege: "K.P.B. Hinduja College of Commerce, Mumbai",
  degree: "Bachelor of Business Administration (BBA) – Digital Business",
  gradYear: "2028",
  skills: [
    {
      category: "Digital & Brand Strategy",
      items: ["Market Research", "Brand Positioning", "Target Audience Profiling", "Buyer Personas", "Content Strategy"]
    },
    {
      category: "Creative & Design",
      items: ["Canva", "InShot", "Visual Storytelling", "Content Creation", "Basic Video Editing", "Presentation Design"]
    },
    {
      category: "AI & Digital Tools",
      items: ["ChatGPT", "Gemini", "AI Studio", "Flow", "WordPress"]
    },
    {
      category: "Productivity & Soft Skills",
      items: ["MS Excel", "Google Workspace", "Team Leadership", "Crisis Pitching", "Time Management", "Problem-Solving"]
    }
  ],
  areasOfInterest: [
    "Digital Marketing Strategy",
    "Brand Management",
    "Creative & Content Strategy",
    "Social Media Marketing",
    "Consumer Engagement"
  ]
};

export const initialAcademics: AcademicItem[] = [
  {
    id: "secondary",
    level: "Secondary School (10th Grade)",
    title: "Secondary School Certificate",
    institution: "K.C. Gandhi English School",
    passingYear: "2023",
    gradeOrPercentage: "92.40%",
    description: "Built strong fundamentals in analytical mathematics, literature, and digital applications. Active member of the school editorial and cultural committee."
  },
  {
    id: "junior-college",
    level: "Junior College (12th Grade)",
    title: "Higher Secondary Certificate — Commerce & IT",
    institution: "B.K. Birla College of Arts, Science & Commerce",
    passingYear: "2025",
    gradeOrPercentage: "86.67%",
    description: "Specialized in Commerce with Information Technology, Business Economics, and Mathematics. Led student representation in inter-junior-college events."
  },
  {
    id: "undergraduate",
    level: "Undergraduate Degree (Current)",
    title: "Bachelor of Business Administration (BBA) – Digital Business",
    institution: "K.P.B. Hinduja College of Commerce, Mumbai",
    passingYear: "2028",
    gradeOrPercentage: "9.09 CGPA (A+ Grade)",
    isCurrent: true,
    description: "Relevant Coursework: Content Strategy & Storytelling, Market & Brand Intelligence, Brand Strategy & Positioning, Social Media Marketing, Website Designing, and Commercial Design.",
    semesters: [
      {
        sem: "Semester 1",
        status: "completed",
        subjects: [
          "Content Strategy & Storytelling",
          "Market & Brand Intelligence",
          "Foundation of Marketing & Customer Strategies",
          "Principles of Management",
          "Foundation Course"
        ],
        cgpa: "8.95 CGPA",
        grade: "Grade A"
      },
      {
        sem: "Semester 2",
        status: "completed",
        subjects: [
          "Brand Strategy & Positioning",
          "Social Media Marketing",
          "Introduction to Website Designing",
          "Commercial Design",
          "Business Law"
        ],
        cgpa: "9.09 CGPA",
        grade: "Grade A+"
      },
      {
        sem: "Semester 3",
        status: "in-progress",
        subjects: [
          "Performance Marketing & Paid Acquisition",
          "E-Commerce Systems & Omnichannel Retail",
          "Data Analytics & AI-Assisted Workflows",
          "Strategic Brand Management",
          "Legal Aspects of Digital Business"
        ],
        cgpa: "Ongoing",
        grade: "In Progress"
      }
    ]
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "parle-g-repositioning",
    title: "Parle-G Brand Refresh Challenge — 'The OG Creator Fuel'",
    category: "Brand Repositioning",
    brief: "Formulate a Gen Z brand repositioning strategy targeting gamers, coders, and creators.",
    details: "Academic Project (May 2026) — Led consumer behavior analysis, brand legacy diagnosis, reality-check perception audit, and futuristic limited-edition packaging mockups in Masterminds presentation for Prof. Pritesh Shinde.",
    anjaliRole: "Brand Repositioning Strategist (Roll No. 163) — Slides 3, 4, 5 & Packaging Mockup (Slide 15)",
    execution: [
      "Diagnosed the Gen-Z perception gap: 16–26 demographic viewing the 80+ year-old brand as 'old-school' and lacking performance branding.",
      "Formulated the 'Creator Fuel' thesis with 4 core pillars: Screen-Time Stamina, Digital Squad Culture, Meme-First Marketing, and Supply Drop Distribution.",
      "Designed limited-edition packaging mockups ('+100 ENERGY. 0% LAG. FUEL YOUR CONQUEST') and a mock ₹10 Lakh budget allocation using Canva and AI tools."
    ],
    outcome: "Delivered a complete campaign framework, influencer collaboration models, Discord/Twitch strategy, and SMART engagement targets (+35% Instagram engagement).",
    tags: ["Brand Positioning", "Gen-Z Strategy", "Canva", "Packaging Mockup", "₹10L Mock Budget"],
    pdfUrl: "/assets/aistudio/Parle-G_by_Masterminds_20261112_144718_0000_a2f96268.pdf",
    pdfTitle: "Parle-G Brand Refresh Challenge Presentation Deck",
    featured: true
  },
  {
    id: "muse-wave-music-hub",
    title: "Muse Wave Music Hub — SEO Web Architecture & Live Deployment",
    category: "SEO & Web Tech",
    brief: "Build and deploy a search-engine-optimized music content hub from scratch on Vercel.",
    details: "Created and deployed a 10-article music editorial blog on Vercel (muse-wave-9ams-psi.vercel.app) featuring structured keyword mapping, internal anchor text architecture, and search engine verification.",
    anjaliRole: "Author & Technical SEO Architect (SYBBA-B, Roll No. 163)",
    execution: [
      "Conducted extensive keyword volume and intent research (Home: 'Music Blog' 18K volume, 'Songs for focus' 14.8K, 'Vocal warm up exercises' 2.4K).",
      "Engineered on-page metadata with custom HTML <head> title tags, meta descriptions, and Google site-verification integration.",
      "Built internal anchor link networks between topic clusters and structured GEO-targeted H2 question-and-answer subheadings for AI search crawlers."
    ],
    outcome: "Successfully achieved fast indexation on search engines with zero crawl errors, live audio preview integration, and clean responsive web performance.",
    tags: ["Technical SEO", "Keyword Strategy", "Vercel Deployment", "On-Page SEO", "Metadata Architecture"],
    imageUrl: musewaveCoverImg,
    pdfUrl: "/assets/aistudio/SEO_Assignment_20261112_145143_0000_679bd167.pdf",
    pdfTitle: "Muse Wave SEO Assignment Deck (SYBBA-B Roll No. 163)",
    demoUrl: "https://muse-wave-9ams-psi.vercel.app",
    externalLinks: [
      { label: "Live Vercel Site", url: "https://muse-wave-9ams-psi.vercel.app" },
      { label: "Blog Index", url: "https://muse-wave-9ams-psi.vercel.app/blogs" }
    ],
    featured: true
  },
  {
    id: "commercial-design-elements",
    title: "Elements of Design — Wes Anderson Inspired Urban Storytelling Film",
    category: "Digital Storytelling & Brand",
    brief: "Explore commercial design rules through cinematic urban storytelling across South Mumbai and Bandra.",
    details: "Commercial Design Assignment (FYBBA - Div C) translating design principles—lines, space, depth, texture, and color vs. black-and-white contrast—into a cohesive visual film filmed at Churchgate, Kitab Khana, and Bandra Chapel Road.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — Full Contribution (Concept, Location Scouting & Visual Execution)",
    execution: [
      "Applied symmetrical framing, smooth camera movements, and warm color grading inspired by Wes Anderson's visual language.",
      "Contrasted heritage colonial architecture in Churchgate (lines, space, depth) with vibrant street murals and cafe textures in Bandra.",
      "Used intentional transitions between color and monochrome footage to demonstrate visual contrast and focal emphasis."
    ],
    outcome: "Produced a balanced commercial design showcase demonstrating how foundational design elements operate in everyday urban surroundings.",
    tags: ["Visual Storytelling", "Commercial Design", "Video Editing", "Color Grading", "South Mumbai & Bandra"],
    pdfUrl: "/assets/aistudio/DOC-20261112-WA0029_c2a97a38.pdf",
    pdfTitle: "Commercial Design Assignment — Elements of Design Deck",
    externalLinks: [
      { label: "Watch Project Film (Drive)", url: "https://drive.google.com/file/d/1TebHV40dzCR94wd8IWXFhSRxVG42sOud/view?usp=drivesdk" }
    ],
    featured: true
  },
  {
    id: "meesho-social-calendar",
    title: "Meesho Organic Growth Strategy — 22-Day Content Calendar & Buyer Personas",
    category: "Growth & Social",
    brief: "Design a high-engagement organic growth strategy tailored for Tier-2/3 Bharat consumer psychology.",
    details: "Comprehensive individual research paper and deck submitted to Prof. Divyank Jain, developing 3 hyper-localized buyer personas, a 22-day spreadsheet calendar, and sample post copy/reels tackling the 'trust deficit'.",
    anjaliRole: "Solo Author & Strategist (Anjali Rajput, FYBBA Roll No. 163)",
    execution: [
      "Constructed 3 detailed Tier-2/3 personas: Priya Mehta (34, Homemaker, Lucknow), Sahil Wagh (20, Student, Nagpur), and Sanjana Sharma (22, Beauty Parlor Owner, Nashik).",
      "Developed a 22-day structured content cadence balancing promotional static posts (₹249 kidswear combos), relatable college styling reels, and wholesale business carousels.",
      "Integrated search codes (e.g. 'Search Code: S_2026') and mapped peer-review trust mechanics to bypass user fear of wrong products delivered."
    ],
    outcome: "Delivered a complete zero-ad-spend social playbook backed by qualitative research on playstore reviews, customer complaints, and regional value drivers.",
    tags: ["Organic Growth", "Buyer Personas", "Content Calendar", "Social Commerce", "Tier-2/3 India"],
    pdfUrl: "/assets/aistudio/BBA-FY_AnjaliRajput_163_Meesho_20261112_145101_0000_008971ae.pdf",
    pdfTitle: "Meesho Organic Growth Strategy & Persona Deck (FYBBA 163)",
    demoUrl: "https://docs.google.com/spreadsheets/d/1-f8DSXFAJPs2uuGp4vhela1QRspsCUuQ7hn-nVuGDkQ4/edit?usp=sharing",
    externalLinks: [
      { label: "22-Day Google Sheet Calendar", url: "https://docs.google.com/spreadsheets/d/1-f8DSXFAJPs2uuGp4vhela1QRspsCUuQ7hn-nVuGDkQ4/edit?usp=sharing" }
    ],
    featured: true
  },
  {
    id: "one-hour-web-prototype",
    title: "The Tech-Shell — 1-Hour Wearable Tech Innovation Prototype",
    category: "Rapid Prototyping",
    brief: "Conceptualize, design, and deploy an alternative wearable laptop-carrying hoodie in 60 minutes.",
    details: "Inter-College Competition (February 2026) — Replaced bulky, painful shoulder bags with 'The Tech-Shell', a wearable hoodie engineered with a high-density EVA foam back armor sleeve, tactical peripheral pockets, and internal cable pass-throughs.",
    anjaliRole: "Product Designer & Developer (Inter-College 1-Hour Challenge)",
    execution: [
      "Identified consumer pain points: physical posture strain, slow transit mobility, and aesthetic bulk of conventional laptop bags.",
      "Specified technical garment features: Armor-Sleeve back pocket, tactical mouse/phone/charger zones, internal cable management, and breathable thermo-tech fabric.",
      "Developed full brand identity, value proposition, landing page draft, and pitch deck using Canva and AI tools within 60 minutes."
    ],
    outcome: "Recognized by judging panel for fastest conceptualization-to-deployment cycle and innovative fusion of fashion with hardware protection.",
    tags: ["Product Design", "Rapid UI/UX", "Canva & AI Tools", "1-Hour Challenge", "Wearable Tech"],
    pdfUrl: "/assets/aistudio/Add_a_subheading_20261112_145538_0000_b5d640f3.pdf",
    pdfTitle: "The Tech-Shell Product Deck & Presentation",
    demoUrl: "https://share.google/697f46pzYg6gRRhZG",
    externalLinks: [
      { label: "Live Prototype Link", url: "https://share.google/697f46pzYg6gRRhZG" }
    ],
    featured: true
  },
  {
    id: "nike-break-your-limit",
    title: "Nike 'Break Your Limit' — Digital Campaign & AI Fitness App Ecosystem",
    category: "Digital Campaign Strategy",
    brief: "Build an inspiring digital movement connecting Nike's iconic legacy with Gen-Z digital habits and AI fitness.",
    details: "Led Masterminds group pitch as Team Captain, proposing the '#BreakYourLimit' 3-step participation model ('Pick · Do · Share') and an AI-driven personal training integration.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — 'The Captain': Project Lead, Introduction & Presentation Creative Direction",
    execution: [
      "Formulated campaign philosophy: 'Personal growth, not competition — celebrate becoming a better version of yourself'.",
      "Architected smart AI fitness app modules: real-time AI progress tracking, automated achievement badges, and personalized fitness insights.",
      "Mapped omnichannel viral rollout across Instagram, TikTok, and YouTube Shorts focusing on peer trust and raw self-growth UGC."
    ],
    outcome: "Delivered a comprehensive strategy evolving Nike from an athletic apparel seller into a personalized, data-driven daily lifestyle partner.",
    tags: ["Team Captain", "Campaign Architecture", "AI in Fitness", "Gen-Z Wellness", "Omnichannel Growth"],
    pdfUrl: "/assets/aistudio/DOC-20260613-WA0038._bcbe5d46.pdf",
    pdfTitle: "Nike 'Break Your Limit' Campaign Deck (Masterminds)",
    featured: true
  },
  {
    id: "singapore-sustainability-study",
    title: "Singapore — Environmental Recovery, Waste Management & Zero-Waste Vision",
    category: "Economic Research & Policy",
    brief: "Analyze how Singapore transformed from industrial pollution to a global zero-waste & smart-city benchmark.",
    details: "EVS & Urban Sustainability Case Study by Masterminds (FYBBA Div-C) covering Singapore's water self-sufficiency (NEWater, Desalination), transboundary haze laws, Waste-to-Energy plants, and Semakau Offshore Landfill.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — Authored Waste Management, Soil Pollution & Semakau Landfill Strategy (Slides 9–10)",
    execution: [
      "Analyzed Singapore's 'Reduce, Reuse, Recycle' framework and Waste-to-Energy incineration achieving a 90% reduction in solid waste volume.",
      "Documented Semakau Offshore Landfill engineering—safely isolating ash waste while sustaining thriving mangrove and seagrass ecosystems.",
      "Synthesized policy lessons pairing strict emission legislation with urban greening and citizen behavioral campaigns."
    ],
    outcome: "Presented actionable sustainability blueprints contrasting historical degradation with modern climate resilience and zero-waste engineering.",
    tags: ["Sustainability Policy", "Waste Management", "Zero Waste Vision", "Urban Planning", "EVS Case Study"],
    pdfUrl: "/assets/aistudio/DOC-20260526-WA0001._2ba142d7.pdf",
    pdfTitle: "Singapore Environmental Journey & Zero-Waste Deck",
    featured: false
  },
  {
    id: "taj-hotels-swot-strategy",
    title: "Taj Hotels — Strategic Audit & Comprehensive SWOT Analysis",
    category: "Brand Strategy & Positioning",
    brief: "Strategic audit of India's premier luxury hospitality institution evaluating growth, PESTLE forces, and creator synergies.",
    details: "In-depth corporate analysis of Indian Hotels Company Limited (IHCL) and Taj Mahal Palace, examining the 'Accelerate 2030' strategy, 5P business model, and Paathya ESG sustainability targets.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — Authored Core SWOT Analysis (Slides 4 & 5)",
    execution: [
      "Analyzed iconic strengths: World's Strongest Hotel Brand ranking, emotional 'Tajness' service style, and Tata Group ethical backing.",
      "Evaluated strategic opportunities: domestic expansion (26 new hotels), spiritual tourism boom in Ayodhya, and airport/transit hotel models.",
      "Assessed business synergy plan connecting Taj properties with luxury content creators, podcast shoots, and bespoke fashion collaborations (Mercedes-Benz, Louis Vuitton)."
    ],
    outcome: "Synthesized how 120+ years of heritage can successfully scale via asset-light management contracts while maintaining ultra-luxury pricing power.",
    tags: ["Hospitality Strategy", "SWOT Analysis", "Luxury Brand Audit", "Tata Group", "Corporate Strategy"],
    pdfUrl: "/assets/aistudio/Masterminds_20261112_144943_0000_33486d49.pdf",
    pdfTitle: "Taj Hotel Strategic Presentation Deck (Masterminds)",
    featured: false
  },
  {
    id: "offline-vs-online-shopping",
    title: "The Convenience Revolution — Offline vs. Online Retail Impact Study",
    category: "Consumer Insights & Retail Research",
    brief: "Evaluate the transformation of Indian retail and analyze the survival strategies of 200,000+ local kirana stores.",
    details: "Masterminds research study analyzing consumer shift from physical market visits to 24/7 doorstep delivery via Amazon, Flipkart, and Meesho, and the emergence of quick commerce.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — Led Slide 4: 'The Convenience Revolution — Shopping Time into Leisure Time'",
    execution: [
      "Contrasted traditional frictions (limited shop hours, traffic, parking, crowds) with digital convenience (24/7 access, no queues, UPI payments).",
      "Investigated the economic impact on local shopkeepers facing revenue drops, and documented digital adaptation through WhatsApp catalogs and ONDC onboarding.",
      "Formulated conclusion on the 'Hybrid Phygital Ecosystem' combining e-commerce speed with local neighborhood trust and immediacy."
    ],
    outcome: "Provided an evidence-backed retail report illustrating how digitization is essential for small merchant survival in modern India.",
    tags: ["Retail Economics", "Kirana Digitization", "Consumer Behavior", "E-Commerce Giants", "ONDC Protocol"],
    pdfUrl: "/assets/aistudio/DOC-20260602-WA0005._c20823ae.pdf",
    pdfTitle: "Offline vs. Online Shopping Research Deck",
    featured: false
  },
  {
    id: "dove-real-beauty-case",
    title: "Dove 'Real Beauty' — Purpose-Driven Marketing & Content Pillar Audit",
    category: "Brand Strategy & Positioning",
    brief: "Deconstruct one of the most successful purpose-led campaigns in history and map its modern content architecture.",
    details: "In-depth case study analyzing Dove's 2004 'Campaign for Real Beauty' with Ogilvy & Mather, examining how rejecting cosmetic distortion created extraordinary commercial growth.",
    anjaliRole: "Campaign Impact & Audience Segmentation Analyst",
    execution: [
      "Documented remarkable business results: +700% sales surge in the first 6 months and 80%+ positive self-esteem impact across 2 million+ women.",
      "Mapped Dove's 5 core content pillars: Real Beauty & Body Positivity, Skin/Hair Care Education, Self-Esteem Social Impact, Product Innovation, and Community Advocacy.",
      "Analyzed contemporary extensions including the #TheDoveCode initiative combating AI-generated beauty distortion."
    ],
    outcome: "Demonstrated how bridging the emotional gap between unrealistic beauty standards and authentic self-image drives generational brand loyalty.",
    tags: ["Purpose-Driven Marketing", "Content Pillars", "Brand Equity", "Audience Segmentation", "Cultural Impact"],
    pdfUrl: "/assets/aistudio/Presentation_finalll_1__93b71f3a.pdf",
    pdfTitle: "Dove 'Let's Change Beauty' Presentation Deck",
    featured: false
  },
  {
    id: "global-economics-trade",
    title: "Global Economics — International Trade Theories & WTO Policy",
    category: "Economic Research & Policy",
    brief: "Theoretical and empirical analysis of international trade models, currency volatility, and global protectionist barriers.",
    details: "Academic presentation deck prepared for Prof. Shubham's Global Economics course at K.P.B. Hinduja College covering Adam Smith, Comparative Advantage, and the Heckscher-Ohlin theorem.",
    anjaliRole: "Anjali Rajput (Roll No. 163) — Led Meaning & Importance of Trade (Slides 2-3) and Strategic WTO Solutions (Slide 16)",
    execution: [
      "Explained economic fundamentals of Absolute and Comparative Advantage in optimizing global resource allocation.",
      "Analyzed trade barriers, tariffs, currency exchange rate fluctuations, and trade deficits between emerging and advanced economies.",
      "Formulated policy proposals for reducing unwanted trade friction, strengthening WTO enforcement, and fostering ethical cross-border commerce."
    ],
    outcome: "Delivered a structured academic presentation bridging classical economic theory with contemporary international trade disputes.",
    tags: ["Global Economics", "Trade Policy", "WTO Framework", "Macroeconomic Analysis", "Hinduja College"],
    pdfUrl: "/assets/aistudio/Pitch_Deck_Presentation_20261112_145803_0000_621a1052.pdf",
    pdfTitle: "International Trade Theory & Issues Pitch Deck",
    featured: false
  },
  {
    id: "the-bombay-canteen",
    title: "The Bombay Canteen — Digital Storytelling & Brand Research",
    category: "Digital Storytelling & Brand",
    brief: "Evaluate digital footprint, brand communication, website UX, and social storytelling to uncover engagement drivers.",
    details: "Research Project (August 2026) — Initiated direct industry outreach and interviewed the Content Marketing Manager alongside leadership to map how digital storytelling fuels restaurant brand equity.",
    anjaliRole: "Market Research & Brand Analyst (Industry Outreach & Executive Interviewer)",
    execution: [
      "Evaluated The Bombay Canteen's digital footprint, brand communication consistency, website UX, and Instagram narrative flow.",
      "Initiated industry outreach and conducted qualitative interviews with the Content Marketing Manager to uncover key engagement drivers.",
      "Synthesized findings on how authentic culinary storytelling converts online discovery into loyal dining communities."
    ],
    outcome: "Presented actionable qualitative insights into hospitality brand building; selected as benchmark case study for peer masterclasses.",
    tags: ["Market Research", "Brand Analysis", "Website UX", "Executive Interviews", "Social Storytelling"],
    imageUrl: bombayCanteenCoverImg,
    featured: true
  }
];

export const initialAchievements: AchievementItem[] = [
  {
    id: "festival-winner",
    title: "1st Place Winner — 'Off Limits' (Brand Communication)",
    badgeCategory: "Jai Hind College (Nexus Fest)",
    highlight: "Won 1st Place devising and pitching a real-time brand-crisis recovery plan",
    description: "Represented K.P.B. Hinduja College of Commerce at Jai Hind College's Nexus Fest, devising and pitching a real-time brand-crisis recovery strategy under strict time constraints to win top honors among competing teams.",
    dateOrYear: "2026",
    iconType: "trophy"
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence — 9.09 CGPA (A+ Grade)",
    badgeCategory: "Academic Honors",
    highlight: "Earned an A+ Grade in BBA Digital Business with a 9.09 CGPA",
    description: "Ranked among the top percentile in the BBA Digital Business cohort at K.P.B. Hinduja College of Commerce, excelling across Digital Marketing Strategy, SEO, Consumer Behavior, and Web Design.",
    dateOrYear: "Semester 2",
    iconType: "academic"
  },
  {
    id: "guest-speaker",
    title: "Guest Speaker / Content Marketing Masterclass",
    badgeCategory: "Peer Mentorship",
    highlight: "Invited to conduct a Content Marketing Masterclass for fellow BBA students",
    description: "Selected to lead an interactive masterclass sharing field research methodologies and digital brand storytelling insights drawn from primary interviews with The Bombay Canteen's marketing team.",
    dateOrYear: "2025–2026",
    iconType: "speaker"
  },
  {
    id: "campaign-leadership",
    title: "Student Volunteer & Management Assistant",
    badgeCategory: "Campus Leadership",
    highlight: "Coordinated logistics, scheduling & live execution for major events",
    description: "Coordinated logistics, scheduling, and live operational execution for major inter-collegiate events and academic competitions, alongside student initiatives including Shutter Verse 2026 at CSMT and Tremor Season 9.",
    dateOrYear: "2025–2026",
    iconType: "leadership"
  }
];
