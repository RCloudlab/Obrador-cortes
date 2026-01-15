import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  MessageSquare,
  Scale,
  Truck,
  Check,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";

const PasosCompra = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const PHONE_NUMBER = "524436721870";

  const steps = [
    {
      id: 1,
      title: "1. Tu Lista de Pedido",
      description:
        "Escríbenos por WhatsApp o formulario. Dinos qué cortes necesitas (res, cerdo, pollo) o si buscas carnitas por mayoreo.",
      publicId: "step1_vlfctu", // <--- ID en Cloudinary
      icon: <MessageSquare strokeWidth={2} />,
      buttonText: "Siguiente",
    },
    {
      id: 2,
      title: "2. Pesaje y Cotización",
      description:
        "Preparamos tu cotización basada en el peso real y aplicamos los descuentos por volumen exclusivos para negocios.",
      publicId: "step2_tkyni6", // <--- ID en Cloudinary
      icon: <Scale strokeWidth={2} />,
      buttonText: "Siguiente",
    },
    {
      id: 3,
      title: "3. Entrega en Frío",
      description:
        "Programamos la ruta. Tu carne viaja en condiciones óptimas para llegar fresca hasta la puerta de tu local o evento.",
      publicId: "step3_k7uuar", // <--- ID en Cloudinary
      icon: <Truck strokeWidth={2} />,
      buttonText: "Hacer Pedido",
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      // Si no es el último paso, avanza
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      // SI ES EL ÚLTIMO PASO (3), MANDA A WHATSAPP
      const message = "Hola, ya vi los pasos de compra y quiero realizar un pedido. ¿Me pueden atender?";
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, "_blank");
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const textVariants = {
    enter: (direction:number) => ({ x: direction > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction:number) => ({ x: direction < 0 ? 20 : -20, opacity: 0 })
  };

  return (
    <section className="py-12 md:py-20 bg-slate-950 flex items-center justify-center p-4">
      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="w-full max-w-6xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row min-h-[600px]">
        {/* --- COLUMNA IZQUIERDA --- */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 tracking-tight">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-slate-400 font-medium">
              Surte tu negocio en 3 pasos sencillos.
            </p>
          </div>

          <div className="py-10">
            {/* Barra de Progreso */}
            <div className="relative flex items-center justify-between mb-12 px-2">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-0 rounded-full"></div>
              <motion.div
                className="absolute top-1/2 left-0 h-1 bg-red-600 -z-0 rounded-full origin-left"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {steps.map((step) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                return (
                  <motion.div
                    key={step.id}
                    animate={{
                      backgroundColor:
                        isActive || isCompleted ? "#DC2626" : "#0f172a",
                      borderColor: isActive ? "#ef4444" : "#1e293b",
                      scale: isActive ? 1.1 : 1,
                    }}
                    className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center transition-colors duration-300
                       ${
                         isActive || isCompleted
                           ? "text-white"
                           : "text-slate-500 bg-slate-900"
                       }
                     `}
                  >
                    {isCompleted ? (
                      <Check size={18} strokeWidth={3} />
                    ) : (
                      <div className="p-1">{step.icon}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Texto Dinámico */}
            <div className="min-h-[120px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">
                    {steps[currentStep - 1].title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-light">
                    {steps[currentStep - 1].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Botones */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
             <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
             >
                <ChevronLeft size={16} /> Atrás
             </button>

             <button 
                onClick={handleNext}
                className={`
                  px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-2 group hover:scale-105
                  ${currentStep === 3 
                    ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-900/20' // Estilo verde WhatsApp para el último paso
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-red-900/20'}
                `}
             >
                {steps[currentStep - 1].buttonText}
                {/* Cambiamos el icono si es el último paso */}
                {currentStep === 3 ? (
                  <MessageSquare size={16} className="group-hover:-rotate-12 transition-transform"/>
                ) : (
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                )}
             </button>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: IMAGEN (Con ImagenCloudinary) --- */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden order-first lg:order-last">
          {/* Gradiente decorativo */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 lg:bg-gradient-to-l lg:from-slate-900/0 lg:via-slate-900/10 lg:to-slate-900 pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Aquí implementamos tu componente */}
              <ImagenCloudinary
                publicId={steps[currentStep - 1].publicId}
                anchoDeseado={800} // Resolución alta para desktop
                aspectRatio="4:5" // Formato vertical que llena bien el espacio
                altText={steps[currentStep - 1].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PasosCompra;
