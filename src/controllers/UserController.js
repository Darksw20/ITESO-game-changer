const User = require("../models/User");

module.exports = class UserController {
  constructor() {}

  create(req, res, next) {
    const data = req.body;
    const user = new User();
    const result = user.create(data);
    console.log(data, user, result);
    res.json({
      status: 200,
      message: "User created successfully",
      data: {
        id: 1,
        email: "juan.perez@iteso.mx",
        fullname: "Juan Perez",
      },
    });
  }

  get(req, res, next) {
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
    res.json({
      status: 200,
      message: "User Deleted Successfully",
      data: {
        id: 123,
      },
    });
  }
};
