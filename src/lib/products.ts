import cremaAcida from "@/assets/products/crema-acida.png";
import gelPrepil from "@/assets/products/gel-prepil.png";
import ceraCreamyPink from "@/assets/products/cera-creamy-pink.png";
import fundidor from "@/assets/products/fundidor-facial.png";
import ceraOro from "@/assets/products/cera-oro.png";
import rollOnCremoso from "@/assets/products/roll-on-cremoso.png";
import rollOnIrisados from "@/assets/products/roll-on-irisados.png";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  presentation: string;
  price: number;
  image: string;
  category: "Pre depilatorio" | "Depilatorio" | "Post depilatorio" | "Equipos";
  features: string[];
  description: string;
  benefits: string;
  application: string;
};

export const products: Product[] = [
  {
    slug: "gel-prepil",
    name: "Gel Prepil",
    subtitle: "Pre depilatorio · textura fresca y ligera",
    presentation: "Gel pre depilatorio",
    price: 15,
    image: gelPrepil,
    category: "Pre depilatorio",
    features: ["Prepara", "Hidrata", "Higieniza"],
    description:
      "Textura fresca y ligera. Prepara y limpia la piel antes de la depilación Facilita la extracción del pelo, hidrata y suaviza eliminando la sequedad de la piel y aliviando la sensación de molestia y protegiendo a la piel durante el tratamiento depilatorio.",
    benefits: "Prepara Hidrata Higieniza",
    application:
      "Aplicar con un suave masaje poca cantidad antes del tratamiento depilatorio hasta su total absorción.",
  },
  {
    slug: "crema-acida-post-epil",
    name: "Crema Ácida Post Epil 200 ML",
    subtitle: "Post depilatoria · reequilibrante del PH",
    presentation: "Crema post depilatoria 200 ml",
    price: 15,
    image: cremaAcida,
    category: "Post depilatorio",
    features: ["Regenera", "Hidrata", "Regula el PH"],
    description:
      "Requilibrante del PH. Gracias al extracto de avena restaura los niveles de humedad de la piel, hidratando y aliviando las posibles alteraciones de la piel durante la depilación. Indicada para todo tipo de pieles incluso las más sensibles. Aconsejamos su uso en tratamientos depilatorios faciales por su rápida acción regenerante.",
    benefits:
      "Regeneración rápida de la piel sensibilizada. Hidrata Regula el PH de la piel.",
    application:
      "Usar después de la depilación, para recuperar la piel. Recomendado en cabina como producto post-depilación con láser o fotodepilación. Ideal como cosmética Post depilatoria en zona facial antes del protector solar.",
  },
  {
    slug: "cera-roll-on-cremoso",
    name: "Cera Roll On Cremoso",
    subtitle: "Depilación roll-on · piel sensible",
    presentation: "Cera roll-on cremosa",
    price: 10,
    image: rollOnCremoso,
    category: "Depilatorio",
    features: [
      "Un solo uso",
      "Indicado para pieles sensibles",
      "Higiénico",
      "Sin sensación de calor",
      "Rápido",
      "Efectivo",
      "Práctico",
      "Gran variedad",
      "Duradero",
    ],
    description:
      "La depilación mediante Roll-on nos proporciona unos excelentes resultados. Gracias al tipo de resinas con las que se fabrica puede utilizarse a mayor temperatura que la cera de baja fusión. La presencia de dióxido de titanio en su composición lo hace más respetuoso con la piel. Al aplicarse con una capa más fina se enfría de forma casi inmediata y el calor no llega a percibirse. Se retira fácilmente con bandas higiénicas STARPIL.",
    benefits:
      "Un solo uso. Indicado para pieles sensibles. Higiénico Sin sensación de calor Rápido Efectivo Práctico Gran variedad Duradero",
    application:
      "Sugerimos su aplicación en áreas grandes. No solapar producto. Mientras se aplica ir incorporando el recambio para que no se acumule cera en el extremo de salida. Especialmente indicado para pieles sensibles.",
  },
  {
    slug: "cera-roll-on-pigmentos-irisados",
    name: "Cera Roll On con Pigmentos Irisados",
    subtitle: "Depilación roll-on · pigmentos irisados",
    presentation: "Cera roll-on con pigmentos irisados",
    price: 10,
    image: rollOnIrisados,
    category: "Depilatorio",
    features: [
      "Un solo uso",
      "Indicado para todos los tipos de piel",
      "Higiénico",
      "Sin sensación de calor",
      "Rápido",
      "Efectivo",
      "Práctico",
      "Gran variedad",
      "Duradero",
    ],
    description:
      "La depilación mediante Roll-on nos proporciona unos excelentes resultados. Gracias al tipo de resinas con las que se fabrica puede utilizarse a mayor temperatura que la cera de baja fusión. La presencia de dióxido de titanio en su composición lo hace más respetuoso con la piel. Al aplicarse con una tira más fina se enfría de forma casi inmediata y el calor no llega a percibirse. Se retira fácilmente con bandas higiénicas STARPIL.",
    benefits:
      "Un solo uso. Indicado para todos los tipos de piel. Higiénico Sin sensación de calor Rápido Efectivo Práctico Gran variedad Duradero",
    application:
      "Sugerimos su aplicación en áreas grandes. No solapar producto. Mientras se aplica ir incorporando el recambio para que no se acumule cera en el extremo de salida. Especialmente indicado para pieles sensibles.",
  },
  {
    slug: "cera-en-lata-creamy-pink-500ml",
    name: "Cera en Lata Creamy Pink 500 ML",
    subtitle: "Cera cremosa · pieles sensibles",
    presentation: "Cera en lata 500 ml",
    price: 25,
    image: ceraCreamyPink,
    category: "Depilatorio",
    features: [
      "Elimina el pelo de raíz",
      "Se adapta a la anatomía corporal",
      "Alto poder de extracción",
      "Indicada para pieles sensibles",
    ],
    description:
      "Adaptar a Natural Elaboradas a partir de derivados de Colofonia (resina de pino) y aceites vegetales, su textura es muy adherente y no se seca por lo que debe retirarse con bandas higiénicas STARPIL. se aplica con espátula de madera desechable a diferencia con el sistema roll on. Aconsejamos su aplicación en áreas extensas como piernas y brazos. Por contener dióxido de titanio en su composición es perfectamente indicada para pieles sensible.",
    benefits:
      "Elimina el pelo de raíz. Su aplicación, al ser con espátula, se adapta perfectamente a la anatomía corporal. Alto poder de extracción del pelo. Indicada para pieles sensibles.",
    application:
      "Sugerimos su aplicación en áreas grandes. Se extrae la cera de la lata, calentada anteriormente en un calentador de 500 ml, con una espátula desechable. Se aplica sobre el área a tratar en una capa muy fina. No solapar producto. Su extracción se realiza con bandas higiénicas Starpil.",
  },
  {
    slug: "cera-en-lata-oro-500ml",
    name: "Cera en Lata Oro de 500 ML",
    subtitle: "Cera con pigmentos irisados",
    presentation: "Cera en lata 500 ml",
    price: 25,
    image: ceraOro,
    category: "Depilatorio",
    features: [
      "Elimina el pelo de raíz",
      "Se adapta a la anatomía corporal",
      "Alto poder de extracción",
      "Indicada para pieles sensibles",
    ],
    description:
      "Adaptar a Natural Elaboradas a partir de derivados de Colofonia (resina de pino) y aceites vegetales, su textura es muy adherente y no se seca por lo que debe retirarse con bandas higiénicas STARPIL. se aplica con espátula de madera desechable adiferencia con el sistema roll on. Aconsejamos su aplicación en áreas extensas como piernas y brazos.",
    benefits:
      "Elimina el pelo de raíz. Su aplicación, al ser con espátula, se adapta perfectamente a la anatomía corporal. Alto poder de extracción del pelo. Indicada para pieles sensibles.",
    application:
      "Sugerimos su aplicación en áreas grandes. Se extrae la cera de la lata, calentada anteriormente en un calentador de 500 ml, con una espátula desechable. Se aplica sobre el área a tratar en una capa muy fina. No solapar producto. Su extracción se realiza con bandas higiénicas Starpil.",
  },
  {
    slug: "fundidor-cera-facial",
    name: "Fundidor de Cera Facial",
    subtitle: "Equipo · fundidor 200 ml",
    presentation: "Fundidor de cera facial 200 ml",
    price: 50,
    image: fundidor,
    category: "Equipos",
    features: [
      "Rápido calentamiento",
      "Temperatura variable 45–90°C",
      "Indicador de funcionamiento",
      "Compacto",
    ],
    description:
      "Rápido calentamiento. Temperatura variable de 45-90°C. Indicador de funcionamiento. Compacto. Medidas: 116 x 116 x 147 mm. Potencia: 40w (110/220v 220/240v - 50/60Hz)",
    benefits:
      "Calienta rapidamente la cera de baja fusión y permite mantenerla en una temperatura óptima durante el tratamiento. Ideal para tratamientos depilatorios de zona facial.",
    application: "Ideal para tratamientos depilatorios de zona facial.",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
