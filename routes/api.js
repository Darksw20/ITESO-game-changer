const express = require("express");
const router = express.Router();
const AuthController = require("../src/controllers/AuthController");
const EventController = require("../src/controllers/EventController");
const MatchController = require("../src/controllers/MatchController");
const TeamController = require("../src/controllers/TeamController");
const UserController = require("../src/controllers/UserController");
const { authUser, authAdmin } = require("../src/middlewares/auth");

const Auth = new AuthController();
const User = new UserController();
const Event = new EventController();
const Match = new MatchController();
const Team = new TeamController();

// login
router.post("/auth", Auth.login);

// login
router.post("/logout", authUser, Auth.logout);

// register User
router.post("/user", User.create);

// get User info

router.get("/user/:id", User.get);

// modify User info
router.patch("/user/:id", authUser, User.update);

//delete User
router.delete("/user/:id", authUser, User.delete);

// register Event
router.post("/event", authUser, Event.create);

// get Events
router.get("/event", authUser, Event.list);

// get Events
router.get("/event/:id", authUser, Event.get);

// modify Event
router.patch("/event/:id", authUser, Event.update);

// delete Event
router.delete("/event/:id", authUser, Event.delete);

// get Teams per Event
router.get("/event/:id/teams", authUser, Event.getTeams);

// get Matches per event
router.get("/event/:id/matches", authUser, Event.getMatches);

// register Team
router.post("/team", authUser, Team.create);

// get Team Members
router.get("/team/:id/members", authUser, Team.getMembers);

// add Team Members
router.post("/team/:id/members", authUser, Team.addMembers);

// get Team Information
router.get("/team/:id", authUser, Team.get);

// modify Team
router.patch("/team/:id", authUser, Team.update);

// delete Team
router.delete("/team/:id", authUser, Team.delete);

// delete Team Member
router.delete("/team/:id/members", authUser, Team.deleteMember);

// register Match
router.post("/match", authUser, Match.create);

// get Match info
router.get("/match/:id", authUser, Match.get);

// modify Match
router.patch("/match/:id", authUser, Match.update);

// delete Match
router.delete("/match/:id", authUser, Match.delete);

module.exports = router;
