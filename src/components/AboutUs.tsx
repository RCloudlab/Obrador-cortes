import { motion } from "framer-motion";
import ImagenCloudinary from "../hooks/imageCloudinary";

function AboutUs() {
  return (
    <section className="py-24 bg-white overflow-hidden mb-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="relative">
          <ImagenCloudinary
            publicId="Taco_pastorMMM_a9vjpo"
            anchoDeseado={800}
            aspectRatio="1:1"
            altText="Instalaciones Obrador Cortés"
            className="rounded-none border-l-8 border-red-600 shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 hidden md:block">
            <p className="text-4xl font-black italic">+20 Años</p>
            <p className="text-xs uppercase tracking-widest">
              De Tradición Michoacana
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-6 leading-none">
            La mejor carnicería en <span className="text-red-600">Morelia</span>
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            En Obrador Cortés, nuestra historia se escribe con calidad. Nacimos
            con el compromiso de llevar la excelencia del rastro a su mesa. Como
            expertos en Industrializadora Michoacana de Carne, controlamos cada
            paso del proceso: desde la selección minuciosa en origen hasta el
            corte final.
          </p>
          <p className="text-lg text-slate-700 font-bold italic border-l-4 border-red-600 pl-4">
            "Nuestra receta secreta de carnitas y el manejo impecable de la
            carne nos han convertido en el referente de frescura y sabor en
            Morelia."
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
