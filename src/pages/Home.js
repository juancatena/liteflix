import React, { useState, useEffect } from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Modal from "../components/modal/Modal";
import useWindowSize from "../utils/useWindowSize";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);

  const size = useWindowSize();

  useEffect(() => {
    let data = localStorage.getItem("movies");
    setMovie(JSON.parse(data));
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

  const sendName = (name) => {
    const newMovies = movie.filter((item) => item.name !== name);
    console.log(newMovies);
    setMovie(newMovies);
    console.log(movie);
  };

  return (
    <div>
      {size.width < 1080 ? (
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
            {movie === null ? (
              <h1 className="white">No tienes peliculas</h1>
            ) : (
              <Row
                isMyMovie
                fetchData={movie}
                title="Mis Películas"
                callback={sendName}
              />
            )}
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
            {movie === null ? (
              <h1 className="white">No tienes peliculas</h1>
            ) : (
              <Row
                isMyMovie
                fetchData={movie}
                title="Mis Películas"
                callback={sendName}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
