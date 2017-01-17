function newMealSetup() {
  return(`
    <div class="row">
      <h2>Record your meal</h2>
      <div class="input-field col s12">
        <input id="timestampOccured" name="timestampOccured" type="date" class="datepicker">
        <label for="timestampOccured">Meal Eaten</label>
      </div>
      <div class="input-field col s12">
        <select id="mealType">
          <option value="" disabled selected>Choose your option</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        <label>Units</label>
      </div>
    </div>
    <div class="row">
      <h3>Add a food</h3><a class="btn-floating btn-large waves-effect waves-light red" onclick="setupCreatedFoodSearch();"><i class="material-icons">redo</i></a>
      <!-- Buttons below contain features not in production/not working! -->
      <!--
      <div class="col s2 center-align">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">search</i></a>
      </div>
      <div class="col s2 center-align">
        <a class="btn-floating btn-large waves-effect waves-light red" onclick="setupFoodCreation();"><i class="material-icons">create</i></a>
      </div>
      <div class="col s2 center-align">
        <a class="btn-floating btn-large waves-effect waves-light red" onclick="setupCreatedFoodSearch();"><i class="material-icons">redo</i></a>
      </div>
      <div class="col s6 center-align">
        <a class="waves-effect waves-light btn center-align" onclick="finishMeal();">Done?</a>
      </div> -->
    </div>
    <div class="row">
      <div id="food-addition-div" class="col s12"></div>
    </div>

    <!-- This is called to make the select/option menus work -->
    <script>$('select').material_select();</script>
    <!-- This is called so that the datepicker works -->
    <script>$('.datepicker').pickadate();</script>
  `);
}
