import React from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="home__rows">
        <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
        <Row
          title="POPULARES DE LITEFLIX"
          fetchUrl={requests.fetchPopular}
          isLargeRow
        />
      </div>
    </div>
  );
}

export default Home;
