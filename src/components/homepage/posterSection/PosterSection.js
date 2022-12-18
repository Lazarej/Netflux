import axios from "../../../callApi/axios";
import { useEffect, useState } from "react";
import "../../../style/homepage/PosterSection.css";
import requests from "../../../callApi/request";
import PosterCarousel from "./PosterCarousel";

export default function PosterSection() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const request = await axios.get(requests.getPopular);
    setState((prev) => (prev = request.data.results));
    setLoading((prev) => (prev = false));
  };

  return (
    <section className="section-cont">
      {
        loading === false ? 
        <PosterCarousel popularMovies={state} /> : null
      }
    </section>
  );
}
