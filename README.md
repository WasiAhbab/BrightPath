# BrightPath Tuition Center

A responsive tuition-centre website and lightweight staff dashboard built with Next.js, TypeScript, Tailwind CSS and Supabase.

## Included

- Public homepage, course catalogue, course details and contact form
- Course matcher (filters published courses by level, class and format)
- Inquiry submission saved to Supabase through a server route
- Staff sign-in using Supabase Auth
- Admin course create/edit/publish/unpublish
- Inquiry list and status tracking
- Responsive layouts and subtle motion effects

## 1. Install

Use Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 2. Set up Supabase

1. Create a project at https://supabase.com.
2. Open **Project Settings → API**.
3. Copy the Project URL and anon/public key into `.env.local`.
4. Copy the `service_role` key into `SUPABASE_SERVICE_ROLE_KEY`.
5. Keep the service role key private. Never use it in a `NEXT_PUBLIC_` variable.
6. Open **SQL Editor**, paste `supabase/schema.sql`, and run it.
7. In **Authentication → Users**, create staff accounts manually. Disable public sign-ups if they are not needed.

Example `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 3. Important before launch

- Replace sample courses, fees, schedules and descriptions with verified BrightPath information.
- Update phone number, full address, opening hours and social links in `src/components/footer.tsx` and `src/app/contact/page.tsx`.
- Replace stock photos with real centre/classroom photos that you have permission to use.
- Add your own staff accounts in Supabase Auth. Do not create a public registration page.
- Add a proper staff role/allow-list before inviting multiple staff members. The starter SQL currently treats any authenticated Supabase user as staff.
- Add rate limiting or CAPTCHA to the inquiry endpoint before public production use. Basic field validation is included, but it is not a complete anti-spam system.
- Set up regular database backups in Supabase.

## 4. Run and deploy

```bash
npm run build
```

Push the project to GitHub, import the repository into Vercel, and add the three environment variables in **Vercel → Project Settings → Environment Variables**. Redeploy after adding or changing environment variables.

## Notes

- The course page starts with demo data so the UI can be explored before Supabase is configured. Once Supabase is connected, it loads published database courses.
- Course detail routes currently use the included demo course list. Before production, connect course detail lookup to Supabase by slug so staff-edited details are reflected on those pages too.
- The sample content and fees are placeholders, not confirmed BrightPath pricing.
