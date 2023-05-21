import React from 'react';
import './modal.css';
import SelectSongs from './SelectSongs/SelectSongs';

const Modal = (props) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                props.state.length=1;
                props.onClose();
                break;
            default:
                
        }
    };
    let newPlaylistElement = React.createRef();

    let createPlaylist = () => {
        if((newPlaylistElement.current.value).trim()==""||(newPlaylistElement.current.value).includes('/')){
            return;
        }
        let mysongs=[];
        for(let i=0;i<props.state.length;i++){
            if(!isNaN(props.state[i])){
                mysongs.push(props.state[i]);
            }
        }
        let temp ={
        id: props.allplaylists.length+1,
        name:(newPlaylistElement.current.value).trim(),
        picture:props.AllSongs.find(e=>e.id==mysongs[0]).url,
        songs:mysongs,
    };   
        if(temp.name==""||mysongs.length<1||props.allplaylists.find(e=>e.name===temp.name)||temp.name.includes("%20")){props.onClose();props.state.length=1;return;}
        props.allplaylists.push(temp);
        props.onClose();
        props.state.length=1;
        
      };


    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });
    
    let AllSongs2=props.AllSongs.map(e=><SelectSongs name={e.name} id={e.id} state={props.state}/>);

    return !props.isVisible ? null : (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-close" onClick={props.onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        <input className="listName" type="text" ref={newPlaylistElement} placeholder='Playlist Name' />
                    </div>
                    {AllSongs2}
                </div>
                {props.footer && <div className="modal-footer" onClick={createPlaylist}>{props.footer}</div>}
            </div>
        </div>
    );
};
export default Modal