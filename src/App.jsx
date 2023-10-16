import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
