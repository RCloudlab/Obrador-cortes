import React from "react";

function ListaCategoria({
  titulo,
  subtitulo,
  icono: Icono,
  items,
}: {
  titulo: string;
  subtitulo: string;
  icono: React.ElementType;
  items: { nombre: string; desc: string }[];
}) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-red-600/50 transition-colors h-full">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-red-600 p-2 rounded-lg">
          <Icono size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-bold uppercase text-white tracking-wide">
          {titulo}
        </h3>
      </div>
      {subtitulo && (
        <p className="text-red-400 text-xs font-bold uppercase mb-6 pl-11">
          {subtitulo}
        </p>
      )}
      {!subtitulo && <div className="mb-6"></div>}

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start text-slate-300 text-sm border-b border-slate-700/50 pb-2 last:border-0"
          >
            <span className="font-medium text-base">{item.nombre}</span>
            {item.desc && (
              <span className="text-slate-500 text-xs text-right max-w-[45%] italic">
                {item.desc}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaCategoria;
