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
  newMeal = { foods: [] };
  //newMeal.foods = [];

  // delete create meal button
  document.getElementById("newMealButton").outerHTML = "";
  delete document.getElementById("newMealButton");

  // instantiate other html stuff
  var queryInput = document.createElement("input");
  queryInput.id = "foodQuery";
  queryInput.name = "foodQuery";
  queryInput.type = "text";
  queryInput.onkeypress = function(){ emitFoodQuery(); };
  document.body.appendChild(queryInput);

  var finishMealButton = document.createElement("button");
  finishMealButton.innerHTML = "Done?";
  finishMealButton.onclick = function(){ finishMeal(); };
  document.body.appendChild(finishMealButton);
}

function finishMeal() {
  console.dir(newMeal);
  socket.emit('_finished_meal', { meal: newMeal });
}

function addFoodToMeal(f) {
  console.dir(f);
  // push to the new meal being constructed
  newMeal.foods.push(f);
  // delete any autocomplete divs
  if(document.getElementById("autocomplete-div")) {
    document.getElementById("autocomplete-div").outerHTML = "";
    delete document.getElementById("autocomplete-div");
  }
}
