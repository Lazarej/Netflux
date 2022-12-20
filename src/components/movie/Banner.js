import { useEffect } from "react";
import "../../style/movie/movie.css";
import { IoIosTimer } from "react-icons/io";

export default function Banner(props) {

  useEffect(()=>{
    console.log()
  })

  return (
    <section className="movie-banner">
      <div className="left">
        <div className="content-cont">
            <h3>{props.detail?.title}</h3>
            <div className="movie-info-row">
            <div className="runtime">
            <IoIosTimer style={{marginRight: '5px'}} color="white"/>
              <p>{props.detail?.runtime} min</p>
            </div>
            <p>{Math.round(props.detail?.vote_average * 10) / 10}</p>
            </div>
            <p>{props.detail?.overview}</p>
            <div className="movie-row">
               <button className="banner-btn">Regarder</button>
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
        <span className="poster-fade" />
      </div>
    </section>
  );
}
