import React from 'react'

const GifGrid = ({category}) => {
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=rEsg35kMJgcpu89M3sbOsXXeTd5BLxc6';
        const resp = await fetch(url);
        const {data} = await resp.json();

        console.log(data);	


		}
		getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}

export default GifGrid
