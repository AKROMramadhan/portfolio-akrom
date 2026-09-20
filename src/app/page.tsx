import Image from "next/image";

const experiences = [
  {
    number: "01",
    type: "Legal Management",
    title: "PT Dapur Nusantara Kolaborasi",
    description:
      "Mengelola pengawasan dan tata kelola pembangunan dapur SPPG wilayah Jawa Timur, termasuk pemetaan kebutuhan, laporan terintegrasi berbasis AI, serta dokumen perizinan, SLHS, kontrak, dan administrasi.",
    stack: ["Apr 2026 — Sekarang", "Legal & Administration"],
  },
  {
    number: "02",
    type: "Certified of Legal Aid",
    title: "Unit Konsultasi & Bantuan Hukum",
    description:
      "Memberikan dukungan layanan hukum litigasi dan non-litigasi bidang perdata dan pidana, mulai pra-peradilan hingga pasca putusan. Mendukung telaah hukum, pendapat hukum, gelar perkara, pendampingan klien, dan pengelolaan database bantuan hukum.",
    stack: ["Mar 2025 — Mar 2026", ">20 perkara selesai"],
  },
  {
    number: "03",
    type: "PPAT / Notaris",
    title: "Dr. Sri Wahyu Jatmikowati, S.H., M.H.",
    description:
      "Mendukung proses pembuatan akta otentik, menerima dan mencatat permohonan klien, melakukan komparasi dokumen dengan peraturan perundang-undangan, serta mengelola digitalisasi arsip lebih dari 200 akta.",
    stack: ["Jun — Sep 2025", ">200 akta terdigitalisasi"],
  },
  {
    number: "04",
    type: "Court Administration",
    title: "Pengadilan Negeri 1B Purbalingga",
    description:
      "Mendukung kepaniteraan pidana, perdata, dan hukum dalam penyusunan relaas panggilan, berita acara persidangan, serta dokumen perkara. Turut membantu mediasi, persidangan sederhana, dan digitalisasi arsip perkara tahun 1980–2000.",
    stack: ["Jul — Aug 2024", "Litigation support"],
  },
];

const capabilities = [
  "Legal research",
  "Legal drafting",
  "Litigation support",
  "Legal administration",
  "Document review",
  "Client assistance",
];

const credentials = [
  "S.H. Universitas Airlangga — IPK 3,71/4,00",
  "Certified Paralegal of Legal Aid (CPLA)",
  "SINTA 4 Journal Publication (2026)",
  "Cumlaude — 3,5 tahun studi",
];

const projects = [
  {
    type: "Publication",
    title: "Prohibition of Interfaith Marriage Registration",
    description:
      "Publikasi SINTA 4 tahun 2026 dengan judul “Prohibition of Interfaith Marriage Registration: A Critique Towards Judicial Policy.”",
  },
  {
    type: "Legal Notes",
    title: "Catatan Perkuliahan",
    description:
      "Ruang untuk mengembangkan catatan hukum, rangkuman materi, dasar hukum, dan pembelajaran selama studi hukum.",
  },
  {
    type: "Legal Research",
    title: "Legal Research & Case Analysis",
    description:
      "Kumpulan riset hukum, analisis putusan, dan tulisan hukum yang dapat dikembangkan menjadi portofolio publik.",
  },
];

const achievements = [
  "Legal Drafting — Universitas Indonesia",
  "Legal Drafting — Universitas Trunojoyo Madura",
  "Legal Opinion — Universitas Airlangga",
  "Surat Dakwaan — Universitas Brawijaya",
  "National Moot Court Competition Prof. Soedarto — Universitas Diponegoro",
];

