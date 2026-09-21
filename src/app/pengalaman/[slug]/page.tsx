import Image from "next/image";
import Link from "next/link";
import { experiences, type PortfolioItem } from "../../data/portfolio";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection: PortfolioItem[] = experiences;
  const item = collection.find((x) => x.slug === slug);

  if (!item) {
    return (
      <main className="detail-shell">
        <div className="editorial-container py-32">
          <p className="section-label">404 / Portfolio</p>

          <h1 className="editorial-title">
            Item tidak ditemukan.
          </h1>

          <Link
            href="/"
            className="mt-8 inline-block font-mono text-xs uppercase underline underline-offset-8"
          >
            ← Kembali
          </Link>
        </div>
      </main>
    );
  }

  const isNotaris = slug === "ppat-notaris";

  return (
    <main className="detail-shell">

      {/* HEADER */}
      <header className="detail-header">
        <div className="editorial-container flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">
            AKROM.
          </Link>

          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.12em]"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* =====================================================
          HALAMAN KHUSUS NOTARIS
      ===================================================== */}

      {isNotaris ? (
        <>

          <section className="notaris-hero editorial-hero">
            <div className="notaris-hero-copy">
              <p className="section-label section-label-light">
                Professional Experience
              </p>

              <h1>PPAT / Notaris</h1>

              <p className="notaris-year">2025</p>

              <p className="notaris-summary">
                Pengalaman magang di kantor Pejabat Pembuat Akta Tanah (PPAT) sekaligus Notaris, dengan fokus pada dukungan administratif, pengelolaan dokumen, serta pemahaman proses hukum pertanahan dan kenotariatan dalam praktik.
              </p>

              <p className="notaris-strap">— Real Work. Deeper Understanding.</p>
            </div>

            <div className="notaris-hero-photo">
              <Image
                src="/pengalaman/notaris/07-di-depan-kantor.jpg?v=2"
                alt="Muhammad Akrom Ramadhan di depan kantor Notaris dan PPAT"
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 50vw"
                className="notaris-cover-image"
              />

              <div className="notaris-hero-quote">
                <p>
                  Small Experiences.<br />
                  A Bigger Perspective.
                </p>
                <span>— Surabaya, 2025</span>
              </div>
            </div>
          </section>

          <section className="section notaris-section editorial-case">
            <div className="editorial-container">
              <div className="notaris-case-header">
                <div className="notaris-case-number">01</div>
                <div className="notaris-case-title-wrap">
                  <p className="section-label">Role & Responsibility</p>
                  <h2 className="editorial-title">Peran dan Tanggung Jawab</h2>
                </div>
              </div>

              <div className="notaris-case-grid">
                <div className="notaris-essay">
                  <p>
                    Membantu dalam proses administrasi, penyiapan dokumen, serta pengelolaan arsip akta. Terlibat dalam kegiatan pendukung seperti pengecekan kelengkapan berkas, input data, dan koordinasi dengan pihak terkait.
                  </p>

                  <div className="notaris-mini-tags">
                    <span>Administration</span>
                    <span>Documentation</span>
                    <span>Coordination</span>
                  </div>
                </div>

                <div className="notaris-aside-photo">
                  <Image
                    src="/pengalaman/notaris/09-dokumen-kantor.jpg?v=2"
                    alt="Dokumen kantor notaris"
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 40vw"
                    className="notaris-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section notaris-section editorial-case muted-surface">
            <div className="editorial-container">
              <div className="notaris-case-header">
                <div className="notaris-case-number">02</div>
                <div className="notaris-case-title-wrap">
                  <p className="section-label">Environment</p>
                  <h2 className="editorial-title">Lingkungan Kerja</h2>
                </div>
              </div>

              <div className="notaris-case-grid split-layout">
                <div className="notaris-essay">
                  <p>
                    Berada di lingkungan profesional yang memberikan kesempatan untuk memahami alur kerja PPAT/Notaris, termasuk interaksi dengan klien, notaris, dan pihak terkait lainnya.
                  </p>
                </div>

                <div className="notaris-double-photo">
                  <div className="notaris-photo-tall">
                    <Image
                      src="/pengalaman/notaris/03-foto-bersama-kantor.jpg?v=2"
                      alt="Suasana kantor notaris"
                      fill
                      unoptimized
                      sizes="(max-width: 900px) 100vw, 30vw"
                      className="notaris-image"
                    />
                  </div>

                  <div className="notaris-photo-short">
                    <Image
                      src="/pengalaman/notaris/04-foto-bersama.jpg?v=2"
                      alt="Dokumentasi bersama rekan kerja"
                      fill
                      unoptimized
                      sizes="(max-width: 900px) 100vw, 25vw"
                      className="notaris-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section notaris-section editorial-case">
            <div className="editorial-container">
              <div className="notaris-case-header">
                <div className="notaris-case-number">03</div>
                <div className="notaris-case-title-wrap">
                  <p className="section-label">Documentation</p>
                  <h2 className="editorial-title">Dokumentasi Kegiatan</h2>
                </div>
              </div>

              <div className="notaris-essay intro-copy">
                <p>
                  Beberapa momen selama proses magang yang menggambarkan suasana kerja dan kegiatan dukungan di kantor PPAT/Notaris.
                </p>
              </div>

              <div className="notaris-documentation-grid">
                <div className="notaris-doc-card tall-card">
                  <Image
                    src="/pengalaman/notaris/05-dokumentasi-kegiatan.jpg?v=2"
                    alt="Dokumentasi kegiatan magang"
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="notaris-image"
                  />
                </div>

                <div className="notaris-doc-card compact-card">
                  <Image
                    src="/pengalaman/notaris/06-kegiatan-meja-kerja.jpg?v=2"
                    alt="Kegiatan di meja kerja"
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 25vw"
                    className="notaris-image"
                  />
                </div>

                <div className="notaris-doc-card compact-card">
                  <Image
                    src="/pengalaman/notaris/07-di-depan-kantor.jpg?v=2"
                    alt="Dokumentasi di depan kantor"
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 25vw"
                    className="notaris-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section notaris-section editorial-case muted-surface">
            <div className="editorial-container">
              <div className="notaris-case-header">
                <div className="notaris-case-number">04</div>
                <div className="notaris-case-title-wrap">
                  <p className="section-label">Supporting Documents</p>
                  <h2 className="editorial-title">Dokumen Pendukung</h2>
                </div>
              </div>

              <div className="notaris-essay intro-copy">
                <p>
                  Sertifikat dan surat keterangan sebagai bukti pelaksanaan magang di kantor PPAT/Notaris.
                </p>
              </div>

              <div className="notaris-document-grid editorial-doc-grid">
                <div className="notaris-document editorial-doc">
                  <div className="notaris-document-image">
                    <Image
                      src="/pengalaman/notaris/01-sertifikat.jpg?v=2"
                      alt="Sertifikat magang"
                      fill
                      unoptimized
                      sizes="(max-width: 700px) 100vw, 40vw"
                      className="notaris-document-cover"
                    />
                  </div>
                  <p>Sertifikat Magang</p>
                </div>

                <div className="notaris-document editorial-doc">
                  <div className="notaris-document-image">
                    <Image
                      src="/pengalaman/notaris/02-surat-keterangan.jpg?v=2"
                      alt="Surat keterangan magang"
                      fill
                      unoptimized
                      sizes="(max-width: 700px) 100vw, 40vw"
                      className="notaris-document-cover"
                    />
                  </div>
                  <p>Surat Keterangan Magang</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="notaris-footer">
            <div className="editorial-container notaris-footer-inner">
              <p>
                "Every document carries a responsibility,<br />
                and every process teaches a perspective."
              </p>
              <Link href="/#pengalaman">Kembali ke Pengalaman →</Link>
            </div>
          </footer>
        </>

      ) : (

        /* =====================================================
           HALAMAN PENGALAMAN LAIN
        ===================================================== */

        <section className="section">

          <div className="editorial-container detail-content">

            <div>

              <p className="section-label">
                {item.number} / {item.type}
              </p>

              <h1 className="display-title">
                {item.title}
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {item.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                {item.highlights.map((h) => (
                  <span key={h} className="tag">
                    {h}
                  </span>
                ))}

              </div>

            </div>


            <div className="detail-copy mt-16">

              {item.details.map((d) => (
                <p key={d}>
                  {d}
                </p>
              ))}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}