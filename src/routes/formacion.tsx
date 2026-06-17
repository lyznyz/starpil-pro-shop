import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Wrench, MessageCircle } from "lucide-react";
import { trackPixel } from "@/lib/pixel";

export const Route = createFileRoute("/formacion")({
  head: () => ({
    meta: [
      { title: "Formación Profesional — Lyznyz Academia" },
      { name: "description", content: "Capacítate en depilación facial y corporal con Lyznyz Academia y productos Starpil originales." },
      { property: "og:title", content: "Formación Profesional Lyznyz Academia" },
      { property: "og:description", content: "Protocolos profesionales, práctica real y certificación." },
    ],
  }),
  component: Formacion,
});

const WHATSAPP_MSG = encodeURIComponent(
  "Hola, vengo de la tienda Starpil de Lyznyz Academia y me gustaría recibir información sobre las capacitaciones en depilación facial y corporal. ¿Podrían enviarme el costo, fechas disponibles y detalles del programa?",
);

function Formacion() {
  const handleClick = () => {
    trackPixel("Lead", { source: "formacion_whatsapp" });
    trackPixel("Contact");
    // custom event
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", "WhatsAppClick", { source: "formacion" });
    }
  };

  return (
    <>
      <section className="container-x py-14 md:py-20 text-center">
        <span className="eyebrow">Lyznyz Academia</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight max-w-3xl mx-auto">
          Formación <em className="text-primary not-italic">Profesional</em>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 font-display">
          Capacítate en depilación facial y corporal.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Lyznyz Academia te forma con los mejores protocolos profesionales, trabajando de la mano de los
          productos líderes Starpil. Aprende la técnica que usan las cabinas más exigentes del mundo.
        </p>
      </section>

      <section className="container-x pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Wrench, title: "Técnica profesional", body: "Protocolos pre, durante y post depilación." },
            { icon: GraduationCap, title: "Práctica real", body: "Aprende con productos y equipos Starpil originales." },
            { icon: Award, title: "Certificación", body: "Avalada por Lyznyz Academia." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl mt-5">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Reserva tu cupo</h2>
          <p className="mt-3 text-background/75 max-w-xl mx-auto">
            Escríbenos por WhatsApp para recibir el programa completo, fechas y costos.
          </p>
          <a
            href={`https://wa.me/584120162096?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener"
            onClick={handleClick}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" /> Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
