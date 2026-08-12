import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Aviso Legal",
  description:
    "Aviso legal del sitio web gadyt.es: identificación del titular, condiciones de uso y responsabilidad.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4">Aviso Legal</h1>
          <p className="text-slate-300">
            Última actualización: 6 de marzo de 2026
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl border border-slate-100 p-8 space-y-8">
          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">1. Titularidad del sitio web</h2>
            <p>
              Este sitio web tiene como finalidad informar sobre los servicios de GADYT en materia de gestión
              integral del agua, prevención de Legionella y desinfecciones técnicas.
            </p>
            <p>
              Contacto: <strong>contacto@gadyt.es</strong> | Teléfono: <strong>667 752 702</strong>.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">2. Condiciones de uso</h2>
            <p>
              El acceso y uso de esta web implica la aceptación de las presentes condiciones. El usuario se
              compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">3. Propiedad intelectual e industrial</h2>
            <p>
              Los contenidos, marcas, textos, imágenes y elementos gráficos de este sitio están protegidos por
              la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción sin autorización.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">4. Responsabilidad</h2>
            <p>
              GADYT no se hace responsable de daños derivados del uso indebido del sitio web ni de interrupciones
              causadas por factores técnicos ajenos a su control.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">5. Enlaces externos</h2>
            <p>
              Esta web puede incluir enlaces a sitios de terceros. GADYT no asume responsabilidad sobre los
              contenidos, políticas o prácticas de dichos sitios.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">6. Legislación aplicable</h2>
            <p>
              El presente aviso legal se rige por la legislación española. Para cualquier conflicto derivado del
              uso del sitio web, las partes se someten a los juzgados y tribunales que resulten competentes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
