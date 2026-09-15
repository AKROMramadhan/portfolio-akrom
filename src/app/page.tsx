const projects = [
  {
    title: "Portfolio Akrom",
    description:
      "Ini adalah portofolio modern dari Akrom.js and Tailwind CSS for a polished digital presence.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Bagian hukum",
    description:
      "Responsive marketing page focused on product clarity, conversion, and strong visual storytelling.",
    stack: ["React", "UI Design", "Responsive"],
  },
  {
    title: "Dashboard Experience",
    description:
      "Data-driven interface concept designed for clarity, usability, and decision-making workflows.",
    stack: ["Analytics", "UX", "Figma"],
  },
];

const stats = [
  { label: "Projects shipped", value: "12+" },
  { label: "Years experience", value: "3" },
  { label: "Client satisfaction", value: "100%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="text-lg font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            AKROM
          </div>
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">
              Frontend developer
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build clean, modern digital experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Hi, I’m Akrom Ramadhan — a developer focused on crafting sharp user interfaces,
              smooth product experiences, and polished web applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-slate-400">Current focus</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                Available
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                <p className="mt-2 text-xl font-semibold text-white">Frontend Engineer</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                    <div className="text-xl font-bold text-cyan-300">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About me</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Turning ideas into fast, human-centered products.</h2>
          </div>
          <div className="text-lg leading-8 text-slate-300">
            I enjoy building interfaces that feel intuitive, look premium, and work smoothly across devices.
            My work blends design thinking, frontend engineering, and a strong attention to performance and usability.
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Selected work</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Recent projects</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-900" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Let&apos;s build something meaningful together.</h2>
            <a
              href="mailto:akromramadhan@gmail.com"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              akromramadhan@gmail.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
