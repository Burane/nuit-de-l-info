
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
    name: {type: String, required = true},
    desc: {type: String, required = true},
}) 

productCategorySchema
.virtual('url')
.get(function () {
  return '/producttCategory/' + this._id;
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);
