import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const categories = ["Todos", "Pre depilatorio", "Depilatorio", "Post depilatorio", "Equipos"] as const;

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda — Starpil · Lyznyz Academia" },
      { name: "description", content: "Catálogo completo de productos profesionales Starpil: pre depilatorios, ceras y post depilatorios." },
      { property: "og:title", content: "Tienda — Starpil · Lyznyz Academia" },
      { property: "og:description", content: "Catálogo profesional Starpil comercializado por Lyznyz Academia." },
    ],
  }),
  component: Tienda,
});

function Tienda() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Todos");
  const list = useMemo(
    () => (cat === "Todos" ? products : products.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <section className="container-x py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Tienda Starpil</span>
        <h1 className="font-display text-4xl md:text-5xl mt-3">Catálogo profesional</h1>
        <p className="mt-4 text-muted-foreground">
          Productos profesionales Starpil seleccionados por Lyznyz Academia para especialistas en depilación facial y corporal.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              cat === c
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent border-border hover:border-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
