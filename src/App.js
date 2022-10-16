import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SocialIcon></SocialIcon> 
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
        <Route path = "/contact" element = {<Contact></Contact>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
