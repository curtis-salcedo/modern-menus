const Item = require('../../models/item');
const menu = require('../../models/menu');
const Menu = require('../../models/menu');

module.exports = {
  create,
  getItems,
  update
}


/*--- Render Funcitons ---*/
async function update(req, res) {
  try {
    const item = await Item.findById(req.body._id);
    await item.save()
    res.json(item)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getItems(req, res) {
  try {
    const items = await Item.find({})
      .populate('menu')
    res.json(items);
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function create(req, res) {
  try {
    const newItem = await Item.create(req.body);
    const menu = await Menu.findById(newItem.menu._id);
    menu.items.push(newItem)
    await menu.save()
    await Item.save()
    res.json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions --*/