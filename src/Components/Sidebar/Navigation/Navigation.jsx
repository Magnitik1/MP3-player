import React from "react";
import "./navigation.css";
import homePic from "../../pics/navPics/home.svg";
import searchPic from "../../pics/navPics/search.svg";
import libraryPic from "../../pics/navPics/library.svg";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul className="nav">
        <Link to="/" style={{textDecoration: 'none'}}>
          <li >
            <img src={homePic} alt="home" />
             <a className="al">&nbsp;&nbsp;Home</a>
          </li>
        </Link>
        <Link to="/Search" style={{textDecoration: 'none'}}>
          <li>
            <img src={searchPic} alt="search" />
            <a className="al">&nbsp;&nbsp;Search</a>
          </li>
        </Link>
        <Link to="/Library" style={{textDecoration: 'none'}}>
          <li>
            <img src={libraryPic} alt="library" />
            <a className="al">&nbsp;&nbsp;Library</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
