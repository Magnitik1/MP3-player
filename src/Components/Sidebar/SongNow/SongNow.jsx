import React, { useState } from "react";
import "./songNow.css";
import AllSongs from "../../redux/allsongs";
import { setplaylist, getplaylist } from "../../redux/allplaylists";
import { Link } from "react-router-dom";

function SongNow(props) {
  let next=()=>{
    let gp = getplaylist();
          if (gp[0] === -1) {
            gp = AllSongs.map((e) => e.id);
          }
          let temp = gp.indexOf(props.getsong) + 1;
          if (gp.length <= temp) {
            temp = 0;
          }
          props.setsong(gp[temp]);
  }
  return (
    <div className="SongNow">
      <br />
      <br />
      <img src={AllSongs[props.getsong].url} className="picture" />
      <p className="titles">{AllSongs[props.getsong].author}</p>
      <p className="titles">{AllSongs[props.getsong].name}</p>
      <audio
        src={AllSongs[props.getsong].previewURL}
        controls
        autoplay="true"
        style={{ width: "98%", minWidth: "220px" }}
        onEnded={next}
      />
      <button
        onClick={() => {
          let array = getplaylist();
          for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          setplaylist(array);
          next();
        }}
        className="shuffle"
      />
      <button
      className="prev"
        onClick={() => {
          let gp = getplaylist();
          let temp = gp.indexOf(props.getsong) - 1;
          if (0 > temp) {
            temp = gp.length - 1;
          }
          props.setsong(gp[temp]);
        }}/>
      <button
      className="next"
        onClick={() => {
          next();
        }}/>
      
    </div>
  );
}

export default SongNow;
