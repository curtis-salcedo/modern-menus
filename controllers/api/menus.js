const Menu = require('../../models/menu');
const Business = require('../../models/business')

module.exports = {
  create,
}

/*--- Render Funcitons ---*/
async function create(req, res) {
  try {
    const newMenu = await Menu.create(req.body);
    return newMenu;
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions --*/