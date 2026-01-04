import {
  Star,
  Flame,
  Utensils,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import ImagenCloudinary from "../hooks/imageCloudinary";
import { motion } from "framer-motion";
import HeroCarnitas from "../components/carnitasComponentes/HeroCarnitas";

const Carnitas = () => {
  const whatsappLink =
    "https://wa.me/524436721870?text=Hola,%20quisiera%20pedir%20carnitas...";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <HeroCarnitas />

      {/* DIRECTO DEL OBRADOR (Sin cambios en imágenes aquí) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Flame size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">
                Cazo de Cobre
              </h3>
              <p className="text-slate-500 text-sm">
                El secreto del sabor y color auténtico michoacano. Nada de
                imitaciones.
              </p>
            </div>
            <div className="p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                Nuestro Secreto
              </div>
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <CheckCircle size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">
                Sin Intermediarios
              </h3>
              <p className="text-slate-500 text-sm">
                Somos productores. La carne viene directa de nuestro propio
                obrador industrial a tu plato.{" "}
                <strong className="text-red-600">Frescura imbatible.</strong>
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Clock size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">
                Hechas Diario
              </h3>
              <p className="text-slate-500 text-sm">
                Comenzamos de madrugada para que disfrutes el mejor sabor en tu
                desayuno o comida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EL MENÚ DEL ANTOJO */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase text-slate-900">
            El Menú del Antojo
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            ¿De qué te vas a echar tu taco hoy?
          </p>
        </div>

        {/* Grid de Productos */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1: Maciza */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              {/* IMAGEN CLOUDINARY MACIZA */}
              <ImagenCloudinary
                publicId="maciza"
                anchoDeseado={600}
                aspectRatio="4:3" // Aspecto rectangular para tarjeta
                altText="Taco de maciza Carnitas Obrador Morelia"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase z-10">
                Favorito
              </span>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black uppercase">Maciza</h3>
                <span className="text-red-600 font-bold">$380 /kg</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Pura carne magra, jugosa y sin grasa. Ideal para quienes buscan
                sabor ligero.
              </p>
              <ul className="text-xs text-slate-400 font-bold uppercase tracking-wide space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>{" "}
                  Incluye Tortillas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>{" "}
                  Salsas y Verduras
                </li>
              </ul>
            </div>
          </div>

          {/* Tarjeta 2: Costilla */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-red-600 relative">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-4 py-1 uppercase tracking-widest z-10">
              Más Vendido
            </div>
            <div className="h-64 overflow-hidden">
              {/* IMAGEN CLOUDINARY COSTILLA */}
              <ImagenCloudinary
                publicId="platoCarnitas"
                anchoDeseado={600}
                aspectRatio="4:3"
                altText="Costilla y cuerito Carnitas Obrador Morelia"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black uppercase">
                  Costilla y Cuerito
                </h3>
                <span className="text-red-600 font-bold">$380 /kg</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                El verdadero sabor. Costilla con hueso para chupar los dedos y
                cuerito doradito.
              </p>
              <button className="w-full mt-2 bg-red-600 text-white py-3 font-bold uppercase text-sm tracking-widest hover:bg-red-700 transition-colors">
                Pedir Ahora
              </button>
            </div>
          </div>

          {/* Tarjeta 3: Especialidades */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden">
              {/* IMAGEN CLOUDINARY SURTIDO */}
              <ImagenCloudinary
                publicId="chamorro_prueba"
                anchoDeseado={600}
                aspectRatio="4:3"
                altText="Buche nana y prensado Carnitas Obrador Morelia"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black uppercase">
                  Especialidades
                </h3>
                <span className="text-red-600 font-bold">$400 /kg</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Para conocedores: Buche, Nana y Chicharrón Prensado.
                Disponibilidad limitada.
              </p>
              <p className="text-xs text-orange-500 font-bold uppercase flex items-center gap-1">
                <Flame size={14} /> ¡Se acaban temprano!
              </p>
            </div>
          </div>
        </div>

        {/* Sección Complementos */}
        <div className="mt-16 bg-slate-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-black uppercase mb-4">
              ¡Que no falte la salsa!
            </h3>
            <p className="text-slate-600 mb-6">
              Todos nuestros kilos incluyen el <strong>Kit Tradicional</strong>:
              Salsa verde cruda (receta de la casa), cebollitas encurtidas con
              habanero, limones y tortillas recién hechas.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-xs uppercase text-slate-700 border border-slate-200">
                Salsa Verde
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-xs uppercase text-slate-700 border border-slate-200">
                Salsa Roja
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-xs uppercase text-slate-700 border border-slate-200">
                Chiles en Vinagre
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-xs uppercase text-slate-700 border border-slate-200">
                Tortillas
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <ImagenCloudinary
              publicId="salsaVerde"
              anchoDeseado={800}
              aspectRatio="4:3"
              altText="Salsa verde y complementos carnitas"
              className="rounded-xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* TABLA DE PRECIOS / PAQUETES (Sin cambios en imágenes aquí) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase">
              Paquetes Familiares
            </h2>
            <p className="text-slate-400 mt-2">¿Cuántos van a comer hoy?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Paquete Familiar */}
            <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-2xl hover:border-red-600 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-black uppercase text-red-500">
                  Paquete Familiar
                </h3>
                <Utensils className="text-slate-500" />
              </div>
              <div className="text-4xl font-black mb-2">
                $380{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / Kilo
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6 border-b border-slate-700 pb-4">
                Ideal para 3-4 personas
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> 1 Kg de
                  Carnitas (A elegir)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> 1/2 Kg
                  Tortillas
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> Salsas y
                  Verduras
                </li>
              </ul>
              <a
                href={whatsappLink}
                className="block w-full text-center bg-white text-slate-900 font-bold py-3 uppercase text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all"
              >
                Pedir Kilo
              </a>
            </div>

            {/* Paquete Fiesta */}
            <div className="border-2 border-red-600 bg-slate-800 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase">
                Recomendado
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-black uppercase text-white">
                  Paquete Fiesta
                </h3>
                <Star className="text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-4xl font-black mb-2">
                $1,100{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / Paquete
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6 border-b border-slate-700 pb-4">
                Ideal para 10-12 personas
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> 3 Kg de
                  Carnitas
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> 1.5 Kg
                  Tortillas
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> Refresco 2L
                  Gratis
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-red-500" /> Salsas
                  Dobles
                </li>
              </ul>
              <a
                href={whatsappLink}
                className="block w-full text-center bg-red-600 text-white font-bold py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-red-900 transition-all"
              >
                Pedir Paquete
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO PARA EVENTOS (Sin cambios en imágenes aquí) */}
      <section className="relative py-24 bg-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-red-800">
              ¿Tienes una fiesta?
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Llevamos el sabor a tu{" "}
              <span className="text-slate-900">Evento</span>
            </h2>
            <p className="text-red-100 text-lg mb-8 font-medium">
              Bodas, XV años, bautizos o reuniones empresariales. Nosotros
              ponemos las carnitas, las tortillas calientes y el servicio. Tú
              disfruta la fiesta.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <span className="font-bold uppercase tracking-wide">
                  Disponibilidad todo el año
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center">
                  <Utensils size={20} />
                </div>
                <span className="font-bold uppercase tracking-wide">
                  Paquetes con desechables incluidos
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-white text-slate-900 p-8 shadow-2xl rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-2xl font-black uppercase text-center mb-2">
              Cotiza tu Taquiza
            </h3>
            <p className="text-center text-slate-500 text-xs mb-6 uppercase tracking-widest">
              Respuesta en menos de 1 hora
            </p>
            <a
              href={whatsappLink}
              className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 font-black uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg"
            >
              Enviar WhatsApp
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4">
              Atendemos eventos en todo Morelia y alrededores.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Carnitas;
