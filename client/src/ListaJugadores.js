import React, { useState, useEffect } from 'react';

export default function ListaJugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/datos")
      .then((response) => response.json())
      .then((data) => {
        const listaJugadores = [];
        for (const posicion in data.SeleccionArgentina) {
          listaJugadores.push(
            <div key={posicion} className={"container-sm mt-3"}>
              <h3>{posicion}</h3>
              <ul className={"list-group list-group-flush"}>
                {data.SeleccionArgentina[posicion].jugadores.map((jugador, index) => (
                  <li key={index} className={"list-group-item"}>
                    <img src={"./"+data.SeleccionArgentina[posicion].imagen} alt=""style={{width: 35}} />
                    {" "+jugador.nombre}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        setJugadores(listaJugadores);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"container-sm mt-3"}>
      <h2>Seleccion Argentina</h2>
      {jugadores}
    </div>
  );
}
