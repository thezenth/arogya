socket.on('_saved_symptom_record_to_db', function(data) {
  document.getElementById("main-div").innerHTML = "";
  renderPartial("main-div",
    `<div class="row">
      <div class="col s12 center-align">
        <button id="recordSymptomsButton" onclick="beginSymptomsRecord();" class="waves-effect waves-light btn">
          <i class="material-icons left">create</i>Record
        </button>
      </div>
    </div>`
  );
});
