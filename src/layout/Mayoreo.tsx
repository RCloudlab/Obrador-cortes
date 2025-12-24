import { motion } from 'framer-motion';
import ImagenCloudinary from '../hooks/imageCloudinary';

const Mayoreo = () => (
  <motion.div 
    initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
    className="py-20"
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <ImagenCloudinary 
           publicId="Taco_pastorMMM_a9vjpo"
            anchoDeseado={800} 
            aspectRatio="16:9"
            altText="Procesos industriales"
            className="rounded shadow-xl border-l-8 border-black"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-black text-slate-900 leading-none mb-6">ALIANZA PARA <br /><span className="text-red-600">RESTAURANTES Y NEGOCIOS</span></h2>
          <p className="text-slate-600 text-lg mb-8">
            En **Obrador Cortés** entendemos que tu negocio no puede detenerse. Ofrecemos precios competitivos de industrializadora con la calidad de una carnicería boutique.
          </p>
          <ul className="space-y-4 font-bold text-slate-800 uppercase text-sm">
             <li className="flex gap-4 items-center border-b pb-2"><div className="w-4 h-4 bg-red-600 rotate-45"></div> Surtido diario programado</li>
             <li className="flex gap-4 items-center border-b pb-2"><div className="w-4 h-4 bg-black rotate-45"></div> Facturación y precios de mayoreo</li>
             <li className="flex gap-4 items-center border-b pb-2"><div className="w-4 h-4 bg-red-600 rotate-45"></div> Cortes específicos por gramaje</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);
export default Mayoreo;