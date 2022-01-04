import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id , title ,  url}) => {
    console.log(id , title ,  url)
    return (
        <div className='animate__animated animate__fadeIn'>
            <p>{title}</p>
            <img src={url} alt={title}/>
            
        </div>
    )
}
GifGridItem.propTypes = {
    id : PropTypes.number.isRequired , 
    title: PropTypes.string.isRequired , 
    url : PropTypes.string.isRequired
}