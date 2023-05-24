const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {type: String, required: true},
  items: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        default: null,
      },
    ],
    validate: [limitItemArray, '{PATH} exceeds the limit of 8'],
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  user: {  
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

function limitItemArray(val) {
  return val.length <= 8
}

module.exports = mongoose.model('Menu', menuSchema);