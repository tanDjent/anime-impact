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
  return (
    <div className='container-fluid middleComponent'>
      <div className='row'>
        <div className='col-12 col-sm-8'>
          <CustomCarousel title='Airing Today' slides={airingToday} />
          <CustomCarousel
            style={{ marginTop: "2rem" }}
            title='Seasonal Anime'
            slides={seasonalAnime}
          />
          {quote != null && (
            <div className='quote'>
              <h4>{quote[0].quote}</h4>
              <p>
                -{quote[0].character} from {quote[0].anime}
              </p>
            </div>
          )}

          <AllTimeList list={allTimeTop} />
        </div>
        <div className='col-12 col-sm-4'>
          <TopList slides={topAiring} title='Top Airing' airingStatus='true' />
          <TopList
            slides={topUpcoming}
            title='Top Upcoming'
            airingStatus='false'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
