export class User extends Model {
  constructor(firstName, lastName, username, password) {
    this.table = "user";
    this.fillable = ["first_name", "last_name", "user_name", "password"];

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.username = username;
    this.password = password;
  }
}
