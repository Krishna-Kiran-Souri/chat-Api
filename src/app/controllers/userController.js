const mongoose = require("mongoose");
const shortid = require("shortid");
const time = require("./../libs/timeLib");
const response = require("./../libs/responseLib");
const logger = require("./../libs/loggerLib");
const validateInput = require("./../libs/paramsValidationLib");
const check = require("./../libs/checkLib");

const UserModel = mongoose.model("User");

/**
 * SignupFunction
 * @params {Object,Object} request and response
 *
 **/
let signupFunction = (req, res) => {};

/**
 * Login Function
 * @params {Object,Object} request and response
 *
 **/

let loginFunction = (req, res) => {};

/**
 * Logout Function
 * @params {Object,Object} request and response
 *
 **/
let logoutFunction = (req, res) => {};

module.exports = {
  signupFunction,
  loginFunction,
  logoutFunction
};
