const User = require("../models/User");

module.exports = class UserController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const user = new User(data);
    console.log(user.toObject());
    res.json({
      status: 200,
      message: "User created successfully",
      data: user.toObject(),
    });
  }

  get(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "User Found",
      data: {
        id: 123,
        fullname: "Juan Perez",
      },
    });
  }

  update(req, res, next) {
    const path = req.params;
    const data = req.body;
    console.log(path, data);
    res.json({
      status: 200,
      message: "User Updated Sucessfully",
      data: {
        email: "juan.perez@iteso.mx",
        fullname: "Juan Perez",
      },
    });
  }

  delete(req, res, next) {
    const path = req.params;
    console.log(path);
    res.json({
      status: 200,
      message: "User Deleted Successfully",
      data: {
        id: 123,
      },
    });
  }
};
