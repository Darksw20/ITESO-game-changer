const Team = require("../models/Team");
module.exports = class TeamController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const team = new Team();
    const filtered = Team.filter(data, team.fillable);

    if (filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });

    const response = await team.create(filtered);

    const [teamResponse] = await team.get({
      where: { id: response.insertId },
    });
    res.json({
      status: 200,
      message: "Team created sucessfully",
      data: teamResponse,
    });
  }

  async get(req, res, next) {
    const path = req.params;
    const team = new Team();
    const [teamResponse] = await team.get({
      where: path,
    });
    console.log(path);
    res.json({
      status: 200,
      message: "Team Found",
      data: teamResponse,
    });
  }

  addMembers(req, res, next) {
    const path = req.params;
    const data = req.body;

    console.log(path, data);
    res.json({
      status: 200,
      message: "Team members added",
      data: {},
    });
  }

  getMembers(req, res, next) {
    const path = req.params;

    console.log(path);
    res.json({
      status: 200,
      message: "Team members: ",
      data: {
        members: [
          {
            id: 1,
            email: "juan.perez@iteso.mx",
            fullname: "Juan Perez",
          },
          {
            id: 2,
            email: "juan.perez1@iteso.mx",
            fullname: "Juan Perez",
          },
          {
            id: 3,
            email: "juan.perez2@iteso.mx",
            fullname: "Juan Perez",
          },
        ],
      },
    });
  }

  deleteMember(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Team members deleted",
      data: {},
    });
  }

  async update(req, res, next) {
    const path = req.params;
    const data = req.body;
    const team = new Team();
    const filtered = Team.filter(data, team.fillable);

    if (filtered.length)
      res.json({
        status: 422,
        message: "No valid parameters",
      });

    await team.update(filtered, path);
    const [teamResponse] = await team.get({
      where: path,
    });
    res.json({
      status: 200,
      message: "Team updated sucessfully",
      data: teamResponse,
    });
  }

  async delete(req, res, next) {
    const path = req.params;
    const team = new Team();
    await team.delete(path.id);
    res.json({
      status: 200,
      message: "Team deleted sucessfully",
      data: {
        id: path.id,
      },
    });
  }
};
