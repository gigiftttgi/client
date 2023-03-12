import "./App.css";
import Bar from "./component/Bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clubs from "./component/Clubs";
import Act from "./component/Act";
import Home from "./component/Home";
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Clubs/:id" element={<Detail />} />
        <Route path="/Activities" element={<Act />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
