import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.remove("visible");
    }, 500);
  }, []);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
