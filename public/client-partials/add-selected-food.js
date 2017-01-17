function addSelectedFood(foodName) {
  return(`
    <div id="delete-${foodName}" class="col s12">
      <h3>${foodName}</h3>
      <a class="btn-floating btn-large waves-effect waves-light red" onclick="removeConstructuedFoodFromMeal('${foodName}');">
        <i class="material-icons">delete</i>
      </a>
    </div>
  `);
}
