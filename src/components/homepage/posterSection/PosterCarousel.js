import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../style/homepage/PosterSection.css";

export default function PosterCarousel(props) {
  const [index, setIndex] = useState(0);
  const [setting, setSetting] = useState({
    lazyLoad: true,
    fade: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    cssEase: "linear",
  });

  useEffect(() => {}, []);

  return (
    <Slider {...setting} className={"slider"}>
      {props.popularMovies.map((popularMovie, index) => (
        <div key={index}>
          <div
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path})`,
              backgroundPosition: "center top",
            }}
            className="poster-section"
          >
            <div className="fade">
              <div className="info-cont">
                <h2>{popularMovie.title || popularMovie.original_title}</h2>
                <div className="info-row">
                  <button>Regarder</button>
                  <button>Ma liste</button>
                </div>
                {
                  popularMovie.overview.length < 350 ?
                  <p>{popularMovie.overview}</p> :
                  <p>{popularMovie.overview.substring(0,350)} ...</p>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
