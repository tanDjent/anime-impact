import React from "react";
import "./TopList.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function TopList({ slides, title, airingStatus }) {
  const location = useLocation();
  let animeOrManga;
  if (
    location.pathname.includes("TopManga") ||
    location.pathname.includes("TopOneshots") ||
    location.pathname.includes("TopLightNovel") ||
    location.pathname.includes("TopDoujinshi") ||
    title.includes("Manga")
  )
    animeOrManga = "manga";
  else animeOrManga = "anime";
  return (
    <div>
      <h3 style={{ paddingTop: "0.5rem", color: "white" }}>{title}</h3>
      <ul className='TopList'>
        {slides.map(
          (
            { image_url, title, episodes, rank, score, mal_id, start_date },
            index
          ) => (
            <Link
              to={`/${animeOrManga}/${mal_id}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              {" "}
              <li className='TopListItem ' index={index}>
                <span className='rank'>
                  <b>{index + 1}</b>
                </span>
                <img src={image_url} alt={title} />

                <div className='my-0 w-75' title={title}>
                  <h4 className='w-100 text-truncate d-block'>{title}</h4>
                  {airingStatus && <p>Episode: {episodes || "???"}</p>}
                  {airingStatus && <p>Score: {score}</p>}
                  {airingStatus || <p>Airing date: {start_date}</p>}
                </div>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
