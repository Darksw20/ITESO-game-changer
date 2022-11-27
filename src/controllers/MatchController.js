const Match = require("../models/Match");
module.exports = class MatchController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const match = new Match();
    const response = await match.create(Match.filter(data, match.fillable));

    const [matchResponse] = await match.get({
      where: { id: response.insertId },
    });
    res.json({
      status: 200,
      message: "Match Created Successfully",
      data: matchResponse,
    });
  }

  async get(req, res, next) {
    const path = req.params;
    const match = new Match();
    const [matchResponse] = await match.get({
      where: path,
    });
    res.json({
      status: 200,
      message: "Match Found",
      data: matchResponse,
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
