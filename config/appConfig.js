let appConfig = {};

appConfig.port = 8080;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
  uri:
    "mongodb://admin:1234@chatcluster-shard-00-00.3aixo.mongodb.net:27017,chatcluster-shard-00-01.3aixo.mongodb.net:27017,chatcluster-shard-00-02.3aixo.mongodb.net:27017/chatdb?ssl=true&replicaSet=atlas-iozn5e-shard-0&authSource=admin&retryWrites=true&w=majority"
};
appConfig.apiVersion = "/api/v1";

module.exports = {
  port: appConfig.port,
  allowedCorsOrigin: appConfig.allowedCorsOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  apiVersion: appConfig.apiVersion
};
