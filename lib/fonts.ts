import { Poppins, EB_Garamond } from "next/font/google";

const poppins_init = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const eb_garamond_init = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const poppins = poppins_init.variable;
export const eb_garamond = eb_garamond_init.variable;
