const Event = require("../models/Event");
const { Team } = require("../models/Team");

module.exports = class EventController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const event = new Event();
    const response = await event.create(Event.filter(data, event.fillable));

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
    const [eventResponse] = await event.get();
    res.json({
      status: 200,
      message: "Event list found",
      data: eventResponse,
    });
  }

  getTeams(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Teams in event",
      data: {
        teams: [
          {
            id: 1,
            name: "Linces1",
            memberSize: 3,
          },
          {
            id: 2,
            name: "Linces2",
            memberSize: 3,
          },
          {
            id: 3,
            name: "Linces3",
            memberSize: 3,
          },
        ],
      },
    });
  }

  getMatches(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Matches found",
      data: [
        {
          id: 1,
          startTime: "2022-11-26T01:43:48",
          endTime: "2022-11-26T01:43:48",
          place: "Cancha 1",
          nameHome: "Linces",
          nameAway: "Cuervos",
          scoreHome: 1,
          scoreAway: 0,
        },
        {
          id: 2,
          startTime: "2022-11-26T01:43:48",
          endTime: "2022-11-26T01:43:48",
          place: "Cancha 1",
          nameHome: "Linces",
          nameAway: "Cuervos",
          scoreHome: 1,
          scoreAway: 0,
        },
        {
          id: 3,
          startTime: "2022-11-26T01:43:48",
          endTime: "2022-11-26T01:43:48",
          place: "Cancha 1",
          nameHome: "Linces",
          nameAway: "Cuervos",
          scoreHome: 1,
          scoreAway: 0,
        },
      ],
    });
  }

  update(req, res, next) {
    const path = req.params;
    const data = req.body;
    console.log(path, data);
    res.json({
      status: 200,
      message: "Event Updated",
      data: {
        name: "Evento 1",
        startDate: "2022-11-26T01:43:48",
        endDate: "2022-11-26T02:43:48",
        ubication: "Estadio Akron",
      },
    });
  }

  delete(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Event deleted",
      data: {},
    });
  }
};
