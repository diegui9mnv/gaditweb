import Link from "next/link";

type RelatedService = {
  name: string;
  description: string;
  href: `/servicios/${string}`;
};

type RelatedServicesProps = {
  services: RelatedService[];
};

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Servicios relacionados
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md"
            >
              <span className="font-semibold text-blue-700 group-hover:text-blue-800">
                {service.name} →
              </span>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
