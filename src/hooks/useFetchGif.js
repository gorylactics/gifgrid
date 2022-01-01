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
                setTimeout(()=>{
                    setState({
                        data: img,
                        loading : false,
                    })
                },3000)
            })
    }, [category]);

    return state // {data : [] , loading : true}
}
