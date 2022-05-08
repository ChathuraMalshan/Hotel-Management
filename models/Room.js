const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({

    roomno:{
        type:String,
        required:true
    },
    bedtype:{
        type:String,
        required:true
    },
    pricers:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tv:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    wifi:{
        type:String,
        required:true
    },
    ac:{
        type:String,
        required:true
    }
  

});

module.exports = mongoose.model('Room',RoomSchema);