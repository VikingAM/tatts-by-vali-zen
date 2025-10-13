/**
 * Styles Data
 * Defines the tattoo styles/services offered
 */

import realismJpg from "@/assets/style-realism.jpg";
import scriptJpg from "@/assets/style-script.jpg";
import finelineJpg from "@/assets/style-fineline.jpg";
import symbolicJpg from "@/assets/style-symbolic.jpg";

export interface StyleItem {
  key: string;
  title: string;
  desc: string;
  imgWebp?: string;
  imgJpg: string;
  alt: string;
}

export const STYLES: StyleItem[] = [
  {
    key: "realism",
    title: "Realism",
    desc: "Präzise Details. Lebendige Tiefe. Ideal für Porträts und strukturreiche Motive.",
    imgJpg: realismJpg,
    alt: "Realism Tattoo – detailreiches Auge",
  },
  {
    key: "script",
    title: "Script",
    desc: "Klare Botschaft. Elegante Schrift. Für Namen, Daten und Zitate.",
    imgJpg: scriptJpg,
    alt: "Script Tattoo – Schriftzug auf der Haut",
  },
  {
    key: "fine",
    title: "Fine Line",
    desc: "Feine Linien. Stille Eleganz. Dezent im Alltag, stark in der Aussage.",
    imgJpg: finelineJpg,
    alt: "Fine Line Tattoo – feiner Zweig",
  },
  {
    key: "symbolic",
    title: "Symbolic",
    desc: "Symbole mit Seele. Bedeutung im Detail. Zeitlos und persönlich.",
    imgJpg: symbolicJpg,
    alt: "Symbolic Tattoo – Ornament / Symbol",
  },
];

