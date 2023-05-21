const Business = require('../../models/business');
const User = require('../../models/user');

module.exports = {
  createBusiness,
  getBusiness,
  index
}

/*--- Render Funcitons ---*/
async function index(req, res) {

}

async function createBusiness(req, res) {
  try {
    const newBusiness = await Business.create(req.body);
    return res.json(newBusiness)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getBusiness(req, res) {
  try {
    const business = await Business.find({})
    res.json(business);
  } catch (err) {
    res.status(400).json({ err });
  }
}

/*--- Helper Functions --*/