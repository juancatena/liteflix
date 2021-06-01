import { useSpring, animated } from "react-spring";
import "./App.css";
import Home from "./pages/Home";

function App() {
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
