const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

/**
 * Custom callback function implementation to verify callback from passport
 * - If authentication failed, reject the promise and send back an ApiError object with
 * --- Response status code - "401 Unauthorized"
 * --- Message - "Please authenticate"
 *
 * - If authentication succeeded,
 * --- set the `req.user` property as the user object corresponding to the authenticated token
 * --- resolve the promise
 */
const verifyCallback = (req, resolve, reject) => async (err, user, info) => {
  if (err || !user) {
    // If there is an error or no user is found, use info to provide additional context
    // const message = info?.message || "Please authenticate";
    return reject(new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate"));
  }

  // If authentication succeeds, set the req.user property to the authenticated user
  req.user = user;

  // Resolve the promise to continue the request flow
  resolve();
};

/**
 * Auth middleware to authenticate using Passport "jwt" strategy with sessions disabled and a custom callback function
 * 
 */
const auth = async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      verifyCallback(req, resolve, reject)
    )(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;