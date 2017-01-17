function newMealSetup() {
  return(`

    <script src="https://cdn.rawgit.com/chingyawhao/materialize-clockpicker/master/dist/js/materialize.clockpicker.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/chingyawhao/materialize-clockpicker/master/dist/css/materialize.clockpicker.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/en-gb.js"></script>
    <script>
        moment().format();
    </script>
    
    <div class="row">
      <h2>Record your meal</h2>
      <div class="input-field col s12">
        <input id="dateOccured" type="date" class="datepicker">
        <label for="dateOccured">What date you eat this meal?</label>
      </div>
      <div class="input-field col s12">
        <input id="timeOccured" type="time">
        <label for="timeOccured">What time did you eat this meal?</label>
      </div>
      <div class="input-field col s12">
        <select id="mealType">
          <option value="" disabled selected>Choose a meal type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        <label>What meal was it?</label>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <h3>Add a food</h3>
        <a class="btn-floating btn-large waves-effect waves-light red" onclick="setupFoodCreation();"><i class="material-icons">create</i></a>
      </div>

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
      </div> -->
      <div class="col s6 center-align">
        <a class="waves-effect waves-light btn-large center-align" onclick="finishMeal();">Done?</a>
      </div>
    </div>
    <div class="row">
      <div id="food-addition-div" class="col s12"></div>
    </div>

    <!-- This is called to make the select/option menus work -->
    <script>$('select').material_select();</script>
    <!-- This is called so that the datepicker works -->
    <script>$('.datepicker').pickadate();</script>
    <!-- This is called so that the timepicker works - see https://github.com/chingyawhao/materialize-clockpicker -->
    <script>
      $('.timepicker').pickatime({
        autoclose: false,
        twelvehour: false,
        default: '9:30:00'
      });
    </script>

  `);
}
