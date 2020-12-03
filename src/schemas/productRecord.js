
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productRecordSchema = new Schema({
    product        : {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    comment        : String
})

productRecordSchema
.virtual('url')
.get(function () {
  return '/productRecord/' + this._id;
});

module.exports = mongoose.model('productRecord', productRecordSchema);
