 import React,{useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";
import axios from "axios";


function App(){

    const [array,setArray]=useState([]);

    function handleClick(noteContent){
       setArray(prevValue =>{
           return(
            [...prevValue,noteContent]
           )
        })

       
    }

    useEffect(() => {
        getNote();
    },[]);

    function getNote() {
        axios.get("/api")
        .then((response) => {
            const data= response.data;
            setArray(data);
            console.log("Data has been recieved");
        })
        .catch( () =>{
            alert("Error retriving details");
        })
    };

    function handleDelete(id){
        
        console.log(id);
        
        axios.post(`/api/delete/${id}`)
        
        .then(() =>{

            console.log("This Data was deleted");    
        })
        .catch((error) =>{
            console.log(error);

        })
        
        setArray((prevValue)=> {return(
                prevValue.filter((note) =>{
                    return( (note._id!==id))
              })
        
        )})
       
    }

    


    return(
        <div>
            <Header />

            <CreateArea handle={handleClick} />
            
           
            {array.map((note,index) =>{
                return(<Notes 
                key={index}
                _id={note._id}
                title={note.title} 
                content={note.content}
                click={handleDelete}
                 />)})}
    
            <Footer />
            
        </div>
    );
  
}

export default App;



