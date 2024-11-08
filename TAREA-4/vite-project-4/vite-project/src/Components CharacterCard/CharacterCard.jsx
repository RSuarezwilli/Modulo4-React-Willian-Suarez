import React, { useState, useEffect } from "react";
import Titulo from "../Components titulo/Titulo";
import Image from "../Components image/Image";
import Details from "../Components details/Details";

function CharacterCard({ id }) {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Realizar llamada a la API de Rick and Morty
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((error) => console.error("Error fetching character:", error));
    }, [id]);

    if (!character) return <div>Loading...</div>;

    return (
        <div className="card2">
            <Titulo titulo={character.name} />
            <Image image={character.image} />
            <Details estatus={character.status} genero={character.gender} />
        </div>
    );
}

export default CharacterCard;
