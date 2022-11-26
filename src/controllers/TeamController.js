module.exports = class TeamController {
  constructor() {}

  create(req, res, next) {
    const data = req.body;
    console.log(data);
    res.json({
      status: 200,
      message: "Team created sucessfully",
      data: {
        id: 123,
        teamName: "Chivas",
      },
    });
  }

  get(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Team Found",
      data: {
        id: 123,
        teamName: "Chivas",
        memberSize: 3,
      },
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

  update(req, res, next) {
    const path = req.params;
    const data = req.body;
    console.log(path, data);
    res.json({
      status: 200,
      message: "Team updated sucessfully",
      data: {
        teamName: "Chivas",
      },
    });
  }

  delete(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "Team deleted sucessfully",
      data: {},
    });
  }
};
