import React, { useEffect } from "react";
import TopList from "./TopList";
import { AllTimeTop, SeasonalAnime, TopManga } from "../shared";
import axios from "axios";

import { Button } from "reactstrap";

export default function Page({ listType }) {
  const [list, setList] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  useEffect(() => {
    fetchList(listType, pageNum);
  }, [listType, pageNum]);
  const fetchList = async (listType, pageNum = 1) => {
    let api = "";
    if (listType === "TopAnime") {
      api = AllTimeTop + pageNum;
    } else if (listType === "TopAiring") {
      api = AllTimeTop + pageNum + "/airing";
    } else if (listType === "TopUpcoming") {
      api = AllTimeTop + pageNum + "/upcoming";
    } else if (listType === "SeasonalAnime") {
      api = SeasonalAnime;
    } else if (listType === "TopMovie") {
      api = AllTimeTop + pageNum + "/movie";
    } else if (listType === "TopManga") {
      api = TopManga + pageNum;
    } else if (listType === "TopOneshots") {
      api = TopManga + pageNum + "/oneshots";
    } else if (listType === "TopLightNovel") {
      api = TopManga + pageNum + "/novels";
    } else if (listType === "TopDoujinshi") {
      api = TopManga + pageNum + "/doujin";
    }
    try {
      const { data } = await axios.get(api);
      setList((list) =>
        data.hasOwnProperty("top")
          ? [...list, ...data.top]
          : [...list, ...data.anime]
      );
    } catch {
      setList([{ title: "404 Not Found" }]);
    }
  };
  return (
    <div className='anime-page px-5'>
      <TopList
        slides={list}
        title={listType}
        airingStatus={listType === "TopUpcoming"}
      />
      <Button className='w-100' onClick={() => setPageNum((p) => p + 1)}>
        Load More
      </Button>
    </div>
  );
}
