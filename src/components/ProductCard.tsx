import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.18)] hover:-translate-y-1">
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-secondary/40"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with features */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <span className="eyebrow mb-3">Características</span>
          <h4 className="font-display text-xl mb-4">{product.name}</h4>
          <ul className="space-y-1.5 text-sm">
            {product.features.slice(0, 5).map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✔</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] bg-background/85 backdrop-blur px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </Link>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{product.subtitle}</p>
        </div>
        <div className="flex items-center justify-between gap-2 mt-1">
          <span className="text-2xl font-display font-semibold text-primary">
            {product.price} <span className="text-base">$</span>
          </span>
          <button
            type="button"
            onClick={() =>
              add({
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold hover:bg-primary transition-colors"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <Plus className="h-3.5 w-3.5" /> Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
