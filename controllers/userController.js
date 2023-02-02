let services = require('../services/userServices');

const users = [];
let id = 0;

exports.getHomePage = (req, res) => {
  res.send('Hello World');
};

exports.getUserById = (req, res) => {
  let id = parseInt(req.params.id);
  let user = services.getUserById(id);
  res.json(({data: user}));
};

exports.postUser = (req, res) => {
  let user = req.body;
  let result = services.postUser(user.name, user.age);
  res.json({data: result});
}
