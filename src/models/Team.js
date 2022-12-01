const Model = require("./Model");

module.exports = class Team extends Model {
  constructor() {
    super("team", ["name", "member_size"]);
  }
  toObject() {
    return {
      name: this.name,
      member_size: this.member_size,
    };
  }
};
