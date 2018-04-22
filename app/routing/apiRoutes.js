// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var appData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(appData); //all posible friends variable willzz be places here
    });

    function totalDifference() {
        var closestMatch = appData[0];
        var lastPersonSum = arraySum(appData[appData.length - 1]["scores"]);
        //loops through first added to next to last added person
        for (var i = 0; i < appData.length - 1; i++) {
            var closestMatchSum = arraySum(closestMatch["scores"]);
            var currentPersonSum = arraySum(appData[i]["scores"]);
            if (Math.abs(lastPersonSum - currentPersonSum) < Math.abs(lastPersonSum - closestMatchSum)) {
                closestMatch = appData[i];
            }
        }
        return closestMatch;
    }
    
    function arraySum(arr){
        var sum = 0;
        arr.forEach(function(num){
            sum += num;
        });
        return sum;
    }

    app.post("/api/friends", function (req, res) {
        appData.push(req.body);
        //sends json of closest match to browser
        console.log(totalDifference());
        res.json(totalDifference());
    })
}
