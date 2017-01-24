function addedSymptom() {
  return(`
    <div class="row">
      <div class="input-field col s12">
        <input id="symptomName" type="text" class="validate">
        <label for="symptomName">Symptom Name (or a very short description)</label>
      </div>
      <div class="input-field col s12">
        <input id="symptomDescription" type="text" class="materialize-textarea">
        <label for="symptomDescription">Description</label>
      </div>
      <div class="col s12">
        <label for="startDate">What date and time did this symptom start?</label>
        <input id="startDate" type="date" class="datepicker">
      </div>

      <div class="input-field col s12">
        <input id="startTime" type="time">
        <!-- <label for="startTime">What time did this symptom start?</label> -->
      </div>
      <div class="input-field col s12">
        <input id="symptomDuration" type="number" class="validate">
        <label for="symptomDuration">Duration (approx. hours)</label>
      </div>
      <div class="input-field col s12">
        <input id="symptomComments" type="text" class="materialize-textarea">
        <label for="symptomComments">Comments</label>
      </div>
    </div>
    <div class="row">
      <p class="range-field">
        <input type="range" id="symptomIntensity" min="0" max="5" class="active"/>
      </p>
    </div>
    <a class="waves-effect waves-light btn" onclick="addSymptomToRecord();">Add Symptom</a>

    <!-- This is called so that the datepicker works -->
    <!-- Note: we have to escape the script tag, so that it doesnt close any higher script tags -->
    <script>$('.datepicker').pickadate();<\/script>
  `);
}
