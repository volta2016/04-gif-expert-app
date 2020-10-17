import React, { useState } from 'react';
import  AddCategory from './AddCategory'
import GifGrid from './GifGrid';



const GifExpertApp = ({ defaultCategories = [] }) => {
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

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



