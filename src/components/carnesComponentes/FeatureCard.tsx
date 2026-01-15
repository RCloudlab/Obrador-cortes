/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

function FeatureCard({ icon, title, desc, color, delay }: any) {
  const colorClasses: any = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    green:
      "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    orange:
      "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    red: "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: delay,
      }}
      className="bg-white p-6 rounded-lg shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-shadow duration-300 group border-b-4 border-transparent hover:border-red-600 h-full flex flex-col items-center text-center cursor-default"
    >
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${colorClasses[color]}`}
      >
        {icon}
      </div>
      <h3 className="font-bold uppercase text-slate-800 mb-2 text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default FeatureCard;
