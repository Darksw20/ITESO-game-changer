const Model = require("./Model");

module.exports = class User extends Model {
  constructor(firstName = "", lastName = "", username = "", password = "") {
    super("user");
    console.log("1");

    this.table = "user";
    this.fillable = ["first_name", "last_name", "user_name", "password"];

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.username = username;
    this.password = password;
  }
};
