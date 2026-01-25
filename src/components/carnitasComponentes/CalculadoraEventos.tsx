import { useState } from "react";
import { Users, MessageCircle, Calculator, Scale, ChefHat, Info } from "lucide-react";
import { motion } from "framer-motion";

const CalculadoraEventos = () => {
  const [invitados, setInvitados] = useState<number>(20);

  // --- FÓRMULAS DE CÁLCULO ---
  const kilosCarne = (invitados * 0.3).toFixed(1); 
  const kilosTortilla = Math.ceil(invitados / 6);
  const litrosSalsa = Math.ceil(invitados / 15);

  // MENSAJE ACTUALIZADO: Menciona que es un estimado y pide cotización/ajuste
  const whatsappMessage = `Hola Obrador Cortés! Tengo una reunión para ${invitados} personas. Según su calculadora necesito un estimado de ${kilosCarne}kg de Carnitas. ¿Podemos cotizar y ajustar cantidades si es necesario?`;
  const whatsappLink = `https://wa.me/524436721870?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative py-24 bg-red-700 text-white overflow-hidden font-sans">
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="absolute top-0 right-0 p-12 opacity-5 transform rotate-12 pointer-events-none">
        <Calculator size={300} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* --- COLUMNA IZQUIERDA --- */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div>
            <span className="inline-flex items-center gap-2 py-1 px-4 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-red-800/50 backdrop-blur-sm">
               <ChefHat size={14} /> Hazlo tu mismo
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-4">
              ¿Fiesta en Puerta? <br/>
              <span className="text-slate-900">Calcula tu Pedido</span>
            </h2>
            <p className="text-red-100 text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Olvídate de las cuentas complicadas. Dinos cuántos invitados tienes y obtén un estimado de cuántos kilos necesitas para quedar bien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-4 bg-red-800/30 p-4 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-white text-red-700 flex items-center justify-center shadow-lg shrink-0">
                <Scale size={20} />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-sm">Cálculo Inteligente</p>
                <p className="text-xs text-red-200">Basado en porciones estándar</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-red-800/30 p-4 rounded-xl border border-white/10">
               <div className="w-10 h-10 rounded-full bg-white text-red-700 flex items-center justify-center shadow-lg shrink-0">
                <Users size={20} />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-sm">Para todo Evento</p>
                <p className="text-xs text-red-200">Desde 10 hasta 500 personas</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: CALCULADORA --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 w-full bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl relative"
        >
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-900">
                <Calculator size={24} />
            </div>
            <h3 className="text-xl font-black uppercase text-slate-900">
              Calculadora de Carnitas
            </h3>
          </div>

          {/* Input Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
                <label className="font-bold text-slate-500 text-sm uppercase tracking-wide">Número de Invitados:</label>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <Users size={18} className="text-red-600" />
                    <span className="text-2xl font-black text-slate-900 min-w-[3ch] text-center">{invitados}</span>
                </div>
            </div>
            
            <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={invitados}
                onChange={(e) => setInvitados(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-700 transition-all"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>10 Personas</span>
                <span>200 Personas</span>
            </div>
          </div>

          {/* Resultados Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Carnitas */}
            <div className="bg-red-50 p-4 rounded-xl text-center border border-red-100 flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-red-800 uppercase mb-1">Carnitas</span>
                {/* Se agrega "~" para denotar aproximado visualmente */}
                <span className="text-2xl md:text-3xl font-black text-red-600">~{kilosCarne}</span>
                <span className="text-xs font-medium text-red-400">Kilos Aprox.</span>
            </div>
            {/* Tortillas */}
             <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-slate-500 uppercase mb-1">Tortillas</span>
                <span className="text-2xl md:text-3xl font-black text-slate-900">~{kilosTortilla}</span>
                <span className="text-xs font-medium text-slate-400">Kilos Aprox.</span>
            </div>
            {/* Salsa */}
             <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-slate-500 uppercase mb-1">Salsa</span>
                <span className="text-2xl md:text-3xl font-black text-slate-900">~{litrosSalsa}</span>
                <span className="text-xs font-medium text-slate-400">Litros Aprox.</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 font-black uppercase tracking-widest rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-200 hover:-translate-y-1 group"
          >
            <MessageCircle size={22} className="group-hover:animate-bounce" />
            Cotizar Estimado
          </a>

          {/* NOTA ACTUALIZADA (DISCLAIMER) */}
          <div className="mt-4 flex gap-2 items-start justify-center bg-slate-50 p-3 rounded-lg border border-slate-100">
             <Info size={16} className="text-slate-400 shrink-0 mt-0.5"/>
             <p className="text-[10px] text-slate-500 text-center leading-tight font-medium">
                * Este cálculo es aproximado. Le recomendamos <strong>revisar y ajustar las cantidades finales</strong> con nuestro equipo al momento de realizar su cotización.
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CalculadoraEventos;