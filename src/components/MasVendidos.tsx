import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import ImagenCloudinary from '../hooks/imageCloudinary'; 

const MasVendidos = () => {
  const products = [
    {
      id: 1,
      name: "Arrachera Marinada",
      category: "Res Premium",
      image: "Prueba-corte", // Cloudinary ID
      price: "Calidad Top"
    },
    {
      id: 2,
      name: "Costilla Cargada",
      category: "Cerdo Fresco",
      image: "Prueba-corte", // Cloudinary ID
      price: "Ideal Asados"
    },
    {
      id: 3,
      name: "Pastor Preparado",
      category: "Especial Taquería",
      image: "Prueba-corte", // Cloudinary ID
      price: "Receta Secreta"
    },
    {
      id: 4,
      name: "Rib Eye Nacional",
      category: "Cortes Finos",
      image: "Prueba-corte", // Cloudinary ID
      price: "Marmoleo Alto"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Encabezado Simple */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Favoritos del Mes</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mt-2">
              Nuestros Cortes <span className="underline decoration-red-600 decoration-4">Estrella</span>
            </h2>
          </div>
          <a href="/mayoreo" className="hidden md:flex items-center gap-2 text-slate-500 font-bold hover:text-red-600 transition-colors uppercase text-sm tracking-widest group">
            Ver Catálogo Completo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>

        {/* Grid Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mb-4">
                {/* Etiqueta Flotante */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-slate-900">
                  <Star size={10} className="fill-yellow-400 text-yellow-400" /> {product.price}
                </div>
                
                {/* Imagen con Zoom al Hover */}
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
                  <ImagenCloudinary 
                    publicId={product.image}
                    anchoDeseado={400}
                    aspectRatio="3:4"
                    altText={`${product.name} venta en Morelia`}
                  />
                </div>
                
                {/* Overlay oscuro al hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              <h3 className="text-xl font-black uppercase text-slate-900 leading-none mb-1 group-hover:text-red-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                {product.category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <a href="/mayoreo" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest">
            Ver Todo el Menú <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};

export default MasVendidos;