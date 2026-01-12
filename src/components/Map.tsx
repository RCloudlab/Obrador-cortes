import { Phone, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactoYMapa = () => {
  const GOOGLE_MAPS_EMBED =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.23456789!2d-101.1709329!3d19.7161799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f9a5950f577%3A0x1f93f2f85aee935c!2sOBRADOR%20CORT%C3%89S%20Industrializadora%20Michoacana%20de%20Carne%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"; // Tu URL original
  const GOOGLE_MAPS_LINK =
    "https://www.google.com/maps/place/CARNITAS+CORTES/@19.7161799,-101.1709329,17z/data=!4m6!3m5!1s0x842d0fe64227a87d:0x41bf4a7460905920!8m2!3d19.7161629!4d-101.170983!16s%2Fg%2F11fs07s3rf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"; // Tu URL original
  const PHONE_NUMBER = "524436721870"; // Tu número

  const handleWhatsapp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const message = `Hola, quiero realizar un pedido. Aquí mis datos:

1. Nombre: ${data.nombre}
2. Artículos y Cantidad: ${data.pedido}
3. Dirección de entrega: ${data.direccion}
${data.instrucciones ? `4. Instrucciones extra: ${data.instrucciones}` : ""}

Quedo pendiente de la confirmación.`;

    // Codificamos el texto para URL
    const encodedMessage = encodeURIComponent(message);

    // Abrimos WhatsApp
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
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
            Haz tu pedido a{" "}
            <span className="text-red-600 underline">Domicilio</span>
          </h2>
          <p className="text-slate-500 mt-4 font-bold tracking-widest uppercase text-sm">
            Calidad de Obrador directo a tu mesa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200 shadow-2xl">
          {/* Columna 1: Información y Mapa (Izquierda) */}
          <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-8 border-l-4 border-red-600 pl-4">
                Visítanos
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-red-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold uppercase tracking-tight text-sm text-slate-300 mb-1">
                      Ubicación física:
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
                      Atención Personalizada:
                    </p>
                    <a
                      href={`https://wa.me/${PHONE_NUMBER}`}
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
                src={GOOGLE_MAPS_EMBED}
                className="w-full h-64 grayscale invert opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
              <a
                href={GOOGLE_MAPS_LINK}
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

          {/* Columna 2: Formulario WhatsApp (Derecha) */}
          <div className="bg-white p-8 md:p-12 relative">
            <h3 className="text-2xl font-black uppercase mb-8 text-slate-900 flex items-center gap-2">
              Arma tu Pedido
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                <MessageCircle size={12} /> WHATSAPP
              </span>
            </h3>

            <form onSubmit={handleWhatsapp} className="space-y-6">
              {/* 1. NOMBRE */}
              <div className="group relative">
                <input
                  type="text"
                  name="nombre"
                  required
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Tu Nombre"
                  id="nombre"
                />
                <label
                  htmlFor="nombre"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  1. Tu Nombre *
                </label>
              </div>

              {/* 2 & 3. ARTÍCULOS Y CANTIDAD */}
              <div className="group relative mt-4">
                <textarea
                  name="pedido"
                  required
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 h-24 resize-none placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Ej: 1kg de Arrachera, 500g de Chorizo..."
                  id="pedido"
                ></textarea>
                <label
                  htmlFor="pedido"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  2. ¿Qué cortes y qué cantidad necesitas? *
                </label>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                  Ejemplo: 2 Kilos de Molida, 1 Kilo de Bistec...
                </p>
              </div>

              {/* 4. DIRECCIÓN */}
              <div className="group relative">
                <input
                  type="text"
                  name="direccion"
                  required
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Dirección Completa"
                  id="direccion"
                />
                <label
                  htmlFor="direccion"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  3. Dirección de Entrega (Calle, #, Colonia) *
                </label>
              </div>

              {/* OPCIONAL: INSTRUCCIONES */}
              <div className="group relative">
                <input
                  type="text"
                  name="instrucciones"
                  className="peer w-full py-3 border-b-2 border-slate-200 bg-transparent outline-none font-bold text-slate-900 placeholder-transparent focus:border-red-600 transition-colors"
                  placeholder="Instrucciones"
                  id="instrucciones"
                />
                <label
                  htmlFor="instrucciones"
                  className="absolute left-0 -top-3.5 text-xs font-black uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600"
                >
                  ¿Alguna instrucción especial? (Opcional)
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-5 font-black uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 shadow-xl flex items-center justify-center gap-2 rounded-sm"
              >
                Enviar pedido por WhatsApp <MessageCircle size={20} />
              </button>

              <p className="text-center text-xs text-slate-400 font-medium">
                Al dar clic, se abrirá tu WhatsApp con la información lista para
                enviar.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactoYMapa;
