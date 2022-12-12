import axios from "axios"; //suplanta fetch
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:3002/cursos"; //es una api que estaba en internet y sirve para practicar.

export default function App() {
  const [get, setGet] = useState(null);

  //GET para ver la información
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGet(response.data);
    });
  }, []); //[] es un array de dependencia

  if (!get) return null;

  console.log(get)

  return (
    <div>
      <p>{get[0].id}</p>
      <p>{get[0].imagen}</p>
      <p>{get[0].title}</p>
      <p>{get[0].description}</p>
    </div>
  );
}