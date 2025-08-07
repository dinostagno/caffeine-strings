import { FC, PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css"; // si tienes estilos globales

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

