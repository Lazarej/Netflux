import axios from "../../../callApi/axios";
import { useEffect, useState } from "react";
import "../../../style/homepage/PosterSection.css";
import requests from "../../../callApi/request";
import PosterCarousel from "./PosterCarousel";

export default function PosterSection() {
  const [loading, setloading] = useState(true);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const request = await axios.get(requests.getPopular);
    setState((prev) => (prev = request.data.results));
    setloading((prev) => (prev = false));
  };

  return (
    <section className="section-cont">
      <PosterCarousel popularMovies={state} />
    </section>
  );
}
