const Match = require("../models/Match");
module.exports = class MatchController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const match = new Match();
    const filtered = Match.filter(data, match.fillable);

    if (!filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });

    const response = await match.create(filtered);

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

  async update(req, res, next) {
    const path = req.params;
    const data = req.body;
    const match = new Match();
    const filtered = Match.filter(data, match.fillable);

    if (!filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });
    await match.update(filtered, path);
    const [matchResponse] = await match.get({
      where: path,
    });
    res.json({
      status: 200,
      message: "Match Updated Successfully",
      data: matchResponse,
    });
  }

  async delete(req, res, next) {
    const path = req.params;
    const match = new Match();
    await match.delete(path.id);
    res.json({
      status: 200,
      message: "Match delted successfully",
      data: {
        id: path.id,
      },
    });
  }
};
