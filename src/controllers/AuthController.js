module.exports = class AuthController {
  constructor() {}

  login(req, res, next) {
    const data = req.body;
    console.log(data);
    res.json({
      status: 200,
      message: "Authentication successfull",
      data: {
        email: "juan.perez@iteso.mx",
        fullname: "Juan Perez",
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
