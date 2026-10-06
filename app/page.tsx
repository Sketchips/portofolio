const projects = [
  {
    title: "AI-Powered Learning Management System",
    type: "Final Project - 2025",
    description:
      "LMS berbasis Laravel dan Next.js dengan backend API, dashboard admin, manajemen user, kelas, materi, video upload, dan integrasi fitur AI.",
    stack: ["Laravel", "Next.js", "PostgreSQL", "AI Feature"],
  },
  {
    title: "GeoSiaga",
    type: "Disaster Reporting System - 2024",
    description:
      "Aplikasi pelaporan bencana berbasis web yang mencakup alur laporan, informasi shelter evakuasi, dan antarmuka peta bencana.",
    stack: ["Laravel", "React", "REST API", "Map UI"],
  },
  {
    title: "Online Examination Management System",
    type: "Exam Platform - 2024",
    description:
      "Sistem ujian berbasis web dengan modul manajemen ujian, pelaporan hasil, dan export nilai sesuai kebutuhan sistem.",
    stack: ["Laravel", "React", "Reporting", "Export"],
  },
  {
    title: "Flexy Tourism Ticketing App",
    type: "Mobile Backend - 2023",
    description:
      "Backend aplikasi ticketing wisata dengan Laravel, MySQL, RESTful API, modul manajemen, reporting, dan integrasi ke aplikasi Flutter.",
    stack: ["Laravel", "MySQL", "Flutter API", "Auth"],
  },
];

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "PHP",
  "Laravel",
  "RESTful API",
  "API Integration",
  "Authentication",
  "MySQL",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
  "Postman",
  "Figma",
  "Basic Networking",
  "MikroTik MTCNA",
];

const highlights = [
  "Backend API",
  "Admin Dashboard",
  "Database Design",
  "Frontend Integration",
];

const stats = [
  ["5+", "Team projects"],
  ["2025", "LMS final project"],
  ["MTCNA", "Networking certified"],
];

