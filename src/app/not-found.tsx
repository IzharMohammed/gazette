import Link from "next/link";
import { ArrowRight, Home, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-shell py-24 text-center">
      <div className="grid size-16 place-items-center rounded-2xl bg-[var(--cream)] text-[#8b6828] mx-auto mb-6">
        <Scale size={32} />
      </div>
      <p className="eyebrow">404 Error</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl font-bold text-[var(--navy)]">
        Page Not Found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-[var(--muted)] leading-relaxed">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="gold" size="lg" className="font-bold">
          <Link href="/">
            <Home size={17} /> Return to Homepage
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="font-bold">
          <Link href="/services">
            Explore Services <ArrowRight size={17} />
          </Link>
        </Button>
      </div>
    </main>
  );
}
