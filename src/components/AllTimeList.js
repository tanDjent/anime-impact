import React from "react";
import { Link } from "react-router-dom";
export default function AllTimeList({ list }) {
  return (
    <>
      <h3 style={{ paddingTop: "0.5rem", color: "white" }}>Top Anime</h3>
      <div className='TopList'>
        <ul>
          {list.map(
            (
              {
                mal_id,
                image_url,
                title,
                episodes,
                rank,
                score,
                start_date,
                end_date,
              },
              index
            ) => (
              <Link
                to={`/anime-impact/anime/${mal_id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <li className='TopListItem' key={index} index={index}>
                  <span className='rank'>
                    <b>{rank}</b>
                  </span>
                  <img src={image_url} alt={title} />
                  <div>
                    <h3 className='text-truncate d-block'>{title}</h3>
                    <p>
                      Episode: {episodes || "???"} | Score: {score}
                    </p>
                    <p>
                      Aired: {start_date} - {end_date}{" "}
                    </p>
                  </div>
                </li>
              </Link>
            )
          )}
        </ul>
      </div>
    </>
  );
}
