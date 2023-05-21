import React,{useState} from "react";
import "./found.css";

const Found = (props) => {
  let temp="";
  if(props.songs!==undefined)
  temp = props.songs.map(e=>
  <div className="choosesong" onClick={()=>{props.setsong(e.id)}}>
  <br />
  {e.name} - {e.author}
  <br />
  <img src={e.url} style={{borderRadius:"10px", height:"80px", width:"80px" }} />
  <br />
  <br />
</div>)
  return (
    <div className="Found">
        <div style={{marginTop:"80px", width:"120%"}}>{temp}</div>
    </div>
  );
};

export default Found;
