import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Copy, MessageCircle, Trash2, Wallet, Banknote, Smartphone } from "lucide-react";
import { useCart } from "@/lib/cart";
import { trackPixel } from "@/lib/pixel";

export const Route = createFileRoute("/carrito")({
  head: () => ({
    meta: [
      { title: "Carrito — Starpil · Lyznyz Academia" },
      { name: "description", content: "Revisa tu carrito y finaliza tu pedido de productos Starpil." },
    ],
  }),
  component: Carrito,
});

const PAYMENT = {
  phone: "04129974109",
  bank: "Bancamiga",
  ci: "28143959",
  whatsapp: "584120162096",
};

function Carrito() {
  const { items, setQty, remove, total, count, clear } = useCart();
  const [rate, setRate] = useState<number | null>(null);
  const [rateLoading, setRateLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // Binance P2P Venezuela approximate via dolarapi (Binance reference)
        const res = await fetch("https://ve.dolarapi.com/v1/dolares/paralelo");
        const data = await res.json();
        if (alive && data?.promedio) setRate(Number(data.promedio));
        else {
          const r2 = await fetch("https://pydolarve.org/api/v1/dollar?page=binance");
          const d2 = await r2.json();
          if (alive && d2?.monitors?.binance?.price) setRate(Number(d2.monitors.binance.price));
        }
      } catch {
        /* keep null */
      } finally {
        if (alive) setRateLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (count > 0) trackPixel("InitiateCheckout", { value: total, currency: "USD", num_items: count });
  }, [count, total]);

  const bs = rate ? (total * rate).toFixed(2) : null;

  const copyText = (t: string) => navigator.clipboard?.writeText(t);

  const sendWhatsapp = () => {
    const lines = items.map((i) => `• ${i.name} x${i.qty} — ${i.price * i.qty} $`).join("%0A");
    const msg =
      `Hola, vengo de la tienda Starpil de Lyznyz Academia.%0A%0A` +
      `Quiero realizar este pedido:%0A${lines}%0A%0A` +
      `Total: ${total} $${bs ? ` (≈ ${bs} Bs a ${rate} Bs/USD)` : ""}.%0A` +
      `Por favor confírmenme la forma de pago.`;
    trackPixel("Purchase", { value: total, currency: "USD", num_items: count });
    trackPixel("Contact");
    window.open(`https://wa.me/${PAYMENT.whatsapp}?text=${msg}`, "_blank");
  };

  if (count === 0) {
    return (
      <section className="container-x py-20 text-center">
        <h1 className="font-display text-4xl">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mt-3">Explora la tienda y agrega tus productos Starpil.</p>
        <Link to="/tienda" className="btn-primary mt-8 inline-flex">Ir a la tienda</Link>
      </section>
    );
  }

  return (
    <section className="container-x py-12 md:py-16">
      <h1 className="font-display text-3xl md:text-5xl">Carrito</h1>
      <p className="text-muted-foreground mt-2">{count} producto{count !== 1 ? "s" : ""} listo{count !== 1 ? "s" : ""} para confirmar.</p>

      <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-10">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.slug} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
              <div className="h-24 w-24 rounded-xl bg-secondary/50 shrink-0 relative">
                <img src={i.image} alt={i.name} className="absolute inset-0 h-full w-full object-contain p-2" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg leading-tight">{i.name}</h3>
                  <button onClick={() => remove(i.slug)} className="text-muted-foreground hover:text-destructive" aria-label="Eliminar">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-primary font-semibold mt-1">{i.price} $</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(i.slug, i.qty - 1)} className="h-9 w-9">−</button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.slug, i.qty + 1)} className="h-9 w-9">+</button>
                  </div>
                  <span className="font-semibold">{i.price * i.qty} $</span>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive">Vaciar carrito</button>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl">Resumen</h2>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{total} $</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Envío</span>
              <span>A coordinar</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex justify-between items-baseline">
              <span className="font-semibold">Total</span>
              <span className="font-display text-3xl font-semibold text-primary">{total} <span className="text-lg">$</span></span>
            </div>
            {bs && (
              <div className="mt-2 text-right text-sm text-muted-foreground">
                ≈ <span className="font-semibold text-foreground">{bs} Bs</span> · tasa Binance {rate?.toFixed(2)}
              </div>
            )}
            {rateLoading && <div className="mt-2 text-right text-xs text-muted-foreground">Calculando tasa Bs…</div>}

            <button onClick={sendWhatsapp} className="btn-primary w-full mt-6">
              <MessageCircle className="h-4 w-4" /> Confirmar por WhatsApp
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-xl">Formas de pago</h3>

            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Banknote className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Divisas en efectivo</p>
                  <p className="text-muted-foreground">Pago en dólares contra entrega/coordinación.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">Pago móvil {bs && <span className="text-muted-foreground font-normal">· {bs} Bs</span>}</p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li className="flex items-center justify-between gap-2">
                      <span>Teléfono: <strong className="text-foreground">{PAYMENT.phone}</strong></span>
                      <button onClick={() => copyText(PAYMENT.phone)} className="text-foreground/60 hover:text-primary"><Copy className="h-3.5 w-3.5" /></button>
                    </li>
                    <li className="flex items-center justify-between gap-2">
                      <span>Banco: <strong className="text-foreground">{PAYMENT.bank}</strong></span>
                    </li>
                    <li className="flex items-center justify-between gap-2">
                      <span>Cédula: <strong className="text-foreground">{PAYMENT.ci}</strong></span>
                      <button onClick={() => copyText(PAYMENT.ci)} className="text-foreground/60 hover:text-primary"><Copy className="h-3.5 w-3.5" /></button>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">Monto en Bs calculado automáticamente con la tasa Binance Venezuela.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wallet className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">WhatsApp para confirmar</p>
                  <a href={`https://wa.me/${PAYMENT.whatsapp}`} className="text-primary font-semibold">0412-0162096</a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
