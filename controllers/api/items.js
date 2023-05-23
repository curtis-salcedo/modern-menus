const Item = require('../../models/item');
const User = require('../../models/user');
const Menu = require('../../models/menu');

module.exports = {
  create,
  getItems,
  update,
  show,
  deleteItem
}


/*--- Render Funcitons ---*/
async function deleteItem(req, res) {
  try {
    console.log(req.body)
    const item = await Item.findByIdAndDelete(req.body)
    return item;
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req, res) {
  try {
    console.log(req.params.id)
    const item = await Item.findById(req.params.id)
    res.json(item)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function update(req, res) {
  try {
    const item = await Item.findById(req.body)
    // Find old menu ID before it changes
    const oldMenuId = item.menu
    // Change all necessary variables
    item.name = req.body.name || item.name
    item.price = req.body.price || item.price
    item.description = req.body.description || item.description
    item.menu = req.body.menu || item.menus
    // Save updated item
    await item.save()
    // Get new menu ID to compare with old menu ID
    const newMenuId = item.menu
    // Only change if old does not match new
    if (oldMenuId !== newMenuId) {
      // Get old menu object
      const oldMenu = await Menu.findById(oldMenuId);
      // Remove item from old menu items array
      if (oldMenu) {
        oldMenu.items.pull(item._id)
        await oldMenu.save()
      }
      // Get new menu object
      const newMenu = await Menu.findById(newMenuId)
      // Add item to new menu items array
      if (newMenu) {
        newMenu.items.push(item);
        await newMenu.save();
      }
    }
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