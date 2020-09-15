const express=require("express");

const router=express.Router();

const Note=require("../models/NoteSchema"); 

//Routes
router.get('/',(req,res) => {
   

    Note.find({})
        .then((data) => {
            console.log("Data: ",data);
            res.json(data);
        })
        .catch((error) =>{
            console.log("Error");
        });
    
});

router.post("/save",(req,res) =>  {
    console.log("Body:",req.body);
    data=req.body;

    //Saving data to mongo database and instance of the model
     
     const newNoteSchema=new Note(data);

    //.save()  
      newNoteSchema.save((error) => {
         if(error){
             res.status(500).json({msg:"Sorry,internal servor error."});
         }else{
            res.json({
                msg:"We recieved your data"
            });
        }
        });
    
})

router.post("/delete/:NoteId",(req,res) => {
   
   
    Note.findByIdAndDelete(req.params.NoteId)
        .then((data) =>{
            console.log(data);
            res.json({
                msg:"Data was deleted"
            });
        })
        .catch(err => res.status(400).json("Error: " + err));
   
})

// router.update("/update/:NoteId",(req,res) => {
//     Note.findByIdAndUpdate(req.params.NoteId)
//     .then((data) =>{
//         console.log(data);
//         res.json({
//             message:"Data was updated"
//         });

//     })
//     .catch((error) =>{
//         res.status(400).json("Error "+err)
//     });
// })

module.exports=router; 