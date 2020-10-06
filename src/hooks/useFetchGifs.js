import { useState } from "react"


export const useFetchGifs = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setState({
            data: [1,3,4,5],
            loading: false
        })
    }, 3000);

    

    return state;// {data[], loading: true};

}