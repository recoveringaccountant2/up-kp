const Asset = require('../models/asset');

const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();

const BUCKET = process.env.BUCKET_NAME

module.exports = {
    create,
    index
}

function create(req, res){
	console.log(req.body, " <- req.body", req.file, "<- photo", req.user, "<- req.user")
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){

            const asset = await Asset.create({
                user: req.user,
                type: req.type,
                year: req.year,
                make: req.make,
                model: req.model,
                description: req.description,
                inServiceDate: req.inServiceDate,
                beginningMileage: req.beginningMileage,
                currentMileage: req.currentMileage,
                photoUrl: data.Location
            });

            console.log(asset)
            res.status(201).json({asset: asset})
        })

    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const assets = await Asset.find({}).populate('user').exec()
        res.status(200).json({assets})
    } catch(err){
        res.json({err})
    }
}

