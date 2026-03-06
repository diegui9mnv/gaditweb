type AccordionItem = {
  title: string;
  content: string;
};

type ServiceAccordionProps = {
  heading: string;
  subheading: string;
  items: AccordionItem[];
  accentClassName?: string;
};

export default function ServiceAccordion({
  heading,
  subheading,
  items,
  accentClassName = "text-blue-600",
}: ServiceAccordionProps) {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className={`text-3xl font-extrabold ${accentClassName}`}>{heading}</h2>
          <p className="text-slate-600 mt-3">{subheading}</p>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.title}
              className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                <span className="font-semibold text-slate-900">{item.title}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">{item.content}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
