const Menu = require('../../models/menu');
const Business = require('../../models/business');


module.exports = {
  create,
  index,
  getMenus,
  update,
  show,
  deleteMenu,
}

/*--- Render Funcitons ---*/

async function deleteMenu(req, res) {
  try {
    console.log(req.body, req.params.id)
    const menu = await Menu.findByIdAndDelete(req.params.id)
    res.json(menu);
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req, res) {
  try {
    const menu = await Menu.findById( req.params.id )
    res.json(menu)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function update(req, res) {
  try {
    const menu = await Menu.findById(req.body._id);
    await menu.save()
    res.json(menu)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getMenus(req, res) {
  try {
    const menus = await Menu.find({})
    res.json(menus);
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function index(req, res) {

}

async function create(req, res) {
  try {
    const newMenu = await Menu.create(req.body);
    const business = await Business.findOne({ _id: req.body.business })
    business.menus.push(newMenu._id);
    await business.save()
    res.json(newMenu);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions --*/