import Link from "next/link";
import { certifications } from "../data/portfolio";

export default function CertificationsPage() {
  return (
    <main className="detail-shell">
      <header className="detail-header"><div className="editorial-container flex items-center justify-between"><Link href="/" className="font-serif text-xl">AKROM.</Link><Link href="/" className="font-mono text-[10px] uppercase tracking-[0.12em]">← Home</Link></div></header>
      <section className="detail-hero"><div className="editorial-container"><p className="section-label">04 / Sertifikasi</p><h1 className="display-title">Credentials & training.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">Kumpulan pendidikan, sertifikasi, dan dokumen pendukung yang dapat diverifikasi.</p></div></section>
      <section className="section"><div className="editorial-container grid gap-5 md:grid-cols-2">{certifications.map((item, i) => <article id={item.slug} key={item.slug} className="document-card"><div className="document-preview"><div className="flex h-full items-center justify-center border border-dashed border-[var(--line-dark)] bg-white/70 p-8 text-center"><div><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Document {String(i+1).padStart(2,"0")}</span><h2 className="mt-4 font-serif text-3xl">{item.title}</h2><p className="mt-3 text-sm text-[var(--muted)]">{item.meta}</p></div></div></div><div className="document-info"><p className="text-sm leading-6 text-[var(--muted)]">{item.description}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">Tambahkan file sertifikat di public/documents/</p></div></article>)}</div></section>
    </main>
  );
}
