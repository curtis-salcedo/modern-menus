const Business = require('../../models/business');

module.exports = {
  create,
  // index,
  getBusiness,
}


/*--- Render Funcitons ---*/
async function create(req, res) {
  try {
    const newBusiness = await Business.create(req.body);
    return newBusiness;
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function index(req, res) {
//   try {
//     const userBusiness = await Business.findOne({
//       user: req.user._id
//     })
//     res.json(userBusiness)
//   } catch (err) {
//     res.status(400).json(err)
//   }
// }

async function getBusiness(req, res) {
  try {
    // NEED TO REFACTOR TO BE MORE SPECIFIC
    const business = await Business.find();

    res.json(business);
  } catch (error) {
    res.status(400).json({ error: 'Error finding your business' });
  }
}

/*--- Helper Functions --*/