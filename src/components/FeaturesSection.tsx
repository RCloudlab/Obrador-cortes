import { motion } from "framer-motion";
import { Award, ShieldCheck, UserCheck } from "lucide-react";

function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-black mb-16 uppercase italic underline decoration-red-600 underline-offset-8">
          Nuestra Atención nos Diferencia
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <UserCheck size={48} />,
              title: "Asesoría Personal",
              desc: "Te ayudamos a elegir el corte ideal para tu evento o negocio.",
            },
            {
              icon: <Award size={48} />,
              title: "Experiencia Michoacana",
              desc: "Conocemos el oficio y respetamos la tradición del buen comer.",
            },
            {
              icon: <ShieldCheck size={48} />,
              title: "Higiene Garantizada",
              desc: "Procesos industriales que cuidan la salud de tu familia.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 border border-slate-700 hover:border-red-600 transition-colors group"
            >
              <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-black mb-3 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-slate-400 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
