var foodData = require('../db.js').food_data;

module.exports = function(socket) {
  socket.on('_check_if_food_exists', function(data) {

    // put some sort of object validation here
    foodData.get(data.food.name, function(err, body) {
      console.dir(data.food);
      if (err) {
        console.log("No document of name " + data.food.name + " was found.");
        socket.emit('_return_food_exist_check', { exists: false, food: data.food }); // make sure to pass along the food to the listener
      } else {
        console.log("Doucment with name " + data.food.name + " was found.");
        console.dir(body);
        socket.emit('_return_food_exist_check', { exists: true, food: data.food }); // make sure to pass along the food to the listener
      }
    });
  });

  socket.on('_save_food_to_db', function(data) {
    // insert seems to cover insert/update
    foodData.insert(data.food, data.food.name, function(err, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
        //socket.emit('_saved_food_to_db', null);
      }
    });
  });
}
