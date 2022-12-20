import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../../callApi/axios";
import requests from '../../../callApi/request';
import '../../../style/homepage/ContentSection.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { Link } from "react-router-dom";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='next'
        onClick={onClick}
      >
        <GrFormNext size={40} className='icon'/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='prev'
        onClick={onClick}
      >
        <GrFormPrevious size={40} className='icon'/>
      </div>
    );
  }

export default function CarouselCont (props){

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    useEffect(()=>{
       GetData()
    },[])

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
                   <Link to={(`/${item.id}`)} state={item}>
                    <div className="carousel-item">
                     <div className="item-content">
                      <div className="title-cont">
                        <p>{item.title}</p>

                      </div>
                      <img className="img" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                    </div>
                   </div>
                   </Link>
                ))
            }


        </Slider>
    )
}