/* listeners specific to this page */
socket.on('_relevant_foods_returned', function(data) {
  var foods = data.items;

  // delete any previous autocomplete divs
  if(document.getElementById("autocomplete-div")) {
    document.getElementById("autocomplete-div").outerHTML = "";
    delete document.getElementById("autocomplete-div");
  }

  // load autocomplete div template (i.e., the big box for the results)
  var div = document.createElement("div");
  div.id = "autocomplete-div";
  div.className = "autocomplete-div-class";

  for (var i = 0; i<foods.length; i++) {
    var button = document.createElement("button");
    button.className = "autocomplete-div-row-class";
    button.innerHTML = foods[i].name;
    button.value = foods[i]; // we set the value of the button (even though this is typically unusued for a button) to store the food object for later
    console.dir(button.value);
    button.onclick = function() {
      addFoodToMeal(this.value);
    }
    div.appendChild(button);
  }

  document.body.appendChild(div);
});

socket.on('_relevant_foods_not_found', function(data) {
  // delete any previous autocomplete divs
  if(document.getElementById("autocomplete-div")) {
    document.getElementById("autocomplete-div").outerHTML = "";
    delete document.getElementById("autocomplete-div");
  }

  // log the error client side as well
  console.error(data.errorMsg);
});

socket.on('_saved_meal_to_db', function(data) {
  // delete everything
  document.body.innerHTML = "";

  // quick message
  var newP = document.createElement("p");
  newP.innerHTML = "Saved!";
  document.body.appendChild(newP);

  // wait a specified amount of time to delete this message, and then add back the addMeal button
  var time = 3 * 1000;
  setTimeout(function() {
    document.body.innerHTML = "";
    // add back the newMealButton
    var newMealButton = document.createElement("button");
    newMealButton.id = "newMealButton";
    newMealButton.onClick = function(){ beginNewMeal(); };
    newMealButton.innerHTML = "Create a new meal";
    document.body.appendChild(newMealButton);
  }, time)
});
