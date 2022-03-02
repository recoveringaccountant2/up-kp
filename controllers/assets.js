const Asset = require('../models/asset');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();

const BUCKET = process.env.BUCKET

module.exports = {
    create,
    index,
    deleteAsset
}

async function create(req, res){
	console.log(req.body, " <- asset create req.body", req.file, "<- asset create photo", req.user, "<- asset create req.user")
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer};
        console.log(params, "<- params from asset create function")

        s3.upload(params, async function(err, data){
            console.log(err, "<- first err from asset create function")
            console.log(data, '<- from aws asset create function') // data.Location is our photoUrl that exists on aws

            const asset = await Asset.create({
                user: req.user,
                nickName: req.body.nickName,
                // type: req.body.type,
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
                // description: req.body.description,
                inServiceDate: req.body.inServiceDate,
                beginningMileage: req.body.beginningMileage,
                currentMileage: req.body.currentMileage,
                photoUrl: data.Location
            });

            console.log(asset, "<- asset from create function")
            res.status(201).json({asset: asset})
        })

    } catch(err){
        console.log(err, "<- error from asset create function")
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        // const assets = await Asset.find({}).populate('user').exec()
        // console.log(req.body, "<- req.body from ctrl asset index function", req.body.user, "<- req.body.user from ctrl asset index function")
        // console.log(req.user._id, "<- req.user._id from ctrl asset index function")
        // console.log(Asset.find(), "<-- you are here")
        const assets = await Asset.find({user: req.user._id}).sort({nickNake: -1}).lean();
        // console.log(assets, "assets from ctrl asset index function")
        res.status(200).json({assets})
    } catch(err){
        res.json({err})
    }
}

// async function index(req, res){
//     try {
//         const assets = await Asset.find({}).populate('user').exec()
//         res.status(200).json({assets})
//     } catch(err){
//         res.json({err})
//     }
// }

// async function deleteAsset(req, res){
//     try {
        
//         const asset = await Asset.findOne({'assets._id': req.params.id, 'assets.username': req.user.username});
//         asset.remove(req.params.id) // mutating a document
//         // req.params.id is the like id 
//         await asset.save() // after you mutate a document you must save
//         res.json({data: 'asset removed'})
//     } catch(err){
//         res.status(400).json({err})
//     }
// }

async function deleteAsset(req, res) {
    try {
      await Asset.deleteOne({
        _id: req.params.id
      });
      res.status(200).json({});
    } catch (err) {
      console.log(err, "error in assets controller deleteAsset function");
      res.status(400).json({err})
    }
  }