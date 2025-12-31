import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  ChefHat,
  TrendingUp,
  ArrowRight,
  ClipboardList,
  Package,
  User,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary"; // Ajusta la ruta si es necesario
import { useEffect, useState } from "react";
import PasosCompra from "../components/PasosCompra";
import MayoreoCatalog from "../components/CatalogoCarnes";

const Mayoreo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const imageDesktopId = "pruebaKit";
  const imageMobileId = "phoneBAck";

  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* --------------------------------------------------------------------------
          A. HERO CORPORATIVO
      -------------------------------------------------------------------------- */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10 mix-blend-multiply"></div>
          {isDesktop ? (
            <ImagenCloudinary
              publicId={imageDesktopId}
              anchoDeseado={1520}
              altText="Cortes de carne premium"
              className="w-full h-full object-cover object-center opacity-50"
            />
          ) : (
            <ImagenCloudinary
              publicId={imageMobileId}
              anchoDeseado={800}
              altText="Cortes de carne premium"
              className="w-full h-full object-cover object-center opacity-50"
            />
          )}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline- py-1 px-3 border border-slate-500 text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">
              División Industrial
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-6">
              Suministro Confiable para la{" "}
              <span className="text-red-600">Industria Gastronómica</span>
            </h1>
            <p className="text-xl text-slate-200 font-medium mb-8 border-l-4 border-red-600 pl-4">
              "Precios de obrador, calidad de exportación".
            </p>
            <a
              href="#cotizacion"
              className="bg-white text-slate-900 px-8 py-4 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Solicitar Alta de Cliente <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          C. PROPUESTA DE VALOR (ICONS)
          (Lo puse antes del catálogo para generar confianza primero)
      -------------------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase text-slate-900">
              Por qué elegir a Obrador Cortés
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* 1. Inocuidad */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold uppercase mb-2">Inocuidad Total</h3>
              <p className="text-sm text-slate-500">
                Manejo bajo estrictas normas de higiene. Procesos tipo TIF
                garantizados.
              </p>
            </motion.div>

            {/* 2. Logística */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="font-bold uppercase mb-2">Logística Fría</h3>
              <p className="text-sm text-slate-500">
                Entrega a domicilio en unidades refrigeradas. Tu producto llega
                intacto.
              </p>
            </motion.div>

            {/* 3. Personalización */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ChefHat size={32} />
              </div>
              <h3 className="font-bold uppercase mb-2">A la Medida</h3>
              <p className="text-sm text-slate-500">
                ¿Necesitas un grosor específico? Cortamos la carne a la medida
                exacta de tu menú.
              </p>
            </motion.div>

            {/* 4. Estabilidad */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <h3 className="font-bold uppercase mb-2">Estabilidad</h3>
              <p className="text-sm text-slate-500">
                Garantizamos precio y abasto todo el año. Sin sorpresas para tus
                costos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          B. EL CATÁLOGO DE CORTES (TABS)
      -------------------------------------------------------------------------- */}
      <MayoreoCatalog />
      {/* --------------------------------------------------------------------------
          D. PROCESO DE ALTA
      -------------------------------------------------------------------------- */}
      <PasosCompra />

      {/* --------------------------------------------------------------------------
          E. FORMULARIO DE COTIZACIÓN PROFESIONAL
      -------------------------------------------------------------------------- */}
      <section
        id="cotizacion"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-slate-900">
            <div className="p-8 md:p-12 bg-slate-900 text-white text-center">
              <h2 className="text-3xl font-black uppercase">
                Alta de Clientes Nuevos
              </h2>
              <p className="text-slate-400 mt-2">
                Completa el perfil de tu negocio para asignarte un nivel de
                descuento.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nombre Negocio */}
                <div className="col-span-1 md:col-span-2">
                  <label className=" text-xs font-black uppercase text-slate-500 mb-2 flex items-center gap-2">
                    <Package size={14} /> Nombre Comercial del Negocio
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Taquería Los Primos"
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg font-bold text-slate-900 focus:border-slate-900 focus:ring-0 outline-none transition-colors"
                  />
                </div>

                {/* Nombre Contacto */}
                <div>
                  <label className=" text-xs font-black uppercase text-slate-500 mb-2 flex items-center gap-2">
                    <User size={14} /> Nombre del Encargado
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg font-bold text-slate-900 focus:border-slate-900 outline-none transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className=" text-xs font-black uppercase text-slate-500 mb-2">
                    WhatsApp / Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="10 dígitos"
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg font-bold text-slate-900 focus:border-slate-900 outline-none transition-colors"
                  />
                </div>

                {/* Consumo Semanal */}
                <div>
                  <label className=" text-xs font-black uppercase text-slate-500 mb-2 flex items-center gap-2">
                    <TrendingUp size={14} /> Consumo Semanal Estimado
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg font-bold text-slate-900 focus:border-slate-900 outline-none cursor-pointer">
                    <option>Menos de 20 kg</option>
                    <option>20 kg - 50 kg</option>
                    <option>50 kg - 100 kg</option>
                    <option>Más de 100 kg (Precios Preferenciales)</option>
                  </select>
                </div>

                {/* Interés Principal */}
                <div>
                  <label className=" text-xs font-black uppercase text-slate-500 mb-2 flex items-center gap-2">
                    <ClipboardList size={14} /> Producto de Mayor Interés
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg font-bold text-slate-900 focus:border-slate-900 outline-none cursor-pointer">
                    <option>Suadero y Pastor</option>
                    <option>Cortes Finos (Res)</option>
                    <option>Cerdo en Canal / Piezas</option>
                    <option>Pollo Fresco</option>
                    <option>Vísceras</option>
                  </select>
                </div>

                {/* Botón Submit */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-5 rounded-lg font-black uppercase tracking-widest shadow-xl hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Solicitar Cotización Formal
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Tus datos están protegidos. Respuesta en menos de 24 horas
                    hábiles.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mayoreo;
