import React from "react";

export default function AllTimeList({ list }) {
  return (
    <div className='TopList'>
      <ul>
        {list.map(
          (
            { image_url, title, episodes, rank, score, start_date, end_date },
            index
          ) => (
            <li className='TopListItem' key={index} index={index}>
              <span>
                <b>#{rank}</b>
              </span>
              <img src={image_url} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>Episode: {episodes || "???"}</p>
                <p>Score: {score}</p>
                <p>
                  Aired: {start_date} - {end_date}{" "}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
