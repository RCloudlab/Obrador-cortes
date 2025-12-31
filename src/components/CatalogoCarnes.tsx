import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, ChevronRight } from 'lucide-react';

// 1. DEFINIR TIPO DE LAS CLAVES (SOLUCIÓN AL ERROR)
type CategoryKey = 'res' | 'cerdo' | 'pollo' | 'taqueria';

const MayoreoCatalog = () => {
  // 2. APLICAR EL TIPO AL ESTADO
  const [activeTab, setActiveTab] = useState<CategoryKey>('res');

  const categories = {
    res: {
      label: "Res",
      color: "bg-red-600",
      description: "Ganado joven seleccionado. Procesos de maduración controlada.",
      items: [
        { name: "Arrachera Marinada", spec: "Suavizada, marinadosecreta", use: "Parrilladas, Tacos" },
        { name: "Diezmillo", spec: "Con o sin hueso, marmoleo medio", use: "Asados, Estofados" },
        { name: "Bistec Especial", spec: "Pulpa negra/bola, sin nervio", use: "Comedores, Menú diario" },
        { name: "Molida Premium", spec: "Relación 90/10 o 80/20", use: "Hamburguesas, Picadillos" },
        { name: "Rib Eye / New York", spec: "Cortes primarios nacionales", use: "Restaurantes Gama Alta" }
      ]
    },
    cerdo: {
      label: "Cerdo",
      color: "bg-pink-600",
      description: "Cerdo de granja certificado. Carne rosada, firme y sin inyección de agua.",
      items: [
        { name: "Lomo Caña", spec: "Limpio, sin grasa excedente", use: "Adobados, Rellenos" },
        { name: "Pierna", spec: "Con hueso, piel o pulpa limpia", use: "Hornear, Tacos, Carnitas" },
        { name: "Chuleta", spec: "Ahumada o Natural, corte 1cm+", use: "Platillos rápidos" },
        { name: "Tocino Ahumado", spec: "Rebanado estándar o grueso", use: "Desayunos, Hamburguesas" },
        { name: "Costilla", spec: "Cargada o St. Louis", use: "BBQ, Asados" }
      ]
    },
    pollo: {
      label: "Pollo",
      color: "bg-yellow-500",
      description: "Pollo fresco del día (no congelado). Procesado en planta TIF.",
      items: [
        { name: "Pechuga", spec: "Mariposa, Aplanada o con Hueso", use: "Milanesas, Plancha" },
        { name: "Pierna y Muslo", spec: "Con piel/Sin piel", use: "Guisados, Caldos" },
        { name: "Pollo Entero", spec: "Canal limpia, sin vísceras", use: "Rosticerías" },
        { name: "Alitas", spec: "Pica (1 y 2) separada", use: "Snacks, Bares" }
      ]
    },
    taqueria: {
      label: "Especial Taquería",
      color: "bg-slate-900",
      description: "Proveedor de suadero y pastor para taquerías en Morelia.",
      items: [
        { name: "Suadero de Res", spec: "Pecho de res con grasa cobertura", use: "Tacos de Suadero" },
        { name: "Pastor Preparado", spec: "Carne de cerdo laminada + Adobo", use: "Trompos (Listo para montar)" },
        { name: "Tripa de Leche", spec: "Limpia, trenzada o precocida", use: "Tacos dorados" },
        { name: "Longaniza Artesanal", spec: "Receta de la casa, 100% carne", use: "Campechanos" },
        { name: "Cabeza de Res", spec: "Entera o descachetada", use: "Tacos de cabeza" }
      ]
    }
  };

  return (
    <section className="py-24 bg-slate-50 font-sans text-slate-900" id="catalogo-maestro">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">División Industrial</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mt-2">
            Catálogo de <span className="text-red-600">Cortes</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Selecciona una categoría para ver especificaciones técnicas.
          </p>
        </div>

        {/* --- TABS DE NAVEGACIÓN --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(categories).map((rawKey) => {
            // 3. CASTING DE LA CLAVE DENTRO DEL MAP
            // Esto le dice a TS: "Confía en mí, esta string es una clave válida"
            const key = rawKey as CategoryKey;
            
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-sm outline-none
                  ${isActive 
                    ? `${categories[key].color} text-white shadow-lg scale-105` 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                  }
                `}
              >
                {categories[key].label}
              </button>
            );
          })}
        </div>

        {/* --- CONTENIDO DE LA PESTAÑA --- */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className={`p-3 rounded-xl text-white shadow-lg ${categories[activeTab].color}`}>
                  <Info size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2">{categories[activeTab].label}</h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    {categories[activeTab].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {categories[activeTab].items.map((item, idx) => (
                  <div key={idx} className="group flex items-start justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle size={16} className={`shrink-0 ${activeTab === 'taqueria' ? 'text-slate-900' : 'text-red-600'}`} />
                        <h4 className="font-black uppercase text-slate-900 text-lg">{item.name}</h4>
                      </div>
                      <p className="text-sm text-slate-500 pl-6">
                        <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">Presentación:</span> {item.spec}
                      </p>
                    </div>
                    
                    <div className="hidden sm:block text-right">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md group-hover:bg-white group-hover:shadow-sm transition-all">
                        {item.use}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <a href="#cotizacion" className="inline-flex items-center gap-2 text-red-600 font-black uppercase text-sm tracking-widest hover:text-slate-900 transition-colors">
                  Cotizar estos productos <ChevronRight size={18}/>
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default MayoreoCatalog;