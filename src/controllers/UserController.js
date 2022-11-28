const User = require("../models/User");

module.exports = class UserController {
  constructor() {}

  async create(req, res, next) {
    const data = req.body;
    const user = new User();
    const filtered = User.filter(data, user.fillable);
    if (filtered.length)
      return res.status(422).json({
        status: 422,
        message: "No valid parameters",
      });
    const response = await user.create(filtered);

    const [userResponse] = await user.get({
      where: { id: response.insertId },
    });
    res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: userResponse,
    });
  }

  async get(req, res, next) {
    const path = req.params;
    const user = new User();
    const [userResponse] = await user.get({
      where: path,
    });
    if (!userResponse)
      return res.status(422).json({
        status: 422,
        message: "User not Found",
        error: [],
      });
    return res.status(200).json({
      status: 200,
      message: "User Found",
      data: userResponse,
    });
  }

  async update(req, res, next) {
    const path = req.params;
    const data = req.body;
    const user = new User();
    const filtered = User.filter(data, user.fillable);
    if (filtered.length)
      return res.status(422).json({
        status: 422,
        message: "No valid parameters",
      });
    await user.update(filtered, path);
    const [userResponse] = await user.get({
      where: path,
    });
    return res.status(200).json({
      status: 200,
      message: "User Updated Sucessfully",
      data: userResponse,
    });
  }

  async delete(req, res, next) {
    const path = req.params;
    const user = new User();
    await user.delete(path.id);
    return res.status(200).json({
      status: 200,
      message: "User Deleted Successfully",
      data: {
        id: path.id,
      },
    });
  }
};
