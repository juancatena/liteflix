import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./Row.css";
import Poster from "../poster/Poster";
import PosterLarge from "../posterLarge/PosterLarge";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  fetchData,
  isMyMovie,
  handleCaca,
}) {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 4));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {isMyMovie
          ? fetchData.map((item) => {
              return (
                <Poster
                  key={item.image}
                  url={item.image}
                  title={item.name}
                  category={item.category}
                  data={fetchData}
                  // content={
                  //   <button
                  //     onClick={() => {
                  //       const newMovies = fetchData.filter(
                  //         (mov) => mov.name !== item.name
                  //       );
                  //       console.log("ACASI", newMovies);
                  //     }}
                  //   >
                  //     ELMINIARRR
                  //   </button>
                  // }
                />
              );
            })
          : movies.map((movie) => {
              return isLargeRow ? (
                <PosterLarge
                  key={movie.id}
                  url={`
              https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  title={movie?.title || movie?.name || movie?.original_name}
                />
              ) : (
                <Poster
                  key={movie.id}
                  url={`
            https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie?.title || movie?.name || movie?.original_name}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Row;
