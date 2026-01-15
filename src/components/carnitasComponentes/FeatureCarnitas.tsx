import { motion } from "framer-motion";
import { Flame, CheckCircle, Clock } from "lucide-react";

const FeaturesCarnitas = () => {
  // Variantes para la aparición escalonada de las tarjetas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Retraso entre cada elemento
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Convertimos el grid en motion.div para coordinar la entrada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* --------------------------------------------------
              ITEM 1: CAZO DE COBRE (Animación de Fuego)
             -------------------------------------------------- */}
          <motion.div
            variants={itemVariants}
            className="p-6 group cursor-default"
          >
            <motion.div
              // El círculo de fondo crece suavemente
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600"
            >
              {/* El ícono vibra como fuego al hacer hover */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -5, 5, 0], // Efecto "wiggle"
                  transition: { duration: 0.5 },
                }}
              >
                <Flame size={32} strokeWidth={2} />
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-black uppercase mb-2 group-hover:text-red-600 transition-colors">
              Cazo de Cobre
            </h3>
            <p className="text-slate-500 text-sm">
              El secreto del sabor y color auténtico michoacano. Nada de
              imitaciones.
            </p>
          </motion.div>

          {/* --------------------------------------------------
              ITEM 2: SIN INTERMEDIARIOS (Animación Pop + Badge)
             -------------------------------------------------- */}
          <motion.div
            variants={itemVariants}
            className="p-6 relative group cursor-default"
          >
            {/* Badge Flotante Animado */}
            <motion.div
              animate={{ y: [0, -5, 0] }} // Flota arriba y abajo continuamente
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg z-10"
            >
              Nuestro Secreto
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#1e293b" }} // slate-800 un poco más claro
              className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white transition-colors"
            >
              <motion.div
                whileHover={{ scale: [1, 1.4, 1.2] }} // Efecto latido (Heartbeat)
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={32} strokeWidth={2} />
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-black uppercase mb-2 group-hover:text-slate-800 transition-colors">
              Sin Intermediarios
            </h3>
            <p className="text-slate-500 text-sm">
              Somos productores. La carne viene directa de nuestro propio
              obrador industrial a tu plato.{" "}
              <strong className="text-red-600">Frescura imbatible.</strong>
            </p>
          </motion.div>

          {/* --------------------------------------------------
              ITEM 3: HECHAS DIARIO (Animación Reloj)
             -------------------------------------------------- */}
          <motion.div
            variants={itemVariants}
            className="p-6 group cursor-default"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600"
            >
              {/* El reloj gira una vuelta completa al hacer hover */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Clock size={32} strokeWidth={2} />
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-black uppercase mb-2 group-hover:text-red-600 transition-colors">
              Hechas Diario
            </h3>
            <p className="text-slate-500 text-sm">
              Comenzamos de madrugada para que disfrutes el mejor sabor en tu
              desayuno o comida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCarnitas;
