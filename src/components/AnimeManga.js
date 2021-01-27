import React, { useEffect, useState } from "react";
import axios from "axios";
import { Anime, Manga } from "../shared";
import { useParams, useLocation } from "react-router-dom";

export default function AnimeManga() {
  const location = useLocation();
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  useEffect(() => {
    if (id) {
      const aOrM = location.pathname.includes("anime");
      if (aOrM === true) fetchList(Anime + id);
      else fetchList(Manga + id);
    }
    return () => void setAnime(null);
  }, [id, location.pathname]);
  const fetchList = (api) => {
    return axios
      .get(api)
      .then(({ data }) => setAnime(data))
      .catch(() => {
        setAnime({ title: "404 Not Found" });
      });
  };

  return anime ? (
    <div className='container-fluid anime'>
      <div className='row '>
        <div className='col-12 col-sm-10 offset-sm-1'>
          <h2>{anime.title}</h2>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-sm-2 anime-image offset-sm-1'>
          <img src={anime.image_url} alt={anime.title} />
        </div>
        <div className='col-12 col-sm-2 anime-score'>
          <h3 style={{ marginBottom: "1rem" }}>Ranked: {anime.rank}</h3>
          <h3>Score: {anime.score}</h3>
          <p>Scored By: {anime.scored_by} people</p>

          <h3>Popularity: {anime.popularity}</h3>
          {anime.type === "Manga" && (
            <p style={{ marginBottom: "1rem" }}>
              {anime.type} | {anime.serializations[0].name} |{" "}
              {anime.authors[0].name}
            </p>
          )}
          {(anime.type === "TV" || anime.type === "Movie") && (
            <p style={{ marginBottom: "1rem" }}>
              {anime.premiered} | {anime.type} | {anime.studios[0].name}
            </p>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-sm-10 offset-sm-1 anime-name  mt-3'>
          <h6>Japanese Title: {anime.title}</h6>
          <h6>English Title: {anime.title_english}</h6>
        </div>
        <div className='col-12 col-sm-10 offset-sm-1 mt-3'>
          <h2>Synopsis:</h2>
          <p className='fs-5'>{anime.synopsis}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='d-flex justify-content-center align-items-center loader'>
      <div className='spinner-grow' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
