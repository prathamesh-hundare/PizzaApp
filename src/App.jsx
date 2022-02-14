import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Deals from "./components/deals/Deals";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import './app.scss'
import { useState } from "react";
import Navbarlist from "./components/navbarlist/Navbarlist";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Navbarlist menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Menu/>
        <Deals/>
        <Reviews/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
