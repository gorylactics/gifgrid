
import { useFetchGif } from "../hooks/useFetchGif"
import {GifGridItem} from '../components/GifGridItem'

export const GifGrid = ({category})=>{  

    const {data : images , loading}  = useFetchGif(category)
    console.log(images)
    console.log(loading)
    return(
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <h1 className='animate__animated animate__flash'>'Cargando...'</h1>}
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