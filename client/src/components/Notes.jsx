import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function Notes(props){
    return(<div className="notes">
    <h1>{props.title}</h1>
    <p>{props.content.substring(0,50)}</p>
    <button onClick={() => {props.click(props._id)}}><DeleteIcon /></button>
    
    </div>);
}

export default Notes;