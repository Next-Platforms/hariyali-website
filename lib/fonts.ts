import { Poppins, Inter } from "next/font/google";

const poppins_init = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const inter_init = Inter({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = poppins_init.variable;
export const inter = inter_init.variable;
