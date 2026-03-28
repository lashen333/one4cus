import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className=" border-t border-slate-200 bg-slate-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">One4cus</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              One4cus connects you with trusted local service providers for all
              your needs.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900">Company</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/about">About Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900">Support</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/help-center">Help Center</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900">Providers</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/become-a-provider">Become a Provider</Link>
              <Link href="/provider-login">Provider Login</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 One4cus. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}