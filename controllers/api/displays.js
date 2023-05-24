const Display = require('../../models/display');

module.exports = {
  createTemplate,
}


/*--- Render Funcitons ---*/

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