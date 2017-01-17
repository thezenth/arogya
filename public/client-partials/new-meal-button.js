function newMealButton() {
  return(`
    <div class="row">
      <div class="col s4"></div>
      <div class="col s4 center-align">
        <button id="newMealButton" onclick="beginNewMeal();" class="waves-effect waves-light btn">
          <i class="material-icons left">create</i>Record
        </button>
      </div>
      <div class="col s4"></div>
    </div>
  `);
}
