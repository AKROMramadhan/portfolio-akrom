import Image from "next/image";
const projects = [
  {
    number: "01",
    type: "Legal Management",
    title: "Dapur Laborasi",
    description:
      "Mengelola pengawasan dan tata kelola pembangunan dapur SPPG wilayah Jawa Timur, termasuk pemetaan kebutuhan, laporan terintegrasi berbasis AI, serta dokumen perizinan, SLHS, kontrak, dan administrasi.",
    stack: ["Apr 2026 — Sekarang", "Legal & Administration"],
    tone: "coral",
  },
  {
    number: "02",
    type: "Certified of Legal Aid",
    title: "Unit Konsultasi & Bantuan Hukum",
    description:
      "Memberikan dukungan layanan hukum litigasi dan non-litigasi bidang perdata dan pidana, mulai pra-peradilan hingga pasca putusan. Mendukung telaah hukum, pendapat hukum, gelar perkara, pendampingan klien, dan pengelolaan database bantuan hukum.",
    stack: ["Mar 2025 — Mar 2026", ">20 perkara selesai"],
    tone: "blue",
  },
  {
    number: "03",
    type: "PPAT / Notaris",
    title: "Dr. Sri Wahyu Jatmikowati, S.H., M.H.",
    description:
      "Mendukung proses pembuatan akta otentik, menerima dan mencatat permohonan klien, melakukan komparasi dokumen dengan peraturan perundang-undangan, serta mengelola digitalisasi arsip lebih dari 200 akta.",
    stack: ["Jun — Sep 2025", ">200 akta terdigitalisasi"],
    tone: "gold",
  },
  {
    number: "04",
    type: "Court Administration",
    title: "Pengadilan Negeri 1B Purbalingga",
    description:
      "Mendukung kepaniteraan pidana, perdata, dan hukum dalam penyusunan relaas panggilan, berita acara persidangan, serta dokumen perkara. Turut membantu mediasi, persidangan sederhana, dan digitalisasi arsip perkara tahun 1980–2000.",
    stack: ["Jul — Aug 2024", "Litigation support"],
    tone: "coral",
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
            <a href="#work" className="transition hover:text-[var(--ink)]">Experience</a>
            <a href="#credentials" className="transition hover:text-[var(--ink)]">Credentials</a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">Contact</a>
          </nav>
        </header>

        <section id="top" className="grid gap-12 border-b border-[var(--line)] py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="animate-rise">
            <p className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--coral)]">
              Law Graduate / Surabaya, ID
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[6.7rem]">
              Law with <em className="font-serif font-normal text-[var(--blue)]">purpose.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Saya Muhammad Akrom Ramadhan, lulusan Sarjana Hukum Universitas Airlangga dengan pengalaman dalam bantuan hukum litigasi, layanan PPAT/Notaris, administrasi pengadilan, legal research, dan legal drafting.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#work" className="inline-flex items-center gap-3 bg-[var(--ink)] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--paper)] transition hover:bg-[var(--coral)]">
                Lihat pengalaman <span aria-hidden="true">↘</span>
              </a>
              <a href="mailto:akromramadhan06@gmail.com" className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] underline decoration-[var(--coral)] decoration-2 underline-offset-8 transition hover:text-[var(--ink)]">
                Hubungi saya
              </a>
            </div>
          </div>

