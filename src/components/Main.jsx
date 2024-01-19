import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestsPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="flex flex-row gap-4 my-6">
            <button className="border font-semibold text-md bg-white text-black px-5 py-2">
              Play
            </button>
            <button className="border font-semibold text-md text-white px-5 py-2">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm ">
            Release Date: {movie?.release_date}
          </p>
          <p className="my-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
