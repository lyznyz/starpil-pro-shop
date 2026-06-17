import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-starpil-lyznyz.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Starpil Lyznyz Academia" className="h-16 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-sm">
            Lyznyz Academia comercializa los productos profesionales Starpil para
            especialistas en depilación facial y corporal.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-4">Tienda</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/tienda" className="hover:text-primary">Catálogo</Link></li>
            <li><Link to="/carrito" className="hover:text-primary">Carrito</Link></li>
            <li><Link to="/empieza-con-starpil" className="hover:text-primary">Empieza con Starpil</Link></li>
            <li><Link to="/formacion" className="hover:text-primary">Formación</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: <a href="https://wa.me/584120162096" className="text-foreground hover:text-primary">0412-0162096</a></li>
            <li>Pago móvil: 0412-9974109</li>
            <li>Banco: Bancamiga · C.I. 28.143.959</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Lyznyz Academia. Productos Starpil.</span>
          <span>Lyznyz Academia comercializa los productos Starpil; no es propietaria de la marca.</span>
        </div>
      </div>
    </footer>
  );
}
