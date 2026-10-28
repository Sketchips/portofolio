export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
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
  items: {
    name: string;
    level: "Core" | "Familiar";
    context: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Muhamad Ariel Gunawan",
  nickName: "Ariel",
  initials: "MAG",
  githubHandle: "sketchips",
  roleTitle: "Full Stack Developer",
  specialization: "Laravel (REST API) & Next.js / React (Frontend)",
  location: "Semarang, Central Java, Indonesia",
  availability: "Open to Full-Time Roles (Immediately Available)",
  email: "smrgariel@gmail.com",
  githubUrl: "https://github.com/sketchips",
  internshipCompany: "BRIDA Kota Semarang",
  certification: "MikroTik Certified Network Associate (MTCNA) - 2026",
};

export const PROJECTS: Project[] = [
  {
    id: "lms-ai",
    title: "AI-Powered Learning Management System",
    subtitle: "Platform Kursus Online dengan Video, Kuis, dan Asisten Belajar",
    period: "2026",
    category: "Full Stack (Tugas Akhir)",
    role: "Full Stack Developer",
    description:
      "Aplikasi LMS untuk manajemen kelas, materi video, kuis pilihan ganda, dan asisten belajar berbasis AI yang menjawab pertanyaan siswa sesuai bab yang sedang dibuka.",
    problem:
      "Siswa perlu penjelasan cepat saat belajar mandiri, sementara instruktur butuh sistem upload materi dan pemantauan kuis yang rapi.",
    solution:
      "Backend REST API dengan Laravel dan PostgreSQL, frontend Next.js App Router, serta integrasi LLM API dengan konteks berdasarkan modul aktif.",
    architecture: "Next.js ↔ Laravel REST API ↔ PostgreSQL ↔ LLM API",
    highlights: [
      "Role-Based Access Control (Admin, Instruktur, Siswa) dengan izin akses berbeda.",
      "Upload dan streaming video materi dengan validasi format dan ukuran file.",
      "Asisten belajar berbasis konteks bab aktif — bukan chatbot generik.",
      "Dashboard admin: rekap kuis, progres siswa per kursus.",
      "Skema PostgreSQL ternormalisasi dengan foreign key dan indexing.",
    ],
    stack: ["Laravel", "Next.js", "PostgreSQL", "RESTful API", "Tailwind CSS"],
  },
  {
    id: "exam-management",
    title: "Online Examination Management System",
    subtitle: "Manajemen Ujian Online dengan Koreksi Otomatis & Ekspor Nilai",
    period: "2025",
    category: "Backend & Penilaian",
    role: "Backend & Database Developer",
    description:
      "Aplikasi ujian online dengan timer tersinkronisasi server, auto-save jawaban, koreksi otomatis soal pilihan ganda, dan ekspor nilai ke PDF & Excel.",
    problem:
      "Timer di sisi browser mudah dimanipulasi, jawaban bisa hilang saat koneksi putus, dan rekap nilai manual memakan waktu.",
    solution:
      "Timer dikendalikan token sesi di server, auto-save setiap pilihan jawaban, kalkulasi nilai otomatis, dan generator laporan siap cetak.",
    architecture: "Laravel ↔ React / Blade ↔ MySQL ↔ DomPDF & Excel Export",
    highlights: [
      "Timer ujian tersinkronisasi server untuk mencegah manipulasi waktu di inspect element browser.",
      "Penyimpanan otomatis (auto-save) jawaban setiap kali peserta memilih opsi.",
      "Koreksi otomatis untuk soal pilihan ganda dengan bobot nilai fleksibel per mata pelajaran.",
      "Fitur ekspor rekapitulasi nilai ke format Excel (XLS) dan cetak lembar hasil format PDF.",
      "Acak urutan soal dan pilihan jawaban untuk meminimalkan kecurangan.",
    ],
    stack: ["Laravel", "React", "MySQL", "DomPDF", "Excel Export", "REST API"],
  },
  {
    id: "geosiaga-disaster",
    title: "GeoSiaga - Sistem Pelaporan Bencana & GIS",
    subtitle: "Aplikasi Pelaporan Titik Bencana dan Pemetaan Shelter Evakuasi",
    period: "2024",
    category: "Web GIS & Pelaporan",
    role: "Full Stack Developer",
    description:
      "Aplikasi web untuk pelaporan kejadian bencana oleh masyarakat secara langsung, visualisasi titik lokasi di peta interaktif, dan panduan shelter evakuasi terdekat.",
    problem:
      "Pelaporan bencana seringkali lambat terdata dan tidak memiliki koordinat lokasi yang presisi, sehingga petugas sulit memetakan area prioritas evakuasi.",
    solution:
      "Mengintegrasikan peta Leaflet untuk penentuan titik koordinat otomatis, alur verifikasi laporan oleh petugas, serta direktori shelter evakuasi beserta kapasitasnya.",
    architecture: "React (Frontend) ↔ Leaflet GIS ↔ Laravel REST API ↔ MySQL",
    highlights: [
      "Peta interaktif Leaflet dengan penanda (marker) kategori bencana dan radius status darurat.",
      "Formulir pelaporan warga disertai upload foto bukti dan deteksi titik koordinat GPS.",
      "Katalog shelter evakuasi lengkap dengan informasi kapasitas, logistik, dan kontak petugas.",
      "Halaman admin untuk memvalidasi laporan warga sebelum dipublikasikan ke peta umum.",
    ],
    stack: ["Laravel", "React", "Leaflet GIS", "MySQL", "REST API", "Tailwind CSS"],
  },
  {
    id: "flexy-tourism",
    title: "Flexy — Backend API Tiket Wisata",
    subtitle: "RESTful API untuk Aplikasi Mobile Pemesanan Tiket Wisata",
    period: "2024",
    category: "Mobile Backend & API",
    role: "Backend API Engineer (Kolaborasi Tim Flutter)",
    description:
      "Backend REST API untuk aplikasi mobile pemesanan tiket wisata: manajemen kuota harian, transaksi pemesanan, dan validasi tiket barcode di pintu gerbang.",
    problem:
      "Antrean tiket manual dan risiko overbooking jika checkout bersamaan tidak ditangani di level database.",
    solution:
      "RESTful API di Laravel dengan DB Transactions saat pengurangan kuota, endpoint barcode scan cepat, dan otentikasi Sanctum untuk mobile.",
    architecture: "Flutter Mobile ↔ Laravel REST API (Sanctum) ↔ MySQL",
    highlights: [
      "Autentikasi token aman berbasis Laravel Sanctum untuk aplikasi mobile.",
      "Transaksi basis data (DB Transactions) saat pemotongan kuota untuk mencegah overbooking.",
      "Endpoint verifikasi kode barcode tiket saat pengunjung masuk di pintu gerbang.",
      "Dokumentasi API lengkap di Postman untuk mempermudah integrasi dengan developer mobile Flutter.",
      "Dashboard admin sederhana untuk memantau jumlah pengunjung dan total penjualan tiket harian.",
    ],
    stack: ["Laravel", "MySQL", "RESTful API", "Laravel Sanctum", "Postman"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024",
    role: "Web Development Intern",
    company: "BRIDA Kota Semarang (Regional Research and Innovation Agency)",
    location: "Semarang, Central Java",
    type: "Internship",
    summary:
      "Supported development and maintenance of internal web applications, integrated frontend with RESTful API backend, and managed regional research data.",
    tasks: [
      "Developed UI modules and CRUD flows for the institution's internal web system.",
      "Connected frontend interfaces to REST API backend endpoints.",
      "Tested API endpoints using Postman and fixed database queries.",
      "Applied Git workflow (branching, pull requests, merges) within the dev team.",
    ],
    techStack: ["PHP", "Laravel", "JavaScript", "MySQL", "REST API", "Git", "Postman"],
  },
  {
    period: "2024 – 2026",
    role: "Full Stack Developer",
    company: "Academic & Capstone Projects",
    location: "Semarang, Central Java",
    type: "Team & Solo Projects",
    summary:
      "Designed and built several web applications from scratch, covering database schema design, API development, and user interface.",
    tasks: [
      "Designed normalized relational database schemas (PostgreSQL & MySQL).",
      "Built RESTful APIs with token authentication and role-based access control.",
      "Built responsive UIs using React and Next.js.",
      "Set up application deployment on VPS servers and Docker containers.",
    ],
    techStack: ["Laravel", "Next.js", "React", "TypeScript", "PostgreSQL", "Docker", "Linux VPS"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend & API",
    items: [
      { name: "PHP", level: "Core", context: "Object-oriented PHP 8+, clean architecture" },
      { name: "Laravel", level: "Core", context: "Eloquent ORM, Middleware, Routing, REST API" },
      { name: "RESTful API", level: "Core", context: "Endpoint design, status codes, JSON integration" },
      { name: "Authentication", level: "Core", context: "Laravel Sanctum (token), Session, role-based access" },
      { name: "Postman", level: "Core", context: "API endpoint testing and documentation" },
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "React", level: "Core", context: "Functional components, custom hooks, modular UI" },
      { name: "Next.js", level: "Core", context: "App Router, Server & Client Components, dynamic routing" },
      { name: "TypeScript", level: "Familiar", context: "Type definitions, interfaces, and API contracts" },
      { name: "Tailwind CSS", level: "Core", context: "Utility-first styling and responsive layouts" },
      { name: "HTML5 & CSS3", level: "Core", context: "Semantic structure and accessible UI" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "Core", context: "Relational queries, indexing, foreign key relations" },
      { name: "MySQL", level: "Core", context: "Schema normalization, ACID transactions, JOIN queries" },
      { name: "Database Design", level: "Core", context: "ERD design, migrations, and seed data" },
    ],
  },
  {
    category: "Server & Networking",
    items: [
      { name: "MikroTik MTCNA", level: "Core", context: "Certified 2026: routing, firewall NAT, queues" },
      { name: "Docker", level: "Familiar", context: "Basic containerization with Dockerfile" },
      { name: "Git & GitHub", level: "Core", context: "Branching, conventional commits, pull requests" },
      { name: "Linux VPS", level: "Familiar", context: "Ubuntu server basics, Nginx, app deployment" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik Ltd.",
    year: "2026",
    description:
      "Official international certification for MikroTik RouterOS configuration (2026): static & dynamic routing, Firewall NAT, Bandwidth Management (Queues), and network troubleshooting.",
    skills: ["RouterOS", "Firewall NAT", "Static Routing", "Traffic Queues", "IPv4 Subnetting"],
  },
];

export const RECRUITER_FAQS = [
  {
    question: "When are you available to start?",
    answer:
      "I'm immediately available. Open to on-site positions in the Semarang area, hybrid, or fully remote.",
  },
  {
    question: "What role and position fits best?",
    answer:
      "Full Stack Developer or Backend Developer (Laravel / PHP). I have experience designing relational databases, building secure RESTful APIs, building modern Next.js/React interfaces, and hold an MikroTik MTCNA networking certification.",
  },
  {
    question: "What was your internship at BRIDA Kota Semarang like?",
    answer:
      "During my internship at BRIDA Kota Semarang (Regional Research and Innovation Agency), I was directly involved in developing modules for an internal government web application, integrating REST API backend with the frontend, testing endpoints with Postman, and collaborating via Git workflow.",
  },
];
