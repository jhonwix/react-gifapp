import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { gefGifs } from './helpers/getGifs';
//category es el argumento que voy a recibir
export const GifGrid = ({category}) => {
    //ejmeplo de un contador
    //const [count, setcount] = useState(0)
    // const [images, setimages] = useState([]);
    const {data:images,loading} = useFetchGifs (category);

    return (
        //fragment retorno mas de dos
        <>
            <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                    {
                        images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} 
                        />
                        ))
                    }
            </div>
        </>
    )
}
