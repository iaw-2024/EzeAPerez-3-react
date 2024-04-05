export default function ListaJugadores() {
    fetch("http://localhost:3001/datos")
          .then((response) => response.json())
          .then((data) => {
            return(
                <div>
                    <h1>Lista de jugadores</h1>
                    <ul>
                        {data.SeleccionArgentina.Arquero.jugadores.map(jugador => <li>{jugador.nombre} - {jugador.edad}</li>)}
                    </ul>
                </div>
            )
          })
          .catch((error) => {
            console.log(error);
          });
        
}

function RecuperarLista(){
    
}