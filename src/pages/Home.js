import React, { useState, useEffect, Children } from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Modal from "../components/modal/Modal";
import MyMoviesRow from "../components/myMoviesRow/MyMoviesRow";
import useWindowSize from "../utils/useWindowSize";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [mobile, setMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    let data = localStorage.getItem("movies");

    setMovie(JSON.parse(data));
    console.log(window.innerWidth);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movie));
  }, [movie]);

  const createNewMovie = (movieName, movieCategory, image) => {
    if (!movie.find((movies) => movies.name === movieName)) {
      setMovie([
        ...movie,
        { name: movieName, category: movieCategory, image: image },
      ]);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {size.width < 1080 ? (
        <div>
          <Navbar handleModal={handleModal} />
          <Banner />
          <div className="home__rows">
            <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
            <Row
              title="POPULARES DE LITEFLIX"
              fetchUrl={requests.fetchPopular}
              isLargeRow
            />
            <Row isMyMovie fetchData={movie} title="Mis Películas" />
          </div>
        </div>
      ) : (
        <div>
          <Navbar handleModal={handleModal} />
          {isOpen && (
            <Modal callback={createNewMovie} handleClose={handleModal} />
          )}
          <Banner />
          <div className="home__rows">
            <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
            <Row
              title="POPULARES DE LITEFLIX"
              fetchUrl={requests.fetchPopular}
              isLargeRow
            />
            <Row isMyMovie fetchData={movie} title="Mis Pelis" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
