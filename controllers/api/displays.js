const Display = require('../../models/display');
const User = require('../../models/user');

module.exports = {
  createTemplate,
  getTemplate,
  updateTemplate,

}


/*--- Render Funcitons ---*/

async function updateTemplate(req, res) {
  try {
    console.log(req.body)
    const template = await Display.findOne({ user: req.body.user })
    const find = await Display.find({ user: req.user._id })
    console.log(find)

    // await findTemplate.save()
    // res.json(findTemplate)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getTemplate(req, res) {
  try {
    const template = await Display.find({})
    res.json(template);
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function createTemplate(req, res) {
  try {
    console.log(req.body)
    const newTemplate = await Display.create(req.body);
    console.log(newTemplate)
    await newTemplate.save()
    res.json(newTemplate);
  } catch (err) {
    res.status(400).json(err);
  }
}