import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Truck,
  Car,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";

const Contacto = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/place/CARNITAS+CORTES/@19.7161799,-101.1709329,17z/data=!4m6!3m5!1s0x842d0fe64227a87d:0x41bf4a7460905920!8m2!3d19.7161629!4d-101.170983!16s%2Fg%2F11fs07s3rf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.23456789!2d-101.1709329!3d19.7161799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f9a5950f577%3A0x1f93f2f85aee935c!2sOBRADOR%20CORT%C3%89S%20Industrializadora%20Michoacana%20de%20Carne%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx`;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
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
          Ya sea por un taco o por una canal completa, aquí te atendemos.
        </p>
      </motion.section>

      {/* --- DIRECTORIO DIFERENCIADO (GRID) --- */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-red-600 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 p-4 rounded-full text-red-600">
                <MessageCircle size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase">
                  ¿Antojo de Carnitas?
                </h2>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                  Venta al Menudeo y Eventos
                </p>
              </div>
            </div>
            <p className="text-slate-600 mb-8">
              Haz tu pedido para llevar o recoge en tienda. Respuesta inmediata
              para comida caliente.
            </p>
            <a
              href="https://wa.me/524436721870"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 font-black uppercase tracking-widest rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
            >
              <MessageCircle size={20} /> Pedir por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900 p-8 rounded-2xl shadow-xl border-t-8 border-slate-500 text-white hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-700 p-4 rounded-full text-white">
                <Phone size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase">
                  Negocios y Mayoreo
                </h2>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                  Atención a Restaurantes
                </p>
              </div>
            </div>
            <p className="text-slate-300 mb-8">
              Cotizaciones de canales, media canal o cortes primarios. Contacto
              directo con administración.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+524436721870"
                className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 py-4 font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Phone size={20} /> Llamar
              </a>
              <a
                href="mailto:ventas@carniceriaobrador.com"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-slate-600 text-white py-4 font-black uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Mail size={20} /> Correo
              </a>
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
              <ImagenCloudinary
                publicId="fachada"
                anchoDeseado={800}
                aspectRatio="4:3"
                altText="Fachada Carnicería Obrador en Central de Abastos Morelia"
                className="absolute inset-0 w-full h-full object-cover"
              />
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

            {/* Lado B: Mapa Funcional */}
            <div className="relative bg-slate-100 h-64 md:h-auto min-h-[400px]">
              <iframe
                title="Mapa Ubicación Carnicería"
                src={embedUrl}
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>

              {/* Botón Flotante sobre el Mapa */}
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

      {/* --- HORARIOS Y FAQ (LAYOUT COMBINADO) --- */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Columna Izq: Horarios Diferenciados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:col-span-5 bg-slate-900 text-white p-10 rounded-2xl shadow-lg h-fit"
          >
            <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
              <Clock className="text-red-500" /> Horarios
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-white pl-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Cortes y Mayoreo
                </p>
                <h4 className="text-xl font-bold mb-1">Obrador Industrial</h4>
                <p className="text-lg">Lunes a Sábado</p>
                <p className="text-3xl font-black text-red-500">
                  7:00 AM - 6:00 PM
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Venta de Comida
                </p>
                <h4 className="text-xl font-bold mb-1">Carnitas y Tacos</h4>
                <p className="text-lg">Todos los días</p>
                <p className="text-3xl font-black text-white">
                  8:00 AM - 3:00 PM
                </p>
                <p className="text-xs text-slate-400 mt-1 italic">
                  * O hasta agotar existencia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Der: FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl font-black uppercase text-slate-900 mb-8">
              Preguntas Frecuentes
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* FAQ 1: Pagos */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-red-600 transition-colors group">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                  <CreditCard size={24} />
                </div>
                <h4 className="font-bold uppercase mb-2">Métodos de Pago</h4>
                <p className="text-sm text-slate-500">
                  Aceptamos efectivo, transferencias bancarias y todas las
                  tarjetas de crédito/débito (Visa, MC, Amex).
                </p>
              </div>

              {/* FAQ 2: Estacionamiento */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-red-600 transition-colors group">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                  <Car size={24} />
                </div>
                <h4 className="font-bold uppercase mb-2">Estacionamiento</h4>
                <p className="text-sm text-slate-500">
                  Sí, contamos con estacionamiento gratuito y seguro frente al
                  local dentro de la Central de Abastos.
                </p>
              </div>

              {/* FAQ 3: Domicilio */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-red-600 transition-colors group">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                  <Truck size={24} />
                </div>
                <h4 className="font-bold uppercase mb-2">
                  Servicio a Domicilio
                </h4>
                <p className="text-sm text-slate-500">
                  <strong>Mayoreo:</strong> Envío gratis en Morelia (min. 10kg).
                  <br />
                  <strong>Carnitas:</strong> A través de Uber Eats o mandaditos
                  locales.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
