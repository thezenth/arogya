function createdFoodsAutocomplete(allCreatedFoods) {
  return(`
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">textsms</i>
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Autocomplete</label>
          </div>
        </div>
      </div>
    </div>

    <script>
      $('input.autocomplete').autocomplete({
        data: ${allCreatedFoods}
      });
    </script>
  `);
}
