var friends = require("../data/friends")

module.exports = function (app) {
  // API GET Requests

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function (req, res) {
    var bestFriend = {
      name: "",
      photo: "",
      surveryDifference: 0;
    };

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      var currentMatch = friends[i];

      for (var x = 0; x < currentMatch.scores.length; x++) {
        totalDifference += Math.abs(parseInt(userData.scores[x]) - parseInt(currentMatch.scores[x]));
      }

      if (totalDifference <= bestFriend.surveryDifference) {
        bestFriend.name = currentMatch.name;
        bestFriend.photo = currentMatch.photo;
        bestFriend.surveryDifference = totalDifference;
      }
    }

    friends.push(userData);

    exports.json(bestFriend);
  });
};