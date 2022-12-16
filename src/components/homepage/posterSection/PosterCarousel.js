import { useEffect, useState } from "react";
import "../../../style/homepage/PosterSection.css";


export default function PosterCarousel (props){
    
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
          if (index <= props.popularMovies.length -2 ) {
            setIndex((index) => index + 1);
          } else {
            setIndex((index) => (index = 0));
          }
        }, 15000);
        console.log(props)
        return () => {
          clearInterval(interval);
        };
      }, [index]);

      return(
          
        <div
        
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${props.popularMovies[index]?.backdrop_path})`,
            backgroundPosition: "center top",
          }}
          className="poster-section">
            <div className="fade">
            <div className="info-cont">
                <h2 className="poster-title">{props.popularMovies[index]?.title || props.popularMovies[index]?.original_title}</h2>
                <div className="info-row">
                  <button>Regarder</button>
                  <button>Ma liste</button>
                </div>
                <p>{props.popularMovies[index]?.overview}</p>
            </div>
            </div>
        </div>
      )
    
}