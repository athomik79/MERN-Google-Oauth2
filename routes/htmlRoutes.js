//starter code to reference (coding in progress)

var path = require("path");




module.exports = function(app) {

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/dev", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dev.html"));
  });

 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
};
