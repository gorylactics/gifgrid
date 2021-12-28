import React , {useEffect , useState} from "react";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category})=>{  
    
    const [images, setImages] = useState([])

    useEffect(()=>{
        getGifts();
    }, [])

    const getGifts = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=oiHbqpSMwYCqJNuEwrl9AthJWulF1Uto';
        const resp = await fetch(url);
        const {data} = await resp.json()
        // propiedad data de la resp de la api
        // const data = await resp.json() ese es el nombre que se le asigna al dato que responde el await
        const gifs = data.map(i =>{
            return{
                id: i.id,
                title : i.title,
                url : i.images?.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs);
    } 
    // getGifts();
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