<div className="relative min-h-[330px] overflow-hidden bg-[#2d6870]">

  {/* FOTO PROFIL */}
  <div
    className="
      absolute z-20 overflow-hidden rounded-[50%]
      border-2 border-white/60
      right-5 top-26
      h-52 w-36
      sm:right-6 sm:top-14 sm:h-56 sm:w-40
      md:right-7 md:top-14 md:h-60 md:w-44
      lg:right-8 lg:top-16 lg:h-64 lg:w-48
      xl:right-10 xl:top-16 xl:h-72 xl:w-56
    "
  >
    <Image
      src="/akrom-profile.jpg"
      alt="Muhammad Akrom Ramadhan"
      fill
      className="object-cover object-top"
      priority
    />
  </div>

  {/* ISI PROFESSIONAL PROFILE */}
  <div
    className="
      relative z-10
      w-full
      px-6 pt-8 pb-6
      sm:px-8
      md:px-10
      lg:px-10
      xl:px-10
    "
  >

    {/* HEADER */}
    <div
      className="
        mb-10
        flex items-start justify-between
        border-b border-white/30
        pb-4
        pr-[1%]
      "
    >
      <span>Professional profile</span>

      <span className="flex items-center gap-2 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-[#f5b942]" />
        Legal
      </span>
    </div>

    {/* MAIN TEXT */}
    <div
      className="
        max-w-[20%]
        sm:max-w-[52%]
        md:max-w-[52%]
        lg:max-w-[50%]
        xl:max-w-[52%]
      "
    >
      <p
        className="
          text-2xl
          font-semibold
          leading-tight
          sm:text-3xl
          md:text-3xl
          lg:text-3xl
          xl:text-3xl
        "
      >
        Mari bekerja sama dalam pekerjaan bidang hukum.
      </p>
    </div>

    {/* STATS */}
    <div
      className="
        mt-8
        flex gap-8
        font-mono
        text-[10px]
        uppercase
        tracking-[0.12em]
        sm:gap-12
      "
    >
      <span>
        3.71 / 4.00
        <br />
        <strong className="text-sm text-white">
          GPA
        </strong>
      </span>

      <span>
        20+ matters
        <br />
        <strong className="text-sm text-white">
          completed
        </strong>
      </span>
    </div>

  </div>
</div>
        </section>

        <section id="about" className="grid gap-10 border-b border-[var(--line)] py-20 sm:py-24 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">01 / Tentang</p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">Clarity is a legal skill.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-2xl leading-snug tracking-[-0.025em] sm:text-3xl">
              Saya memiliki pengalaman praktis dalam bantuan hukum, administrasi perkara, layanan PPAT/Notaris, serta pengelolaan dokumen dan penelitian hukum. Fokus saya adalah ketelitian, struktur kerja, dan penyampaian informasi hukum yang jelas.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              {capabilities.map((capability) => <span key={capability}>↳ {capability}</span>)}
            </div>
          </div>
        </section>

        <section id="work" className="py-20 sm:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">02 / Pengalaman</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Selected experience</h2>
            </div>
            <span className="hidden font-mono text-xs text-[var(--muted)] sm:block">2024 — Present</span>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group bg-[var(--paper)] p-6 transition hover:bg-white sm:p-8">
                <div className={`project-poster poster-${project.tone} mb-10 flex h-44 items-end justify-between p-5`}>
                  <span className="font-mono text-xs font-bold">{project.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]">{project.type}</span>
                </div>
                <h3 className="max-w-lg text-2xl font-semibold leading-tight tracking-[-0.03em]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {project.stack.map((item) => <span key={item}>• {item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="grid gap-10 border-t border-[var(--line)] py-20 sm:py-24 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">03 / Credentials</p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">Research, drafting & leadership.</h2>
          </div>
          <div>
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
              {credentials.map((credential) => (
                <div key={credential} className="bg-[var(--paper)] p-6 text-lg font-medium leading-snug sm:p-7">↳ {credential}</div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--coral)]">Selected legal competitions</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Legal Drafting — Universitas Indonesia; Legal Drafting — Universitas Trunojoyo Madura; Legal Opinion — Universitas Airlangga; Surat Dakwaan — Universitas Brawijaya; National Moot Court Competition Prof. Soedarto — Universitas Diponegoro.</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--coral)]">Leadership & publication</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Ketua Generasi Baru Indonesia (GENBI) Surabaya, peserta Rumah Kepemimpinan, serta penulis publikasi SINTA 4 tahun 2026: “Prohibition of Interfaith Marriage Registration: A Critique Towards Judicial Policy.”</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--line)] py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral)]">04 / Kontak</p>
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">Mari membicarakan pekerjaan hukum yang perlu ditangani dengan jelas.</h2>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm uppercase tracking-[0.08em]">
                <a href="mailto:akromramadhan06@gmail.com" className="border-b-2 border-[var(--coral)] pb-2 transition hover:text-[var(--coral)]">akromramadhan06@gmail.com ↗</a>
                <a href="https://www.linkedin.com/in/akrom-ramadhan/" target="_blank" rel="noreferrer" className="border-b-2 border-[var(--blue)] pb-2 transition hover:text-[var(--blue)]">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap justify-between gap-4 border-t border-[var(--line)] py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Akrom Ramadhan © 2026</span>
          <span>Law Graduate · Universitas Airlangga</span>
        </footer>
      </div>
    </main>
  );
}
