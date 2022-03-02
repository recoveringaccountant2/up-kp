const mongoose = require('mongoose');

const partsSchema = mongoose.Schema({
  description: String,
  quantity: Number,
  photoUrl: String
})

const serviceSchema = mongoose.Schema({
  serviceDate: Date,
  description: String,
  mileage: Number,
  nextServiceDue: Date,
  photoUrl: String
  })

const assetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  nickName: String,
  // assetType: {
  //   type: String,
  //   enum : ['', 'automobile','chainsaw', 'dirt bike', 'generator', 'lawn care', 'motorcycle', 'snow blower', 'other'],
  //   default: ''
  // },
  year: Number,
  make: String,
  model: String,
  // description: String,
  inServiceDate: Date,
  beginningMileage: Number,
  currentMileage: Number,
  photoUrl: String,
  service: [serviceSchema],
  parts: [partsSchema]
})

module.exports = mongoose.model('Asset', assetSchema);
