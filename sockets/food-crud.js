var foodData = require('../db.js').food_data;
var update = require('../db/update.js');

module.exports = function(socket) {
  socket.on('_check_if_food_exists', function(data) {

    // put some sort of object validation here
    foodData.get(data.food.name, function(err, body) {
      console.dir(data.food);
      if (err) {
        console.log("No document of name " + data.food.name + " was found.");
        socket.emit('_return_food_exist_check', { exists: false, food: data.food, forMeal: data.forMeal }); // make sure to pass along the food to the listener
      } else {
        console.log("Doucment with name " + data.food.name + " was found.");
        console.dir(body);
        socket.emit('_return_food_exist_check', { exists: true, food: data.food, forMeal: data.forMeal }); // make sure to pass along the food to the listener
      }
    });
  });

  socket.on('_save_food_to_db', function(data) {

    // this update function handles both if the object exists, and if it doesn't
    update(foodData, data.food, data.food.name, function (err, res) {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully inserted/updated!');
        socket.emit('_saved_food_to_db', null);
      }
    });

    /*foodData.insert(data.food, data.food.name, function(err, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
        socket.emit('_saved_food_to_db', null);
      }
    });*/
  });
}
