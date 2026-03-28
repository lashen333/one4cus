import Link from "next/link";
import { Container } from "./container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/?mode=services" },
  { label: "Deals", href: "/?mode=deals" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          One4cus
        </Link>

        <nav className="hidden items-center gap-2 rounded-full bg-blue-600 px-2 py-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.label === "Home"
                  ? "bg-white text-blue-600"
                  : "text-white hover:bg-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/become-a-provider"
            className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            Become a Provider
          </Link>
          <Link href="/login" className="text-sm font-medium text-slate-700">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </Container>
    </header>
  );
}