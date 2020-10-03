import React, { useState } from 'react';

const GifExpertApp = () => {
    // const categories = ['One Puch', 'Samurai X', 'Naruto'];//con .push() no se puede 
    // se rompe - esto es una constante y no tengo que mutar constantes
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Naruto']);

    const handleAdd  = () => {
      
      setCategories(['Hunter X', ...categories ]);//Con operador Spread
      // setCategories(cate => [...cate, 'Hunter']);
      //en el setCategorie recibe un callback, donde el 1er argumento
      //es valor del estado anterior. y luego tiene que regresar el nuevo estado.

    } 

    return (
      <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>

        <ol>
          {
            categories.map(category => {
              return <li key={category}> {category}</li>
            })

          }
        </ol>
      </>
    );
}

export default GifExpertApp;



