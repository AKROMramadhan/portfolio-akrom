const projects = [
  {
    number: "01",
    type: "Institutional website",
    title: "Unit Konsultasi dan Bantuan Hukum",
    description:
      "Merapikan akses informasi layanan bantuan hukum untuk civitas akademika dan masyarakat umum.",
    stack: ["Next.js", "Content design"],
    tone: "coral",
  },
  {
    number: "02",
    type: "Public service",
    title: "Pengadilan Negeri Purbalingga 1B",
    description:
      "Menyusun pengalaman digital yang lebih jelas untuk informasi perkara, layanan, dan publikasi pengadilan.",
    stack: ["Responsive UI", "Information architecture"],
    tone: "blue",
  },
  {
    number: "03",
    type: "Professional services",
    title: "PPAT / Notaris Sri Wahyu Jatmikowati",
    description:
      "Membangun kehadiran digital yang tepercaya untuk layanan pertanahan dan legalitas.",
    stack: ["UX direction", "Web design"],
    tone: "gold",
  },
];

const capabilities = ["Web design", "Frontend development", "Content systems"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-[var(--line)] py-6">
          <a href="#top" className="font-mono text-sm font-bold tracking-[0.18em]">
            AKROM<span className="text-[var(--coral)]">.</span>
          </a>
          <nav className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:gap-8">
            <a href="#about" className="transition hover:text-[var(--ink)]">About</a>
            <a href="#work" className="transition hover:text-[var(--ink)]">Selected work</a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">Contact</a>
          </nav>
        </header>

        <section id="top" className="grid gap-12 border-b border-[var(--line)] py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="animate-rise">
            <p className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--coral)]">
              Digital maker / Surabaya, ID
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[6.7rem]">
              Interfaces with <em className="font-serif font-normal text-[var(--blue)]">purpose.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Saya Akrom Ramadhan, frontend developer yang membantu organisasi hukum dan layanan publik hadir dengan lebih jelas, berguna, dan manusiawi.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#work" className="inline-flex items-center gap-3 bg-[var(--ink)] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--paper)] transition hover:bg-[var(--coral)]">
                Lihat karya <span aria-hidden="true">↘</span>
              </a>
              <a href="mailto:akromramadhan@gmail.com" className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] underline decoration-[var(--coral)] decoration-2 underline-offset-8 transition hover:text-[var(--ink)]">
                Mulai percakapan
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[330px] items-end overflow-hidden bg-[var(--blue)] p-7 text-[var(--paper)] sm:min-h-[390px] lg:mt-16">
            <div className="absolute -right-7 -top-10 font-serif text-[15rem] leading-none text-white/10">A</div>
            <div className="relative z-10 w-full">
              <div className="mb-12 flex items-start justify-between border-b border-white/30 pb-4 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span>Currently building</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Available</span>
              </div>
              <p className="max-w-xs text-3xl font-semibold leading-tight">Web yang terasa setenang dokumen yang tertata.</p>
              <div className="mt-8 flex gap-8 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70">
                <span>3+ years<br /><strong className="text-sm text-white">crafting</strong></span>
                <span>12 projects<br /><strong className="text-sm text-white">shipped</strong></span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 border-b border-[var(--line)] py-20 sm:py-24 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">01 / Tentang</p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">Clarity is a feature.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-2xl leading-snug tracking-[-0.025em] sm:text-3xl">
              Saya menerjemahkan hal-hal yang rumit menjadi pengalaman digital yang mudah dipahami dan nyaman digunakan.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              {capabilities.map((capability) => <span key={capability}>↳ {capability}</span>)}
            </div>
          </div>
        </section>

        <section id="work" className="py-20 sm:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">02 / Karya terpilih</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Selected work</h2>
            </div>
            <span className="hidden font-mono text-xs text-[var(--muted)] sm:block">2023 — 2025</span>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group bg-[var(--paper)] p-6 transition hover:bg-white sm:p-8">
                <div className={`project-poster poster-${project.tone} mb-10 flex h-44 items-end justify-between p-5`}>
                  <span className="font-mono text-xs font-bold">{project.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]">{project.type}</span>
                </div>
                <h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-[-0.03em]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {project.stack.map((item) => <span key={item}>• {item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--line)] py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">03 / Kontak</p>
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">Ada hal yang perlu dibuat lebih jelas?</h2>
              <a href="mailto:akromramadhan@gmail.com" className="mt-8 inline-flex border-b-2 border-[var(--coral)] pb-2 text-lg font-semibold transition hover:text-[var(--coral)]">akromramadhan@gmail.com <span className="ml-3">↗</span></a>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap justify-between gap-4 border-t border-[var(--line)] py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Akrom Ramadhan © 2025</span>
          <span>Built with care in Indonesia</span>
        </footer>
      </div>
    </main>
  );
}
