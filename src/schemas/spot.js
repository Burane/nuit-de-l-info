
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spotSchema = new Schema({
    name: {type: String, required: true} ,
    desc: {type: String, required: false}, 
    lat : {type: Number, required: true} ,
    lon : {type: Number, required: true}
})

recordSchema
.virtual('url')
.get(function () {
  return '/spot/' + this._id;
});

module.exports = mongoose.model('Spot', recordSchema);
