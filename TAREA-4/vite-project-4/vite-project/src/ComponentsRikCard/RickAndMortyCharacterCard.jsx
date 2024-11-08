import React, { useEffect, useState } from "react";

function RickAndMortyCharacterCard({ id }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setImage(data.image);
        setGender(data.gender);
        setStatus(data.status);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default RickAndMortyCharacterCard;

      