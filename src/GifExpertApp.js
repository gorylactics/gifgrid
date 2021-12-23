import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{
    const [category, setCategory] = useState([''])
        return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>
                {/* {category.map( c => <li key={c}> {c}</li> )} */}
                {category.map( c => <GifGrid key={c} category={c} /> )}
            </ol>
        </>)
}
/* {category.map((c)=>{return <li key={c}>{c}</li>})} */