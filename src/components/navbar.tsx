"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{ href: "/", label: "Home" }, { href: "/courses", label: "Courses" }, { href: "/#about", label: "About us" }, { href: "/#faq", label: "FAQs" }, { href: "/contact", label: "Contact" }];
  return <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
    <div className="container-shell flex h-[76px] items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-navy text-white"><GraduationCap size={23}/></span>
        <span className="leading-tight"><strong className="block text-[19px] font-extrabold tracking-tight text-ink">BrightPath</strong><small className="text-[10px] font-semibold uppercase tracking-[.19em] text-slate-400">Learning with purpose</small></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">{links.map(l => <Link key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 transition hover:text-teal">{l.label}</Link>)}</nav>
      <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal/20 transition hover:-translate-y-0.5 hover:bg-[#0e9189] md:flex">Enquire now <ArrowUpRight size={16}/></Link>
      <button aria-label="Toggle navigation" className="rounded-xl p-2 text-ink md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-mint">{l.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-teal px-4 py-3 text-center font-bold text-white">Enquire now</Link></nav>}
  </header>;
}
