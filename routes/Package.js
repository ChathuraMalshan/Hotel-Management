const express = require('express');

const Package = require('../models/Package');

const router = express.Router();

//save Package

router.post('/Package/save',(req,res)=>{

    let newPackage = new Package(req.body);

    newPackage.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Package saved successfull"
        });
    });
});

//get Package

router.get('/Package',(req,res) =>{
    Package.find().exec((err,Package) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPackages:Package
        });
    });
});


//get a specific Package

router.get('/Package/:id',(req,res) =>{
    let PackageId = req.params.id;

    Package.findById(PackageId,(err,Package) =>{
        if(err){
            return res.status(400).json({success:false, err});

        }

        return res.status(200).json({
            success:true,
            Package
        });
    });
});

//update Package

router.put('/Package/update/:id',(req,res)=>{
    Package.findByIdAndUpdate(
        req.params.id,
    {
        $set:req.body
    },
    (err,Package)=>{
        if(err){
            return res.status(400).json({error:err});
        }

        return res.status(200).json({
            success:"Update Succesfully"
        });
      }    
    );
});

//delete Package

router.delete('/Package/delete/:id',(req,res) =>{
    Package.findByIdAndRemove(req.params.id).exec((err,deletedPackage) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfill",deletedPackage
        });
    });
});

module.exports = router;

