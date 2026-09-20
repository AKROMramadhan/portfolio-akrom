export type PortfolioItem = {
  slug: string;
  number: string;
  type: string;
  title: string;
  period: string;
  summary: string;
  details: string[];
  highlights: string[];
  images: string[];
};

export const experiences: PortfolioItem[] = [
  {
    slug: "pt-dapur-nusantara-kolaborasi",
    number: "01",
    type: "Legal Management",
    title: "PT Dapur Nusantara Kolaborasi",
    period: "Apr 2026 — Sekarang",
    summary: "Mengelola pengawasan dan tata kelola pembangunan dapur SPPG wilayah Jawa Timur, termasuk pemetaan kebutuhan, laporan terintegrasi berbasis AI, serta dokumen perizinan, SLHS, kontrak, dan administrasi.",
    details: [
      "Pengelolaan dokumen legal dan administrasi yang berkaitan dengan kegiatan operasional.",
      "Pemetaan kebutuhan dan penyusunan laporan terintegrasi untuk mendukung monitoring pekerjaan.",
      "Dukungan terhadap dokumentasi perizinan, SLHS, kontrak, dan administrasi.",
    ],
    highlights: ["Legal & Administration", "Document management", "Reporting"],
    images: [],
  },
  {
    slug: "unit-konsultasi-bantuan-hukum",
    number: "02",
    type: "Certified of Legal Aid",
    title: "Unit Konsultasi & Bantuan Hukum",
    period: "Mar 2025 — Mar 2026",
    summary: "Memberikan dukungan layanan hukum litigasi dan non-litigasi bidang perdata dan pidana, mulai pra-peradilan hingga pasca putusan.",
    details: [
      "Mendukung telaah hukum dan penyusunan pendapat hukum.",
      "Mendukung gelar perkara dan pendampingan klien.",
      "Mengelola database dan administrasi bantuan hukum.",
    ],
    highlights: [">20 perkara selesai", "Litigation support", "Legal research"],
    images: [],
  },
  {
    slug: "ppat-notaris",
    number: "03",
    type: "PPAT / Notaris",
    title: "Dr. Sri Wahyu Jatmikowati, S.H., M.H.",
    period: "Jun — Sep 2025",
    summary: "Mendukung proses pembuatan akta otentik, menerima dan mencatat permohonan klien, melakukan komparasi dokumen dengan peraturan perundang-undangan, serta mengelola digitalisasi arsip.",
    details: [
      "Menerima dan mencatat permohonan klien.",
      "Melakukan komparasi dokumen dengan ketentuan peraturan perundang-undangan.",
      "Mendukung digitalisasi arsip lebih dari 200 akta.",
    ],
    highlights: [">200 akta terdigitalisasi", "Document review", "Legal administration"],
    images: [],
  },
  {
    slug: "pengadilan-negeri-purbalingga",
    number: "04",
    type: "Court Administration",
    title: "Pengadilan Negeri 1B Purbalingga",
    period: "Jul — Aug 2024",
    summary: "Mendukung kepaniteraan pidana, perdata, dan hukum dalam penyusunan relaas panggilan, berita acara persidangan, serta dokumen perkara.",
    details: [
      "Mendukung penyusunan relaas panggilan dan berita acara persidangan.",
      "Membantu proses administrasi perkara serta kegiatan persidangan sederhana.",
      "Mendukung digitalisasi arsip perkara tahun 1980–2000.",
    ],
    highlights: ["Litigation support", "Court administration", "Archive digitization"],
    images: [],
  },
];

export const achievements: PortfolioItem[] = [
  { slug: "legal-drafting-ui", number: "01", type: "Achievement", title: "Legal Drafting — Universitas Indonesia", period: "—", summary: "Portofolio kompetisi atau kegiatan legal drafting.", details: [], highlights: ["Legal drafting"], images: [] },
  { slug: "legal-drafting-ut-madura", number: "02", type: "Achievement", title: "Legal Drafting — Universitas Trunojoyo Madura", period: "—", summary: "Portofolio kompetisi atau kegiatan legal drafting.", details: [], highlights: ["Legal drafting"], images: [] },
  { slug: "legal-opinion-unair", number: "03", type: "Achievement", title: "Legal Opinion — Universitas Airlangga", period: "—", summary: "Portofolio kegiatan penyusunan legal opinion.", details: [], highlights: ["Legal opinion"], images: [] },
  { slug: "surat-dakwaan-ub", number: "04", type: "Achievement", title: "Surat Dakwaan — Universitas Brawijaya", period: "—", summary: "Portofolio kegiatan penyusunan surat dakwaan.", details: [], highlights: ["Criminal law"], images: [] },
  { slug: "moot-court-prof-soedarto", number: "05", type: "Competition", title: "National Moot Court Competition Prof. Soedarto — Universitas Diponegoro", period: "—", summary: "Dokumentasi kegiatan moot court yang dapat dikembangkan menjadi case study.", details: [], highlights: ["Moot court", "Litigation"], images: [] },
];

export const projects: PortfolioItem[] = [
  {
    slug: "prohibition-interfaith-marriage-registration",
    number: "01",
    type: "Publication · 2026",
    title: "Prohibition of Interfaith Marriage Registration",
    period: "2026",
    summary: "Publikasi SINTA 4 tahun 2026 dengan judul “Prohibition of Interfaith Marriage Registration: A Critique Towards Judicial Policy.”",
    details: ["Artikel ini dapat ditampilkan sebagai case study dengan abstrak, rumusan masalah, metode, temuan, dan tautan publikasi."],
    highlights: ["SINTA 4", "Legal research", "Publication"],
    images: [],
  },
  {
    slug: "catatan-perkuliahan",
    number: "02",
    type: "Legal Notes",
    title: "Catatan Perkuliahan",
    period: "Archive",
    summary: "Perpustakaan pribadi untuk rangkuman materi, dasar hukum, konsep, dan pembelajaran selama studi hukum.",
    details: ["Gunakan halaman ini untuk mengelompokkan catatan berdasarkan bidang hukum."],
    highlights: ["Study notes", "Legal materials"],
    images: [],
  },
  {
    slug: "legal-research-case-analysis",
    number: "03",
    type: "Legal Research",
    title: "Legal Research & Case Analysis",
    period: "Archive",
    summary: "Kumpulan riset hukum, analisis putusan, dan tulisan hukum yang dapat dikembangkan menjadi portofolio publik.",
    details: ["Setiap riset dapat dibuat menjadi case study dengan isu hukum, dasar hukum, analisis, dan kesimpulan."],
    highlights: ["Case analysis", "Legal research", "Legal writing"],
    images: [],
  },
];

export const certifications = [
  {
    slug: "sarjana-hukum-unair",
    title: "S.H. Universitas Airlangga",
    meta: "IPK 3,71 / 4,00",
    description: "Sarjana Hukum Universitas Airlangga.",
    document: "",
  },
  {
    slug: "cpla",
    title: "Certified Paralegal of Legal Aid (CPLA)",
    meta: "Certification",
    description: "Sertifikasi paralegal bantuan hukum.",
    document: "",
  },
  {
    slug: "sinta-4",
    title: "SINTA 4 Journal Publication",
    meta: "2026",
    description: "Publikasi jurnal yang dapat ditautkan ke artikel atau laman jurnal.",
    document: "",
  },
  {
    slug: "cumlaude",
    title: "Cumlaude",
    meta: "3,5 tahun studi",
    description: "Prestasi akademik saat menyelesaikan studi.",
    document: "",
  },
];
