const Asset = require('../models/asset');

module.exports = {
    create,
    deleteService
}

async function create(req, res){
    try {
        const asset = await Asset.findById(req.params.id);
        asset.services.push({
            // username: req.user.username, 
            asset: req.asset,
            date: req.date,
            description: req.description,
            mileage: req.mileage,
            nextServiceDue: req.nextServiceDue,
            photoUrl: req.Location
            // username: req.user.username, 
            // userId: req.user._id
        }); //mutating a document
        await asset.save()// save it
        res.status(201).json({data: 'service added'})
    } catch(err){
        res.status(400).json({err})
    }
}

async function deleteService(req, res){
    try {
        const asset = await Asset.findOne({'services._id': req.params.id, 'services.asset': req.asset});
        asset.services.remove(req.params.id) // mutating a document
        // req.params.id is the like id 
        await asset.save() // after you mutate a document you must save
        res.json({data: 'service removed'})
    } catch(err){
        res.status(400).json({err})
    }
}