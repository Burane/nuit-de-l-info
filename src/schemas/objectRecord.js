
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectRecordSchema = new Schema({
    object         : {type: Schema.Types.ObjectId, ref: 'Waterman', required: true},
    quantity       : {type: Number, required: true},
    comment        : String
})

objectRecordSchema
.virtual('url')
.get(function () {
  return '/objectRecord/' + this._id;
});

module.exports = mongoose.model('objectRecord', objectRecordSchema);