const testimonials = [
  {
    quote: "Tambahkan rekomendasi dari dosen, mentor, supervisor, atau rekan kerja di bagian ini.",
    author: "Testimonial",
    role: "Foto dan identitas dapat ditambahkan nanti",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/75 text-white backdrop-blur-md">
        <div className="editorial-container flex min-h-16 items-center justify-between">
          <a
            href="#top"
            className="font-serif text-xl tracking-[-0.03em]"
          >
            AKROM<span className="text-[var(--accent-soft)]">.</span>
          </a>

          <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.12em] md:flex">
            <a href="#about" className="transition hover:text-[var(--accent-soft)]">Tentang</a>
            <a href="#experience" className="transition hover:text-[var(--accent-soft)]">Pengalaman</a>
            <a href="#achievements" className="transition hover:text-[var(--accent-soft)]">Prestasi</a>
            <a href="#certifications" className="transition hover:text-[var(--accent-soft)]">Sertifikasi</a>
            <a href="#projects" className="transition hover:text-[var(--accent-soft)]">Proyek</a>
            <a href="#testimonials" className="transition hover:text-[var(--accent-soft)]">Testimoni</a>
            <a href="#contact" className="transition hover:text-[var(--accent-soft)]">Kontak</a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-white/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:bg-white hover:text-black sm:inline-flex"
          >
            Download CV ↗
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-editorial">
        <Image
          src="/akrom-profile.jpg"
          alt="Muhammad Akrom Ramadhan"
          fill
          priority
          className="hero-image object-[center_top]"
        />

        <div className="hero-content">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            Law Graduate · Surabaya, Indonesia
          </p>

          <h1 className="hero-title">
            Muhammad
            <br />
            Akrom Ramadhan
          </h1>

          <p className="hero-subtitle">Legal Research · Legal Drafting · Litigation Support</p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Lulusan Sarjana Hukum Universitas Airlangga dengan pengalaman dalam bantuan hukum,
            layanan PPAT/Notaris, administrasi pengadilan, penelitian hukum, dan pengelolaan dokumen.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="editorial-button editorial-button-light">
              Lihat Portfolio →
            </a>
            <a href="mailto:akromramadhan06@gmail.com" className="editorial-button bg-transparent">
              Hubungi Saya
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>4</strong>
              <span>Pengalaman</span>
            </div>
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Perkara didukung</span>
            </div>
            <div className="hero-stat">
              <strong>200+</strong>
              <span>Akta terdigitalisasi</span>
            </div>
            <div className="hero-stat">
              <strong>3,71</strong>
              <span>IPK / 4,00</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">01 / Tentang Saya</p>
            <h2 className="editorial-title">Clarity is a legal skill.</h2>
          </div>

          <div>
            <p className="editorial-copy text-xl sm:text-2xl">
              Saya memiliki pengalaman praktis dalam bantuan hukum, administrasi perkara,
              layanan PPAT/Notaris, serta pengelolaan dokumen dan penelitian hukum.
              Fokus saya adalah ketelitian, struktur kerja, dan penyampaian informasi hukum yang jelas.
            </p>

            <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
              <div>
                <p className="card-meta">Pendidikan</p>
                <p className="mt-2 font-serif text-xl">S.H.</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Universitas Airlangga</p>
              </div>
              <div>
                <p className="card-meta">IPK</p>
                <p className="mt-2 font-serif text-xl">3,71 / 4,00</p>
              </div>
              <div>
                <p className="card-meta">Domisili</p>
                <p className="mt-2 font-serif text-xl">Surabaya</p>
              </div>
              <div>
                <p className="card-meta">Fokus</p>
                <p className="mt-2 font-serif text-xl">Legal Work</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
              {capabilities.map((capability) => (
                <span key={capability}>↳ {capability}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="editorial-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-label">02 / Pengalaman</p>
              <h2 className="editorial-title">Selected experience</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              Setiap pengalaman nantinya dapat dibuat menjadi halaman detail dengan dokumentasi,
              foto kegiatan, dan sertifikat.
            </p>
          </div>

          <div className="editorial-list">
            {experiences.map((experience) => (
              <article key={experience.title} className="editorial-list-item group">
                <span className="list-number">{experience.number}</span>

                <div>
                  <p className="card-meta">{experience.type}</p>
                  <h3 className="list-title">{experience.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                    {experience.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {experience.stack.map((item) => (
                      <span key={item} className="list-meta">• {item}</span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8"
                >
                  Detail →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="editorial-container">
          <div className="mb-12">
            <p className="section-label">03 / Prestasi</p>
            <h2 className="editorial-title">Competitions & achievements</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <article key={achievement} className="editorial-card">
                <div className="card-image relative bg-[#ded9cd]">
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <span className="font-serif text-2xl text-[var(--ink)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="card-meta">Achievement</p>
                  <h3 className="card-title">{achievement}</h3>
                  <p className="card-description">
                    Dokumentasi, cerita kegiatan, dan sertifikat dapat ditambahkan pada halaman detail.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">04 / Sertifikasi</p>
            <h2 className="editorial-title">Credentials & training.</h2>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential, index) => (
                <article key={credential} className="editorial-card p-6">
                  <p className="card-meta">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl leading-tight">{credential}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    Sertifikat atau dokumen pendukung dapat ditempatkan di halaman detail.
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8"
                  >
                    View credential →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="editorial-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-label">05 / Projects</p>
              <h2 className="editorial-title">Articles, notes & legal work.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              Bagian ini dapat berkembang menjadi perpustakaan pribadi untuk artikel, catatan kuliah,
              legal research, dan case analysis.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <article className="editorial-card">
              <div className="card-image min-h-[380px] bg-[#d9d2c4]">
                <div className="flex h-full items-end p-7">
                  <div>
                    <p className="card-meta">Publication · 2026</p>
                    <h3 className="mt-3 max-w-2xl font-serif text-4xl leading-[0.98] sm:text-5xl">
                      Prohibition of Interfaith Marriage Registration
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="card-description">{projects[0].description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8"
                >
                  Read project →
                </a>
              </div>
            </article>

            <div className="grid gap-4">
              {projects.slice(1).map((project) => (
                <article key={project.title} className="editorial-card p-6">
                  <p className="card-meta">{project.type}</p>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8"
                  >
                    Explore →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="editorial-container">
          <p className="section-label">06 / Testimoni</p>

          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <div className="testimonial-photo relative">
                <div className="flex h-full w-full items-center justify-center bg-[#d8d3c8] font-serif text-4xl">
                  +
                </div>
              </div>

              <div>
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <p className="testimonial-author">
                  {testimonial.author}
                  <br />
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-label">07 / Kontak</p>
            <h2 className="editorial-title">Let&apos;s connect.</h2>
          </div>

          <div>
            <p className="editorial-copy text-xl sm:text-2xl">
              Terbuka untuk kesempatan kerja, kolaborasi, diskusi hukum, dan proyek yang membutuhkan
              penelitian serta pengelolaan dokumen secara terstruktur.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="mailto:akromramadhan06@gmail.com"
                className="editorial-button"
              >
                Email Saya →
              </a>

              <a
                href="https://www.linkedin.com/in/akrom-ramadhan/"
                target="_blank"
                rel="noreferrer"
                className="editorial-button bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--black)] py-8 text-white">
        <div className="editorial-container flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
          <span>Akrom Ramadhan © 2026</span>
          <span>Law Graduate · Universitas Airlangga</span>
        </div>
      </footer>
    </main>
  );
}
