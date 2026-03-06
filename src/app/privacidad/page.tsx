import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | GADYT",
  description:
    "Información sobre el tratamiento de datos personales en gadyt.es, de acuerdo con el RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4">Política de Privacidad</h1>
          <p className="text-slate-300">
            Última actualización: 6 de marzo de 2026
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl border border-slate-100 p-8 space-y-8">
          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recabados a través de este sitio web es GADYT.
            </p>
            <p>
              Correo de contacto: <strong>contacto@gadyt.es</strong>.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">2. Finalidad del tratamiento</h2>
            <p>
              Tratamos los datos que nos facilitas mediante el formulario de contacto para atender consultas,
              preparar presupuestos y gestionar la relación profesional solicitada.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">3. Base jurídica</h2>
            <p>
              La base legal para el tratamiento es el consentimiento del usuario al enviar voluntariamente sus
              datos y, en su caso, la aplicación de medidas precontractuales.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">4. Conservación de datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir
              obligaciones legales aplicables.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">5. Destinatarios</h2>
            <p>
              No se cederán datos a terceros salvo obligación legal o necesidad operativa para prestar el servicio.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">6. Derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
              mediante solicitud a <strong>contacto@gadyt.es</strong>, adjuntando un documento identificativo.
            </p>
          </article>

          <article className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">7. Medidas de seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente
              a pérdida, uso indebido, acceso no autorizado o alteración.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
