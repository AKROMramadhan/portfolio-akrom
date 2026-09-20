import Link from "next/link";
import { achievements, type PortfolioItem } from "../../data/portfolio";

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection: PortfolioItem[] = achievements;
  const item = collection.find((x) => x.slug === slug);

  if (!item) {
    return (
      <main className="detail-shell">
        <div className="editorial-container py-32">
          <p className="section-label">404 / Portfolio</p>
          <h1 className="editorial-title">Item tidak ditemukan.</h1>
          <Link href="/" className="mt-8 inline-block font-mono text-xs uppercase underline underline-offset-8">← Kembali</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-shell">
      <header className="detail-header">
        <div className="editorial-container flex items-center justify-between">
          <Link href="/" className="font-serif text-xl">AKROM.</Link>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.12em]">← Home</Link>
        </div>
      </header>

      <section className="detail-hero">
        <div className="editorial-container">
          <p className="section-label">{item.number} / {item.type}</p>
          <h1 className="display-title">{item.title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{item.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.highlights.map((h) => <span key={h} className="tag">{h}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="editorial-container detail-content">
          <aside className="detail-side">
            <p className="section-label">Metadata</p>
            <p className="font-serif text-2xl">{item.period}</p>
            <div className="mt-7 h-px bg-[var(--line)]" />
            <Link href="/" className="mt-7 inline-block font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-8">← Back to portfolio</Link>
          </aside>

          <div>
            <p className="section-label">Overview</p>
            <div className="detail-copy">
              {item.details.length
                ? item.details.map((d) => <p key={d}>{d}</p>)
                : <p>Detail kegiatan akan ditambahkan bersama dokumentasi dan materi pendukung.</p>}
            </div>

            <div className="mt-20">
              <p className="section-label">Documentation</p>
              {item.images.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.images.map((src) => <img key={src} src={src} alt={item.title} className="w-full border border-[var(--line)] object-cover" />)}
                </div>
              ) : (
                <div className="document-empty">
                  <strong>Tambahkan foto kegiatan & sertifikat</strong>
                  <span>Masukkan path gambar pada field <code>images</code> di <code>data/portfolio.ts</code>.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
