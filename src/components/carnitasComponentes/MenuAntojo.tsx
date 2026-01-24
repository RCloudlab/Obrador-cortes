import ImagenCloudinary from "../../hooks/imageCloudinary";
import { Flame } from "lucide-react";

function MenuAntojo() {
  const generarLinkWhatsApp = (producto: string) => {
    const numeroTelefono = "524436721870";
    const mensaje = `Hola, me interesa hacer un pedido de: ${producto}. ¿Me dan informes?`;
    return `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
  };

  return (
    <section id="menu" className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">
          El Menú del Antojo
        </h2>
        <p className="text-slate-500 mt-2 font-medium">
          ¿De qué te vas a echar tu taco hoy?
        </p>
      </div>

      {/* Grid de Productos */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Tarjeta 1: Maciza */}
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
          {/* Imagen reducida a h-48 */}
          <div className="h-48 overflow-hidden relative">
            <ImagenCloudinary
              publicId="maciza"
              anchoDeseado={600}
              aspectRatio="16:9"
              altText="Taco de maciza"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase z-10 shadow-sm">
              Favorito
            </span>
          </div>

          {/* Padding reducido a p-5 */}
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-black uppercase mb-1">Maciza</h3>
              <p className="text-slate-500 text-sm mb-3 leading-snug">
                Pura carne magra, jugosa y sin grasa. Sabor ligero.
              </p>

              {/* Caja de "Incluye" compacta */}
              <div className="bg-slate-50 p-2.5 rounded-lg mb-4 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-700 uppercase mb-1.5">
                  Tu pedido incluye:
                </p>
                {/* Grid para ahorrar espacio vertical */}
                <ul className="grid  gap-1 text-[10px] text-slate-500 font-bold uppercase">
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    750g Tortillas
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Salsas
                  </li>
                  <li className="flex items-center gap-1.5 ">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Chiles y limones
                  </li>
                </ul>
              </div>
            </div>

            <a
              href={generarLinkWhatsApp("Maciza")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-colors shadow-sm"
            >
              Pedir Maciza
            </a>
          </div>
        </div>

        {/* Tarjeta 2: Costilla */}
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-red-600 relative flex flex-col">
          <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
            Más Vendido
          </div>
          <div className="h-48 overflow-hidden">
            <ImagenCloudinary
              publicId="platoCarnitas"
              anchoDeseado={600}
              aspectRatio="16:9"
              altText="Costilla y cuerito"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-black uppercase mb-1">
                Costilla y Cuerito
              </h3>
              <p className="text-slate-500 text-sm mb-3 leading-snug">
                Costilla con hueso y cuerito doradito. El sabor real.
              </p>

              <div className="bg-red-50 p-2.5 rounded-lg mb-4 border border-red-100">
                <p className="text-[10px] font-bold text-red-800 uppercase mb-1.5">
                  Tu pedido incluye:
                </p>
                <ul className="grid  gap-1 text-[10px] text-slate-600 font-bold uppercase">
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    750g Tortillas
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Salsas
                  </li>
                  <li className="flex items-center gap-1.5 ">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Chiles y limones
                  </li>
                </ul>
              </div>
            </div>

            <a
              href={generarLinkWhatsApp("Costilla y Cuerito")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-colors shadow-sm"
            >
              Pedir Costilla
            </a>
          </div>
        </div>

        {/* Tarjeta 3: Especialidades */}
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="h-48 overflow-hidden">
            <ImagenCloudinary
              publicId="DSC03798_bchaw6"
              anchoDeseado={600}
              aspectRatio="16:9"
              altText="Buche nana y prensado"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-black uppercase mb-1">
                Especialidades
              </h3>
              <p className="text-slate-500 text-sm mb-3 leading-snug">
                Buche, Nana y Chicharrón Prensado. Solo conocedores.
              </p>

              <div className="bg-slate-50 p-2.5 rounded-lg mb-4 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-700 uppercase mb-1.5">
                  Tu pedido incluye:
                </p>
                <ul className="grid  gap-1 text-[10px] text-slate-500 font-bold uppercase">
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    750g Tortillas
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Salsas
                  </li>
                  <li className="flex items-center gap-1.5 ">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    Chiles y limones
                  </li>
                </ul>
              </div>

              <p className="text-[10px] text-orange-500 font-bold uppercase flex items-center gap-1 mb-2">
                <Flame size={12} /> ¡Se acaban temprano!
              </p>
            </div>

            <a
              href={generarLinkWhatsApp("Especialidades")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-colors shadow-sm"
            >
              Pedir Especialidad
            </a>
          </div>
        </div>
      </div>

      {/* Sección Complementos */}
      <div className="mt-12 bg-orange-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-orange-100">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
              Solo para conocedores
            </span>
          </div>
          <h3 className="text-2xl font-black uppercase mb-3 text-slate-900">
            ¿Probaste las Boronas?
          </h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            No te vayas sin llevarte: Frijoles bayos refritos y nuestras famosas{" "}
            <strong>boronas</strong> (el asiento doradito del cazo).
            <br />
            <span className="text-xs italic text-slate-400">
              ¡Ideales para unas gorditas o con huevo en el desayuno!
            </span>
          </p>

          {/* Tags de complementos */}
          <div className="flex flex-wrap gap-2">
            {["Boronas ($)", "Frijoles ($)"].map((item) => (
              <span
                key={item}
                className={`px-3 py-1 rounded shadow-sm font-bold text-[10px] uppercase border ${
                  item.includes("$")
                    ? "bg-orange-600 text-white border-orange-600" // Destacamos los de venta
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="h-48 md:h-80 overflow-hidden rounded-xl shadow-lg border-4 border-white rotate-1 hover:rotate-0 transition-all bg-slate-200 relative group">
            {/* Aquí podrías poner una foto de un taco con boronas o una olla de frijoles */}
            <ImagenCloudinary
              publicId="Boronas_carnitas"
              anchoDeseado={800}
              aspectRatio="4:3"
              altText="Frijoles y boronas de carnitas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Etiqueta flotante */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-xs font-bold uppercase">
                El complemento perfecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuAntojo;
