import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopList from "./TopList";
import { SearchAnime, SearchManga } from "../shared/index";
export default function SearchComponent() {
  const [searchedAnime, setSearchedAnime] = useState();
  const [searchedManga, setSearchedManga] = useState();
  const [searchError, setSearchError] = useState("");
  const itemName = useParams();
  useEffect(() => {
    axios
      .get(SearchAnime + itemName.name + "&page=1")
      .then((result) => setSearchedAnime(result.data.results))
      .catch((err) => {
        setSearchError(err);
      });
    axios
      .get(SearchManga + itemName.name + "&page=1")
      .then((result) => setSearchedManga(result.data.results))
      .catch((err) => {
        setSearchError(err);
      });

    console.log(searchError);
  }, [itemName]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {searchedAnime && (
          <div className='col-sm-6 col-12'>
            <TopList slides={searchedAnime} title='Anime' airingStatus={true} />
          </div>
        )}
        {searchedManga && (
          <div className='col-sm-6 col-12'>
            <TopList slides={searchedManga} title='Manga' airingStatus={true} />
          </div>
        )}
      </div>
    </div>
  );
}
