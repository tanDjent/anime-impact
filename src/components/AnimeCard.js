import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./AnimeCard.css";

const AnimeCard = ({
  animeData: { image_url, title } = { image_url: "", title: "Loading" },
}) => {
  return (
    <Card className='card'>
      <CardMedia className='card-image' image={image_url} />
      <CardContent className='card-title'>
        <h4>{title}</h4>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
