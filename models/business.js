const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: { type: String, required: true },
  // address: {
  //   city: { type: String, required: true },
  //   state: { type: String, required: true },
  //   zip: { type: Number, maxLength: 5, required: true },
  // },
  user: {  
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  menus: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Menu',
      default: null
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Business', businessSchema);
