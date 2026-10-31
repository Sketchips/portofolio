export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  role: string;
  teamSize: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  tasks: string[];
  techStack: string[];
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: "Core" | "Familiar"; context: string }[];
}

export const PERSONAL_INFO = {
  name: "Muhamad Ariel Gunawan",
  nickName: "Ariel",
  initials: "MAG",
  githubHandle: "sketchips",
  roleTitle: "Software Engineer",
  specialization: "Laravel, Next.js, React, Python, and AI integration",
  location: "Semarang, Central Java, Indonesia",
  availability: "Open to Full-Time Roles (Immediately Available)",
  email: "smrgariel@gmail.com",
  githubUrl: "https://github.com/sketchips",
  linkedinUrl: "https://linkedin.com/in/muhamad-ariel-gunawan-445105335",
  internshipCompany: "Badan Riset dan Inovasi Daerah (BRIDA) Kota Semarang",
  certification: "MikroTik Certified Network Associate (MTCNA) - 2026",
};

export const PROJECTS: Project[] = [
  {
    id: "lms-ai",
    title: "AI-Powered Learning Management System",
    subtitle: "Online learning platform with group chat and AI features",
    period: "2026",
    category: "Full Stack (Final Project)",
    role: "Full Stack Developer (Backend-Focused)",
    teamSize: "Team of 2",
    description: "An LMS with an admin dashboard, group chat, Excel export, and AI features for learning support.",
    problem: "Students and instructors need one platform for course materials, quizzes, and learning support.",
    solution: "Built the backend API and part of the frontend, then helped design, evaluate, and integrate AI features for automatic question generation, answer assessment, and speech-to-text.",
    architecture: "Next.js - Laravel REST API - PostgreSQL - Python AI service (OpenRouter, Whisper)",
    highlights: [
      "Admin dashboard for users, classes, materials, and video uploads.",
      "Group chat for communication during the learning process.",
      "Excel export for learning and assessment data.",
      "AI features for automatic question generation, answer assessment, and speech-to-text, which I helped design and evaluate.",
    ],
    stack: ["Laravel", "Next.js", "PostgreSQL", "Python", "OpenRouter", "Whisper"],
  },
  {
    id: "distrac",
    title: "DISTRAC",
    subtitle: "AI-based public complaint distribution system",
    period: "2026",
    category: "AI & ML",
    role: "QA, Backend, Proposal & Presentation",
    teamSize: "Team project",
    description: "An AI-based system for sorting and distributing public complaints to the appropriate sub-district government party.",
    problem: "Public complaints need to be sorted and passed to the right party quickly.",
    solution: "An AI-based system that sorts and distributes public complaints for sub-district government.",
    architecture: "Next.js - Python",
    highlights: [
      "QA testing for the web application.",
      "Backend contribution and support for the proposal, presentation, and poster.",
      "2nd Place, Presentation and Demo, KMIPN VIII 2026.",
    ],
    stack: ["Next.js", "Python"],
  },
  {
    id: "waste-detection",
    title: "Waste Detection Mobile App",
    subtitle: "CNN-based waste recognition for Flutter",
    period: "2025",
    category: "AI & ML",
    role: "Team Contributor",
    teamSize: "Team of 2",
    description: "A mobile app project that recognizes waste from images using a CNN model trained in Python and used in Flutter.",
    problem: "Waste needs to be recognized automatically from images.",
    solution: "Trained a CNN model in Python to detect waste and used it in a Flutter mobile app.",
    architecture: "Flutter app - CNN model (Python)",
    highlights: ["Trained a CNN model for waste detection.", "Integrated the model into a Flutter mobile app."],
    stack: ["Python", "CNN", "Flutter"],
  },
  {
    id: "geosiaga-disaster",
    title: "GeoSiaga",
    subtitle: "Disaster reporting and evacuation shelter information",
    period: "2025",
    category: "Full Stack",
    role: "Full Stack Developer",
    teamSize: "Team of 3",
    description: "A disaster reporting system with shelter information, a map, and a clear reporting workflow.",
    problem: "Disaster reports need to be recorded and mapped clearly.",
    solution: "A disaster reporting web app with a map, reporting workflow, and an evacuation shelter directory.",
    // TODO-VERIFY: Confirm whether Leaflet and Tailwind CSS are confirmed project details.
    architecture: "",
    highlights: ["Disaster reporting workflow.", "Map-based presentation of disaster information.", "Evacuation shelter directory."],
    stack: ["Laravel", "React", "MySQL", "REST API"],
  },
  {
    id: "flexy-tourism",
    title: "Flexy: Backend API for Tourism Ticketing",
    subtitle: "RESTful API for a Flutter tourism ticketing app",
    period: "2024",
    category: "Backend & API",
    role: "Backend Developer (Flutter Team Collaboration)",
    teamSize: "Team of 8",
    description: "Contributed to the backend REST API for a Flutter mobile tourism ticketing app.",
    problem: "Tourism ticket booking was still manual and needed a system that could be used through a mobile app.",
    solution: "Contributed to a Laravel REST API with Sanctum authentication for the Flutter mobile app, including QR payment (QR upload) and receipt printing from the app.",
    // TODO-VERIFY: Confirm architecture details before publishing.
    architecture: "",
    highlights: ["Contributed to Sanctum authentication for the Flutter mobile app.", "Contributed to QR payment with QR upload.", "Contributed to receipt printing from the app.", "Backend was deployed to shared hosting."],
    stack: ["Laravel", "MySQL", "REST API", "Sanctum"],
  },
  {
    id: "exam-management",
    title: "Online Examination Management System",
    subtitle: "Exam reports and Excel score export",
    period: "2025",
    category: "Full Stack",
    role: "Full Stack Developer",
    teamSize: "Team of 8",
    description: "A web-based examination system focused on exam reports and exporting scores to Excel.",
    problem: "Exam results need clear reports and score data needs to be exported for administration.",
    solution: "Built exam reports and Excel export for exam scores.",
    // TODO-VERIFY: Confirm architecture details before publishing.
    architecture: "",
    highlights: ["Exam reports for reviewing participant results.", "Excel export for exam scores."],
    stack: ["Laravel", "React", "MySQL", "REST API", "Excel Export"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "September 2025 to January 2026",
    role: "Web Developer (Intern)",
    company: "Badan Riset dan Inovasi Daerah (BRIDA) Kota Semarang",
    location: "Semarang, Central Java",
    type: "Internship",
    summary: "Maintained the official BRIDA website and helped develop and deploy an Open Journal Systems website in a testing environment.",
    tasks: ["Maintained the official BRIDA website.", "Helped develop and deploy an Open Journal Systems website in a testing environment.", "Used Docker, GitHub, and SQL during implementation, testing, and deployment.", "Collaborated with the team during implementation, testing, and deployment."],
    techStack: ["Docker", "GitHub", "SQL", "Open Journal Systems"],
  },
  {
    period: "2024 to 2026",
    role: "Full Stack Developer",
    company: "Academic & Team Projects",
    location: "Semarang, Central Java",
    type: "Team Projects",
    summary: "Contributed to several web applications in team projects, covering API development, frontend, and database work.",
    tasks: ["Built and contributed to RESTful APIs with authentication.", "Built responsive interfaces using React and Next.js.", "Worked on MySQL and PostgreSQL database tasks.", "Deployed backend to shared hosting and used Docker."],
    techStack: ["Laravel", "Next.js", "React", "TypeScript", "PostgreSQL", "Docker", "Linux VPS"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Frontend & UI", items: [
    { name: "JavaScript", level: "Core", context: "Web application development" },
    { name: "TypeScript", level: "Core", context: "Type-safe application development" },
    { name: "React", level: "Core", context: "Functional components and modular UI" },
    { name: "Next.js", level: "Core", context: "Modern full stack web applications" },
    { name: "Flutter", level: "Familiar", context: "Mobile application integration" },
    { name: "Responsive Web Design", level: "Core", context: "Responsive layouts across devices" },
  ] },
  { category: "Backend & API", items: [
    { name: "PHP", level: "Core", context: "Backend application development" },
    { name: "Laravel", level: "Core", context: "REST API and web application development" },
    { name: "REST API", level: "Core", context: "API design and integration" },
    { name: "Authentication", level: "Core", context: "Authentication and access control" },
    // TODO-VERIFY: Confirm RBAC as a skill before publishing.
    { name: "RBAC", level: "Familiar", context: "Role-based access control" },
  ] },
  { category: "AI", items: [
    { name: "Python", level: "Core", context: "AI service and model development" },
    { name: "CNN", level: "Core", context: "Waste detection model" },
    { name: "LLM API Integration", level: "Core", context: "Gemini and LLaMA via OpenRouter" },
    { name: "Whisper", level: "Core", context: "Speech-to-text integration" },
  ] },
  { category: "Database & Tools", items: [
    { name: "MySQL", level: "Core", context: "Relational database work" },
    { name: "PostgreSQL", level: "Core", context: "Relational database work" },
    { name: "SQL", level: "Core", context: "Queries and database tasks" },
    { name: "Database Design", level: "Core", context: "Database structure and relationships" },
    { name: "Git & GitHub", level: "Core", context: "Version control and collaboration" },
    { name: "Docker", level: "Core", context: "Development and testing environments" },
    { name: "Postman", level: "Core", context: "API testing" },
    { name: "VS Code", level: "Core", context: "Development environment" },
    { name: "Figma", level: "Familiar", context: "Interface design" },
    { name: "DigitalOcean VPS", level: "Familiar", context: "Basic server deployment" },
    { name: "SSH", level: "Familiar", context: "Remote server access" },
    { name: "Nginx", level: "Familiar", context: "Web server basics" },
    { name: "Vercel", level: "Familiar", context: "Web deployment" },
  ] },
];

export const CERTIFICATIONS = [{
  title: "MikroTik Certified Network Associate (MTCNA)",
  issuer: "MikroTik Ltd.",
  year: "2026",
  description: "Official certification covering MikroTik RouterOS basics: routing, firewall NAT, queues, and basic network troubleshooting.",
  skills: ["RouterOS Basics", "Routing", "Firewall NAT", "Queues", "Basic Troubleshooting"],
}];

export const RECRUITER_FAQS = [
  { question: "When are you available to start?", answer: "I am immediately available for on-site, hybrid, or remote roles." },
  { question: "What role and position fits best?", answer: "Software Engineer, with a focus on full stack development, backend systems, and AI integration." },
  { question: "What was your BRIDA internship like?", answer: "As a Web Developer Intern at Badan Riset dan Inovasi Daerah (BRIDA) Kota Semarang from September 2025 to January 2026, I maintained the official website and helped develop and deploy an Open Journal Systems website in a testing environment using Docker, GitHub, and SQL." },
];
