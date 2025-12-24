import ImagenCloudinary from "../hooks/imageCloudinary";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
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
      if (mq.removeEventListener) mq.removeEventListener("change", handler as never);
      else mq.removeListener(handler as never);
    };
  }, []);

  return (
    <section className="relative min-h-[600px] h-[80vh] md:h-[90vh] bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
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

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:from-black/60 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl border-l-4 md:border-l-8 border-red-600 pl-4 md:pl-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase">
            Pasión por la <br />
            <span className="text-red-600">Carne</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-xl mt-4 md:mt-6 font-light uppercase tracking-[0.2em] max-w-sm md:max-w-none">
            Calidad Michoacana en cada corte.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;