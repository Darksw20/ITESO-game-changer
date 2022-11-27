const express = require("express");
const router = express.Router();
const AuthController = require("../src/controllers/AuthController");
const EventController = require("../src/controllers/EventController");
const MatchController = require("../src/controllers/MatchController");
const TeamController = require("../src/controllers/TeamController");
const UserController = require("../src/controllers/UserController");

/* GET users listing. */
router.get("/hello", function (req, res, next) {
  res.send("respond with a resource");
});

// login
router.post("/auth",  AuthController.login);
// register User
router.post("/user",  UserController.create);

// get User info
router.get("/user/:id",  UserController.getInfo);

// modify User info
router.patch("/user/:id",  UserController.update);

//delete User
router.delete("/user/:id",  UserController.delete);

// register Event
router.post("/event",  EventController.create);

// get Events
router.get("/event",  EventController.getInfo);

// modify Event
router.patch("/event/:id",  EventController.update);

// delete Event
router.delete("/event/:id",  EventController.delete);

// register Team
router.post("/team",  TeamController.create);

// get Teams per Event
router.get("/event/:id/team",  EventController.getTeams);

// get Team Participants
router.get("/team/:id/members",  TeamController.getMembers);

// get Team Information
router.get("/team/:id",  TeamController.getInfo);

// register Match
router.post("/match",  MatchController.create);

// get Matches per event
router.get("/event/:id/matches",  EventController.getMatches);

// get Match info
router.get("/match/:id",  MatchController.getInfo);

// modify Match
router.patch("/match/:id",  MatchController.update);

module.exports = router;
