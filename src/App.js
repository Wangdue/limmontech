import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import NavBarElements from "./components/Navbar/NavBarElements";
import About1 from "./assets/About1";
import About2 from "./assets/About2";
import Announcement1 from "./assets/Announcement1";
import Announcement2 from "./assets/Announcement2";
import Announcement3 from "./assets/Announcement3";
import Carrer1 from "./assets/Carrer1";
import Carrer2 from "./assets/Carrer2";
import Questions1 from "./assets/Comunity1";
import Questions2 from "./assets/Comunity2";

function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About1" element={<About1 />} />
        <Route path="/About2" element={<About2 />} />
        <Route path="/Announcement1" element={<Announcement1 />} />
        <Route path="/Announcement2" element={<Announcement2 />} />
        <Route path="/Announcement3" element={<Announcement3 />} />
        <Route path="/Carrer1" element={<Carrer1 />} />
        <Route path="/Carrer2" element={<Carrer2 />} />
        <Route path="/Comunity1" element={<Questions1 />} />
        <Route path="/Comunity2" element={<Questions2 />} />
      </Routes>
    </Router>
  );
}

export default App;
