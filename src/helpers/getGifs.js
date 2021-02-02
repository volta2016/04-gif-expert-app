//hace la peticción htpp

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rEsg35kMJgcpu89M3sbOsXXeTd5BLxc6`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs =  data.map(img => {
        // new obj con info
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    
    // console.log(gifs);//en toría este es valor del nuevo estado va ser gifs
    return gifs;
} 