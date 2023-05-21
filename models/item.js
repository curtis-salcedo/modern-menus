const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu',
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);