import { motion } from "framer-motion";
import { UtensilsCrossed, Home, Truck, ArrowRight } from "lucide-react";

function Services() {
  return (
    <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <a
          href="/carnitas"
          className="group relative bg-red-600 text-white p-8 shadow-xl hover:shadow-2xl hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          <UtensilsCrossed className="absolute -right-4 -bottom-4 w-32 h-32 text-red-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
          <div>
            <div className="flex justify-between items-start">
              <span className="block text-xs uppercase font-bold tracking-widest opacity-80 mb-2">
                Antojo Directo
              </span>
              <UtensilsCrossed className="w-6 h-6 opacity-80" />
            </div>
            <h3 className="text-3xl font-black uppercase leading-none mb-2">
              Carnitas Hoy
            </h3>
            <p className="text-red-100 text-sm font-medium opacity-90">
              Recién hechas, con tortillas y salsa.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <span>Ordenar</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Línea animada */}
          <div className="absolute bottom-0 left-0 h-1.5 w-12 bg-white group-hover:w-full transition-all duration-300"></div>
        </a>

        {/* TARJETA 2: HOGAR (Blanco) */}
        <a
          href="/cortes"
          className="group relative bg-white text-slate-900 p-8 shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-2  flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start">
              <span className="block text-xs uppercase font-bold tracking-widest text-slate-500 mb-2">
                Para el Hogar
              </span>
              <Home className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-3xl font-black uppercase leading-none mb-2">
              Cortes Finos
            </h3>
            <p className="text-slate-600 text-sm font-medium">
              Calidad premium para tu parrillada.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
            <span>Ver Catálogo</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Línea animada */}
          <div className="absolute bottom-0 left-0 h-1.5 w-12 bg-slate-900 group-hover:w-full transition-all duration-300 mb-[-4px]"></div>
        </a>

        {/* TARJETA 3: NEGOCIOS (Negro) */}
        <a
          href="/mayoreo"
          className="group relative bg-slate-950 text-white p-8 shadow-xl hover:shadow-2xl hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          <Truck className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-800 opacity-30 rotate-12 group-hover:scale-110 transition-transform duration-500" />

          <div>
            <div className="flex justify-between items-start">
              <span className="block text-xs uppercase font-bold tracking-widest text-red-500 mb-2">
                Negocios
              </span>
              <Truck className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-3xl font-black uppercase leading-none mb-2">
              Mayoreo
            </h3>
            <p className="text-slate-400 text-sm font-medium">
              Precios especiales para restaurantes.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500">
            <span>Cotizar</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Línea animada */}
          <div className="absolute bottom-0 left-0 h-1.5 w-12 bg-red-600 group-hover:w-full transition-all duration-300"></div>
        </a>
      </motion.div>
    </section>
  );
}

export default Services;
