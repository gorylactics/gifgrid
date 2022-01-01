import React from 'react'

export const GifGridItem = ({id , title ,  url}) => {
    console.log(id , title ,  url)
    return (
        <div className='animate__animated animate__fadeIn'>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
            
        </div>
    )
}