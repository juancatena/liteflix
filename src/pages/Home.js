import React from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
      <Row
        title="POPULARES DE LITEFLIX"
        fetchUrl={requests.fetchPopular}
        isLargeRow
      />
    </div>
  );
}

export default Home;
