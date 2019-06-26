var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/images/Leia.jpg", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/images/Leia.jpg"));
  });

  app.get("/images/Buttercup.jpg", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/images/Buttercup.jpg"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};