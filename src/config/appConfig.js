let appConfig = {};
appConfig.port = 8080;
appConfig.allowedCrossOrgin = "";
appConfig.env = "Dev";
appConfig.db = {
  uri:
    "mongodb+srv://krishnakiransouri:<Krish@94>@cluster0.0wnjz.mongodb.net/<chatApplication>?retryWrites=true&w=majority"
};
appConfig.apiVersion = "/api/v1";
module.exports = {
  port: appConfig.port,
  allowedCrossOrigin: appConfig.allowedCrossOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  apiVersion: appConfig.apiVersion
};
