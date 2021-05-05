import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Page from "./Page";
import { Link, useParams, useHistory } from "react-router-dom";
export default function List() {
  var { type } = useParams();

  const [activeTab, setActiveTab] = useState();
  const history = useHistory();
  useEffect(() => {
    setActiveTab(type);
  }, [type]);
  const pushHistory = (s) => history.push("/anime-manga/" + s);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mr-auto'>
          <Breadcrumb>
            <Breadcrumb.Item>
              {" "}
              <Link to='/home'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{activeTab}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='col-12'>
          <Tabs
            activeKey={activeTab}
            id='uncontrolled-tab'
            onSelect={(k) => {
              setActiveTab(k);
              pushHistory(k);
            }}
          >
            <Tab eventKey='TopAnime' title='Top Anime'>
              <Page listType='TopAnime' />
            </Tab>
            <Tab eventKey='SeasonalAnime' title='Seasonal Anime'>
              <Page listType='SeasonalAnime' />
            </Tab>
            <Tab eventKey='TopMovie' title='Top Movie'>
              <Page listType='TopMovie' />
            </Tab>
            <Tab eventKey='TopAiring' title='Top Airing'>
              <Page listType='TopAiring' />
            </Tab>
            <Tab eventKey='TopUpcoming' title='Top Upcoming'>
              <Page listType='TopUpcoming' />
            </Tab>
            <Tab eventKey='TopManga' title='Top Manga'>
              <Page listType='TopManga' />
            </Tab>
            <Tab eventKey='TopOneshots' title='Top Oneshots'>
              <Page listType='TopOneshots' />
            </Tab>
            <Tab eventKey='TopLightNovel' title='Top Light Novel'>
              <Page listType='TopLightNovel' />
            </Tab>
            <Tab eventKey='TopDoujinshi' title='Top Doujinshi'>
              <Page listType='TopDoujinshi' />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
