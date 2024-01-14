import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Songs from "./pages/Songs" 
import Sell from "./pages/Sell"
import Team from "./pages/Team"
import {Route, Routes} from "react-router-dom"


function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/songs":
      component = <Songs/>
      break
    case "/sell":
      component = <Sell/>
      break
    case "/team":
      component = <Team/>
      break
  }
  return (
    <>
    <Navbar />
    <div className="container">
      {component}
    </div>
  </>
  );
}

export default App;
