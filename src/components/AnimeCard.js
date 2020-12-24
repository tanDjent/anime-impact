import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./AnimeCard.css";

const AnimeCard = ({
  animeData: { image_url, title, episodes = "??", score = "??" } = {
    image_url: "",
    title: "Loading",
    episodes: "??",
    score: "??",
  },
}) => {
  return (
    <Card className='card'>
      <CardMedia className='card-image' image={image_url} />
      <CardContent className='card-title'>
        <h4 className='anime-title' title={title}>
          {title}
        </h4>
        <span className='episode'>
          <i className='fas fa-film'></i> {episodes || " ??"}
        </span>
        <span className='score'>
          <i className='fas fa-heart'></i> {score || " ??"}
        </span>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
