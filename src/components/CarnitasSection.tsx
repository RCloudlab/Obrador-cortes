import { motion } from "framer-motion";
import ImagenCloudinary from "../hooks/imageCloudinary";

function CarnitasSection() {
  return (
    <section id="carnitas" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
        >
          <span className="text-red-600 font-black text-xl uppercase tracking-tighter italic">
            La joya de la casa
          </span>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase">
            Carnitas <br />
            Obrador
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Nuestra receta tradicional michoacana es el pilar de nuestra
            identidad. No solo vendemos carne, servimos una experiencia que ha
            unido familias por generaciones.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 border-b-4 border-red-600">
              <span className="block text-3xl font-black text-red-600">
                100%
              </span>
              <span className="text-xs font-bold uppercase">Calidad Cerdo</span>
            </div>
            <div className="bg-slate-50 p-6 border-b-4 border-black">
              <span className="block text-3xl font-black text-black">
                DIARIO
              </span>
              <span className="text-xs font-bold uppercase">
                Frescura Total
              </span>
            </div>
          </div>
        </motion.div>
        <div className="relative">
          <ImagenCloudinary
            publicId="Taco_pastorMMM_a9vjpo"
            anchoDeseado={800}
            aspectRatio="4:5"
            altText="Carnitas Obrador"
            className="rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -left-6 bg-red-600 w-full h-full -z-10 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

export default CarnitasSection;
