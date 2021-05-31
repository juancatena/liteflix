import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.remove("visible");
    }, 500);
  }, []);

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.div style={fade} className="app">
      <Home />
    </animated.div>
  );
}

export default App;
