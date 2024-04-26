const jwt = require("jsonwebtoken");
const { jwtLoginKey } = require("../../resources/js/secret/secret");
const { createJsonWebToken } = require("./jwtHelper");

const setLoginToken = async (res, loginTokenData) => {
  const loginToken = createJsonWebToken({ loginTokenData }, jwtLoginKey, "5m"); // [For 7 days = "7d"]
  res.cookie("loginToken", loginToken, {
    maxAge: 5 * 60 * 1000, // 5 minites (For 7 days = 7 * 24 * 60 * 60 * 1000)ms
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};

const setRefreshToken = async (req, res, next) => {
  const loggedInToken = req.cookies.loginToken;
  if (loggedInToken) {
    const decoded = jwt.verify(loggedInToken, jwtLoginKey);
    if (!decoded) {
      throw createError(401, "Invalid Login Token");
    }
    const loginTokenData = decoded.loginTokenData;
    setLoginToken(res, loginTokenData);
  }
  next();
};

module.exports = { setLoginToken, setRefreshToken };
