import React from "react";
import "./selectSongs.css";

const SelectSongs = (props) => {
  let choose = React.createRef();
  let i = 0;
  let add = () => {
    if (choose.current.value == "on" && i % 2 == 0) {
      if (!props.state.includes(props.id)) {
        i++;
        props.state.push(props.id);}      
      
    } else {
      i++;
      for (let i = props.state.findIndex(e=>e===props.id); i < props.state.length - 1; i++) {
        props.state[i] = props.state[i + 1];
      }
      props.state.pop();
    }
  };
  return (
    <label className="container">
      {props.name}
      <input type="checkbox" ref={choose} onClick={add} />
      <span className="checkmark"></span>
    </label>
  );
};
export default SelectSongs;
