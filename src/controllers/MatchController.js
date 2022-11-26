module.exports = class MatchController {
  constructor() {}

  create(req, res, next) {
    const data = req.body;
    console.log(data);
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
    const path = req.params;
    console.log(path);
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
    const path = req.params;
    const data = req.body;
    console.log(path, data);
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
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Match delted successfully",
      data: {},
    });
  }
};
