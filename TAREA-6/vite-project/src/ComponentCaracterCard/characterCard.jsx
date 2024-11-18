import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ nombre = "Desconocido", img, estado = "Desconocido", especie }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "green";
      case "Dead":
        return "red";
      case "unknown":
      default:
        return "gray";
    }
  };

  return (
    <div className="character-card">
      <div className="image-container">
        <img src={img || "https://via.placeholder.com/150"} alt={nombre} />
      </div>
      <div className="card-content">
        <h1>{nombre}</h1>
        <p>{especie}</p>
        <div className="status" style={{ backgroundColor: getStatusColor(estado) }}>
          {estado}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;


