import React from "react";
import CardVideos from "./componentes/CardVideo";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import MenuVertical from "./componentes/MenuVertical";
import "./styles.css";

export default function App() {
  

  
  return (
    <div>
      <div className="tela-inteira">
        <Header />

        <main>
          <MenuVertical />
          <CardVideos />
        </main>
      <Footer />
      </div>
    </div>
  );
}
