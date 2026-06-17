import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, ShoppingBag, Zap } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { trackPixel } from "@/lib/pixel";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.name} — Starpil · Lyznyz Academia` },
            { name: "description", content: p.description.slice(0, 155) },
            { property: "og:title", content: `${p.name} — Starpil` },
            { property: "og:description", content: p.subtitle },
            { property: "og:image", content: p.image },
          ]
        : [{ title: "Producto" }],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl">Producto no encontrado</h1>
      <Link to="/tienda" className="btn-primary mt-6 inline-flex">Volver a la tienda</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    trackPixel("ViewContent", {
      content_ids: [product.slug],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      currency: "USD",
    });
  }, [product.slug, product.name, product.price]);

  const handleAdd = () => {
    add(
      { slug: product.slug, name: product.name, price: product.price, image: product.image },
      qty,
    );
  };

  const handleBuyNow = () => {
    handleAdd();
    trackPixel("InitiateCheckout", {
      content_ids: [product.slug],
      value: product.price * qty,
      currency: "USD",
    });
    window.location.href = "/carrito";
  };

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="container-x py-8 md:py-12">
        <Link to="/tienda" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Volver a la tienda
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="relative aspect-square rounded-3xl bg-secondary/40 overflow-hidden border border-border">
            <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-contain p-10" />
          </div>

          <div>
            <span className="eyebrow">Starpil · Línea profesional</span>
            <h1 className="mt-3 font-display text-3xl md:text-5xl leading-tight">{product.name}</h1>
            <p className="mt-3 text-muted-foreground">{product.presentation}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-primary">
                {product.price} <span className="text-2xl">$</span>
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">USD · entrega inmediata</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-11 w-11 text-lg" aria-label="Disminuir">−</button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="h-11 w-11 text-lg" aria-label="Aumentar">+</button>
              </div>
              <button onClick={handleAdd} className="btn-outline flex-1 sm:flex-none">
                <ShoppingBag className="h-4 w-4" /> Añadir al carrito
              </button>
            </div>

            <button onClick={handleBuyNow} className="btn-primary mt-3 w-full sm:w-auto">
              <Zap className="h-4 w-4" /> Comprar ahora
            </button>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-2 rounded-xl bg-secondary/50 px-3 py-2.5">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div>
            <span className="eyebrow">Descripción</span>
            <p className="mt-3 text-foreground/85 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>
          <div>
            <span className="eyebrow">Beneficios</span>
            <p className="mt-3 text-foreground/85 leading-relaxed whitespace-pre-line">{product.benefits}</p>
          </div>
          <div>
            <span className="eyebrow">Aplicación</span>
            <p className="mt-3 text-foreground/85 leading-relaxed whitespace-pre-line">{product.application}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">También te puede interesar</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <Link key={p.slug} to="/producto/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="aspect-square bg-secondary/40 relative">
                <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-contain p-5" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base leading-tight">{p.name}</h3>
                <p className="text-primary font-semibold mt-1">{p.price} $</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
