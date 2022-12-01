const Model = require("./Model");

module.exports = class Match extends Model {
  constructor() {
    super("matches", ["time", "place", "score"]);
  }
  toObject() {
    return {
      time: this.time,
      place: this.place,
      score: this.score,
    };
  }
};
