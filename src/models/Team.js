const Model = require("./Model");

module.exports = class Team extends Model {
  constructor(name, memberSize) {
    this.table = "team";
    this.fillable = ["name", "member_size"];

    this.name = name;
    this.memberSize = memberSize;
  }
};
