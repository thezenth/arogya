function symptomPageSetup() {
  return(
    `<div class="row">
      <h2>Record your symptoms</h2>
      <a class="btn-large waves-effect waves-light" onclick="finishSymptomsRecord();">Done?</a>
    </div>
    <div class="row">
      <div class="col s6">
        <h3>Add a symptom</h3>
        <a class="btn-floating btn-large waves-effect waves-light red" onclick="setupSymptomAddition();"><i class="material-icons">create</i></a>
      </div>
    </div>
    <div class="row">
      <div id="symptom-addition-div" class="col s12"></div>
    </div>`
  );
}
