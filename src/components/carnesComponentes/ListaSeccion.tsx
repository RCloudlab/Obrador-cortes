import React from 'react'

function ListaSeccion({ titulo, icono: Icono, items, colorIcono = "bg-red-600" }: {
  titulo: string;
  icono: React.ComponentType<{ size?: number; className?: string }>;
  items: { nombre: string; uso: string }[];
  colorIcono?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
        <div className={`${colorIcono} p-2.5 rounded-lg text-white`}>
          <Icono size={22} />
        </div>
        <h3 className="text-xl font-black uppercase text-slate-800 tracking-tight">
          {titulo}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center text-slate-600 text-sm">
            <span className="font-bold text-slate-700">{item.nombre}</span>
            {item.uso && <span className="text-[10px] uppercase bg-slate-100 px-2 py-0.5 rounded text-slate-400 font-bold">{item.uso}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListaSeccion