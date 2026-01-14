import { Beef, Drumstick, Flame, ShoppingBag, ChefHat } from "lucide-react"; 
import ListaSeccion from "./ListaSeccion";
// Asegúrate de tener estos iconos o cámbialos por los que uses

function MenuCarniceria() {
  const whatsappLink = "https://wa.me/524436721870?text=Hola,%20quisiera%20pedir%20carne%20fresca.";


  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            Calidad Industrializadora Michoacana
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 tracking-tight">
            Carnicería Fresca
          </h2>
          <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
            Llevamos la calidad de nuestro obrador hasta tu cocina. 
            <strong>Venta por kilo</strong> para tus guisados y parrilladas de la semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. CERDO: Lo fuerte del negocio */}
          <ListaSeccion 
            titulo="Cerdo Fresco"
            icono={Drumstick}
            items={[
              { nombre: "Bisteck de Cerdo", uso: "Milanesas" },
              { nombre: "Costilla y Falda", uso: "Guisado/Asar" },
              { nombre: "Chuleta Mexicana", uso: "Al sartén" },
              { nombre: "Espinazo", uso: "Pozole/Caldo" },
              { nombre: "Pierna / Lomo", uso: "Horno/Relleno" },
              { nombre: "Molida de Cerdo", uso: "Picadillo" },
              { nombre: "Manteca Pura", uso: "Por Kilo/Litro" },
            ]}
          />

          {/* 2. RES: Del diario y Domingo */}
          <ListaSeccion 
            titulo="Res del Diario"
            icono={Beef}
            colorIcono="bg-slate-800"
            items={[
              { nombre: "Bistec / Bola", uso: "Asar/Bistec" },
              { nombre: "Molida de Res", uso: "Premium" },
              { nombre: "Costilla de Res", uso: "Caldo/Asar" },
              { nombre: "Chambarete C/H", uso: "Caldo" },
              { nombre: "Carne Deshebrada", uso: "Listísima" },
              { nombre: "Menudo / Panza", uso: "Domingo" },
              { nombre: "Pata de Res", uso: "Tostadas" },
            ]}
          />

          {/* 3. PARRILLADA: Fines de semana */}
          <ListaSeccion 
            titulo="Para el Asador"
            icono={Flame}
            colorIcono="bg-orange-600"
            items={[
              { nombre: "Arrachera", uso: "Marinada" },
              { nombre: "Diezmillo", uso: "Con Hueso" },
              { nombre: "Carne al Pastor", uso: "Lista p/asar" },
              { nombre: "Chistorra / Chorizo", uso: "Botana" },
              { nombre: "Chuleta Ahumada", uso: "Sabor único" },
              { nombre: "Tocineta", uso: "Para envolver" },
            ]}
          />

          {/* 4. POLLO Y ESPECIALES */}
          <ListaSeccion 
            titulo="Pollo y Otros"
            icono={ChefHat} // O un icono de pollo si tienes
            colorIcono="bg-yellow-500"
            items={[
              { nombre: "Pechuga S/H", uso: "Limpia" },
              { nombre: "Pechuga Empanizada", uso: "Práctica" },
              { nombre: "Filete Tilapia", uso: "Cuaresma" },
              { nombre: "Lengua de Res", uso: "Guisado" },
              { nombre: "Hígado", uso: "Res/Cerdo" },
              { nombre: "Tripa", uso: "Bien limpia" },
            ]}
          />

        </div>

        {/* Botón de Pedido Rápido */}
        <div className="text-center">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
                <ShoppingBag size={18} />
                Hacer Pedido de Carnicería
            </a>
            <p className="text-slate-400 text-xs mt-4">
                *Precios sujetos a cambio sin previo aviso. Pregunta por disponibilidad diaria.
            </p>
        </div>
      </div>
    </section>
  );
}

export default MenuCarniceria;