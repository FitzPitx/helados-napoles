import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Propuesta from "@/components/Propuesta";
import Menu from "@/components/Menu";
import Eventos from "@/components/Eventos";
import PruebaSocial from "@/components/PruebaSocial";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Historia />
        <Propuesta />
        <Menu />
        <Eventos />
        <PruebaSocial />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
