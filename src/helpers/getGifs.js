export const getGifts = async(category)=>{
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oiHbqpSMwYCqJNuEwrl9AthJWulF1Uto`;
    const resp = await fetch(url);
    const {data} = await resp.json()
    const gifs = data.map(i =>{
        return{
            id: i.id,
            title : i.title,
            url : i.images?.downsized_medium.url
        }
    })
    return gifs;
}