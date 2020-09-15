const express=require("express");
const mongoose=require("mongoose");
const path=require("path");


const app=express();
const PORT=process.env.PORT || 8080;

const routes=require("./routes/api");
const { urlencoded } = require("express");

//connecting mongoose 
mongoose.connect('mongodb://localhost/keeperDevelopment',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//checking if mongoose is connected
mongoose.connection.on('connected',() => {
    console.log("Moongoose is connected!!");
});




 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api",routes);

app.listen(PORT,console.log(`Server is starting at `,(PORT)))