const Model = require("./Model");

module.exports = class Match extends Model {
  constructor(time, place, score) {
    super("match", ["time", "place", "score"]);

    this.time = time;
    this.place = place;
    this.score = score;
  }
  toObject() {
    return {
      time: this.time,
      place: this.place,
      score: this.score,
    };
  }
};
