import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { beefCategories } from '../constants/menu';
import ImagenCloudinary from '../hooks/imageCloudinary';

type CategoryKey = 'parrilla' | 'diario' | 'negocio';

const MayoreoCatalog = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('parrilla');

  return (
    <section className="py-24 bg-slate-50 font-sans text-slate-900" id="catalogo-maestro">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
            División Res
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mt-4">
            Catálogo <span className="text-red-700">Visual</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Calidad TIF a la vista. Selecciona una categoría para ver el producto real.
          </p>
        </div>

        {/* --- TABS (Igual que antes) --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(beefCategories).map((rawKey) => {
            const key = rawKey as CategoryKey;
            const category = beefCategories[key];
            const isActive = activeTab === key;
            const Icon = category.icon; 
            
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-sm outline-none border-2
                  ${isActive 
                    ? `border-red-600 bg-red-600 text-white shadow-red-200 shadow-xl transform -translate-y-1` 
                    : 'border-transparent bg-white text-slate-500 hover:bg-slate-100 hover:border-slate-200'
                  }
                `}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* --- CONTENIDO CON IMÁGENES --- */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-10"
            >
              {/* Encabezado simple */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                {/* 1. Contenedor del Icono Grande */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-100 ${beefCategories[activeTab].color}`}>
                   {(() => {
                      const Icon = beefCategories[activeTab].icon;
                      return <Icon size={40} strokeWidth={1.5} />;
                   })()}
                </div>

                {/* 2. Textos de la Categoría */}
                <div>
                  <h3 className="text-2xl font-black uppercase text-slate-900 mb-2">
                    {beefCategories[activeTab].label}
                  </h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    {beefCategories[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Grid de Productos - Diseño Tarjeta Horizontal */}
              <div className="grid md:grid-cols-2 gap-6">
                {beefCategories[activeTab].items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                  >
                    {/* COLUMNA IZQUIERDA: IMAGEN */}
                    <div className="w-1/3 relative bg-slate-100 overflow-hidden">
                        {/* Usamos tu componente ImagenCloudinary */}
                        <div className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                             <ImagenCloudinary 
                                publicId={item.imgId}
                                anchoDeseado={300} // Optimizamos el tamaño
                                altText={`Corte de carne ${item.name}`}
                                aspectRatio="1:1" // Cuadrado para uniformidad
                                className="w-full h-full object-cover"
                             />
                        </div>
                        {/* Overlay sutil rojo al hacer hover */}
                        <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300"></div>
                    </div>

                    {/* COLUMNA DERECHA: INFO */}
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-black uppercase text-slate-900 text-lg leading-tight group-hover:text-red-700 transition-colors">
                            {item.name}
                        </h4>
                      </div>
                      
                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                        <span className="font-bold text-slate-700">Espec:</span> {item.spec}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                         <span className="inline-block px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">
                            {item.use}
                         </span>
                         <CheckCircle size={16} className="text-slate-200 group-hover:text-red-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 text-right">
                <a href="#cotizacion" className="inline-flex items-center gap-2 text-red-600 font-black uppercase text-sm tracking-widest hover:text-slate-900 transition-colors group">
                  Solicitar cotización de {beefCategories[activeTab].label} 
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
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
