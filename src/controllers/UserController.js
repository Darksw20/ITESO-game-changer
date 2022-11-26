module.exports = class UserController {
  constructor() {}

  create(req, res, next) {
    console.log(req.body);
    res.send("respond with a resource");
  }

  get(req, res, next) {
    res.send("respond with a resource");
  }

  update(req, res, next) {
    res.send("respond with a resource");
  }

  delete(req, res, next) {
    res.send("respond with a resource");
  }
};
