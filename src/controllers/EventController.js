const { Event } = require("../models/Event");
const { Team } = require("../models/Team");

module.exports = class EventController {
  constructor() {}

  create(req, res, next) {
    const newEvent = Event.create(res.body);
    res.send(newEvent);
  }

  get(req, res, next) {
    res.send("respond with a resource");
  }

  list(req, res, next) {
    res.send("respond with a resource");
  }

  getTeams(req, res, next) {
    const eventId = req.params.id;
    const event = Event.get(eventId);
    const teams = Team.getList(event);
    res.send(teams);
  }

  getMatches(req, res, next) {
    res.send("respond with a resource");
  }

  update(req, res, next) {
    res.send("respond with a resource");
  }

  delete(req, res, next) {
    res.send("respond with a resource");
  }
};
