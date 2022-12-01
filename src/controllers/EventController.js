const Event = require("../models/Event");
const Match = require("../models/Match");
const Team = require("../models/Team");

module.exports = class EventController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const event = new Event();
    const filtered = Event.filter(data, event.fillable);

    if (filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });

    const response = await event.create(filtered);

    const [eventResponse] = await event.get({
      where: { id: response.insertId },
    });
    res.json({
      status: 200,
      message: "Event Created",
      data: eventResponse,
    });
  }

  async get(req, res, next) {
    const path = req.params;
    const event = new Event();
    const [eventResponse] = await event.get({
      where: path,
    });
    res.json({
      status: 200,
      message: "Event Found",
      data: eventResponse,
    });
  }

  async list(req, res, next) {
    const event = new Event();
    const eventResponse = await event.get({});
    console.log(eventResponse);
    res.json({
      status: 200,
      message: "Event list found",
      data: eventResponse,
    });
  }

  async getTeams(req, res, next) {
    const path = req.params;
    console.log(path);
    const event = new Event();
    const match = new Match();
    const [eventResponse] = await event.get({
      columns: ["id"],
      where: path,
    });
    const matchResponse = await match.get({
      columns: ["fk_team_home", "fk_team_away"],
      where: { fk_event: eventResponse.id },
    });
    let teamsSet = new Set();
    matchResponse.forEach((match) => {
      teamsSet.add(match.fk_team_home);
      teamsSet.add(match.fk_team_away);
    });

    res.json({
      status: 200,
      message: "Teams in event",
      data: [...teamsSet],
    });
  }

  async getMatches(req, res, next) {
    const path = req.params;
    const event = new Event();
    const match = new Match();
    const [eventResponse] = await event.get({
      columns: ["id"],
      where: path,
    });
    const matchResponse = await match.get({
      where: { fk_event: eventResponse.id },
    });
    console.log(matchResponse);
    res.json({
      status: 200,
      message: "Matches found",
      data: matchResponse,
    });
  }

  async update(req, res, next) {
    const path = req.params;
    const data = req.body;
    const event = new Event();
    const filtered = Event.filter(data, event.fillable);

    if (filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });

    await event.update(filtered, path);

    const [eventResponse] = await event.get({
      where: path,
    });
    res.json({
      status: 200,
      message: "Event Updated",
      data: eventResponse,
    });
  }

  async delete(req, res, next) {
    const path = req.params;
    const event = new Event();
    await event.delete(path.id);
    res.json({
      status: 200,
      message: "Event deleted",
      data: {
        id: path.id,
      },
    });
  }
};
