import React, { useState, useEffect, Children } from "react";
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
      setMovie([{ name: "Prueba" }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movie));
  }, [movie]);

  const createNewMovie = (movieName, movieCategory, image) => {
    console.log(movieName);
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
        <Row isMyMovie fetchData={movie} title="Mis Pelis" />

        {/* {movie.map((item) => {
          return (
            <MyMoviesRow
              key={item.name}
              name={item.name}
              category={item.category}
              src={item.image}
              content={
                <button
                  onClick={() => {
                    const newMovies = movie.filter(
                      (mov) => mov.name !== item.name
                    );
                    setMovie(newMovies);
                  }}
                >
                  ELMINIARRR
                </button>
              }
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Home;
