const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    default: null
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Menu', menuSchema);