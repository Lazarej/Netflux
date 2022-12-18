import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../../callApi/axios";
import requests from '../../../callApi/request';
import '../../../style/homepage/ContentSection.css'

export default function CarouselCont (props){

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    useEffect(()=>{
       GetData()
    })

    const GetData = async () => {
        const request = await axios.get(requests.getDiscover + `&with_genres=${props.id}`);
        setState((prev) => (prev = request.data.results));
        setLoading((prev) => (prev = false));
        console.log(request.data.results)
      };

    return(
        <Slider {...settings}>
            {
                state.map((item, index)=>(
                   <div className="carousel-item">
                     <div className="item-content">
                      <img className="img" src={`   https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                    </div>
                   </div>
                ))
            }


        </Slider>
    )
}