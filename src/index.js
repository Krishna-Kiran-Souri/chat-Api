const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const bodyparser = require("body-parser");
const fs = require("fs");
const http = require("http");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

/**
 * Add Middlewares
 * @params {Object} morgan
 * @params {Object} bodyparser json urlencoded
 * @params {Object} cookieparser
 * Adding path and making it recoginse the direct
 */
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client")));
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
