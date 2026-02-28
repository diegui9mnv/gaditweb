"use client";

import React, { useState } from "react";

export default function Contacto() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch("/contacto.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error enviando el formulario:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col min-h-screen bg-slate-50">
                <section className="bg-slate-900 py-24 text-white border-t border-slate-800 flex-grow flex items-center">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h1 className="text-4xl font-extrabold mb-4">¡Mensaje Enviado!</h1>
                        <p className="text-xl text-slate-300 mb-10">
                            Gracias por contactar con GADYT. Hemos recibido tu solicitud correctamente y un técnico especialista se pondrá en contacto contigo a la mayor brevedad posible.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl"
                        >
                            Volver al formulario
                        </button>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="bg-slate-900 py-16 text-white border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">Contacta con GADYT</h1>
                    <p className="text-xl text-slate-300">
                        Soluciones inmediatas para tus instalaciones en Andalucía
                    </p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Nuestros Datos</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-slate-900 leading-tight mb-1">Ubicación central</p>
                                    <p className="text-slate-700 text-sm">C/Domínguez, 8. Manilva, Málaga (CP 29691)</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 leading-tight mb-1">Teléfono</p>
                                    <a href="tel:+34667752702" className="text-slate-700 text-sm hover:text-blue-600 font-medium">667 752 702</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 leading-tight mb-1">Correo Electrónico</p>
                                    <a href="mailto:contacto@gadyt.es" className="text-slate-700 text-sm hover:text-blue-600 font-medium">contacto@gadyt.es</a>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 border-t border-slate-100 pt-8">
                            <p className="text-sm font-semibold text-slate-800 mb-1 leading-tight">Número ROESBA</p>
                            <p className="text-sm text-slate-600">1380-AND-750</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-950 mb-1">Nombre completo</label>
                                    <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-950 placeholder:text-slate-500" placeholder="Escribe tu nombre" required />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-slate-950 mb-1">Empresa / Instalación</label>
                                    <input type="text" name="company" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-950 placeholder:text-slate-500" placeholder="Ej. Hotel Sol, Comunidad..." />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-950 mb-1">Correo electrónico</label>
                                    <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-950 placeholder:text-slate-500" placeholder="tu@email.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-950 mb-1">Teléfono</label>
                                    <input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-950 placeholder:text-slate-500" placeholder="Tu teléfono" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-slate-950 mb-1">¿En qué podemos ayudarte?</label>
                                <select name="service" id="service" className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-950 font-medium" required>
                                    <option value="">Selecciona un servicio</option>
                                    <option value="legionella">Control y Prevención de Legionella</option>
                                    <option value="desinfeccion">Desinfecciones Técnicas</option>
                                    <option value="aljibes">Mantenimiento de Aljibes</option>
                                    <option value="analitica">Análisis de Agua (Piscinas, Potable)</option>
                                    <option value="consultoria">Consultoría Técnica Normativa</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-950 mb-1">Mensaje o Detalles del Proyecto</label>
                                <textarea name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none text-slate-950 placeholder:text-slate-500" placeholder="Cuéntanos sobre tu instalación o qué necesitas..." required></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all w-full md:w-auto flex items-center justify-center gap-2 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : "Enviar Solicitud"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

