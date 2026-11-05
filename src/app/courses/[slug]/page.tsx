import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, GraduationCap } from "lucide-react";
import { demoCourses } from "@/lib/demo-courses";
import { createClient } from "@supabase/supabase-js";
export default async function CourseDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  let course = demoCourses.find(c=>c.slug===slug);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && anonKey) {
    const supabase = createClient(url, anonKey);
    const { data } = await supabase.from("courses").select("*").eq("slug", slug).eq("published", true).maybeSingle();
    if (data) course = data as typeof course;
  }
  if(!course) notFound();
  return <div className="container-shell py-14"><Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal"><ArrowLeft size={16}/> All courses</Link><div className="mt-7 grid gap-10 lg:grid-cols-[1fr_360px]"><div><span className="rounded-full bg-mint px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-teal">{course.level}</span><h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{course.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{course.description}</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-[#F7FAF9] p-5"><GraduationCap className="text-teal"/><p className="mt-3 text-xs text-slate-400">Suitable for</p><strong className="mt-1 block text-ink">{course.class_name}</strong></div><div className="rounded-2xl bg-[#F7FAF9] p-5"><CalendarDays className="text-teal"/><p className="mt-3 text-xs text-slate-400">Schedule</p><strong className="mt-1 block text-ink">{course.schedule}</strong></div><div className="rounded-2xl bg-[#F7FAF9] p-5"><Clock3 className="text-teal"/><p className="mt-3 text-xs text-slate-400">Learning format</p><strong className="mt-1 block text-ink">{course.format}</strong></div></div><h2 className="mt-12 text-2xl font-extrabold text-ink">What students will study</h2><p className="mt-3 leading-7 text-slate-600">Subject focus: {course.subject}. Our team can share the detailed topic plan, batch timings and current seat availability when you enquire.</p></div><aside className="h-fit rounded-[26px] border border-slate-100 p-7 shadow-soft"><p className="text-xs font-extrabold uppercase tracking-widest text-teal">Course fees</p><p className="mt-4 text-3xl font-extrabold text-ink">৳{course.monthly_fee.toLocaleString("en-BD")}<span className="text-sm font-medium text-slate-400"> / month</span></p><div className="mt-5 flex justify-between border-t border-slate-100 py-4 text-sm"><span className="text-slate-500">Registration</span><strong className="text-ink">৳{course.registration_fee.toLocaleString("en-BD")}</strong></div><div className="flex justify-between border-t border-slate-100 py-4 text-sm"><span className="text-slate-500">Availability</span><strong className="text-teal">{course.status==="open"?"Enrollment open":course.status==="limited"?"Limited seats":"Currently full"}</strong></div><Link href={`/contact?course=${course.slug}`} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0e9189]">Enquire about this course <ArrowRight size={17}/></Link><p className="mt-4 text-center text-xs leading-5 text-slate-400">Submitting an enquiry does not confirm enrolment.</p></aside></div></div>;
}
