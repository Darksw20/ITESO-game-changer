const Model = require("./Model");

module.exports = class User extends Model {
  constructor(data) {
    super("user");

    this.table = "user";
    this.fillable = ["first_name", "last_name", "user_name", "password"];
    this.create(this.filter(data, this.fillable)).then((user) => {
      this.lastName = user.last_name;
      this.firstName = user.first_name;
      this.username = user.username;
    });
  }

  toObject() {
    return {
      lastName: this.lastName,
      firstName: this.firstName,
      username: this.username,
    };
  }
};
