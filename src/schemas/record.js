
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    sessionStartDate : {type: Date, required: true},
    sessionEndDate   : {type: Date, required: true},
    spot             : {type: Schema.Types.ObjectId, ref: 'Spot'    , required: true}, 
    waterman         : {type: Schema.Types.ObjectId, ref: 'Waterman', required: true},
    objects          : [{type: Schema.Types.ObjectId, ref: 'ObjectRecord', required: true}],
    products         : [{type: Schema.Types:ObjectId, ref: 'ProductRecord', required: true}],
    comment          : String
})

recordSchema
.virtual('url')
.get(function () {
  return '/record/' + this._id;
});

module.exports = mongoose.model('Record', recordSchema);
