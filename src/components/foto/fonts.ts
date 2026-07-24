import { Cormorant_Garamond } from "next/font/google";

// Serif editorial para el sub-sitio de fotografía
export const serifFoto = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
