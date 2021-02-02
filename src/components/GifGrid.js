import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {
    
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="card-grid animate__animated animate__fadeIn">{ category } <span role="img" aria-label="stars">🌟</span></h3>
            { loading && <div className="spinner"></div>}

            <div className="card-grid" >
                {images.map((img) => (
                    <GifGridItem key={img.id} { ...img } />
                ))}
            </div>
        </>
    )
}


GifGrid.protoTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;
