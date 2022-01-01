import { useEffect, useState } from "react"
import {getGifts} from '../helpers/getGifs'

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data : [],
        loading : true,
    })

    useEffect(()=>{
        getGifts(category)
            .then(img =>{
                setState({
                    data: img,
                    loading : false,
                })
            })
    }, [category]);

    return state // {data : [] , loading : true}
}
