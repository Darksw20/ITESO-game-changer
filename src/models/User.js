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

  toObject() {
    return {
      last_name: this.last_name,
      first_name: this.first_name,
      username: this.username,
    };
  }
};
