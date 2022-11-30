const jwt = require("jsonwebtoken");
module.exports = class JWT {
  constructor() {}

  static encode(payload) {
    const secret = process.env.HASH_SECRET;

    return jwt.sign(payload, secret, {
      expiresIn: "2h",
    });
  }

  static decode(token = ".") {
    try {
      const base64Url = token.split(".")[1];
      const buff = Buffer.from(base64Url, "base64");
      const payloadinit = buff.toString("ascii");
      const payload = JSON.parse(payloadinit);
      return payload;
    } catch (e) {
      console.error("Fallo de JWT");
    }
    return false;
  }

  verify(token) {
    return true;
  }
};
