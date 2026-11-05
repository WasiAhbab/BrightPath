"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, CheckCircle2, Clock3, GraduationCap, HeartHandshake, MessageCircle, Sparkles, Star, Users, ChevronDown } from "lucide-react";

const courses = [
  { level:"PRIMARY", title:"A strong start for young learners", detail:"Build confidence in the essential subjects.", color:"bg-[#EAF6F2]", icon:"✳" },
  { level:"SECONDARY", title:"Make every school year count", detail:"Clear concepts and steady academic progress.", color:"bg-[#EEF2FB]", icon:"◈" },
  { level:"HSC", title:"Prepare for the next big step", detail:"Focused subject support for board exams.", color:"bg-[#FFF4E4]", icon:"✦" }
];
const faqs = [
  ["Which classes do you teach?","We support students from primary level through secondary school and HSC. Browse our course list to see current options."],
  ["How can I know the monthly fee?","Each published course includes its monthly fee and any one-time registration charge. If a fee is not listed, please contact our team."],
  ["How do I enrol my child?","Send an enquiry from a course page or use our contact form. Our team will get in touch to explain the next steps."],
  ["Are online classes available?","Some courses may offer online or hybrid learning. Check the format shown on each course or ask our team."]
];
export default function Home() {
  return <div>
    <section className="relative overflow-hidden bg-hero-wash">
      <div className="container-shell grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <motion.div initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-teal"><Sparkles size={14}/> A brighter way to learn</div>
          <h1 className="max-w-[650px] text-[43px] font-extrabold leading-[1.12] tracking-[-.045em] text-ink sm:text-6xl">Every student has a path. <span className="text-teal">Let’s find theirs.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">Thoughtful academic support for primary, secondary and HSC students — helping young minds grow with confidence.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/courses" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-white shadow-xl shadow-navy/15 transition hover:-translate-y-1 hover:bg-[#1a4975]">Explore our courses <ArrowRight size={17}/></Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-ink transition hover:border-teal hover:text-teal">Talk to our team</Link></div>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500"><span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-teal"/> Student-focused learning</span><span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-teal"/> Clear course information</span></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.12}} className="relative">
          <div className="hero-image relative min-h-[420px] overflow-hidden rounded-[34px] shadow-soft sm:min-h-[500px]"><div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"/><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-teal">Growing together</p><p className="mt-1 text-lg font-extrabold text-ink">A place to feel supported.</p></div><span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-teal"><HeartHandshake/></span></div></div></div>
          <div className="float-slow absolute -left-5 top-12 hidden rounded-2xl bg-white p-4 shadow-soft sm:block"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FFF4E4] text-gold"><Star fill="currentColor" size={18}/></span><div><strong className="block text-sm text-ink">6 years</strong><span className="text-xs text-slate-500">Supporting learners</span></div></div></div>
          <div className="absolute -right-3 top-1/2 hidden rounded-2xl bg-teal p-4 text-white shadow-xl sm:block"><GraduationCap size={27}/></div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl"/>
    </section>

    <section className="container-shell py-20">
      <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Find the right fit</p><h2 className="section-title">Learning support for every stage</h2><p className="mt-4 leading-7 text-slate-500">From first foundations to important board exams, explore a learning path that fits your child.</p></div>
      <div className="mt-11 grid gap-5 md:grid-cols-3">{courses.map((c,i)=><motion.div whileHover={{y:-7}} key={c.level} className={`rounded-[26px] ${c.color} p-7 transition-shadow hover:shadow-soft`}><div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-[.18em] text-slate-500">{c.level}</span><span className="text-3xl text-teal">{c.icon}</span></div><h3 className="mt-8 text-2xl font-extrabold leading-tight text-ink">{c.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{c.detail}</p><Link href="/courses" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal">View courses <ArrowUpRight size={16}/></Link></motion.div>)}</div>
    </section>

    <section id="about" className="bg-[#F7FAF9] py-20"><div className="container-shell grid items-center gap-12 lg:grid-cols-2"><div className="relative"><div className="course-image min-h-[390px] rounded-[30px]"/><div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-5 shadow-soft sm:right-5"><p className="text-3xl font-extrabold text-teal">6+</p><p className="mt-1 text-xs font-semibold text-slate-500">Years of learning support</p></div></div><div><p className="eyebrow">A little about us</p><h2 className="section-title">More than lessons. A place to grow.</h2><p className="mt-5 leading-8 text-slate-600">For six years, BrightPath has been supporting students in Dhaka through focused academic guidance. We believe good learning starts with clear explanations, encouragement and a space where students feel comfortable asking questions.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><div className="flex gap-3"><span className="mt-1 text-teal"><BookOpen/></span><div><strong className="text-ink">Clear learning goals</strong><p className="mt-1 text-sm leading-6 text-slate-500">A structured approach to each subject.</p></div></div><div className="flex gap-3"><span className="mt-1 text-teal"><Users/></span><div><strong className="text-ink">Student-first support</strong><p className="mt-1 text-sm leading-6 text-slate-500">Guidance that respects every learner.</p></div></div></div><Link href="/contact" className="mt-9 inline-flex items-center gap-2 font-bold text-teal">Get to know BrightPath <ArrowRight size={17}/></Link></div></div></section>

    <section className="container-shell py-20"><div className="rounded-[32px] bg-navy px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal">Not sure where to start?</p><h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">Find a course that matches your child’s needs.</h2><p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">Answer a few quick questions and see which published courses may be a good fit.</p></div><Link href="/courses#matcher" className="mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-navy transition hover:-translate-y-1 lg:mt-0">Try course matcher <Sparkles size={17}/></Link></div></section>

    <section id="faq" className="container-shell py-10"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Good to know</p><h2 className="section-title">Questions parents often ask</h2></div><div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-ink">{q}<ChevronDown className="shrink-0 text-teal transition group-open:rotate-180"/></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-slate-500">{a}</p></details>)}</div></section>
    <section className="container-shell pt-10"><div className="rounded-[28px] bg-mint px-7 py-10 text-center"><MessageCircle className="mx-auto text-teal" size={30}/><h2 className="mt-4 text-2xl font-extrabold text-ink">Still have a question?</h2><p className="mt-2 text-sm text-slate-600">We’d be happy to help you choose the right next step.</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white hover:bg-[#0e9189]">Contact BrightPath <ArrowRight size={16}/></Link></div></section>
  </div>;
}
