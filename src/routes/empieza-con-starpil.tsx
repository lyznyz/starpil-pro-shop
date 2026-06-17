import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Layers, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/empieza-con-starpil")({
  head: () => ({
    meta: [
      { title: "Empieza con Starpil — Lyznyz Academia" },
      { name: "description", content: "Trabaja con la marca líder en depilación profesional. Descubre las ventajas de empezar con Starpil." },
      { property: "og:title", content: "Empieza con Starpil" },
      { property: "og:description", content: "Marca líder, amplia gama y calidad asegurada con casi 40 años de experiencia." },
    ],
  }),
  component: EmpiezaPage,
});

function EmpiezaPage() {
  return (
    <>
      <section className="container-x py-14 md:py-20 text-center">
        <span className="eyebrow">Comienza tu camino</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight max-w-4xl mx-auto">
          ¡Empieza con <em className="text-primary not-italic">Starpil</em>!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 font-display">
          Trabaja con la marca líder en depilación profesional.
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          La depilación es uno de los principales tratamientos para mantener la belleza de nuestro cuerpo,
          ya que además de eliminar el vello nos ayuda a preparar la piel para otros cuidados, por lo que es
          primordial ofrecer a nuestros clientes los mejores productos y protocolos de aplicación.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Innovadoras formulaciones y excelentes productos elaborados con los mejores componentes y
          principios activos de origen natural avalan su amplia experiencia en el sector de la belleza.
        </p>
      </section>

      <section className="container-x pb-16">
        <span className="eyebrow">Ventajas</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 max-w-2xl">Tres razones para elegir Starpil.</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Award,
              title: "Marca líder",
              body: "Miles de clientes y profesionales satisfechos en todo el mundo.",
            },
            {
              icon: Layers,
              title: "Amplia gama de productos",
              body: "Todos los activos y texturas que puedas imaginar.",
            },
            {
              icon: Sparkles,
              title: "Calidad asegurada",
              body: "Casi 40 años de experiencia respaldan la calidad de la marca.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl mt-5">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-5xl">¿Lista para comenzar?</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
            Explora todo el catálogo Starpil y empieza con los productos que usan los profesionales del mundo.
          </p>
          <Link to="/tienda" className="mt-7 inline-flex btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Ver catálogo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
