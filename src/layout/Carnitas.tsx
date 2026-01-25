import { motion } from "framer-motion";
import HeroCarnitas from "../components/carnitasComponentes/HeroCarnitas";
import MenuAntojo from "../components/carnitasComponentes/MenuAntojo";
import MenuExtendido from "../components/carnitasComponentes/MenuExtendido";
import FeaturesCarnitas from "../components/carnitasComponentes/FeatureCarnitas";
import CalculadoraEventos from "../components/carnitasComponentes/CalculadoraEventos";

const Carnitas = () => {

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
      <CalculadoraEventos />
    </motion.div>
  );
};

export default Carnitas;
