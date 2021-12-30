import React , {useEffect , useState} from "react";
import { getGifts } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category})=>{  
    
    const [images, setImages] = useState([])

    useEffect(()=>{
        getGifts(category)
            .then(img => setImages(img));
    }, [category])

    
    return(
        // <>
        // <h3>{category}</h3>
        // <ol>
        //     {/* {images.map(i => <li key={i.id}>{i.title}</li>)} */}
        //     {images.map(({id , title}) => <li key={id}>{title}</li>)}
        //     {/* aca se desestructua la imagen mediante sus atributos */}
        // </ol>
        // </>
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(img =>(
                    <GifGridItem 
                        key={img.id} 
                        img={img}
                        url={img.url}
                        title={img.title}
                    />
                ))}
            </div>
        </>
    )
}