const JWT = require("../services/JWT");

const authUser = (req, res, next) => {
  const jwt = req.headers.authorization.split(" ")[1];
  decodedJwt = JWT.decode(jwt);
  const now = Date.now();
  if (`${decodedJwt.exp}000` > now) {
    next();
  } else {
    res.status(401);
    res.send("Access forbidden");
  }
};

const authAdmin = (req, res, next) => {
  console.log(req.headers.authorization);
  // decodedJWT = JWT.decode();
  if (false) {
    next();
  } else {
    res.status(401);
    res.send("Access forbidden");
  }
};

module.exports = {
  authUser,
  authAdmin,
};
