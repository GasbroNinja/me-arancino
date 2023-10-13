// src/components/RicettaArancino.js
import React from "react";

const RicettaArancino = ({ titolo, descrizione, immagine }) => {
  return (
    <div className="ricetta-arancino" width={500}>
      <img src={immagine} alt={titolo} width={400} height={400}/>
      <h3>{titolo}</h3>
      <p>{descrizione}</p>
    </div>
  );
};

export default RicettaArancino;
