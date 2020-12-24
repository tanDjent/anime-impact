import React from "react";
import "./TopList.css";
export default function TopList({ slides, title }) {
  return (
    <div>
      <h3 style={{ paddingTop: "0.5rem" }}>{title}</h3>
      <ul className='TopList'>
        {slides.map(({ image_url, title, episodes, rank, score }, index) => (
          <li className='TopListItem' key={index} index={index}>
            <span>
              <b>#{rank}</b>
            </span>
            <img src={image_url} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>Episode: {episodes || "???"}</p>
              <p>Score: {score}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
