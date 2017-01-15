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
  div.className = "container";

  for (var i = 0; i<foods.length; i++) {
    var button = document.createElement("button");
    button.className = "waves-effect waves-light btn";
    button.innerHTML = foods[i].name;
    // we set the value of the button (even though this is typically unusued for a button) to store the food object for later
    // as well, we stringify it to preserve the JSON, in the addFoodToMeal function
    button.value = JSON.stringify(foods[i]);
    //console.log(button.value);
    button.onclick = function() {
      addFoodToMeal(this.value);
    }
    div.appendChild(button);
  }

  document.getElementById("food-addition-div").appendChild(div);
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
  document.getElementById("main-div").innerHTML = "";

  // quick message
  var newP = document.createElement("p");
  newP.innerHTML = "Saved!";
  document.getElementById("main-div").appendChild(newP);

  // wait a specified amount of time to delete this message, and then add back the addMeal button
  var time = 3 * 1000;
  setTimeout(function() {

    document.getElementById("main-div").innerHTML = "";

    renderPartial("main-div",
      `<div class="row">
          <div class="col s4"></div>
          <div class="col s4 center-align">
            <button id="newMealButton" onclick="beginNewMeal();" class="waves-effect waves-light btn">
              <i class="material-icons left">create</i>Record
            </button>
          </div>
          <div class="col s4"></div>
      </div>`
    );

    /*
    // add back the newMealButton
    var newMealButton = document.createElement("button");
    newMealButton.id = "newMealButton";
    newMealButton.className = "waves-effect waves-light btn";
    newMealButton.innerHTML = "Record"; // text of the button
    // onclick
    newMealButton.onClick = function(){ beginNewMeal(); };

    // append icon
    var icon = document.createElement("i");
    icon.className = "material-icons left";
    icon.innerHTML = "create"; // this is the reference to the material icon font
    newMealButton.appendChild(icon);

    document.getElementById("main-div").appendChild(newMealButton);
    */
  }, time);
});

function deleteExistsMsg() {
  document.getElementById("food-exist-msg").innerHTML = "";
  document.getElementById("food-exist-msg").outerHTML = "";
}

socket.on('_return_food_exist_check', function(data) {
  if (data.exists) {
    // display some sort of message
    //var stringy = JSON.stringify(data.food);
    //var funcRef = "addConstructedFoodToMeal('" + stringy + "');"
  //  console.log(funcRef);
    renderPartial("food-addition-div",
      `
      <div id="food-exist-msg">
        <p>You've already told me about a food with the same name; do you still want to save it?</p>
        <button onclick="addConstructedFoodToMeal(${JSON.stringify(data.food)});">Yes</button>
        <button onclick="deleteExistsMsg();">No</button>
      </div>
      `
    );

    //socket.emit('_save_food_to_db', { food: data.food });
  } else {
    addConstructedFoodToMeal(data.food);
    //socket.emit('_save_food_to_db', { food: data.food });
  }
});

socket.on('_saved_food_to_db', function (data) {
  // clear out the food addition space
  document.getElementById("food-addition-div").innerHTML = "";
});
