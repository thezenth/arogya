function foodAdditionDiv() {
  return(`
  <div class="row">
    <div class="input-field col s12">
      <input id="foodName" name="foodName" type="text">
      <label for="foodName">Name</label>
    </div>
  </div>

  <div class="row">
    <div class="input-field col s12">
      <input id="servingsEaten" name="servingsEaten" type="number">
      <label for="servingsEaten">Servings Eaten</label>
    </div>
  </div>

  <% var vars = [
    {id: "servingSize", name: "Serving Size"},
    {id: "calories", name: "Calories"},
    {id: "fat", name: "Fat"},
    {id: "protein", name: "Protein"},
    {id: "dietaryFiber", name: "Dietary Fiber"}
  ] %>

  <% for(var i = 0; i<vars.length; i++) { %>
  <div class="row">
    <div class="input-field col s8">
      <input id="<%= vars[i].id %>" name="<%= vars[i].id%>" type="number" class="validate">
      <label for="test"><%= vars[i].name %></label>
    </div>
    <div class="input-field col s4">
      <select id="units-<%= vars[i].id %>">
        <option value="" disabled selected>Choose your option</option>
        <option value="cups">Cups</option>
        <option value="oz">Ounces (oz)</option>
        <option value="g">Grams (g)</option>
      </select>
      <label>Units</label>
    </div>
  </div>
<% } %>

  <script>$('select').material_select();</script>

  <button onclick="constructFood()">Add Food</button>
  `);
}
