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

          <Link
            href="/"
            className="font-serif text-xl"
          >
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


      {/* KHUSUS HALAMAN NOTARIS */}
      {isNotaris ? (
        <>

          {/* HERO */}
          <section className="notaris-hero">

            <div className="notaris-hero-copy">

              <p className="section-label">
                {item.number} / {item.type}
              </p>

              <h1>
                {item.title}
              </h1>

              <p className="notaris-period">
                {item.period}
              </p>

              <p className="notaris-summary">
                {item.summary}
              </p>

              <div className="notaris-tags">

                {item.highlights.map((h) => (
                  <span key={h}>
                    {h}
                  </span>
                ))}

              </div>

            </div>


            {/* FOTO UTAMA */}
            <div className="notaris-hero-photo">

              <Image
                src="/pengalaman/notaris/07-di-depan-kantor.jpg"
                alt="Muhammad Akrom Ramadhan di depan kantor Notaris dan PPAT"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="notaris-cover-image"
              />

            </div>

          </section>


          {/* INTRO */}
          <section className="section notaris-section">

            <div className="editorial-container">

              <div className="notaris-intro">

                <div>

                  <p className="section-label">
                    EXPERIENCE
                  </p>

                  <h2 className="editorial-title">
                    Belajar langsung dari praktik hukum.
                  </h2>

                </div>


                <div className="detail-copy">

                  {item.details.map((d) => (
                    <p key={d}>
                      {d}
                    </p>
                  ))}

                </div>

              </div>


              {/* FOTO KEGIATAN UTAMA */}
              <div className="notaris-feature-grid">

                <div className="notaris-feature-main">

                  <Image
                    src="/pengalaman/notaris/09-dokumen-kantor.jpg"
                    alt="Aktivitas pekerjaan di kantor notaris"
                    fill
                    sizes="(max-width: 900px) 100vw, 65vw"
                    className="notaris-image"
                  />

                </div>


                <div className="notaris-feature-side">

                  <div className="notaris-photo-small">

                    <Image
                      src="/pengalaman/notaris/09-dokumen-kantor.jpg"
                      alt="Dokumen pekerjaan di kantor notaris"
                      fill
                      sizes="(max-width: 900px) 100vw, 35vw"
                      className="notaris-image"
                    />

                  </div>


                  <div className="notaris-photo-small">

                    <Image
                      src="/pengalaman/notaris/03-foto-bersama-kantor.jpg"
                      alt="Dokumentasi bersama di kantor notaris"
                      fill
                      sizes="(max-width: 900px) 100vw, 35vw"
                      className="notaris-image"
                    />

                  </div>

                </div>

              </div>


              {/* FOTO LAIN */}
              <div className="notaris-gallery">

                <div className="notaris-gallery-item notaris-gallery-wide">

                  <Image
                    src="/pengalaman/notaris/04-foto-bersama.jpg"
                    alt="Dokumentasi bersama rekan magang"
                    fill
                    sizes="(max-width: 900px) 100vw, 60vw"
                    className="notaris-image"
                  />

                </div>


                <div className="notaris-gallery-item">

                  <Image
                    src="/pengalaman/notaris/05-dokumentasi-kegiatan.jpg"
                    alt="Dokumentasi kegiatan magang"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    className="notaris-image"
                  />

                </div>

              </div>


              {/* CREDENTIAL */}
              <div className="notaris-credentials">

                <div>

                  <p className="section-label">
                    CREDENTIALS
                  </p>

                  <h2 className="editorial-title">
                    Dokumen pendukung
                  </h2>

                  <p className="notaris-credential-copy">
                    Dokumentasi sertifikat dan surat keterangan
                    magang sebagai bukti pendukung pengalaman.
                  </p>

                </div>


                <div className="notaris-document-grid">

                  {/* SERTIFIKAT */}
                  <div className="notaris-document">

                    <div className="notaris-document-image">

                      <Image
                        src="/pengalaman/notaris/01-sertifikat.jpg"
                        alt="Sertifikat magang"
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                        className="notaris-document-cover"
                      />

                    </div>

                    <p>
                      Sertifikat Magang
                    </p>

                  </div>


                  {/* SURAT */}
                  <div className="notaris-document">

                    <div className="notaris-document-image">

                      <Image
                        src="/pengalaman/notaris/02-surat-keterangan.jpg"
                        alt="Surat keterangan magang"
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                        className="notaris-document-cover"
                      />

                    </div>

                    <p>
                      Surat Keterangan Magang
                    </p>

                  </div>

                </div>

              </div>


              {/* BACK */}
              <div className="notaris-back">

                <Link href="/#pengalaman">
                  ← Kembali ke pengalaman
                </Link>

              </div>

            </div>

          </section>

        </>

      ) : (

        /* HALAMAN PENGALAMAN LAIN */
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