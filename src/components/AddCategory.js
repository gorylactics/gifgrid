import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory})=>{

    const [inputValue , setInputValue] = useState('')
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }; //esta const recibe el valor que se ingresa en el input

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(cat => [...cat , inputValue] );
            setInputValue('')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    )
}
AddCategory.propTypes = {
    setCategory  : PropTypes.func.isRequired
}
