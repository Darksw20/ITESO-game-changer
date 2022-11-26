module.exports = class AuthController {
  constructor() {}

  login(req, res, next) {
    res.json({
      status: 200,
      message: "Authentication successfull",
      data: {
        email: "juan.perez@iteso.mx",
        password: "Pruebas123456",
      },
    });
  }

  logout(req, res, next) {
    res.json({
      status: 200,
      message: "Logout successfull",
      data: { email: "juan.perez@iteso.mx" },
    });
  }
};
