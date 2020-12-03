
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  })

recordSchema
.virtual('url')
.get(function () {
  return '/record/' + this._id;
});

module.exports = mongoose.model('Record', recordSchema);
