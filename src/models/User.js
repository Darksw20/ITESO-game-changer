const Model = require("./Model");

module.exports = class User extends Model {
  constructor() {
    super("user", [
      "email",
      "username",
      "first_name",
      "last_name",
      "user_name",
      "password",
    ]);
  }

  async isValidPassword({ email, password }) {
    const response = await this.get({
      where: { email, password },
    });
    return response.length > 0;
  }

  toObject() {
    return {
      lastName: this.lastName,
      firstName: this.firstName,
      username: this.username,
    };
  }
};
