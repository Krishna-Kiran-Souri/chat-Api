const appConfig = require("./../config/appConfig");

let requestIplogger = (req, res, next) => {
  let remoteIp =
    req.connection.remoteAddres + "://" + req.connection.remoteport;

  let realIp = req.headers["X-REAL-IP"];
  console.log(
    req.method +
      " Request Made from " +
      remoteIp +
      " for route" +
      req.originalUrl
  );
  if (req.method === "Options") {
    let headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = "86400";
    headers["Access-Control-Allow-Headers"] =
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";

    res.writeHead(200, headers);
    res.end();
  } else {
    res.header("Access-Control-Allow-Origin", appConfig.allowedCrossOrigin);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }
};

module.exports = {
  requestIplogger: requestIplogger
};
