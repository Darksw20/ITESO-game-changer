const Controller = require("./controller");

module.exports = class TeamController extends Controller {
  constructor() {}

  create(req, res, next) {
    res.send("respond with a resource");
  }

  getInfo(req, res, next) {
    res.send("respond with a resource");
  }

  getMembers(req, res, next) {
    res.send("respond with a resource");
  }

  update(req, res, next) {
    res.send("respond with a resource");
  }

  delete(req, res, next) {
    res.send("respond with a resource");
  }
};
