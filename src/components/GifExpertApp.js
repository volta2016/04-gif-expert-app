import React, { useState } from 'react';
import  AddCategory from './AddCategory'
import GifGrid from './GifGrid';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd  = () => {
    //   // setCategories(['Hunter X', ...categories ]);//Con operador Spread retorna directo el []
    //   setCategories(cate => [...cate, 'Hunter']);
    // } 
    // el key tiene que ser unico y no el indice del map

    return (
      <>
        <h2>GifExpertApp</h2>
        < AddCategory setCategories={ setCategories }/>
        <hr></hr>
        

        <ol>
          {
            categories.map(category => ( 
                  <GifGrid 
                    key={ category }
                    category={ category }
                  />
               ))
          }
        </ol>
      </>
    );
}

export default GifExpertApp;



