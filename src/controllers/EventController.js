const { Event } = require("../models/Event");
const { Team } = require("../models/Team");

module.exports = class EventController {
  constructor() {}

  create(req, res, next) {
    res.json({
      status: 200,
      message: "Event Created",
      data: {
        name: "Evento 1",
        startDate: "2022-11-26T01:43:48",
        endDate: "2022-11-26T02:43:48",
        ubication: "Estadio Akron",
      },
    });
  }

  get(req, res, next) {
    res.json({
      status: 200,
      message: "Event Found",
      data: {
        name: "Evento 1",
        startDate: "2022-11-26T01:43:48",
        endDate: "2022-11-26T02:43:48",
        ubication: "Estadio Akron",
      },
    });
  }

  list(req, res, next) {
    res.json({
      status: 200,
      message: "Event list found",
      data: [
        {
          id: 1,
          name: "Evento 1",
          startDate: "2022-11-26T01:43:48",
          endDate: "2022-11-26T02:43:48",
          ubication: "Estadio Akron",
        },
        {
          id: 2,
          name: "Evento 2",
          startDate: "2022-11-26T01:43:48",
          endDate: "2022-11-26T02:43:48",
          ubication: "Estadio Akron",
        },
        {
          id: 3,
          name: "Evento 3",
          startDate: "2022-11-26T01:43:48",
          endDate: "2022-11-26T02:43:48",
          ubication: "Estadio Akron",
        },
      ],
    });
  }

  getTeams(req, res, next) {
    const eventId = req.params.id;
    const event = Event.get(eventId);
    const teams = Team.getList(event);
    res.json(teams);
  }

  getMatches(req, res, next) {
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
    res.json({
      status: 200,
      message: "Event deleted",
      data: {},
    });
  }
};
