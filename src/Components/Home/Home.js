import React from "react";
import { Link } from "react-router-dom";
import "./Home2.css";
import SearchBox from "../Search/SearchBox";

const Home = () => {
  return (
    <div className='home-container'><div className='home-content'><h1>TRIPPIE</h1><SearchBox /></div></div>
  )
}

export default Home;

