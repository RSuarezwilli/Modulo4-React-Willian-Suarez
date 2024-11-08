import React from "react";

function Details({ estatus, genero }) {
    return (
        <div>
            <p>Status: {estatus}</p>
            <p>Gender: {genero}</p>
        </div>
    );
}

export default Details;
