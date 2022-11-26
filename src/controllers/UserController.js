const User = require("../models/User");

module.exports = class UserController {
  constructor() {}

  create(req, res, next) {
    const data = req.body;
    // const user = new User();
    // const result = user.create(data);
    console.log(data);
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
