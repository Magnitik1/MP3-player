import React, { useState } from "react";
import "./library.css";
import PlayLists from "./Playlists/Playlists";
import Modal from "./Model/Modal";
function Library(props) {
  const [isModal, setModal] = useState(false);

  let PlyListsElements = props.allplaylists.map((Element) => (
    <PlayLists name={Element.name} picture={Element.picture} id={Element.id} songs={Element.songs} 
    AllSongs={props.AllSongs} allplaylists={props.allplaylists} theme={props.theme}/>
  ));
  return (
    <div className="Library">
      <div className={props.theme[props.theme[0]]+" Theme"}>
      <a className="text">Your Libraries</a>
        {PlyListsElements}
      <button className="AddNew" onClick={() => setModal(true)}>
        +
      </button>
     
      <Modal isVisible={isModal}
                footer={<button className="button1">Create Playlist</button>}
                onClose={() => setModal(false)} 
                AllSongs={props.AllSongs} allplaylists={props.allplaylists} theme={props.theme} state={props.state}/>
    </div></div>
  );
}

export default Library;
