const httpStatus = require("http-status");
const config = require("../config/config");
const ApiError = require("../utils/ApiError");

// Send response on errors
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    let status = statusCode || httpStatus.INTERNAL_SERVER_ERROR

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: message || 'Internal Server Error',
        ...(config.env === "development" && { stack: err.stack }),
    };

    console.log('config.env:', config.env)
    if (config.env === "development") {
        console.error(err);
    }

    res.status(status).send(response);
};

module.exports = {
    errorHandler,
};