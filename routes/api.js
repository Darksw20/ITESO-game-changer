const express = require("express");
const router = express.Router();
const AuthController = require("../src/controllers/AuthController");
const EventController = require("../src/controllers/EventController");
const MatchController = require("../src/controllers/MatchController");
const TeamController = require("../src/controllers/TeamController");
const UserController = require("../src/controllers/UserController");

const Auth = new AuthController();
const User = new UserController();
const Event = new EventController();
const Match = new MatchController();
const Team = new TeamController();

// login
router.post("/auth", Auth.login);

// login
router.post("/logout", Auth.logout);

// register User
router.post("/user", User.create);

// get User info
router.get("/user/:id", User.get);

// modify User info
router.patch("/user/:id", User.update);

//delete User
router.delete("/user/:id", User.delete);

// register Event
router.post("/event", Event.create);

// get Events
router.get("/event", Event.list);

// get Events
router.get("/event/:id", Event.get);

// modify Event
router.patch("/event/:id", Event.update);

// delete Event
router.delete("/event/:id", Event.delete);

// get Teams per Event
router.get("/event/:id/teams", Event.getTeams);

// get Matches per event
router.get("/event/:id/matches", Event.getMatches);

// register Team
router.post("/team", Team.create);

// get Team Members
router.get("/team/:id/members", Team.getMembers);

// add Team Members
router.post("/team/:id/members", Team.addMembers);

// get Team Information
router.get("/team/:id", Team.get);

// modify Team
router.patch("/team/:id", Team.update);

// delete Team
router.delete("/team/:id", Team.delete);

// delete Team Member
router.delete("/team/:id/members", Team.deleteMember);

// register Match
router.post("/match", Match.create);

// get Match info
router.get("/match/:id", Match.get);

// modify Match
router.patch("/match/:id", Match.update);

// delete Match
router.delete("/match/:id", Match.delete);

module.exports = router;
