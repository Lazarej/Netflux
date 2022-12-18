import { useEffect, useState } from 'react'
import requests from '../../../callApi/request';
import '../../../style/homepage/ContentSection.css'
import axios from "../../../callApi/axios";
import CarouselCont from './CarouselCont';
export default function ContentSection (){

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        GetData()
       
    },[])

    const GetData = async () => {
        const request = await axios.get(requests.getCategories);
        setState((prev) => (prev = request.data.genres));
        setLoading((prev) => (prev = false));
      };

    return(
        <section className='section'>
            {
                state.map((cat, index)=>(
                    <div key={index} className='row'>
                        <h3>{cat.name}</h3>
                        <CarouselCont id={cat.id}/>
                    </div>
                ))
            }

        </section>
    )
}