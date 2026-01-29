import { Flame, Store, Utensils } from "lucide-react";

export const beefCategories = {
  parrilla: {
    label: "Parrilla & Asar",
    color: "bg-red-600",
    icon: Flame,
    description: "Nuestra selección más fina para el asador exigente.",
    items: [
      {
        name: "Diezmillo con hueso",
        spec: "Marmoleo intenso, corte con hueso",
        use: "Asador/Carbón",
        imgId: "diezmillo_con_hueso_corte",
      },
      {
        name: "Chuleta del 7",
        spec: "Sabor intenso, con grasa lateral",
        use: "Parrilla/Plancha",
        imgId: "Chuleta_7",
      },
      {
        name: "Arrachera",
        spec: "Marinada ligera, textura suave",
        use: "Tacos/Parrillada",
        imgId: "arrachera_corte",
      },
      {
        name: "Chistorra",
        spec: "Embutido semi-curado condimentado",
        use: "Botana/Quesos",
        imgId: "chistorra_corte",
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
        name: "Espaldilla",
        spec: "Jugosa, ideal para trocear",
        use: "Guisos/Estofados",
        imgId: "espaldilla_cerdo_corte",
      },
      {
        name: "Pulpa de cerdo",
        spec: "Carne maciza y limpia",
        use: "Bistec/Trozos",
        imgId: "pulpa_cerdo",
      },
      {
        name: "Pierna sin hueso",
        spec: "Magra, pieza compacta",
        use: "Horno/Adobo",
        imgId: "Pierna_sin_hueso",
      },
      {
        name: "Pechuga empanizada",
        spec: "Empanizado crujiente, lista para cocinar",
        use: "Fritura/Sartén",
        imgId: "pechuga_empanizada",
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
        spec: "Textura ideal para confitar",
        use: "Tacos de calle",
        imgId: "suadero_corte",
      },
      {
        name: "Molida de res",
        spec: "Balance 80/20, sabor versátil",
        use: "Rellenos/Picadillo",
        imgId: "molida_res_corte",
      },
      {
        name: "Pierna adobada",
        spec: "Fileteada y marinada en adobo rojo",
        use: "Tacos/Tortas",
        imgId: "pierna_adobada_corte",
      },
      {
        name: "Carne deshebrada",
        spec: "Falda de res cocida y desmenuzada",
        use: "Flautas/Tostadas",
        imgId: "deshebrada_corte",
      },
    ],
  },
};