import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  ChefHat,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";
import { useEffect, useState } from "react";
import PasosCompra from "../components/PasosCompra";
import MayoreoCatalog from "../components/CatalogoCarnes";
import CotizacionEventos from "../components/carnesComponentes/CotizacionEventos";

const Carnes = () => {
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
          C. PROPUESTA DE VALOR
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
      <MayoreoCatalog />
      <PasosCompra />
      <CotizacionEventos />
    </div>
  );
};

export default Carnes;
