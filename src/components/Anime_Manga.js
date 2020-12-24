import React from "react";

export default function Anime_Manga(anime) {
  return (
    <div className='anime'>
      <div className='anime-name'>
        <h2>{anime.title}</h2>
        <h2>{anime.title_english}</h2>
      </div>
      <div>
        <img src={title.image_url} />
        <div>
          <span>
            <h4>Score: {anime.score}</h4>Scored By: {scored_by} people
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
  );
}
