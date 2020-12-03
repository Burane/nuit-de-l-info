
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required = true},
    desc: {type: String, required = true},
    category: {type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true}
})

productSchema
.virtual('url')
.get(function () {
  return '/product/' + this._id;
});

module.exports = mongoose.model('Object', productSchema);
