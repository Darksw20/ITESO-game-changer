const Model = require("./Model");

module.exports = class Event extends Model {
  constructor() {
    super("event", ["name", "start_date", "end_date", "ubication"]);
  }
  toObject() {
    return {
      name: this.name,
      start_date: this.start_date,
      end_date: this.end_date,
      ubication: this.ubication,
    };
  }
};
