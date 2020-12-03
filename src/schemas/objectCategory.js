
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectCategorySchema = new Schema({
    name: {type: String, required = true},
    desc: {type: String, required = true},
})

objectCategorySchema
.virtual('url')
.get(function () {
  return '/objectCategory/' + this._id;
});

module.exports = mongoose.model('ObjectCategory', objectCategorySchema);
