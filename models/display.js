const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema({
  name: {type: String},
  template: {
    userTemplate: [
      {  
      items: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
        },
    },
  ],
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


module.exports = mongoose.model('Display', displaySchema);