import React from "react";
import CustomCarousel from "./CustomCarousel";
import TopList from "./TopList";
import AllTimeList from "./AllTimeList";
function Home({
  seasonalAnime,
  airingToday,
  topAiring,
  topUpcoming,
  allTimeTop,
  quote,
}) {
  console.log(quote);
  return (
    <div className='full'>
      <div className='main left'>
        <CustomCarousel title='Airing Today' slides={airingToday} />
        <CustomCarousel
          style={{ marginTop: "2rem" }}
          title='Seasonal Anime'
          slides={seasonalAnime}
        />
        <AllTimeList list={allTimeTop} />
      </div>

      <div className='main right'>
        <TopList slides={topAiring} title='Top Airing' />
        <br />
        <br />
        <TopList slides={topUpcoming} title='Top Upcoming' />
      </div>
    </div>
  );
}

export default Home;
