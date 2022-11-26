const Model = require("./Model");

module.exports = class Match extends Model {
  constructor(time, place, score) {
    this.table = "match";
    this.fillable = ["time", "place", "score"];

    this.time = time;
    this.place = place;
    this.score = score;
  }
};
