import React, { useState } from "react";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props){

    const[noteContent,setContent]=useState({
        
        title:"",
        content:""
    });

    const[expand,setArea]=useState(false);

    
    function handleChange(event){
        
        const {name,value}=event.target;
        setContent((prevValue) =>{
        
            return{
                ...prevValue,
                [name]:value,
                
            }
        })
    }

    function handleArea(){
        setArea(true);
    }

    function submitNote(event){
        event.preventDefault();
        
        props.handle(noteContent)

        axios({
            url:'/api/save',
            method:'POST',
            data:noteContent
        })
        .then(() => {
            console.log("Data has been sent to the server");
        })
        .catch(error => {
            console.log("Internal servor error.");
        });

        setContent(() =>{
           return{ 
               title:"",
            content:""}
        })
        window.location = "/";}

    return (
    <div>
    <form className="createNote">
    {expand ? <input onChange={handleChange} name="title" placeholder="Title"  value={noteContent.title} row="1" /> : null }
        

        <textarea  onClick={handleArea} onChange={handleChange} name="content" placeholder="Take a Note...."  value={noteContent.content} rows={expand ? "3" : "1"} />
        <Zoom in={expand}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
    </form>
    </div>);
}

export default CreateArea;