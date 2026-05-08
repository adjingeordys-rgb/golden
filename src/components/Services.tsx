import { Handshake, WandSparkles, Clapperboard } from "lucide-react";

const services = [
  {
    title: "Closing",
    description:
      "Structuration d'offres et conversations de vente pour augmenter vos taux de signature.",
    icon: Handshake,
  },
  {
    title: "No-Code",
    description:
      "Creation d'ecosystemes web et d'automatisations performantes sans dette technique lourde.",
    icon: WandSparkles,
  },
  {
    title: "Montage Video",
    description:
      "Montages premium optimises pour la retention, la clarte et l'autorite de marque.",
    icon: Clapperboard,
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-zinc-100">Services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-yellow-500/20 bg-zinc-900/60 p-6"
            >
              <service.icon className="text-yellow-300" />
              <h3 className="mt-4 text-xl font-medium">{service.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
