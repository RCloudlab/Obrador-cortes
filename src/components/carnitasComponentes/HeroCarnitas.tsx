import { useEffect, useState } from "react";
import ImagenCloudinary from "../../hooks/imageCloudinary";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function HeroCarnitas() {
  const whatsappLink =
    "https://wa.me/524436721870?text=Hola,%20quisiera%20pedir%20carnitas...";
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative min-h-[600px] h-[80vh] md:h-[90vh] bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0">
        {isDesktop ? (
          <ImagenCloudinary
            publicId="carnitasCazoHero"
            anchoDeseado={1920}
            aspectRatio="16:9" // Horizontal para escritorio
            altText="Carnitas michoacanas preparándose en cazo de cobre tradicional en Morelia"
            className="absolute inset-0 w-full h-full object-cover animate-pulse-slow z-0"
          />
        ) : (
          <ImagenCloudinary
            publicId="carnitasCazoHero"
            anchoDeseado={800}
            aspectRatio="3:4" // 2. CAMBIO IMPORTANTE: Vertical para móvil (Cloudinary hará el crop inteligente)
            altText="Carnitas michoacanas preparándose en cazo de cobre tradicional en Morelia"
            className="absolute inset-0 w-full h-full object-cover animate-pulse-slow z-0"
          />
        )}
      </div>

      {/* Contenido */}
      <motion.div
        initial={{ x: -30, opacity: 0 }} // Movimiento más sutil para móvil
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* 3. TIPOGRAFÍA RESPONSIVE: text-4xl en móvil -> text-7xl en desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase text-white leading-[1.1] mb-4 drop-shadow-2xl">
          Las mejores <span className="text-red-500">Carnitas</span> <br />
          en{" "}
          <span className="underline decoration-red-600 decoration-4 underline-offset-4">
            Morelia
          </span>
        </h1>
        
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium max-w-xl mb-8 leading-relaxed">
          Doraditas por fuera, suaves por dentro. Receta tradicional cocinada
          diariamente en cazo de cobre.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 4. BOTÓN RESPONSIVE: w-full en móvil */}
          <a
            href={whatsappLink}
            className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2 text-sm md:text-base rounded-sm"
          >
            Pedir Ahora <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroCarnitas;