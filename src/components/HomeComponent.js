import React, { useState, useEffect } from "react";
import CustomCarousel from "./CustomCarousel";

function Home({ seasonalAnime }) {
  const [slides, setslides] = useState([]);
  useEffect(() => {
    if (seasonalAnime && seasonalAnime.length) {
      setslides(seasonalAnime.slice(0, 25));
    }
  }, [seasonalAnime]);

  return (
    <div className='full'>
      <div className='main left'>
        <CustomCarousel title='Seasonal Anime' slides={slides} />
      </div>
      <div className='main right'></div>
    </div>
  );
}

export default Home;
