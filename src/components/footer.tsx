import Link from "next/link";
import { GraduationCap, MapPin, Phone, Facebook, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="mt-24 bg-[#102D4B] text-white">
    <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10"><GraduationCap/></span><strong className="text-2xl">BrightPath</strong></div><p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">A supportive place to learn, grow and build confidence. Helping students move forward, one lesson at a time.</p><p className="mt-5 text-xs text-slate-400">Supporting Dhaka learners for 6 years.</p></div>
      <div><h3 className="font-bold">Explore</h3><div className="mt-5 grid gap-3 text-sm text-slate-300"><Link href="/courses" className="hover:text-white">Our courses</Link><Link href="/#about" className="hover:text-white">About BrightPath</Link><Link href="/#faq" className="hover:text-white">Frequently asked questions</Link><Link href="/contact" className="hover:text-white">Contact us</Link></div></div>
      <div><h3 className="font-bold">Get in touch</h3><div className="mt-5 grid gap-4 text-sm text-slate-300"><p className="flex gap-3"><MapPin size={18} className="shrink-0 text-teal"/> Dhaka, Bangladesh <span className="text-xs text-slate-500">(add full address)</span></p><p className="flex gap-3"><Phone size={18} className="text-teal"/> Add your phone number</p><p className="flex gap-3"><Facebook size={18} className="text-teal"/> Facebook page</p></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row"><span>© {new Date().getFullYear()} BrightPath Tuition Center. All rights reserved.</span><Link href="/admin/login" className="inline-flex items-center gap-1 hover:text-white">Staff access <ArrowUpRight size={13}/></Link></div></div>
  </footer>;
}
