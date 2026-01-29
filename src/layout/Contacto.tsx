import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  CreditCard,
  Truck,
  MessageCircle,
  ExternalLink,
  Camera,
  Info,
  Calendar,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";
import { useEffect, useState } from "react";

const Contacto = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/place/CARNITAS+CORTES/@19.7161799,-101.1709329,17z/data=!4m6!3m5!1s0x842d0fe64227a87d:0x41bf4a7460905920!8m2!3d19.7161629!4d-101.170983!16s%2Fg%2F11fs07s3rf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.23456789!2d-101.1709329!3d19.7161799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f9a5950f577%3A0x1f93f2f85aee935c!2sOBRADOR%20CORT%C3%89S%20Industrializadora%20Michoacana%20de%20Carne%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx`;

  const imageDesktopId = "fachada";
  const imageMobileId = "fachada_mobile";
  const galleryImageId = "Galery_cortes1";

  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };
    handler(mq);
    if (mq.addEventListener) mq.addEventListener("change", handler as never);
    else mq.addListener(handler as never);

    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handler as never);
      else mq.removeListener(handler as never);
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      {/* --- ENCABEZADO --- */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black uppercase text-slate-900 mb-4">
          Estamos cerca de{" "}
          <span className="text-red-600 underline decoration-4 decoration-slate-900">
            Ti
          </span>
        </h1>
        <p className="text-slate-500 font-medium text-lg">
          La mejor calidad en carnes y el sabor tradicional que buscas.
        </p>
      </motion.section>
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-white relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group min-h-[320px] md:min-h-[450px]"
          >
            {/* Fondo Decorativo */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute -right-8 -top-8 text-green-50 transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none">
                <MessageCircle size={280} />
            </div>

            {/* Contenido Superior */}
            <div className="relative z-10 p-6 md:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 md:mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Respuesta Inmediata
              </div>

              {/* Título Adaptable */}
              <h2 className="text-2xl md:text-4xl font-black uppercase text-slate-900 mb-2 leading-tight">
                ¿Antojo de <br/>
                <span className="text-green-600">Carnitas?</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm md:text-lg max-w-xs leading-relaxed">
                 Hacer tu pedido es tan fácil como enviar un mensaje.
              </p>
            </div>

            {/* Contenido Inferior (CTA) */}
            <div className="relative z-10 p-6 md:p-8 pt-0 mt-auto">
               {/* Info Box - Oculto en móbiles muy pequeños si es necesario, o reducido */}
               <div className="bg-slate-50 p-3 md:p-4 rounded-xl mb-4 md:mb-6 border border-slate-100 shadow-sm relative group-hover:border-green-200 transition-colors">
                  <div className="flex items-center gap-2 text-slate-600 mb-1">
                     <Clock size={16} className="text-green-600" />
                     <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Mejor Horario:</span>
                  </div>
                  <p className="text-slate-800 font-medium text-xs md:text-sm leading-snug">
                     Pide antes de las <span className="text-green-600 font-black">12:00 PM</span>.
                  </p>
               </div>

              <a
                href="https://wa.me/524436721870"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 w-full bg-green-500 text-white py-3 md:py-4 px-6 font-black uppercase tracking-widest text-sm md:text-base rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-200 group/btn hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>


          {/* --- CARD 2: GALERÍA (Tema Oscuro / Visual) --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-end bg-slate-900 min-h-[320px] md:min-h-[450px]"
          >
            {/* IMAGEN DE FONDO */}
            <div className="absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-in-out">
              <ImagenCloudinary
                publicId={galleryImageId}
                anchoDeseado={800} 
                altText="Vista previa de la galería del obrador"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Degradado (Un poco más fuerte en móvil para leer bien el texto pequeño) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 pointer-events-none"></div>

            {/* Contenido */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              {/* Badge Superior */}
              <div className="mb-auto">
                <span className="inline-flex items-center gap-1.5 bg-red-600/90 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  <Camera size={12} className="md:w-[14px] md:h-[14px]" /> Galería Exclusiva
                </span>
              </div>

              {/* Bloque Animado Inferior */}
              <div className="transform transition-transform duration-500 ease-out md:translate-y-[80px] md:group-hover:translate-y-0 mt-auto">
                <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-2 md:mb-3 leading-tight drop-shadow-md">
                  Conoce nuestras <br />
                  <span className="text-slate-300">Instalaciones</span>
                </h2>
                
                <p className="text-slate-200 text-sm md:text-lg mb-4 md:mb-6 font-medium leading-relaxed max-w-sm drop-shadow-sm">
                  Echa un vistazo a la calidad de los cortes y el corazón de nuestro obrador.
                </p>

                {/* Botón */}
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-1">
                  <a
                    href="https://produccionesamedias.pixieset.com/obradorcortes/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 md:gap-3 w-full bg-white text-slate-900 py-3 md:py-4 px-6 font-black uppercase tracking-widest text-sm md:text-base rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 group/btn shadow-lg shadow-slate-900/50"
                  >
                    Ver Portafolio
                    <ExternalLink
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- UBICACIÓN PREMIUM (MAPA + FACHADA) --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 mb-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto min-h-[400px]">
              {isDesktop ? (
                <ImagenCloudinary
                  publicId={imageDesktopId}
                  anchoDeseado={1520}
                  aspectRatio="4:3"
                  altText="Fachada Carnicería Obrador en Central de Abastos Morelia"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <ImagenCloudinary
                  publicId={imageMobileId}
                  anchoDeseado={800}
                  altText="Fachada Carnicería Obrador en Central de Abastos Morelia"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-start gap-2 text-white mb-2">
                  <MapPin className="text-red-500 shrink-0 mt-1" />
                  <p className="font-medium text-lg">
                    Central de Abastos Morelia
                    <br />
                    Block 2, Bodega 55-A
                    <br />
                    CP 58218
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa Funcional */}
            <div className="relative bg-slate-100 h-64 md:h-auto min-h-[400px]">
              <iframe
                title="Mapa Ubicación Carnicería"
                src={embedUrl}
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>

              <div className="absolute bottom-8 right-8 left-8 md:left-auto">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-black transition-all hover:-translate-y-1"
                >
                  Cómo llegar <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- SECCIÓN INFERIOR: HORARIOS Y FAQ MEJORADOS --- */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* HORARIOS REDISEÑADOS */}
          {/* HORARIOS REDISEÑADOS CON ALTO CONTRASTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:col-span-5 shadow-2xl rounded-2xl overflow-hidden h-fit flex flex-col font-sans"
          >
            {/* Encabezado General */}
            <div className="bg-white p-6 border-b border-slate-100 flex items-center gap-3">
              <div className="bg-slate-900 p-2 rounded-lg text-white shadow-lg shadow-slate-200">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black uppercase text-slate-900 tracking-wide">
                Horarios de Atención
              </h3>
            </div>

            {/* BLOQUE 1: OBRADOR (Industrial / Oscuro) */}
            <div className="bg-slate-900 p-8 text-white relative overflow-hidden group">
              {/* Icono decorativo de fondo */}
              <Truck className="absolute -right-4 -bottom-4 text-slate-800 w-32 h-32 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest text-slate-300 border border-slate-600">
                    Carniceria
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                      <Calendar size={14} /> Lunes a Sábado
                    </span>
                    <span className="text-3xl md:text-4xl font-black tracking-tight text-white">
                      6:00{" "}
                      <span className="text-lg font-bold text-slate-500">
                        AM
                      </span>{" "}
                      - 5:00{" "}
                      <span className="text-lg font-bold text-slate-500">
                        PM
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-px bg-slate-800" /> {/* Separador */}
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                      <Calendar size={14} /> Domingos
                    </span>
                    <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                      6:00{" "}
                      <span className="text-base font-bold text-slate-500">
                        AM
                      </span>{" "}
                      - 3:00{" "}
                      <span className="text-base font-bold text-slate-500">
                        PM
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOQUE 2: COMIDA (Vibrante / Rojo) */}
            <div className="bg-red-600 p-8 text-white relative overflow-hidden group">
              {/* Icono decorativo de fondo */}
              <MessageCircle className="absolute -right-2 top-10 text-red-800 w-32 h-32 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest text-white border border-white/30 backdrop-blur-sm">
                    Carnitas y Tacos
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col">
                    <span className="text-red-200 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                      <Calendar size={14} /> Lunes a Viernes
                    </span>
                    <span className="text-3xl md:text-4xl font-black tracking-tight">
                      9:00{" "}
                      <span className="text-lg font-bold text-red-300">AM</span>{" "}
                      - 4:00{" "}
                      <span className="text-lg font-bold text-red-300">PM</span>
                    </span>
                  </div>
                  <div className="w-full h-px bg-red-500" /> {/* Separador */}
                  <div className="flex flex-col">
                    <span className="text-red-200 text-sm font-bold uppercase mb-1 flex items-center gap-2">
                      <Calendar size={14} /> Sábados y Domingos
                    </span>
                    <span className="text-2xl md:text-3xl font-black tracking-tight">
                      8:00{" "}
                      <span className="text-base font-bold text-red-300">
                        AM
                      </span>{" "}
                      - 4:00{" "}
                      <span className="text-base font-bold text-red-300">
                        PM
                      </span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-red-200 mt-6 font-medium italic opacity-80 flex items-center justify-end gap-1">
                  <Info size={12} /> * O hasta agotar existencia
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ REDISEÑADO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 md:pl-2">
              <div className="bg-white border border-slate-200 p-3 rounded-lg text-slate-900">
                <Info size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase text-slate-900">
                Información Útil
              </h3>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-full shrink-0">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg mb-2 text-slate-900">
                    Métodos de Pago
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Para tu comodidad aceptamos{" "}
                    <strong>efectivo y tarjetas de crédito o débito</strong>.
                    También contamos con terminal para todas las tarjetas de
                    crédito y débito (Visa, Mastercard, Amex).
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start">
                <div className="bg-green-50 text-green-600 p-3 rounded-full shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg mb-2 text-slate-900">
                    Envíos y Domicilio
                  </h4>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong className="text-slate-900">Carnes:</strong>{" "}
                      Contamos con ruta de entrega gratis en Morelia.
                    </p>
                    <div className="h-px bg-slate-100 w-full my-2"></div>
                    <p>
                      <strong className="text-slate-900">
                        Carnitas:
                      </strong>{" "}
                      Puedes hacer tu pedido para recoger en tienda o por
                      servicio a domicilio vía WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
