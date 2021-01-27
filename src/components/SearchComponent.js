import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopList from "./TopList";
import { SearchAnime, SearchManga } from "../shared/index";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export default function SearchComponent() {
  const [searchedAnime, setSearchedAnime] = useState();
  const [searchedManga, setSearchedManga] = useState();

  const [activeTab, setActiveTab] = useState("Anime");
  const itemName = useParams();
  useEffect(() => {
    axios
      .get(SearchAnime + itemName.name + "&page=1")
      .then((result) => setSearchedAnime(result.data.results))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(SearchManga + itemName.name + "&page=1")
      .then((result) => setSearchedManga(result.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [itemName]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Tabs
            defaultActiveKey={activeTab}
            id='uncontrolled-tab'
            onSelect={(k) => {
              setActiveTab(k);
            }}
          >
            <Tab eventKey='Anime' title='Anime'>
              {searchedAnime && (
                <div className='col-12'>
                  <TopList
                    slides={searchedAnime}
                    title='Anime'
                    airingStatus={true}
                  />
                </div>
              )}
            </Tab>
            <Tab eventKey='Manga' title='Manga'>
              {searchedManga && (
                <div className=' col-12'>
                  <TopList
                    slides={searchedManga}
                    title='Manga'
                    airingStatus={true}
                  />
                </div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
