import "./globals.css";
import { eb_garamond, poppins } from "@/lib/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hariyali",
  description: "Mera ped meri pehchaan, a platform for planting trees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} ${eb_garamond} antialiased`}>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </body>
    </html>
  );
}
