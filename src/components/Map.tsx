import { useState } from "react";
import {
  Phone,
  MapPin,
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactoYMapa = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const EMAIL_DESTINO = "pruebachilmex@gmail.com";

  const googleMapsDirectionsUrl = `https://www.google.com/maps/place/CARNITAS+CORTES/@19.7161799,-101.1709329,17z/data=!4m6!3m5!1s0x842d0fe64227a87d:0x41bf4a7460905920!8m2!3d19.7161629!4d-101.170983!16s%2Fg%2F11fs07s3rf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.23456789!2d-101.1709329!3d19.7161799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f9a5950f577%3A0x1f93f2f85aee935c!2sOBRADOR%20CORT%C3%89S%20Industrializadora%20Michoacana%20de%20Carne%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx`;

  interface FormData {
    nombre: string;
    telefono: string;
    interes: string;
    mensaje: string;
    _honey?: string;
  }

  interface FormSubmitPayload extends FormData {
    _subject: string;
    _template: string;
    _captcha: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as FormData;

    try {
      const payload: FormSubmitPayload = {
        ...data,
        _subject: `Nueva Cotización: ${data.nombre}`,
        _template: "table",
        _captcha: "false",
      };

      const response = await fetch(
        `https://formsubmit.co/ajax/${EMAIL_DESTINO}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Error al enviar el correo");
      }
    } catch (error) {
      setErrorMessage(
        "Hubo un problema al enviar. Intenta contactarnos por WhatsApp." + error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase text-slate-900 leading-tight">
            La mejor carnicería en{" "}
            <span className="text-red-600 underline">Morelia</span>
          </h2>
          <p className="text-slate-500 mt-4 font-bold tracking-widest uppercase text-sm">
            Central de Abastos • Calidad Industrial • Tradición Michoacana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200 shadow-2xl">
          {/* Columna 1: Información y Mapa (Sin cambios) */}
          <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-8 border-l-4 border-red-600 pl-4">
                Ubícanos
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-red-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold uppercase tracking-tight text-sm text-slate-300 mb-1">
                      Dirección:
                    </p>
                    <p className="text-white font-medium text-base leading-snug">
                      Block 2 Bodega 55-A, Central de Abastos, Morelia, Mich. CP
                      58218
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="text-red-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold uppercase tracking-tight text-sm text-slate-300 mb-1">
                      Teléfono Directo:
                    </p>
                    <a
                      href="tel:+524436721870"
                      className="text-white font-medium text-lg hover:text-red-400 transition-colors"
                    >
                      +52 443 672 1870
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="relative group overflow-hidden border-2 border-slate-700 rounded-lg shadow-inner bg-slate-800">
              <iframe
                title="Mapa de Ubicación"
                src={embedUrl}
                className="w-full h-64 grayscale invert opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="bg-red-600 text-white px-6 py-3 rounded-full font-black uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  Cómo llegar <ExternalLink size={18} />
                </div>
              </a>
            </div>
          </div>

          {/* Columna 2: Formulario Funcional */}
          <div className="bg-white p-8 md:p-12 relative overflow-hidden">
            {/* Mensaje de Éxito Superpuesto */}
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-black uppercase text-slate-900 mb-2">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-slate-500 font-medium">
                  Gracias por contactarnos. Revisaremos tu cotización y te
                  responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm font-bold text-red-600 underline uppercase"
                >
                  Enviar otra solicitud
                </button>
              </div>
            )}

            <h3 className="text-2xl font-black uppercase mb-8 text-slate-900 flex items-center gap-2">
              Cotización Industrial
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">
                MAYOREO
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Oculto para evitar Honeypots (Spam) */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="group relative">
                <input
                  type="text"
                  name="nombre"
                  required
                  minLength={3}
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Nombre del Negocio"
                  id="nombre"
                />
                <label
                  htmlFor="nombre"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Nombre del Negocio / Cliente *
                </label>
              </div>

              <div className="group relative">
                <input
                  type="tel"
                  name="telefono"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Teléfono"
                  id="telefono"
                  onInput={(e) =>
                    ((e.target as HTMLInputElement).value = (
                      e.target as HTMLInputElement
                    ).value.replace(/[^0-9]/g, ""))
                  }
                />
                <label
                  htmlFor="telefono"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  WhatsApp (10 dígitos) *
                </label>
                <p className="hidden peer-invalid:block text-red-500 text-[10px] mt-1 font-bold uppercase">
                  <AlertCircle size={10} className="inline mr-1" /> 10 dígitos
                  requeridos
                </p>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                  Interés Principal *
                </label>
                <div className="relative">
                  <select
                    name="interes"
                    required
                    className="w-full py-2 bg-transparent border-b-2 border-slate-200 outline-none font-bold text-slate-900 appearance-none cursor-pointer focus:border-red-600 rounded-none"
                  >
                    <option value="">Seleccione una opción...</option>
                    <option value="Mayoreo Res/Cerdo">
                      Mayoreo Res / Cerdo
                    </option>
                    <option value="Eventos">Carnitas para Eventos</option>
                    <option value="Taqueria">Surtido para Taquería</option>
                    <option value="Hogar">Menudeo para el Hogar</option>
                  </select>
                  <div className="absolute right-0 top-3 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>

              <div className="group relative mt-4">
                <textarea
                  name="mensaje"
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 h-24 resize-none placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Detalles"
                  maxLength={500}
                  id="mensaje"
                ></textarea>
                <label
                  htmlFor="mensaje"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  Detalles del pedido (Cantidades, dudas...)
                </label>
              </div>

              {errorMessage && (
                <p className="text-red-600 text-sm font-bold text-center">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-5 font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Solicitud <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactoYMapa;
