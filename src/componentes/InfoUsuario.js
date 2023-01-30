import React from "react";

export default function InforUsuario() {
    const nome = "ANDERSON";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
      
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{nome}</h4>
            </div>
    )
}