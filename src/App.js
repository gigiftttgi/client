import "./App.css";
import Bar from "./component/Bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clubs from "./component/Clubs";
import Act from "./component/Act";
import Home from "./component/Home";
import Detail from "./component/Detail";
import Join from "./component/Join";
import Complete from "./component/Complete";
import Fail from "./component/Fail";

function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Clubs/:id" element={<Detail />} />
        <Route path="/Clubs/:id/Join" element={<Join />} />
        <Route path="/Activities" element={<Act />} />
        <Route path="/Activities/:id" element={<Detail />} />
        <Route path="/Activities/:id/Join" element={<Join />} />
        <Route path="/Complete" element={<Complete />} />
        <Route path="/Fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
