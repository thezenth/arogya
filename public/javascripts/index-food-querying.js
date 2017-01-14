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

  // create horizontal finishMealButton
  renderPartial("main-div",
    `<div class="row">
      <div class="col s6">
        <div class="fixed-action-btn horizontal click-to-toggle" style="position: absolute; display: inline-block;">
          <a class="btn-floating btn-large red">
            <i class="material-icons">menu</i>
          </a>
          <ul>
            <li><a class="btn-floating red" onclick="setupQuery();"><i class="material-icons">insert_chart</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
            <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
          </ul>
        </div>
      </div>
      <div class="col s6">
        <a class="waves-effect waves-light btn center-align" onclick="finishMeal();">Done?</a>
      </div>
      <div id="food-addition-div" class="col s12">
      </div>
    </div>`
  );

  // instantiate other html stuff

  //var finishMealButton = document.createElement("button");
  //finishMealButton.innerHTML = "Done?";
  //finishMealButton.onclick = function(){ finishMeal(); };
  //document.getElementById("main-div").appendChild(finishMealButton);
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

function finishMeal() {
  console.dir(newMeal);
  socket.emit('_finished_meal', { meal: newMeal });
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
