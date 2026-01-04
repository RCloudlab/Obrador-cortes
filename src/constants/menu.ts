import { Flame, Store, Utensils } from "lucide-react";

export const beefCategories = {
  parrilla: {
    label: "Parrilla & Premium",
    color: "bg-red-600",
    icon: Flame,
    description: "Nuestra selección más fina para el asador exigente.",
    items: [
      {
        name: "Rib Eye Nacional",
        spec: "Con hueso, 1 pulgada, marmoleo medio",
        use: "Parrilla",
        imgId: "ribeye_prueba",
      },
      {
        name: "New York",
        spec: "Corte magro, textura firme",
        use: "Plancha/Asador",
        imgId: "newyork_prueba",
      },
      {
        name: "Arrachera",
        spec: "Marinada especial, suavizada",
        use: "Tacos/Asado",
        imgId: "arrachera_prueba",
      },
      {
        name: "Tomahawk",
        spec: "Hueso largo, presentación espectacular",
        use: "Gourmet",
        imgId: "tomahawk_prueba",
      },
    ],
  },
  diario: {
    label: "Cocina Diaria",
    color: "bg-red-500",
    icon: Utensils,
    description: "Cortes frescos y limpios para el menú de todos los días.",
    items: [
      {
        name: "Bistec de Bola",
        spec: "Sin nervio, corte delgado",
        use: "Guisos",
        imgId: "bistcbola_prueba",
      },
      {
        name: "Molida 90/10",
        spec: "Baja en grasa, molida al día",
        use: "Picadillo",
        imgId: "molida_prueba",
      },
      {
        name: "Diezmillo",
        spec: "Jugoso, con grasa natural",
        use: "Cacerola",
        imgId: "diezmillo_prueba2",
      },
      {
        name: "Chamberete",
        spec: "Con tuétano central",
        use: "Caldos",
        imgId: "chambarete_prueba",
      },
    ],
  },
  negocio: {
    label: "Taquería Pro",
    color: "bg-slate-800",
    icon: Store,
    description: "Alto rendimiento y sabor auténtico para tu negocio.",
    items: [
      {
        name: "Suadero (Rose Meat)",
        spec: "Con grasa cobertura ideal para confitar",
        use: "Tacos",
        imgId: "suadero_prueba",
      },
      {
        name: "Cabeza de Res",
        spec: "Limpia, lista para vapor",
        use: "Vapor",
        imgId: "cabeza_prueba",
      },
      {
        name: "Tripa Lavada",
        spec: "Trenzada, proceso de limpieza profunda",
        use: "Dorados",
        imgId: "tripa_prueba",
      },
      {
        name: "Lengua",
        spec: "Pieza entera natural",
        use: "Premium",
        imgId: "lengua_prueba",
      },
    ],
  },
};
