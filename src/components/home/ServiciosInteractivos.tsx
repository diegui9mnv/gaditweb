"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Servicio = {
  id: string;
  titulo: string;
  gancho: string;
  resumen: string;
  url: string;
  cta: string;
  bullets: string[];
};

const servicios: Servicio[] = [
  {
    id: "legionella",
    titulo: "Control de Legionella",
    gancho: "Cumplimiento sin sobresaltos",
    resumen:
      "Te ayudamos a implantar y mantener tu PPCL/PSL con un enfoque práctico para que cumplas normativa y reduzcas riesgo real en la instalación.",
    url: "/servicios/control-legionella",
    cta: "Ver plan completo",
    bullets: [
      "Auditoría inicial y mapa de puntos críticos.",
      "Documentación lista para inspección.",
      "Muestreo y seguimiento con criterio sanitario.",
    ],
  },
  {
    id: "desinfecciones",
    titulo: "Desinfecciones Técnicas",
    gancho: "Intervención rápida y trazable",
    resumen:
      "Aplicamos protocolos de desinfección técnica con biocidas autorizados y entregamos la documentación sanitaria para justificar la actuación.",
    url: "/servicios/desinfecciones",
    cta: "Explorar desinfecciones",
    bullets: [
      "Nebulización y pulverización en puntos críticos.",
      "Acta sanitaria oficial tras la intervención.",
      "Soporte técnico para licencias y aperturas.",
    ],
  },
  {
    id: "aljibes",
    titulo: "Limpieza de Aljibes",
    gancho: "Agua segura para tu comunidad",
    resumen:
      "Realizamos limpieza y desinfección integral de depósitos con procedimientos reglamentarios para asegurar potabilidad y tranquilidad operativa.",
    url: "/servicios/limpieza-aljibes",
    cta: "Revisar servicio",
    bullets: [
      "Retirada de lodos y biopelículas.",
      "Desinfección mecánica y química controlada.",
      "Cobertura en Manilva, Estepona, Sotogrande y Marbella.",
    ],
  },
  {
    id: "gestion",
    titulo: "Gestión del Agua",
    gancho: "Menos averías, más continuidad",
    resumen:
      "Desde cloración automática hasta mantenimiento hidráulico, optimizamos tus instalaciones para que funcionen estables y con control técnico continuo.",
    url: "/servicios/gestion-del-agua",
    cta: "Conocer gestión integral",
    bullets: [
      "Ajuste de dosificación y control del sistema.",
      "Mantenimiento de grupos de presión.",
      "Reparaciones preventivas y correctivas.",
    ],
  },
  {
    id: "analitica",
    titulo: "Análisis de Agua",
    gancho: "Datos claros, decisiones rápidas",
    resumen:
      "Integramos análisis de piscinas y agua potable para que detectes desviaciones a tiempo y tomes medidas antes de que el problema crezca.",
    url: "/servicios/analisis-piscinas",
    cta: "Ver analíticas",
    bullets: [
      "Parámetros físico-químicos y microbiológicos.",
      "Resultados orientados a acción correctiva.",
      "Asesoramiento técnico post-resultado.",
    ],
  },
];

export default function ServiciosInteractivos() {
  const [activo, setActivo] = useState(servicios[0].id);

  const servicioActivo = useMemo(
    () => servicios.find((servicio) => servicio.id === activo) ?? servicios[0],
    [activo],
  );

  return (
    <section id="seleccion-inteligente" className="py-14 md:py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="inline-block text-xs tracking-wider uppercase bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full mb-4">
            Selección Inteligente
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Elige tu necesidad y te mostramos la ruta más <span className="text-blue-400">efectiva</span>
          </h2>
          <p className="text-slate-300">
            Menos ruido y más claridad: céntrate en lo que realmente importa para tu instalación.
          </p>
        </div>

        <div className="lg:hidden space-y-3">
          {servicios.map((servicio) => {
            const isActive = activo === servicio.id;

            return (
              <article
                key={servicio.id}
                className={`rounded-2xl border transition-all ${
                  isActive
                    ? "bg-white border-blue-200 text-slate-900 shadow-lg"
                    : "bg-slate-800/70 border-slate-700 text-slate-100"
                }`}
              >
                <button
                  onClick={() => setActivo(servicio.id)}
                  className="w-full text-left px-4 py-4 flex items-center justify-between gap-3"
                  aria-expanded={isActive}
                >
                  <div>
                    <p className="font-semibold">{servicio.titulo}</p>
                    <p className={`text-xs mt-1 ${isActive ? "text-blue-700" : "text-slate-300"}`}>{servicio.gancho}</p>
                  </div>
                  <span className={`text-lg transition-transform ${isActive ? "rotate-180 text-blue-700" : "text-slate-300"}`}>
                    ⌄
                  </span>
                </button>

                {isActive && (
                  <div className="px-4 pb-5 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed mt-4 mb-5">{servicio.resumen}</p>

                    <ul className="space-y-2 mb-6">
                      {servicio.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start text-slate-700 text-sm">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={servicio.url}
                      className="inline-flex w-full justify-center items-center mt-1 mb-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm leading-tight"
                    >
                      {servicio.cta}
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-1 bg-slate-800/70 rounded-2xl p-3 border border-slate-700">
            <div className="grid gap-2">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActivo(servicio.id)}
                  className={`text-left rounded-xl px-4 py-3 transition-all border ${
                    activo === servicio.id
                      ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40"
                      : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                  }`}
                  aria-pressed={activo === servicio.id}
                >
                  <p className="font-semibold">{servicio.titulo}</p>
                  <p className="text-xs mt-1 opacity-90">{servicio.gancho}</p>
                </button>
              ))}
            </div>
          </div>

          <article className="lg:col-span-2 bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600 mb-2">
              {servicioActivo.gancho}
            </p>
            <h3 className="text-2xl font-extrabold mb-4">{servicioActivo.titulo}</h3>
            <p className="text-slate-700 leading-relaxed mb-6">{servicioActivo.resumen}</p>

            <ul className="space-y-3 mb-8">
              {servicioActivo.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start text-slate-700">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href={servicioActivo.url}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              {servicioActivo.cta}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
