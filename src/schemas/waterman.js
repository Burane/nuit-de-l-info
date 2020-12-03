
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let WatermanSchema = new Schema({
    firstName       : {type: String, required:true},
    lastName        : {type: String, required:true},
    passwordHash    : {type: String, required:true},
    birthDate       : {type: Date  , required:true},
    startedPractice : {type: Date  , required:true}
  })

WatermanSchema
.virtual('url')
.get(function () {
  return '/waterman' + this._id;
});

module.exports = mongoose.model('Waterman', WatermanSchema);
