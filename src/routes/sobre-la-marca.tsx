import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Users, Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/sobre-la-marca")({
  head: () => ({
    meta: [
      { title: "Sobre la Marca — Starpil · Lyznyz Academia" },
      { name: "description", content: "Conoce a Starpil, marca líder en depilación profesional con presencia en más de 65 países, comercializada por Lyznyz Academia." },
      { property: "og:title", content: "Sobre la Marca Starpil" },
      { property: "og:description", content: "La historia y compromiso de Starpil, líder mundial en depilación profesional." },
    ],
  }),
  component: SobreLaMarca,
});

function SobreLaMarca() {
  return (
    <>
      <section className="container-x py-12 md:py-20 text-center">
        <span className="eyebrow">Sobre la Marca</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl mx-auto leading-tight">
          La marca líder en <em className="text-primary not-italic">Depilación Profesional</em>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          La depilación es uno de los principales tratamientos para mantener la belleza de nuestro cuerpo,
          ya que además de eliminar el vello nos ayuda a preparar la piel para otros cuidados, por lo que es
          primordial ofrecer a nuestros clientes los mejores productos y protocolos de aplicación.
          Innovadoras formulaciones y excelentes productos, elaborados con los mejores componentes y
          principios activos de origen natural, avalan su amplia experiencia en el sector de la belleza.
        </p>
        <p className="mt-5 font-display text-2xl md:text-3xl text-primary italic">
          Confía en la mejor depilación, confía en Starpil.
        </p>
      </section>

      <section className="container-x pb-16">
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12">
          <p className="text-foreground/85 leading-relaxed max-w-4xl">
            Starpil es líder en depilación profesional a través de un amplio catálogo en sistemas de depilación,
            cosmética pre y post depilatoria y de complementos, que proporciona todos los elementos necesarios
            para los mejores tratamientos depilatorios de belleza y bienestar.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x pb-16">
        <span className="eyebrow">Los comienzos de Starpil</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 max-w-2xl">Una historia que comenzó en un garaje en 1984.</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            {
              year: "1984",
              title: "Nace Maystar",
              body: "Nace Maystar de la mano del joven e inquieto emprendedor Jesús Bonan Solé, quien comienza a fabricar ceras depilatorias y productos cosméticos de forma artesanal en el garaje de su casa. Su idea era satisfacer las exigencias de los centros de estética profesionales con productos de calidad que aportaran un valor diferencial.",
            },
            {
              year: "1991",
              title: "Sistema roll-on Starpil",
              body: "Se inventa y patenta el innovador sistema roll-on que revoluciona el mercado mundial de la depilación con cera. Hoy en día Starpil sigue siendo el sistema roll-on más imitado del mundo.",
            },
            {
              year: "Hoy",
              title: "Presencia global",
              body: "Actualmente la marca tiene presencia en más de 65 países, manteniéndose como referente mundial en depilación profesional.",
            },
          ].map((t) => (
            <div key={t.year} className="rounded-2xl border border-border bg-card p-7 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 font-display text-8xl text-primary/10">{t.year}</div>
              <span className="eyebrow">{t.year}</span>
              <h3 className="font-display text-2xl mt-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compromiso */}
      <section className="container-x pb-16">
        <span className="eyebrow">Las bases de su compromiso</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2">Cuatro pilares, una misma visión.</h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Heart, title: "Bienestar y Salud", body: "Proyectar una imagen y estilo de vida saludable." },
            { icon: Leaf, title: "Medio Ambiente", body: "Minimizar el impacto ambiental en procesos y servicios." },
            { icon: Users, title: "Colaboradores", body: "Impulsar el desarrollo profesional y personal de sus colaboradores." },
            { icon: Sparkles, title: "Innovación", body: "Liderar el campo de la innovación en depilación profesional." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-secondary/40 p-6 border border-border">
              <c.icon className="h-7 w-7 text-primary" />
              <h3 className="font-display text-xl mt-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10">
            <Target className="h-7 w-7 text-accent" />
            <h3 className="font-display text-3xl mt-4">Misión</h3>
            <p className="mt-3 text-primary-foreground/85 leading-relaxed">
              Crear valor ofreciendo el mejor producto y servicio posible.
            </p>
          </div>
          <div className="rounded-3xl bg-foreground text-background p-10">
            <Eye className="h-7 w-7 text-accent" />
            <h3 className="font-display text-3xl mt-4">Visión</h3>
            <p className="mt-3 text-background/80 leading-relaxed">
              Liderar el campo de la innovación y la rentabilidad para convertirse en líder mundial en productos
              de depilación y cosmética.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
