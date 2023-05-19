const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {type: String, required: true},
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Menu', menuSchema);