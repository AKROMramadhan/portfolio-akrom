import Link from "next/link";
import Image from "next/image";
import { achievements, certifications, experiences, projects } from "./data/portfolio";

const capabilities = [
  "Legal research",
  "Legal drafting",
  "Litigation support",
  "Legal administration",
  "Document review",
  "Client assistance",
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
        <div className="editorial-container flex min-h-16 items-center justify-between gap-6">
          <Link href="#top" className="font-serif text-xl tracking-[-0.03em]">
            AKROM<span className="text-[var(--accent-soft)]">.</span>
          </Link>
          <nav className="desktop-nav hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] lg:flex">
            <Link href="#about">Tentang</Link>
            <Link href="#experience">Pengalaman</Link>
            <Link href="#achievements">Prestasi</Link>
            <Link href="#certifications">Sertifikasi</Link>
            <Link href="#projects">Proyek</Link>
            <Link href="#contact">Kontak</Link>
          </nav>
          <div className="mobile-nav lg:hidden">
            <Link href="#about">Tentang</Link>
            <Link href="#experience">Pengalaman</Link>
            <Link href="#achievements">Prestasi</Link>
            <Link href="#certifications">Sertifikasi</Link>
            <Link href="#projects">Proyek</Link>
            <Link href="#contact">Kontak</Link>
          </div>
          <a href="/Muhammad-Akrom-Ramadhan-CV.pdf" target="_blank" rel="noreferrer" className="hidden border border-white/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] sm:inline-flex">
            Download CV ↗
          </a>
        </div>
      </header>

      <section className="hero-editorial">
        <Image src="/akrom-profile.jpg" alt="Muhammad Akrom Ramadhan" fill priority className="hero-image" />
        <div className="hero-content">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Law Graduate · Surabaya, Indonesia</p>
          <h1 className="hero-title">Muhammad<br />Akrom Ramadhan</h1>
          <p className="hero-subtitle">Legal Research · Legal Drafting · Litigation Support</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Lulusan Sarjana Hukum Universitas Airlangga dengan pengalaman dalam bantuan hukum, layanan PPAT/Notaris, administrasi pengadilan, penelitian hukum, dan pengelolaan dokumen.
          </p>
          <div className="hero-actions">
            <Link href="#experience" className="editorial-button editorial-button-light">Lihat Portfolio →</Link>
            <a href="mailto:akromramadhan06@gmail.com" className="editorial-button bg-transparent">Hubungi Saya</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>4</strong><span>Pengalaman</span></div>
            <div className="hero-stat"><strong>20+</strong><span>Perkara didukung</span></div>
            <div className="hero-stat"><strong>200+</strong><span>Akta terdigitalisasi</span></div>
            <div className="hero-stat"><strong>3,71</strong><span>IPK / 4,00</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-label">01 / Tentang Saya</p><h2 className="editorial-title">Clarity is a legal skill.</h2></div>
          <div>
            <p className="editorial-copy text-xl sm:text-2xl">Saya memiliki pengalaman praktis dalam bantuan hukum, administrasi perkara, layanan PPAT/Notaris, serta pengelolaan dokumen dan penelitian hukum. Fokus saya adalah ketelitian, struktur kerja, dan penyampaian informasi hukum yang jelas.</p>
            <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
              <div><p className="card-meta">Pendidikan</p><p className="mt-2 font-serif text-xl">S.H.</p><p className="mt-1 text-sm text-[var(--muted)]">Universitas Airlangga</p></div>
              <div><p className="card-meta">IPK</p><p className="mt-2 font-serif text-xl">3,71 / 4,00</p></div>
              <div><p className="card-meta">Domisili</p><p className="mt-2 font-serif text-xl">Surabaya</p></div>
              <div><p className="card-meta">Fokus</p><p className="mt-2 font-serif text-xl">Legal Work</p></div>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
              {capabilities.map((x) => <span key={x}>↳ {x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="editorial-container">
          <div className="mb-12"><p className="section-label">02 / Pengalaman</p><h2 className="editorial-title">Selected experience</h2></div>
          <div className="editorial-list">
            {experiences.map((item) => (
              <article key={item.slug} className="editorial-list-item group">
                <span className="list-number">{item.number}</span>
                <div>
                  <p className="card-meta">{item.type}</p>
                  <h3 className="list-title">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-4">{item.highlights.map((h) => <span key={h} className="list-meta">• {h}</span>)}</div>
                </div>
                <Link href={`/pengalaman/${item.slug}`} className="font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">Detail →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="editorial-container">
          <div className="mb-12"><p className="section-label">03 / Prestasi</p><h2 className="editorial-title">Competitions & achievements</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item) => (
              <Link href={`/prestasi/${item.slug}`} key={item.slug} className="editorial-card block p-7">
                <p className="card-meta">{item.number} · {item.type}</p>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.summary}</p>
                <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">Open case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="editorial-container">
          <div className="mb-12"><p className="section-label">04 / Sertifikasi</p><h2 className="editorial-title">Credentials & training.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((item, i) => (
              <Link href={`/sertifikasi#${item.slug}`} key={item.slug} className="editorial-card p-7">
                <p className="card-meta">0{i + 1} · {item.meta}</p>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">View credential →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="editorial-container">
          <div className="mb-12"><p className="section-label">05 / Projects</p><h2 className="editorial-title">Articles, notes & legal work.</h2></div>
          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <Link href={`/proyek/${projects[0].slug}`} className="editorial-card block p-8">
              <p className="card-meta">{projects[0].type}</p><h3 className="mt-4 max-w-2xl font-serif text-4xl leading-[0.98] sm:text-6xl">{projects[0].title}</h3>
              <p className="card-description mt-8">{projects[0].summary}</p>
              <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">Read project →</span>
            </Link>
            <div className="grid gap-4">
              {projects.slice(1).map((item) => <Link href={`/proyek/${item.slug}`} key={item.slug} className="editorial-card block p-7"><p className="card-meta">{item.type}</p><h3 className="card-title">{item.title}</h3><p className="card-description">{item.summary}</p><span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">Explore →</span></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="editorial-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-label">06 / Testimoni</p><h2 className="editorial-title">What people say.</h2></div>
          <div className="testimonial-card"><div className="testimonial-photo"><div className="flex h-full items-center justify-center font-serif text-4xl">+</div></div><div><p className="testimonial-quote">“Tambahkan rekomendasi nyata dari dosen, mentor, supervisor, atau rekan kerja.”</p><p className="testimonial-author">Testimonial · Menunggu dokumentasi</p></div></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div><p className="section-label">07 / Kontak</p><h2 className="editorial-title">Let&apos;s connect.</h2></div>
          <div><p className="editorial-copy text-xl sm:text-2xl">Terbuka untuk kesempatan kerja, kolaborasi, diskusi hukum, dan proyek yang membutuhkan penelitian serta pengelolaan dokumen secara terstruktur.</p><div className="mt-8 flex flex-wrap gap-5"><a href="mailto:akromramadhan06@gmail.com" className="editorial-button">Email Saya →</a><a href="https://www.linkedin.com/in/akrom-ramadhan/" target="_blank" rel="noreferrer" className="editorial-button bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white">LinkedIn ↗</a></div></div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--black)] py-8 text-white"><div className="editorial-container flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"><span>Akrom Ramadhan © 2026</span><span>Law Graduate · Universitas Airlangga</span></div></footer>
    </main>
  );
}
