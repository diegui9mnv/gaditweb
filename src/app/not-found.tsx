import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[65vh] bg-slate-900 text-white flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-blue-300 font-bold tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
          Página no encontrada
        </h1>
        <p className="text-lg text-slate-300 mb-9">
          La dirección puede haber cambiado o ya no estar disponible. Puedes volver
          al inicio o contarnos qué servicio necesitas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-full transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="border border-slate-500 hover:border-white text-white font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Contactar con GADYT
          </Link>
        </div>
      </div>
    </section>
  );
}
