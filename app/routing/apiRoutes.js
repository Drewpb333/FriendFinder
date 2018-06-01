var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(appData); //all posible friends variables will be placed here
    });

    // function totalDifference() {
    //     var closestMatch = appData[0];
    //     var lastPersonSum = arraySum(appData[appData.length - 1]["scores"]);
    //     //loops through first added to next to last added person
    //     for (var i = 0; i < appData.length - 1; i++) {
    //         var closestMatchSum = arraySum(closestMatch["scores"]);
    //         var currentPersonSum = arraySum(appData[i]["scores"]);
    //         if (Math.abs(lastPersonSum - currentPersonSum) < Math.abs(lastPersonSum - closestMatchSum)) {
    //             closestMatch = appData[i];
    //         }
    //     }
    //     return closestMatch;
    // }
    
    // function arraySum(arr){
    //     var sum = 0;
    //     arr.forEach(function(num){
    //         sum += num;
    //     });
    //     return sum;
    // }

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
          };
      
          // Here we take the result of the user"s survey POST and parse it.
          var userData = req.body;
          var userScores = userData.scores;
      
          // This variable will calculate the difference between the user"s scores and the scores of
          // each user in the database
          var totalDifference;
      
          // Here we loop through all the friend possibilities in the database.
          for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
      
            console.log(currentFriend.name);
      
            for (var j = 0; j < currentFriend.scores.length; j++) {
              var currentFriendScore = currentFriend.scores[j];
              var currentUserScore = userScores[j];
      
              totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
      
            if (totalDifference <= bestMatch.friendDifference) {
              bestMatch.name = currentFriend.name;
              bestMatch.photo = currentFriend.photo;
              bestMatch.friendDifference = totalDifference;
            }
          }
      
          friends.push(userData);
      
          // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
          res.json(bestMatch);
        // appData.push(req.body);
        // //sends json of closest match to browser
        // console.log(totalDifference());
        // res.json(totalDifference());
    })
}