const experience = [
  {
    role: "Web Development Intern",
    company: "MII Semarang",
    detail:
      "Mendukung pengembangan aplikasi web, integrasi fitur, dan alur kerja frontend-backend.",
  },
  {
    role: "Full Stack Developer",
    company: "Academic & Team Projects",
    detail:
      "Membangun aplikasi Laravel, React, dan Next.js dengan modul API, dashboard, database, dan reporting.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#161616]">
      <section className="relative isolate overflow-hidden bg-[#102429] text-white lg:min-h-screen">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#102429_0%,#173d46_42%,#f0b457_135%)]" />
        <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#e85d45]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#39a7a5]/18 blur-3xl" />

        <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#102429]/72 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
            <a className="text-sm font-black tracking-[0.24em]" href="#top">
              MAG
            </a>
            <div className="hidden items-center gap-7 text-sm font-semibold text-white/72 sm:flex">
              <a className="transition hover:text-white" href="#profile">
                Profile
              </a>
              <a className="transition hover:text-white" href="#work">
                Work
              </a>
              <a className="transition hover:text-white" href="#skills">
                Skills
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
            <a
              className="rounded-md bg-white px-3 py-2 text-xs font-black text-[#102429] transition hover:bg-[#f0b457] sm:px-4 sm:text-sm"
              href="mailto:smrgariel@gmail.com"
            >
              Contact
            </a>
          </div>
        </nav>

        <div
          id="top"
          className="mx-auto grid max-w-6xl items-center gap-9 px-4 pb-12 pt-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-65px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20"
        >
          <div>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0d29d] sm:mb-6 sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#53d6a8]" />
              Open to Full Stack Developer Roles
            </div>
            <h1 className="max-w-4xl text-[2.8rem] font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Muhamad Ariel Gunawan
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#f4e8d2] sm:mt-6 sm:text-xl">
              Full stack developer yang membangun aplikasi web dengan Laravel,
              React, Next.js, RESTful API, dan database yang rapi.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:mt-5 sm:text-base sm:leading-8">
              Berpengalaman membuat backend API, dashboard admin, integrasi
              frontend, authentication, reporting, dan deployment dasar melalui
              project tim serta internship web development di MII Semarang.
            </p>

            <div className="mt-7 grid gap-3 min-[420px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#f0b457] px-6 text-sm font-black text-[#161616] shadow-lg shadow-[#000]/20 transition hover:bg-[#ffd07b]"
                href="#work"
              >
                View Projects
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/18 px-6 text-sm font-black text-white transition hover:bg-white/10"
                href="https://github.com/sketchips"
                rel="noreferrer"
                target="_blank"
              >
                GitHub: sketchips
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:gap-3">
              {highlights.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/8 px-3 py-3 text-xs font-bold leading-5 text-white/86 sm:px-4 sm:text-sm"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="rounded-lg border border-white/12 bg-white/10 p-2 shadow-2xl shadow-black/24 backdrop-blur sm:p-3">
              <div className="overflow-hidden rounded-md bg-[#f8f2e8] text-[#161616]">
                <div className="flex items-center justify-between border-b border-[#161616]/10 bg-white px-3 py-3 sm:px-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#e85d45]" />
                    <span className="h-3 w-3 rounded-full bg-[#f0b457]" />
                    <span className="h-3 w-3 rounded-full bg-[#53d6a8]" />
                  </div>
                  <span className="text-xs font-black text-[#617176]">
                    portfolio.tsx
                  </span>
                </div>
                <div className="grid gap-3 p-3 sm:gap-4 sm:p-5">
                  <div className="rounded-md bg-[#102429] p-4 text-white sm:p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0b457]">
                      Current Focus
                    </p>
                    <h2 className="mt-3 text-xl font-black sm:text-2xl">
                      Building reliable web apps
                    </h2>
                    <div className="mt-5 grid gap-2">
                      {["API", "Auth", "Dashboard", "Database"].map((item) => (
                        <div
                          className="flex items-center justify-between rounded bg-white/8 px-3 py-2 text-sm font-bold"
                          key={item}
                        >
                          <span>{item}</span>
                          <span className="text-[#53d6a8]">ready</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {stats.map(([value, label]) => (
                      <div
                        className="rounded-md border border-[#161616]/10 bg-white p-3 sm:p-4"
                        key={label}
                      >
                        <p className="text-xl font-black text-[#173d46] sm:text-2xl">
                          {value}
                        </p>
                        <p className="mt-1 text-xs font-semibold leading-4 text-[#617176]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="border-b border-[#161616]/10 bg-[#f6f1e8] px-4 py-14 sm:px-8 sm:py-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c94e3b]">
              Profile
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
              Developer yang nyaman bekerja di frontend, backend, dan database.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-[#161616]/10 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm leading-7 text-[#4f4b44] sm:text-base sm:leading-8">
                Saya terbiasa mengembangkan aplikasi dengan RESTful API,
                authentication, CRUD, database design, dan integrasi frontend.
                Fokus saya adalah membuat fitur yang jelas, stabil, dan mudah
                digunakan.
              </p>
            </div>
            <div className="rounded-lg border border-[#161616]/10 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm leading-7 text-[#4f4b44] sm:text-base sm:leading-8">
                Selain web development, saya memiliki dasar computer networking,
                MikroTik MTCNA, static routing, dan pengalaman memakai GitHub,
                Docker, Postman, XAMPP, Vercel, dan DigitalOcean VPS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {experience.map((item) => (
              <article
                className="rounded-lg border border-[#161616]/10 bg-[#f6f1e8] p-5 sm:p-6"
                key={item.role}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#25727a]">
                  {item.company}
                </p>
                <h3 className="mt-3 text-xl font-black sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d5750] sm:text-base">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="bg-[#101c21] px-4 py-14 text-white sm:px-8 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b457]">
                Selected Work
              </p>
              <h2 className="mt-4 text-2xl font-black sm:text-4xl">
                Project Pilihan
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/68 sm:text-base">
              Project akademik, final project, dan pengalaman tim yang
              menunjukkan kemampuan membangun aplikasi web full stack.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 md:gap-5">
            {projects.map((project, index) => (
              <article
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#f0b457]/50 hover:bg-white/[0.09] sm:p-6"
                key={project.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#7fd9c6]">
                      {project.type}
                    </p>
                    <h3 className="mt-4 text-xl font-black leading-tight sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-md bg-[#f0b457] px-2.5 py-2 text-xs font-black text-[#101c21] sm:px-3 sm:text-sm">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70 md:min-h-24">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/82"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-[#f6f1e8] px-4 py-14 sm:px-8 sm:py-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#25727a]">
              Capabilities
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
              Stack yang dipakai untuk membangun aplikasi end-to-end.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#5d5750] sm:text-base sm:leading-8">
              Kombinasi web development dan basic networking memberi fondasi
              kuat untuk memahami aplikasi dari kode sampai lingkungan deploy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 min-[460px]:flex min-[460px]:flex-wrap">
            {skills.map((skill) => (
              <span
                className="flex min-h-11 items-center justify-center rounded-md border border-[#173d46]/18 bg-[#fffdf8] px-3 py-2.5 text-center text-xs font-black leading-4 text-[#173d46] shadow-[0_4px_0_#173d46,0_10px_22px_rgba(16,36,41,0.10)] transition hover:translate-y-1 hover:shadow-[0_2px_0_#173d46,0_7px_16px_rgba(16,36,41,0.10)] sm:px-4 sm:py-3 sm:text-sm"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#f0b457] px-4 py-14 text-[#161616] sm:px-8 sm:py-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8e321f]">
              Available for work
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Siap berkontribusi sebagai full stack developer dan terus belajar
              lewat project nyata.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#161616] px-4 py-3 text-center text-sm font-black text-white transition hover:bg-[#263238] sm:px-6"
              href="mailto:smrgariel@gmail.com"
            >
              smrgariel@gmail.com
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#161616]/20 bg-white/30 px-4 py-3 text-center text-sm font-black text-[#161616] transition hover:bg-white/55 sm:px-6"
              href="https://github.com/sketchips"
              rel="noreferrer"
              target="_blank"
            >
              github.com/sketchips
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
