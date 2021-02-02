import React, { useState } from 'react';
import  AddCategory from './AddCategory'
import GifGrid from './GifGrid';
import Header from './Header'
import Footer from './Footer';




const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(['One Punch']);
    // const [categories, setCategories] = useState(defaultCategories);

    return (
      <>
        <Header />
        <div className="container">
          <h2>Find your favorite gif 😄</h2>
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
        </div>
        <Footer />
      </>
    );
}

export default GifExpertApp;



