import React from "react";


export const GifGrid = ({category})=>{  
    
    const getGifts = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=oiHbqpSMwYCqJNuEwrl9AthJWulF1Uto';
        const resp = await fetch(url);
        const {data} = await resp.json()
        const gifs = data.map(img =>{
            return{
                id: img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
    } 
    getGifts();
    return(
        <h3>{category}</h3>
    )
}