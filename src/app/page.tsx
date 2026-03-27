import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import ReduccionRiesgos from "@/components/ReduccionRiesgos";
import Divulgacion from "@/components/Divulgacion";
import Publicaciones from "@/components/Publicaciones";
import Videos from "@/components/Videos";
import Podcast from "@/components/Podcast";
import Tecnologia from "@/components/Tecnologia";
import Recursos from "@/components/Recursos";
import RedesSociales from "@/components/RedesSociales";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <SobreMi />
      <div className="section-divider" />
      <ReduccionRiesgos />
      <div className="section-divider" />
      <Divulgacion />
      <div className="section-divider" />
      <Publicaciones />
      <div className="section-divider" />
      <Videos />
      <div className="section-divider" />
      <Podcast />
      <div className="section-divider" />
      <Tecnologia />
      <div className="section-divider" />
      <Recursos />
      <div className="section-divider" />
      <RedesSociales />
      <div className="section-divider" />
      <Contacto />
    </>
  );
}
