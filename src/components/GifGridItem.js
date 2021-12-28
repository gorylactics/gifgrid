import React from 'react'

// export const GifGridItem = (gif) => {
//     console.log(gif)
//     return (
//         <div>
//             {gif.title}
//         </div>
//     )
// }

export const GifGridItem = ({id , title ,  url}) => {
    console.log(id , title ,  url)
    return (
        <div className=''>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
            
        </div>
    )
}