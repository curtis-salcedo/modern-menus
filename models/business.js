const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: { type: String, required: true },
  user: {  
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  menus: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        default: null
      },
    ],
    validate: [limitMenuAmount, '{PATH} exceeds the limit of 6'],
  },
}, {
  timestamps: true,
});

function limitMenuAmount(val) {
  return val.length <= 6
}

module.exports = mongoose.model('Business', businessSchema);
