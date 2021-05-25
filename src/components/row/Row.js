import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./Row.css";
import Poster from "../poster/Poster";
import PosterLarge from "../posterLarge/PosterLarge";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 4));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
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
