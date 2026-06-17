import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Globe2, Award, Leaf, Heart } from "lucide-react";
import logo from "@/assets/logo-starpil-lyznyz.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starpil · Lyznyz Academia — Productos profesionales de depilación" },
      {
        name: "description",
        content:
          "Lyznyz Academia pone a tu disposición los productos profesionales Starpil para especialistas en depilación facial y corporal.",
      },
      { property: "og:title", content: "Starpil · Lyznyz Academia" },
      { property: "og:description", content: "Productos profesionales pre, depilatorios y post depilatorios." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_55%,transparent),transparent_70%)]" />
        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 text-center">
          <div className="mx-auto flex justify-center">
            <img
              src={logo}
              alt="Starpil · Lyznyz Academia"
              className="h-28 md:h-44 lg:h-52 w-auto drop-shadow-sm"
            />
          </div>

          <span className="eyebrow mt-8 inline-block">Tienda profesional</span>
          <h1 className="mt-3 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl mx-auto">
            Lyznyz Academia pone a tu disposición los productos profesionales{" "}
            <em className="text-primary not-italic">Starpil</em> para especialistas que buscan trabajar
            con calidad profesional en depilación facial y corporal.
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trabajamos con una de las marcas líderes en depilación profesional para ofrecer productos
            <strong className="text-foreground"> pre depilatorios</strong>,
            <strong className="text-foreground"> depilatorios </strong>y
            <strong className="text-foreground"> post depilatorios </strong>
            utilizados por profesionales en todo el mundo.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/tienda" className="btn-primary">
              Ver tienda <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/sobre-la-marca" className="btn-outline">
              Sobre la marca
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Globe2, label: "Presencia en +65 países" },
              { icon: Award, label: "Casi 40 años de experiencia" },
              { icon: ShieldCheck, label: "Calidad profesional" },
              { icon: Sparkles, label: "Roll-on original Starpil" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-card/70 backdrop-blur border border-border px-4 py-3 text-left"
              >
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-xs md:text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="container-x py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">Catálogo</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 max-w-xl">
              Tres pasos para una depilación profesional impecable.
            </h2>
          </div>
          <Link to="/tienda" className="btn-outline self-start md:self-auto">
            Ver tienda completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              eyebrow: "Paso 1",
              title: "Pre depilatorio",
              desc: "Prepara, limpia e hidrata la piel antes del tratamiento.",
              icon: Leaf,
            },
            {
              eyebrow: "Paso 2",
              title: "Depilatorio",
              desc: "Ceras roll-on y cera en lata para una extracción perfecta.",
              icon: Sparkles,
            },
            {
              eyebrow: "Paso 3",
              title: "Post depilatorio",
              desc: "Reequilibra el PH y regenera la piel sensibilizada.",
              icon: Heart,
            },
          ].map((c) => (
            <Link
              key={c.title}
              to="/tienda"
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary transition-colors"
            >
              <c.icon className="h-7 w-7 text-primary" />
              <span className="eyebrow mt-5 block">{c.eyebrow}</span>
              <h3 className="font-display text-2xl mt-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-5">
                Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Formación */}
      <section className="container-x pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Formación profesional
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              Capacítate en depilación facial y corporal con Lyznyz Academia.
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl">
              Aprende los protocolos profesionales que se aplican con productos Starpil originales.
            </p>
            <Link to="/formacion" className="mt-7 inline-flex btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ver formación <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
