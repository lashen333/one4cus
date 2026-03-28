import { Container } from "@/components/layouts/container";

export function ServicesHero() {
  return (
    <section className="bg-[#eef7ff] py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-600">
            Over 10,000 Verified Professionals
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Find the Perfect <span className="text-blue-600">Service Provider</span>{" "}
            for Your Needs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Connect with top-rated local professionals. From plumbing to IT
            support, discover verified experts ready to help you today.
          </p>
        </div>
      </Container>
    </section>
  );
}