import { motion } from "framer-motion";

function TableServices() {
  return (
    <section className="py-20 bg-slate-50">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {/* Columna Carnitas */}
          <div className="bg-white p-12 hover:bg-red-50 transition-colors">
            <h3 className="text-3xl font-black uppercase mb-4 text-red-600 tracking-tighter">
              Carnitas Obrador
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex justify-between border-b pb-2 italic">
                <span>Venta por kilo y tacos</span> <strong>Diario</strong>
              </li>
              <li className="flex justify-between border-b pb-2 italic">
                <span>Servicio para eventos</span> <strong>Bajo pedido</strong>
              </li>
              <li className="flex justify-between border-b pb-2 italic">
                <span>Horario de Carnitas</span>{" "}
                <strong>8:00 AM - 3:00 PM</strong>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-500 uppercase font-bold tracking-widest">
              Las mejores carnitas en Morelia
            </p>
          </div>
          {/* Columna Carnicería */}
          <div className="bg-white p-12 hover:bg-slate-900 hover:text-white transition-all group">
            <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-red-500 tracking-tighter">
              Carnicería Profesional
            </h3>
            <p className="mb-4 font-bold uppercase text-xs tracking-widest opacity-70">
              Mayoreo y Menudeo de:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Res Premium",
                "Cerdo Fresco",
                "Pollo",
                "Cortes para Taquería",
                "Catering Industrial",
              ].map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 group-hover:bg-slate-800 text-[10px] font-black uppercase tracking-tighter"
                >
                  {i}
                </span>
              ))}
            </div>
            <p className="text-sm italic opacity-80">
              Proveedores oficiales de restaurantes y comedores industriales en
              toda la región.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default TableServices;
