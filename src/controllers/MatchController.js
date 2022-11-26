module.exports = class MatchController {
  constructor() {}

  create(req, res, next) {
    res.json({
      status: 200,
      message: "Match Created Successfully",
      data: {
        startTime: "2022-11-26T01:43:48",
        endTime: "2022-11-27T01:43:48",
        place: "cancha 1",
      },
    });
  }

  get(req, res, next) {
    res.json({
      status: 200,
      message: "Match Found",
      data: {
        startTime: "2022-11-26T01:43:48",
        location: "cancha 2",
        team1: "Chivas",
        team2: "Atlas",
        event: "Torneo Interno",
      },
    });
  }

  update(req, res, next) {
    res.json({
      status: 200,
      message: "Match Updated Successfully",
      data: {
        startTime: "2022-11-26T01:43:48",
        endTime: "2022-11-27T01:43:48",
        place: "cancha 1",
      },
    });
  }

  delete(req, res, next) {
    res.json({
      status: 200,
      message: "Match delted successfully",
      data: {},
    });
  }
};
