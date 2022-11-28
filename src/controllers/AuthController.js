const User = require("../models/User");

module.exports = class AuthController {
  constructor() {}

  async login(req, res, next) {
    const data = req.body;
    const user = new User();
    const response = await user.isValidPassword(data);
    console.log(response);
    return res.status(200).json({
      status: 200,
      message: `Authentication ${response ? "successfull" : "failed"}`,
      data: response,
    });
  }

  logout(req, res, next) {
    const data = req.body;
    console.log(data);
    res.json({
      status: 200,
      message: "Logout successfull",
      data: { email: "juan.perez@iteso.mx" },
    });
  }
};
