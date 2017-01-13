var dietData = require('./db.js').diet_data;

module.exports = function(socket) {
  socket.on('_finished_meal', function(data) {
    var newMeal = data.meal;

    // db stuff!
    console.log("NEW MEAL CREATED: " + newMeal);
    dietData.insert(newMeal, function(err, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
        socket.emit('_saved_meal_to_db', null);
      }
    });
  });
}
