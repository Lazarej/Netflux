import { useEffect, useState } from "react";
import "../../style/movie/movie.css";
import { IoIosTimer } from "react-icons/io";
import axios from "../../callApi/axios";

export default function Banner(props) {

  const [streaming, setStreaming] = useState(false);
  const [video , setVideo] = useState({});

  useEffect(()=>{
  },[])

  const playMediaVideo = async () =>{
    const request = await axios.get(`movie/${props.detail.id}/videos?api_key=b9d55f3b02332772a508f7b5ee25fa5f&language=FR`);
    const trailer = request.data.results.filter((vid)=>{
            return  vid.type === 'Trailer' && vid.site === 'YouTube'
    })
    console.log('request',request)
    setVideo(prev => prev = trailer[0])
    setStreaming(prev => prev = true)
  }

  return (
    <section className="movie-banner">
      <div className="left">
        <div className="content-cont">
            <h3>{props.detail?.title}</h3>
            <div className="movie-info-row">
            
            <div className="start-container">
            <p>{Math.round(props.detail?.vote_average * 10) / 10}</p>
              <div className={props.detail?.vote_average > 0 ? "stars-active" : "stars"}></div>
              <div className={props.detail?.vote_average > 2 ? "stars-active" : "stars"}></div>
              <div className={props.detail?.vote_average > 4 ? "stars-active" : "stars"}></div>
              <div className={props.detail?.vote_average > 6 ? "stars-active" : "stars"}></div>
              <div className={props.detail?.vote_average > 8 ? "stars-active" : "stars"}></div>
          
            </div>
            <div className="runtime">
            <IoIosTimer style={{marginRight: '5px'}} color="white"/>
              <p>{props.detail?.runtime} min</p>
            </div>
            </div>
            <p>{props.detail?.overview}</p>
            <div className="movie-row">
               <button className="banner-btn" onClick={() => playMediaVideo()} >Regarder</button>
               <button className="banner-btn">Ajouter a ma liste</button>
            </div>
        </div>
      </div>
      <div className="right"
      style={{
        backgroundSize:'cover',
        backgroundPosition: 'center top',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.detail?.poster_path}')`
      }}>
        <span className="poster-fade"/>
      </div>
      {
        streaming === true ?
        <div className="video-container">
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.key}?autoplay=1`} title={video.name} frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div> : null
      }
    </section>
  );
}
