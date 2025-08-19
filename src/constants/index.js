import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  chatbot,
  currency,
  airbnb,
  habit,
  py,
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

const personalInfo = {
  name: "Anushka Shendge",
  location: "Mumbai, India",
  phone: "+91-7977409706",
  email: "anushka.shendge22@spit.ac.in",
  links: {
    linkedin: "your-linkedin-url",
    github: "your-github-url",
    leetcode: "your-leetcode-url",
  },
};

const education = {
  degree: "B.Tech in Computer Science (AIML)",
  institution: "Sardar Patel Institute of Technology, Mumbai",
  duration: "2022 – 2026",
  // cgpa: "8.14",
};

const skills = {
  languages: ["Java", "SQL", "JavaScript", "TypeScript", "Python"],
  frameworks: [
    "React",
    "React Native",
    "Node",
    "Express",
    "NextJS",
    "Scikit-learn",
    "Pandas",
    "Matplotlib",
  ],
  tools: ["Git", "MongoDB", "MySQL", "VS Code", "WebSockets", "Selenium"],
  coursework: [
    "Machine Learning",
    "Operating Systems",
    "Data Structures & Algorithms",
    "Computer Networks",
  ],
};

const services = [
  {
    title: "Web Development",
    icon: "web.png",
  },
  {
    title: "Mobile Development",
    icon: "mobile.png",
  },
  {
    title: "AI/ML Development",
    icon: "ai.png",
  },
];

const technologies = [
  {
    name: "Java",
    icon: "java.png",
  },
  {
    name: "Python",
    icon: "python.png",
  },
  {
    name: "React",
    icon: "react.png",
  },
  // Add other technologies from your skills list
];

const experiences = [
  {
    title: "MERN Project",
    Project_name: "Chat App",
    icon: github,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies.",
      "Engineered a responsive, mobile-first user interface with a fixed and toggleable sidebar for seamless navigation across devices. Ensured accessibility compliance by implementing ARIA landmarks and roles, providing an inclusive experience for users with disabilities.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Women Empowerment App",
    description:
      "All-in-One mobile application with modular ecosystem for women's safety, finance, and growth.",
    tags: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Built modular ecosystem—Shakti (Safety), Shree (Finance), Sakhi (Growth)",
      "Implemented SOS system with live streaming, OTP verification",
      "Expense tracker & financial simulation",
      "Skill matcher & community forum",
    ],
    category: "Mobile",
    github: 'https://github.com/AnushkaShendge/ODOO',
    image: "odoo"
  },
  {
    name: "Rapid Cross-Border Compliance Checker",
    description:
      "AI-powered platform for compliance automation in shipments.",
    tags: ["Flask", "React", "MongoDB", "CrewAI"],
    features: [
      "RAG model for country-specific rules",
      "Prohibited item checker with multi-format export",
      "Image-based compliance analysis",
      "Multilingual support",
    ],
    category: "AI",
    github: "https://github.com/AnushkaShendge/IITB_LOGITHON",
    image: "iitb"
  },
  {
    name: "AI-Powered Multilingual Communication Assistant",
    description:
      "Voice-to-text multilingual communication platform.",
    tags: ["Whisper", "Bhashini", "React", "Flask"],
    features: [
      "Voice → structured text via Whisper",
      "Real-time multilingual translation",
      "Context-aware suggestions",
      "Personalized corrections",
    ],
    category: "AI",
    github: "https://github.com/AnushkaShendge/tcet_unoff",
    image: "tcet"
  },
];

const achievements = [
  {
    title: "CodeCrafter 2.0 Hackathon",
    organization: "Saraswati College of Engineering, Navi Mumbai",
    position: "1st Place",
    year: "2025",
  },
  {
    title: "Aairavat",
    organization: "Sardar Patel Institute of Technology",
    position: "1st Place",
    year: "2025",
  },
  {
    title: "Level Up",
    organization: "KJ Somaiya College of Engineering",
    position: "1st Place",
    year: "2025",
  },
  {
    title: "Blockchain Hackathon",
    organization: "IIT Kharagpur Summit",
    position: "1st Runner-up",
    year: "2025",
  },
  {
    title: "Logithon",
    organization: "IIT Bombay",
    position: "1st Runner-up",
    year: "2025",
  },
  {
    title: "Odoo Hackathon",
    organization: "Gujarat Vidyapeeth",
    position: "2nd Runner-up",
    year: "2025",
  },
  {
    title: "HACKANOVA",
    organization: "AIML Domain",
    position: "Winner",
    year: "2025",
  },
  {
    title: "Technitude International Hackathon",
    organization: "SP Jain School of Global Management",
    position: "2nd Runner-up",
    year: "2025",
  },
];

const roles = [
  {
    title: "Marketing Head",
    company: "IPL Auction, Oculus",
    location: "SPIT, Mumbai",
    date: "Sept 2024",
  },
];

export {
  navLinks,
  personalInfo,
  education,
  skills,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  achievements,
  roles,
};