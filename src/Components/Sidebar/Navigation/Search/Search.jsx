import React, { useState, useEffect } from "react";
import "./search.css";
import searchPic from "../../../pics/search2.svg";
import Found from "./Found/Found";

const Search = (props) => {
  let [songs, setSongs] = useState();
  const allSongs = [];

  let search = (e) => {
    e.preventDefault();
    let text1 = e.target[0].value.toLowerCase().trim()
    if (text1 === "") return;
    for (let i = 0; i < props.AllSongs.length; i++) {
      if (props.AllSongs[i].name.toLowerCase().includes(text1) ||
        props.AllSongs[i].author.toLowerCase().includes(text1)) {
        allSongs.push(props.AllSongs[i]);
      }
    }
      setSongs(allSongs);
  };

  return (
    <div className="Search">
      <div className={props.theme[props.theme[0]]+" Theme"}>
      <form onSubmit={search}>
        <input
          type="text"
          id="uname"
          className="sLine"
          placeholder="Song, Artist"></input>
        <button>
          <img src={searchPic} alt="search" className="sPic" />
        </button>
      </form>
      <a className="text">Search</a>
      <Found songs={songs} AllSongs={props.AllSongs} getsong={props.getsong} setsong={props.setsong}/>
    </div>
    </div>
  );
};

export default Search;
