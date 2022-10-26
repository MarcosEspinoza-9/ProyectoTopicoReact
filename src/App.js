import React, { useState, useEffect } from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  //Esta es una variable que representaría al arreglo de objetos JSON que se podrían recuperar desde una API Rest.
  const personajesDesdeAPI = [
    {
      nombre: 'MARIO',
      modelo: 'El amigo de luigui',
      imagen: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00005022710452L.jpg',
      descripcion: 'El coche mas rapido de los videojuegos de mario',
      sonido: 'WIIIII',
      anio: '2022',
    },
  ];

  //variable de estado que nos permitirá almacenar a los personajes a pintar (renderizar).
  const [personajes, setPersonajes] = useState([]);

  //Un useEffect con dependencia de arreglo vacío [], siempre se dispara una vez al iniciar el componente.
  useEffect(() => {
    //TODO: Aquí iria la petición a la API utilizando FETCH y se asignaría la respuesta de la API a la variable personajesDesdeAPI, algo como esto:
    // personajesDesdeAPI = fetch("http://personajesdecars.com/all")
    
    //Se actualiza la variable de estado 'personajes' con los datos recuperados.
    setPersonajes(personajesDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        //dibujar por cada personaje en la lista de personajes un componente Car.
        personajes.map((personaje) => (
          <Car
            nombre={personaje.nombre}
            modelo={personaje.modelo}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            sonido={personaje.sonido}
            anio={personaje.anio}
          />
        ))
      }
    </div>
  );
}
