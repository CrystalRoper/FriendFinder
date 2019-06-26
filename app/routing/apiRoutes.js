var friends = require("../data/friends")

module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userData = req.body;
    var totalDifference = 0;
    var bestFriend = {
      name: "",
      photo: "",
      surveryDifference: 999
    };

    for (var i = 0; i < friends.length; i++) {
      var currentMatch = friends[i];
      console.log("Comparing", userData.name, "to", currentMatch.name);

      for (var x = 0; x < currentMatch.scores.length; x++) {
        var matchScore = parseInt(currentMatch.scores[x]);        
        var userScore = parseInt(userData.scores[x]);        
        totalDifference += Math.abs(matchScore- userScore);
        console.log("\tQuestion", x, "userScore=", userScore, "matchScore=", matchScore, "totalDifference=", totalDifference);
      }

      if (totalDifference <= bestFriend.surveryDifference) {
        console.log("\tnew best friend!");
        bestFriend.name = currentMatch.name;
        bestFriend.photo = currentMatch.photo;
        bestFriend.surveryDifference = totalDifference;
      }
    }

    friends.push(userData);
    res.json(bestFriend);
  });
};