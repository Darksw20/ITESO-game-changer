const User = require("../models/User");
const JWT = require("../services/JWT");

module.exports = class AuthController {
  constructor() {}

  async login(req, res, next) {
    const data = req.body;
    const user = new User();
    const response = await user.get({
      where: {
        email: data.email,
        password: data.password,
      },
    });
    if (!response.length) {
      return res.status(200).json({
        status: 400,
        message: `Authentication failed`,
      });
    }
    return res.status(200).json({
      status: 200,
      message: `Authentication successfull`,
      data: {
        validated: true,
        jwt: JWT.encode({
          id: response[0].id,
          email: response[0].email,
        }),
      },
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
