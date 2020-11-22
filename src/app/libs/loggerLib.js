"use strict";

const logger = require("pino")();
const moment = require("moment");

let captureError = (errorMessage, errorOrigin, errorlevel) => {
  let currenttime = moment();
  let errorResponse = {
    timeStamp: currenttime,
    errorMessage: errorMessage,
    errorOrigin: errorOrigin,
    errorlevel: errorlevel
  };
  logger.error(errorResponse);
  return errorResponse;
};
