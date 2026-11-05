export type Course = {
  id: string;
  title: string;
  slug: string;
  level: "Primary" | "Secondary" | "HSC";
  class_name: string;
  subject: string;
  format: "In-person" | "Online" | "Hybrid";
  monthly_fee: number;
  registration_fee: number;
  schedule: string;
  description: string;
  status: "open" | "limited" | "full";
  published: boolean;
};
export type Inquiry = {
  id: string;
  parent_name: string;
  phone: string;
  student_class: string;
  course_title: string | null;
  message: string | null;
  status: "New" | "Contacted" | "Follow-up Required" | "Closed";
  created_at: string;
};
