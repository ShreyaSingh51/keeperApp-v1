import Input from "./Input";
import React from "react";



function Button(props){
    return(
    
        <button type={props.type} >{props.content}</button>
    )
}

export default Button;