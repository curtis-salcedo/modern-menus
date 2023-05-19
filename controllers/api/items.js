const Item = require('../../models/item');

module.exports = {
  create,
}


/*--- Render Funcitons ---*/
async function create(req, res) {
  try {
    const newItem = await Item.create(req.body);
    return newItem;
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions --*/