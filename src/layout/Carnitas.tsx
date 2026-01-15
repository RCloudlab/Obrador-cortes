import {
  Utensils,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroCarnitas from "../components/carnitasComponentes/HeroCarnitas";
import MenuAntojo from "../components/carnitasComponentes/MenuAntojo";
import MenuExtendido from "../components/carnitasComponentes/MenuExtendido";
import FeaturesCarnitas from "../components/carnitasComponentes/FeatureCarnitas";

const Carnitas = () => {
  const whatsappLink =
    "https://wa.me/524436721870?text=Hola,%20quisiera%20pedir%20carnitas...";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <HeroCarnitas />

      {/* DIRECTO DEL OBRADOR (Sin cambios en imágenes aquí) */}
      <FeaturesCarnitas />

      {/* EL MENÚ DEL ANTOJO */}
      <MenuAntojo />
      
      {/* TABLA DE PRECIOS / PAQUETES (Sin cambios en imágenes aquí) */}
      <MenuExtendido />

      {/* SERVICIO PARA EVENTOS (Sin cambios en imágenes aquí) */}
      <section className="relative py-24 bg-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-red-800">
              ¿Tienes una fiesta?
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Llevamos el sabor a tu{" "}
              <span className="text-slate-900">Evento</span>
            </h2>
            <p className="text-red-100 text-lg mb-8 font-medium">
              Bodas, XV años, bautizos o reuniones empresariales. Nosotros
              ponemos las carnitas, las tortillas calientes y el servicio. Tú
              disfruta la fiesta.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <span className="font-bold uppercase tracking-wide">
                  Disponibilidad todo el año
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center">
                  <Utensils size={20} />
                </div>
                <span className="font-bold uppercase tracking-wide">
                  Calidad 100% garantizada
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-white text-slate-900 p-8 shadow-2xl rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-2xl font-black uppercase text-center mb-2">
              Cotiza tu Taquiza
            </h3>
            <p className="text-center text-slate-500 text-xs mb-6 uppercase tracking-widest">
              Respuesta en menos de 1 hora
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 font-black uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg"
            >
              Enviar WhatsApp
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4">
              Atendemos eventos en todo Morelia y alrededores.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Carnitas;
