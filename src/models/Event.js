export class Event extends Model {
  constructor(name, startDate, endDate, ubication) {
    this.table = "event";
    this.fillable = ["name", "startDate", "endDate", "ubication"];

    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.ubication = ubication;
  }
}
