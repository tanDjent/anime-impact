import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./AnimeCard.css";
import { Link } from "react-router-dom";

const AnimeCard = ({
  animeData: { mal_id, image_url, title, episodes = "??", score = "??" } = {
    image_url: "",
    title: "Loading",
    episodes: "??",
    score: "??",
  },
}) => {
  return (
    <Link to={`/anime-impact/anime/${mal_id}`}>
      {title === "Loading" ? (
        <div className='spinner-grow' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <Card className='card '>
          <CardMedia className='card-image' image={image_url} />
          <CardContent className='card-title'>
            <h4 className='anime-title' title={title}>
              {title}
            </h4>
            <span className='episode d-none d-md-block'>
              <i className='fas fa-film'></i> {episodes || " ??"}
            </span>
            <span className='score d-none d-md-block'>
              <i className='fas fa-heart'></i> {score || " ??"}
            </span>
          </CardContent>
        </Card>
      )}
    </Link>
  );
};

export default AnimeCard;
