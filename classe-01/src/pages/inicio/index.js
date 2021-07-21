import React from "react";
import './style.css'
import ilustracao from "../../assets/post.png";

const Page = () => {
  return (
    <div className="container home">
      <h1>CRUD de Postagens</h1>
      <p>Navegue pelo Menu ao lado</p>
      <img id="ilustracao-home" src={ilustracao}></img>
    </div>
  );
};

export default Page;
