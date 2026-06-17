# Starpil · Lyznyz Academia — Tienda Online

Tienda online profesional para la comercialización de productos **Starpil** por **Lyznyz Academia**, especializada en depilación facial y corporal.

Construida con [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) y Tailwind CSS v4. Lista para desplegar en Cloudflare Workers / Vercel / cualquier host que soporte Node 20+.

## Stack

- **React 19** + **TanStack Router / Start v1**
- **Tailwind CSS v4** (CSS-first, sin `tailwind.config.js`)
- **TanStack Query**
- **Lucide Icons**
- Carrito persistente con `localStorage`
- Conversión automática USD → Bs con tasa Binance Venezuela
- **Meta Pixel** `3282700515215644` con eventos: `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout`, `Purchase`, `Lead`, `Contact`, `WhatsAppClick`

## Estructura

```
src/
├── assets/                # Logo + imágenes de productos
├── components/            # Header, Footer, ProductCard
├── lib/
│   ├── products.ts        # Catálogo (datos extraídos del PDF oficial)
│   ├── cart.tsx           # CartProvider + useCart
│   └── pixel.ts           # Helper para eventos del Meta Pixel
├── routes/
│   ├── __root.tsx         # Shell + Pixel + fuentes + CartProvider
│   ├── index.tsx          # Inicio (logo + mensaje principal)
│   ├── tienda.tsx         # Catálogo con filtros por categoría
│   ├── producto.$slug.tsx # Página individual de producto
│   ├── carrito.tsx        # Carrito + formas de pago + WhatsApp
│   ├── sobre-la-marca.tsx
│   ├── empieza-con-starpil.tsx
│   └── formacion.tsx
└── styles.css             # Design system (oklch + tokens)
```

## Desarrollo local

```bash
bun install
bun run dev
```

Abre `http://localhost:8080`.

## Build

```bash
bun run build
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "feat: tienda online Starpil · Lyznyz Academia"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/starpil-lyznyz.git
git push -u origin main
```

## Datos del negocio (configurables en `src/routes/carrito.tsx` y `Footer.tsx`)

- **Pago móvil:** 0412-9974109
- **Banco:** Bancamiga
- **Cédula:** 28.143.959
- **WhatsApp:** 0412-0162096

## Marca

Lyznyz Academia **comercializa** los productos profesionales Starpil. No es propietaria de la marca Starpil ni se presenta como distribuidor, representante o partner oficial.

---

© Lyznyz Academia
