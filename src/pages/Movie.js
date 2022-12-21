import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import requests from "../callApi/request";
import Banner from "../components/movie/Banner";
import axios from "../callApi/axios";

export default function Movie (){
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        GetData();
        console.log(state)
    },[])

    const GetData = async () => {
        const request = await axios.get(`movie/${id}?api_key=b9d55f3b02332772a508f7b5ee25fa5f&language=FR`);
        setState((prev) => (prev = request.data));
        setLoading((prev) => (prev = false));
        console.log(request)
      };

    return(
        <div>
              {
                loading === false ?
                <Banner detail={state}/> : null
              }
        </div>
    )
}