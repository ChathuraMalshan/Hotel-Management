const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({

    PackageId:{
        type:String,
        required:true
    },
    Packagename:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Package',packageSchema);