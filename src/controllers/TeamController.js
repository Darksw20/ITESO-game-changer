const Team = require("../models/Team");
const User = require("../models/User");
module.exports = class TeamController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const team = new Team();
    const filtered = Team.filter(data, team.fillable);
    console.log(filtered);
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

  async addMembers(req, res, next) {
    const path = req.params;
    const data = req.body;

    const user = new User();
    const addedMember = data.members.map((member) => {
      user.update({ fk_team: path.id }, { id: member });
      return member;
    });

    console.log(path, data);
    res.json({
      status: 200,
      message: "Team members added",
      data: addedMember,
    });
  }

  async getMembers(req, res, next) {
    const path = req.params;
    const user = new User();
    const membersResponse = await user.get({
      where: { fk_team: path.id },
    });

    res.json({
      status: 200,
      message: "Team members: ",
      data: membersResponse,
    });
  }

  async deleteMember(req, res, next) {
    const path = req.params;
    const user = new User();
    const membersResponse = await user.get({
      columns: ["id"],
      where: { fk_team: path.id },
    });
    const delMember = membersResponse.map((member) => {
      user.update({ fk_team: null }, { id: member.id });
      console.log(member.id);
      return member.id;
    });
    res.json({
      status: 200,
      message: "Team members out of the team",
      data: delMember,
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
