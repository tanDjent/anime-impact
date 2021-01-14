import React from "react";
import "./TopList.css";
import { Link } from "react-router-dom";
export default function TopList({ slides, title, airingStatus }) {
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
              to={`/anime/${mal_id}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              {" "}
              <li className='TopListItem' index={index}>
                <span className='rank'>
                  <b>{rank}</b>
                </span>
                <img src={image_url} alt={title} />

                {airingStatus === "true" && (
                  <div>
                    <h4>{title}</h4>
                    <p>Episode: {episodes || "???"}</p>
                    <p>Score: {score}</p>
                  </div>
                )}
                {airingStatus === "false" && (
                  <div>
                    <h4>{title}</h4>
                    <p>Airing date: {start_date}</p>
                  </div>
                )}
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
