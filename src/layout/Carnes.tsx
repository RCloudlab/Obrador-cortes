import { motion } from "framer-motion";
import { ShieldCheck, Truck, ChefHat, TrendingUp } from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";
import { useEffect, useState } from "react";
import PasosCompra from "../components/PasosCompra";
import MayoreoCatalog from "../components/CatalogoCarnes";
import CotizacionEventos from "../components/carnesComponentes/CotizacionEventos";
import FeatureCard from "../components/carnesComponentes/FeatureCard";

const Carnes = () => {
  const imageDesktopId = "DSC03770_amuxm9";
  const imageMobileId = "DSC03814_my2wu4_mobile";

  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsDesktop(e.matches);
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
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900/90 to-transparent z-20"></div>

          {isDesktop ? (
            <ImagenCloudinary
              publicId={imageDesktopId}
              anchoDeseado={1520}
              aspectRatio="16:9" 
              altText="Cortes de carne premium"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <ImagenCloudinary
              publicId={imageMobileId}
              anchoDeseado={800}
              altText="Cortes de carne premium"
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="py-1 px-3 border border-red-500/50 bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase inline-block mb-4 rounded">
              División Industrial
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-none mb-6 tracking-tight shadow-black drop-shadow-lg">
              Suministro Confiable <br /> para la{" "}
              <span className="text-red-500">Gastronomía</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          C. PROPUESTA DE VALOR (OVERLAPPING SECTION)
      -------------------------------------------------------------------------- */}
      <section className="relative z-30 -mt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Inocuidad Total"
              desc="Procesos tipo TIF garantizados. Higiene absoluta."
              color="blue"
              delay={0}
            />
            <FeatureCard
              icon={<Truck size={32} />}
              title="Logística Fría"
              desc="Cadena de frío ininterrumpida hasta tu cocina."
              color="green"
              delay={0}
            />
            <FeatureCard
              icon={<ChefHat size={32} />}
              title="Cortes a Medida"
              desc="Porcionado exacto para el control de tus costos."
              color="orange"
              delay={0}
            />
            <FeatureCard
              icon={<TrendingUp size={32} />}
              title="Precio Estable"
              desc="Garantía de abasto y precio competitivo todo el año."
              color="red"
              delay={0}
            />
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
