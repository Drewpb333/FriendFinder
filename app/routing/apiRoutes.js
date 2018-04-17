// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var waitListData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(appData); //all posible friends variable willzz be places here
    });

    app.post("api/friends", function (req, res) {
        appData.push(req.body);

        var comparisonArray = [];
        //returns most compatable friend
        for (var i = 0; i < appData.length; i++) {
            //pushes sum of scores to comparisonArray
            var sumOfScores = 0;
            for (var j = 0; j < appData[i].scores.length; j++) {
                sumOfScores += appData[i].scores[j];
            }
            comparisonArray.push(sumOfScores);
        }
        
    })
}