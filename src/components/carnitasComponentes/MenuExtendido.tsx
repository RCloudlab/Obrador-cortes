import { Utensils, Flame, Scale, MessageCircle } from "lucide-react"; // <--- Agregué MessageCircle
import ListaCategoria from "./ListaCategoria";

function MenuExtendido() {
  const whatsappLink = "https://wa.me/524436721870?text=Hola,%20vi%20el%20menú%20y%20quiero%20hacer%20un%20pedido."; // <--- Tu enlace

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Todo el <span className="text-red-600">Menú</span>
          </h2>
          <p className="text-slate-400 mt-3 text-lg">
            Desde un taco hasta especialidades por kilo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16"> {/* <--- Agregué mb-16 para separar del botón */}
          <ListaCategoria
            titulo="Por Kilo"
            subtitulo="Venta por: 1/4 • 1/2 • 1 Kilo"
            icono={Scale}
            items={[
              {
                nombre: "Chicharrón de la Ramos",
                desc: "Estilo regio, carnudo y crujiente",
              },
              { nombre: "Panzeta", desc: "Tocino carnudo especial" },
              { nombre: "Soricua", desc: "Embutido tradicional artesanal" },
              { nombre: "Chicharrón Botanero", desc: "Delgadito y crujiente" },
              {
                nombre: "Boronas",
                desc: "Asiento de cazo con sabor concentrado",
              },
            ]}
          />

          <ListaCategoria
            titulo="El Antojo"
            subtitulo="Preparado al momento"
            icono={Utensils}
            items={[
              { nombre: "Tacos Surtidos", desc: "Maciza, Cuerito y más" },
              { nombre: "Tortas", desc: "Bien reportadas" },
              { nombre: "Tacos Ahogados", desc: "Bañados en salsa especial" },
              { nombre: "Tortas Ahogadas", desc: "El clásico picante" },
              {
                nombre: "Tacos Dorados",
                desc: "Rellenos de Chicharrón Prensado",
              },
            ]}
          />
          <ListaCategoria
            titulo="Complementos"
            subtitulo="Lo que le da sabor"
            icono={Flame}
            items={[
              { nombre: "Frijoles Refritos", desc: "Disponibles por peso" },
              { nombre: "Salsa Verde", desc: "La clásica de la casa" },
              { nombre: "Salsa Roja", desc: "Para los valientes" },
              { nombre: "Pico de Gallo", desc: "Fresco y picadito" },
              { nombre: "Tortillas", desc: "Recién hechas" },
            ]}
          />
        </div>

        {/* --- NUEVO BOTÓN DE PEDIDO --- */}
        <div className="flex flex-col items-center justify-center animate-fade-in-up">
            <p className="text-slate-400 mb-6 text-sm font-medium uppercase tracking-widest">
                ¿Se te antojó algo?
            </p>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all hover:bg-red-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
            >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                <span>Hacer Pedido por WhatsApp</span>
                
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </a>
        </div>

      </div>
    </section>
  );
}

export default MenuExtendido;