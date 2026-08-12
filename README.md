# GADYT Web

Web corporativa/publicitaria de GADYT desarrollada con Next.js (App Router), React y Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Despliegue estático

El proyecto está configurado para exportación estática:

- `next.config.ts` usa `output: "export"`.
- Las imágenes se sirven con `images.unoptimized: true`.

La salida generada queda en `out/` tras `npm run build`.

## Formularios

La página de contacto (`/contacto`) envía el correo con **EmailJS** (sin Netlify Forms).

Variables de entorno necesarias (ver `.env.example`):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_CONTACT_TO_EMAIL` (correo de destino, por ejemplo el del jefe)
- `NEXT_PUBLIC_CONTACT_FROM_EMAIL` (correo remitente verificado en proveedor)
- `NEXT_PUBLIC_CONTACT_FROM_NAME` (nombre del remitente)

Parámetros enviados al template:

- `to_email`
- `sender_name`
- `sender_email`
- `from_name`
- `company`
- `from_email`
- `phone`
- `service`
- `message`
- `full_message`
- `submitted_at`
- `website`
- `reply_to`

## SEO

- `public/robots.txt`
- `public/sitemap.xml`
- `src/lib/seo.ts` centraliza canonical, Open Graph y Twitter Cards de las páginas internas.
- `src/components/seo/LocalBusinessJsonLd.tsx` publica los datos estructurados de empresa local.
- `src/components/seo/Breadcrumbs.tsx` añade navegación y `BreadcrumbList` en servicios y normativa.

El dominio canónico es `https://www.gadyt.es`. El sitemap incluye home, servicios, contacto, normativa y páginas legales. Al crear una ruta pública, añade su metadata con `createPageMetadata` y actualiza también el sitemap.
