const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema({
  name: {type: String, required: true},
  template: {
    type: [
      {  
      displayItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          default: null,
        },
      value: {type: Number, required: true},
      style: {
        backgroundColor: { type: 'String' },
        color: { type: String },
      },
    },
  ],
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
  default: [],
},
}, {
  timestamps: true,
});


module.exports = mongoose.model('Display', displaySchema);