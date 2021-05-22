import React from "react";
import Row from "../components/row/Row";
import requests from "../utils/requests";

function Home() {
  return (
    <div>
      <Row title="Próximamente" fetchUrl={requests.fetchUpcoming} />
      <Row title="POPULARES DE LITEFLIX" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default Home;
