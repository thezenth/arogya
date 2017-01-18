function existingFoodMsg(fullFood, mealFood) {
  return(`
    <div id="food-exist-msg">
      <p>You've already told me about a food with the same name; do you still want to save it?</p>
      <button onclick='addConstructedFoodToMeal(${JSON.stringify(fullFood)},${JSON.stringify(mealFood)});'>Yes</button>
      <button onclick="deleteExistsMsg();">No</button>
    </div>
  `);
}
