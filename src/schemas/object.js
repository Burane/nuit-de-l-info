
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectSchema = new Schema({
    name: {type: String, required = true},
    desc: {type: String, required = true},
    category: {type: Schema.Types.ObjectId, ref: 'ObjectCategory', required: true}
})

objectSchema
.virtual('url')
.get(function () {
  return '/object/' + this._id;
});

module.exports = mongoose.model('Object', objectSchema);
