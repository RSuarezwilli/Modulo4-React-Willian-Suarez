import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(name, "name", password, "password");
  console.log(error,'error')

  const handleSubmit = (e) => {
    e.preventDefault();

   
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p>Nombre</p>
        <input
          onChange={(e) => {
            console.log(e.target.value, "e");
            setName(e.target.value);
          }}
          type="text"
          value={name}
          placeholder="tu nombre"
        />
        {
          error  && <p className="error">Este Campo Es Obligatorio</p>
        }
        <p>contraseña</p>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="contraseña"
          value={password}
        />
        {error && <p>Este Campo Es Obligatorio</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default FormComponent;
