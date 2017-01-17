/* variables specific to this page */
var newMeal = {
  foods: [],
};

/* These are functions specific to this page */
function emitFoodQuery() {
  console.log('hello!');
  emitValue(
    '_relevant_foods_request',
    { foodQuery: document.getElementById('foodQuery').value }
  );
}

function beginNewMeal() {
  // create meal object/clear out any existing ones
  newMeal = { timestamp_of_meal:"", timestamp_of_recording:"", meal_type: "", foods: [] };
  //newMeal.foods = [];

  // delete create meal button
  document.getElementById("main-div").innerHTML = "";

  // create buttons, divs, basic forms, etc. for the new meal
  renderPartial("main-div",
    newMealSetup()
  );
}

// this setupQuery method, and the other horizontal fab button methods, are setup such that when one is clicked, the food addition space is cleared for it
function setupQuery() {
  // clear out food addition space
  document.getElementById("food-addition-div").innerHTML = "";
  // render this inside the food addition space
  renderPartial("food-addition-div",
    `<input id="foodQuery" name="foodQuery" type="text" onkeyup="emitFoodQuery();">`
  );

  /*var queryInput = document.createElement("input");
  queryInput.id = "foodQuery";
  queryInput.name = "foodQuery";
  queryInput.type = "text";
  queryInput.onkeyup = function(){ emitFoodQuery(); };
  document.getElementById("main-div").appendChild(queryInput);*/
}

// setups the basic create food form
function setupFoodCreation() {
  document.getElementById("food-addition-div").innerHTML = "";

  /* vars array is made up of objects such that:
      { id, name }
  */
  renderPartial("food-addition-div",
    foodAdditionDiv()
  );
}

function setupCreatedFoodSearch() {
  document.getElementById("food-addition-div").innerHTML = "";

  renderPartial("food-addition-div",
    createdFoodsAutocomplete({
      "Macadamia Nuts": null,
      "Great Food": null,
      "Good Food": null
    })
  );
}

function finishMeal() {
  //console.dir(newMeal);
  newMeal.timestamp_of_meal = $('#timestampOccured').val()
  newMeal.timestamp_of_recording = (new Date()).toUTCString();
  newMeal.meal_type = $('#mealType').val();
  socket.emit('_finished_meal', { meal: newMeal });
}

function constructFood() {
  var dbFood = {
    name: $('#foodName').val(),
    serving_size: { units: $('#units-servingSize').val(), value: $('#servingSize').val() },
    calories: { units: $('#units-calories').val(), value: $('#calories').val() },
    fat: { units: $('#units-fat').val(), value: $('#fat').val() },
    protein: { units: $('#units-protein').val(), value: $('#protein').val() },
    dietary_fiber: { units: $('#units-dietaryFiber').val(), value: $('#dietaryFiber').val() }
  }

  var inMeal = {
    name: dbFood.name,
    servings_eaten: $('#servingsEaten').val(),
  }

  // check if the food exists, based upon the name
  // forMeal is the object we want to save with our meal
  socket.emit('_check_if_food_exists', { food: dbFood, forMeal: inMeal });

  //addFoodToMeal(JSON.stringify(newFood));
}

function updatedSelectedFoods(f, id) {
  if (!document.getElementById("selectedfoods-div")) {
    renderPartial("main-div",
      `<div id="selectedfoods-div" class="row container"></div>`
    );
  }

  // here, we just pass the ndbno to reference in the remove function
  renderPartial("selectedfoods-div",
    addSelectedFood(f.name)
  );
}

function addConstructedFoodToMeal(foodDbObj, mealFoodObj) {

  var toMeal = mealFoodObj;
  if (toMeal !== null) {
    if (typeof toMeal === 'string') {
      toMeal = JSON.parse(toMeal);
    }
  }

  var toDb = foodDbObj;
  if (toDb !== null) {
    if (typeof toDb === 'string') {
      toDb = JSON.parse(toDb);
    }
  }

  newMeal.foods.push(toMeal);

  updatedSelectedFoods(toDb, toDb.name);

  // add to db
  socket.emit('_save_food_to_db', { food: toDb });
}

function removeConstructuedFoodFromMeal(id) {
  var found = false;
  var count = 0;
  //console.dir(newMeal.foods);
  while(!found) {
    if (newMeal.foods[count].name == id) {
      // then, remove the relevant object
      newMeal.foods.splice(count, 1);
      found = true;
    }
    count++;
  }

  // delete parent div
  document.getElementById("delete-" + id).parentNode.removeChild(document.getElementById("delete-" + id));
}

function addFoodToMeal(fStr) {
  var f = JSON.parse(fStr);
  // push to the new meal being constructed
  newMeal.foods.push(f);
  //console.dir(f);
  //console.dir(newMeal.foods);
  // delete any autocomplete divs
  if(document.getElementById("autocomplete-div")) {
    document.getElementById("autocomplete-div").outerHTML = "";
    delete document.getElementById("autocomplete-div");
  }

  if (!document.getElementById("selectedfoods-div")) {
    renderPartial("main-div",
      `<div id="selectedfoods-div" class="row container"></div>`
    );
  }

  // here, we just pass the ndbno to reference in the remove function
  renderPartial("selectedfoods-div",
    `<div id="delete-${f.ndbno}" class="col s12">
      <h3>${f.name}</h3>
      <a class="btn-floating btn-large waves-effect waves-light red" onclick="removeFoodFromMeal(${f.ndbno});"><i class="material-icons">delete</i></a>
    </div>`
  );
}

function removeFoodFromMeal(dbN) {
  // loop through all the foods, and find the index of the food with the dbN
  var found = false;
  var count = 0;
  //console.dir(newMeal.foods);
  while(!found) {
    if (newMeal.foods[count].ndbno == dbN) {
      // then, remove the relevant object
      newMeal.foods.splice(count, 1);
      found = true;
    }
    count++;
  }

  // delete parent div
  document.getElementById("delete-" + dbN).parentNode.removeChild(document.getElementById("delete-" + dbN));
}
