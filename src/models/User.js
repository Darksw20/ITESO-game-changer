const Model = require("./Model");

module.exports = class User extends Model {
  constructor(data) {
    super("user");

    this.table = "user";
    this.fillable = [
      "username",
      "first_name",
      "last_name",
      "user_name",
      "password",
    ];
  }

  toObject() {
    return {
      lastName: this.lastName,
      firstName: this.firstName,
      username: this.username,
    };
  }
};
