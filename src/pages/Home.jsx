import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestsUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestsPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestsTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestsTopRated} />
      <Row rowID="5" title="Action" fetchURL={requests.requestsAction} />
      <Row rowID="6" title="Comedy" fetchURL={requests.requestsComedy} />
      <Row rowID="7" title="Romance" fetchURL={requests.requestsRomance} />
      <Row rowID="8" title="Horror" fetchURL={requests.requestsHorror} />
      <Row rowID="9" title="TV Shows" fetchURL={requests.requestsShows} />
    </div>
  );
};

export default Home;
