import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/:id" element={<Movie/>} />
    </Routes>
  );
}

export default App;
