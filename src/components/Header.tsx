import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import logo from "@/assets/logo-starpil-lyznyz.png";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/tienda", label: "Tienda" },
  { to: "/sobre-la-marca", label: "Sobre la Marca" },
  { to: "/empieza-con-starpil", label: "Empieza con Starpil" },
  { to: "/formacion", label: "Formación" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-4 py-4 md:py-5">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Starpil · Lyznyz Academia"
            className="h-14 md:h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/carrito"
            className="relative inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Carrito</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid place-items-center rounded-full bg-primary text-primary-foreground text-[10px] h-5 min-w-[20px] px-1 font-bold">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-foreground/15"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border/60 last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
