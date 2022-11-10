export class User extends Model {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.username = username;
    this.password = password;
  }
}
