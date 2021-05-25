import React, { useState, useEffect } from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Modal from "../components/modal/Modal";
import MyMoviesRow from "../components/myMoviesRow/MyMoviesRow";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState([{ name: "Juan Carlos" }]);

  useEffect(() => {
    let data = localStorage.getItem("movies");
    if (data != null) {
      setMovie(JSON.parse(data));
    } else {
      setMovie([{ name: "Catalino Chasco" }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movie));
  }, [movie]);

  const createNewMovie = (movieName) => {
    if (!movie.find((movies) => movies.name === movieName)) {
      setMovie([...movie, { name: movieName }]);
    }
  };

  const movieRows = () =>
    movie.map((movie) => <MyMoviesRow key={movie.name} nombre={movie.name} />);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar handleModal={handleModal} />
      {isOpen && <Modal callback={createNewMovie} handleClose={handleModal} />}
      <Banner />

      <div className="home__rows">
        <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
        <Row
          title="POPULARES DE LITEFLIX"
          fetchUrl={requests.fetchPopular}
          isLargeRow
        />
        {movie.map((item) => {
          return (
            <div key={item.name}>
              <h1 className="nombre"> {item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
