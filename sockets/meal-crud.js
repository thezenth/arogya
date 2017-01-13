var request = require('request');
var async = require('async');

var dietData = require('../db.js').diet_data;

module.exports = function(socket) {
  socket.on('_finished_meal', function(data) {
    var newMeal = data.meal;

    // get nutrition information on each food in meal
    var foods = newMeal.foods;
    var foodsWithNutrition = [];
    var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
    async.each(foods, function(food, callback) {
      var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
      var url = `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${food.ndbno}`
      request(url, function(err, response, body) {
        var parsedBody = JSON.parse(body);
        //console.dir(parsedBody.report.foods[0]);
        foodsWithNutrition.push(parsedBody.report.foods[0]);

        callback(null);
      }); // end request
    }, function(err) {
      if (err) {
        console.log('A request to grab a food object failed.');
      } else {
        console.log('Successfully grabbed all nutrition information. Saving to database...');
        // db stuff!
        // make sure to set newMeal.foods to the foods with nutrition info!
        newMeal.foods = foodsWithNutrition;
        console.log("NEW MEAL CREATED: " + newMeal);
        dietData.insert(newMeal, function(err, body) {
          if (err) {
            console.error(err);
          } else {
            console.log(body);
            socket.emit('_saved_meal_to_db', null);
          }
        });
      }
    });



  });
}
