import Link from "next/link";
import { Container } from "@/components/layouts/container";

export function HeroSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Find Services & Deals Near You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Connect with local service providers and discover amazing deals in
            your area.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/?mode=services"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Browse Services/Deals
            </Link>

            <Link
              href="/become-a-provider"
              className="rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}