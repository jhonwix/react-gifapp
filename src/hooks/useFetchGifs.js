import { useState, useEffect } from 'react';
import { gefGifs } from '../components/helpers/getGifs';

//Hooks
export default function useFetchGifs(category) {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    useEffect(()=>{
        gefGifs(category)
        .then(imgs => {
            setTimeout(() => {
                setstate({
                    data:imgs,
                    loading:false
                });
            }, 3000);
        })
    },[category])
    return state;
}
