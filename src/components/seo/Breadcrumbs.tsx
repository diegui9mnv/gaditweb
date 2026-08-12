import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: `/${string}` | "/";
};

type BreadcrumbsProps = {
  current: BreadcrumbItem;
  align?: "left" | "center";
};

export default function Breadcrumbs({
  current,
  align = "left",
}: BreadcrumbsProps) {
  const items: BreadcrumbItem[] = [
    { name: "Inicio", path: "/" },
    current,
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="Migas de pan"
        className={`mb-5 text-sm text-slate-300 ${
          align === "center" ? "flex justify-center" : ""
        }`}
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-500">
            /
          </li>
          <li aria-current="page" className="font-medium text-white">
            {current.name}
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
