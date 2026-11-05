import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parent_name = String(body.parent_name || "").trim();
    const phone = String(body.phone || "").trim();
    const student_class = String(body.student_class || "").trim();
    if (!parent_name || parent_name.length > 100 || !phone || phone.length > 25 || !student_class || student_class.length > 40) {
      return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
    }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) return NextResponse.json({ error: "Inquiry service is not configured." }, { status: 503 });
    const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
    const { error } = await supabase.from("inquiries").insert({
      parent_name, phone, student_class,
      course_title: String(body.course_title || "").slice(0, 120) || null,
      message: String(body.message || "").slice(0, 1000) || null,
      status: "New"
    });
    if (error) throw error;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to save your enquiry right now." }, { status: 500 });
  }
}
