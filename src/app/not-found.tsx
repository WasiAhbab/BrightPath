import Link from "next/link";
export default function NotFound(){return <div className="container-shell py-32 text-center"><p className="eyebrow">404 · Page not found</p><h1 className="mt-3 text-4xl font-extrabold text-ink">We can’t find that page.</h1><Link href="/" className="mt-7 inline-block rounded-full bg-teal px-6 py-3 font-bold text-white">Back to home</Link></div>}
