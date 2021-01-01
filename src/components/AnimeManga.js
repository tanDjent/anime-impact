import React, { useEffect, useState } from "react";
import axios from "axios";
import { Anime, Manga } from "../shared";
import { useParams, useLocation } from "react-router-dom";

export default function AnimeManga() {
  const location = useLocation();
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  useEffect(() => {
    if (id) {
      const aOrM = location.pathname.includes("anime");
      if (aOrM === true) fetchList(Anime + id);
      else fetchList(Manga + id);
    }
  }, []);
  const fetchList = (api) => {
    return axios
      .get(api)
      .then(({ data }) => setAnime(data))
      .catch(() => {
        //
      });
  };

  return anime ? (
    <div className='anime'>
      <div className='anime-name'>
        <h2>{anime.title}</h2>
        <h2>{anime.title_english}</h2>
      </div>
      <div>
        <img src={anime.image_url} alt={anime.title} />
        <div>
          <span>
            <h4>Score: {anime.score}</h4>Scored By: {anime.scored_by} people
          </span>
          <h4>Ranked: {anime.rank}</h4>
          <h4>Popularity: {anime.popularity}</h4>
          {anime.type === "Manga" && (
            <p>
              {anime.type} | {anime.serializations[0].name} |{" "}
              {anime.authors[0].name}
            </p>
          )}
          {anime.type === "TV" && (
            <p>
              {anime.premiered} | {anime.type} | {anime.studios[0].name}
            </p>
          )}
        </div>
        <h4>Synopsis</h4>
        <p>{anime.synopsis}</p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}
