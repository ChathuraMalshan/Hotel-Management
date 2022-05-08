const express = require('express');

const Room = require('../models/Room');

const router = express.Router();

//save Room

router.post('/Room/save',(req,res)=>{

    let newRoom = new Room(req.body);

    newRoom.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Room saved successfull"
        });
    });
});

//get Room

router.get('/Room',(req,res) =>{
    Room.find().exec((err,Room) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRoom:Room
        });
    });
});


//get a specific Room

router.get('/Room/:id',(req,res) =>{
    let RoomId = req.params.id;

    Room.findById(RoomId,(err,Room) =>{
        if(err){
            return res.status(400).json({success:false, err});

        }

        return res.status(200).json({
            success:true,
            Room
        });
    });
});

//update Room

router.put('/Room/update/:id',(req,res)=>{
    Room.findByIdAndUpdate(
        req.params.id,
    {
        $set:req.body
    },
    (err,Room)=>{
        if(err){
            return res.status(400).json({error:err});
        }

        return res.status(200).json({
            success:"Update Succesfully"
        });
      }    
    );
});

//delete Room

router.delete('/Room/delete/:id',(req,res) =>{
    Room.findByIdAndRemove(req.params.id).exec((err,deletedRoom) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfill",deletedRoom
        });
    });
});

module.exports = router;

