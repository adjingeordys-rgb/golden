export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-yellow-500/20 bg-zinc-950/70 px-6 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-zinc-400 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Golden Dev Studio. Tous droits reserves.</p>
        <p className="text-zinc-300">
          Geordys Adjin — Closer, Developpeur No-code, Monteur Video
        </p>
      </div>
    </footer>
  );
}
