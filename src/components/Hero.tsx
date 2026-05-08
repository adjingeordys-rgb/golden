import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-yellow-300">
          Portfolio Premium
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
            Je transforme vos opportunites en resultats concrets.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Je suis Geordys Adjin, Closer, Developpeur No-code et Monteur Video.
          J&apos;accompagne les marques qui veulent convertir, automatiser et
          raconter avec impact.
        </p>
        <a
          href="#portfolio"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-yellow-500/10 px-6 py-3 text-sm font-medium text-yellow-300 transition hover:bg-yellow-500/20"
        >
          Voir mes realisations
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
