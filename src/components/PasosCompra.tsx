import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, User, FileText, Truck, Check } from 'lucide-react';

const PasosCompra = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Contacto Inicial",
      description: "Déjanos tus datos fiscales y consumo estimado. Un ejecutivo te contactará en menos de 24 horas.",
      image: "https://www.entornoturistico.com/wp-content/uploads/2022/01/Mujer-agente-de-viajes-haciendo-cotizacio%CC%81n.jpg",
      icon: <User strokeWidth={2} />,
      buttonText: "Siguiente"
    },
    {
      id: 2,
      title: "Cotización Formal",
      description: "Recibe tu propuesta personalizada con precios de mayoreo ajustados a tu volumen de compra.",
      image: "https://thumbs.dreamstime.com/b/un-mostrador-con-carne-cruda-dentro-de-la-carnicer%C3%ADa-almac%C3%A9n-saludable-muchas-piezas-frescas-en-nevera-negocio-venta-193062148.jpg",
      icon: <FileText strokeWidth={2} />,
      buttonText: "Siguiente"
    },
    {
      id: 3,
      title: "Entrega Programada",
      description: "Coordinamos la logística en frío para llevar el producto hasta la puerta de tu negocio.",
      image: "https://tienda.instintocarnivoro.com/wp-content/uploads/2024/04/imagen-entrega-en-casa-Instinto-Carnivoro.jpg",
      icon: <Truck strokeWidth={2} />,
      buttonText: "Ir al Formulario"
    }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      const formElement = document.getElementById('cotizacion');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const textVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 20 : -20, opacity: 0 })
  };

  return (
    <section className="py-12 md:py-20 bg-slate-950 flex items-center justify-center p-4">
      
      {/* --- CONTENEDOR PRINCIPAL (TARJETA GRANDE) --- */}
      <div className="w-full max-w-6xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row min-h-[600px]">
        
        {/* --- COLUMNA IZQUIERDA: CONTENIDO Y WIZARD --- */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
          
          {/* 1. Header Fijo */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Comienza tu pedido
            </h2>
            <p className="text-slate-400">Sigue los pasos para obtener el mejor precio.</p>
          </div>

          {/* 2. Área Central (Wizard + Texto Dinámico) */}
          <div className="py-10">
            
            {/* Barra de Progreso */}
            <div className="relative flex items-center justify-between mb-12 px-2">
               {/* Línea gris fondo */}
               <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-0 rounded-full"></div>
               {/* Línea roja progreso */}
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
                        backgroundColor: isActive || isCompleted ? "#DC2626" : "#0f172a", // Rojo o Slate Dark
                        borderColor: isActive ? "#ef4444" : "#1e293b",
                        scale: isActive ? 1.1 : 1
                      }}
                      className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center transition-colors duration-300
                        ${isActive || isCompleted ? 'text-white' : 'text-slate-500 bg-slate-900'}
                      `}
                    >
                      {isCompleted ? <Check size={18} strokeWidth={3} /> : <div className="p-1">{step.icon}</div>}
                    </motion.div>
                  )
               })}
            </div>

            {/* Texto Dinámico */}
            <div className="min-h-[120px]">
              <AnimatePresence custom={direction} mode='wait'>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {steps[currentStep - 1].title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {steps[currentStep - 1].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 3. Footer: Botones */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
             <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors font-medium ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
             >
                <ChevronLeft size={20} /> Atrás
             </button>

             <button 
                onClick={handleNext}
                className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-900/20 flex items-center gap-2 group"
             >
                {steps[currentStep - 1].buttonText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
             </button>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: IMAGEN --- */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden order-first lg:order-last">
          {/* Overlay gradiente para que el texto resalte si decides poner algo encima */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10 lg:hidden"></div>
          
          <motion.img 
            key={currentStep} // Cambiar key para animar la imagen sutilmente si quisieras cambiar de foto por paso
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src={steps[currentStep - 1].image}
            alt="Logística y Frescura" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Detalle visual sobre la imagen (opcional) */}
          <div className="absolute bottom-8 left-8 right-8 z-20 hidden lg:block">
            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50 inline-flex items-center gap-4">
              <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                <Check size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Garantía de Frescura</p>
                <p className="text-slate-400 text-xs">Transporte certificado</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PasosCompra;