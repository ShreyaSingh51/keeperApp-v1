import React from "react";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from "./SignUp";

function Home(){
    return(
       
       <Router>
       <div>
       <Switch>
       <Route path="/" exact component={Signup} />
       <Route path="/login" component={Login} />  
        <Route path="/register" component={Register} />
        <Route path="/notes" component={App} />
       </Switch>
       </div>
        </Router>
       

    );
}


export default Home;