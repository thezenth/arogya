var symptomRecord = {
  date: "",
  symptoms: []
}

function beginSymptomsRecord() {

  symptomRecord = {
    date: "",
    symptoms: []
  }

  document.getElementById("main-div").innerHTML = "";

  renderPartial("main-div",
    symptomPageSetup()
  );
}

function setupSymptomAddition() {

  renderPartial("symptom-addition-div",
    addedSymptom()
  );

}

function addSymptomToRecord() {

  // creating the timestmap of the meal!
  // grab the date and time inputed
  var date = $('#startDate').val();
  var time = $('#startTime').val();

  // grab the user's timezone
  var timezone = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]

  var timestampStr = `${date} ${time} ${timezone}`;
  // plug the string into the Date function and get it as a GMT string
  var timestampSymptom = new Date(timestampStr).toGMTString();

  var newSymptom = {
    name: $('#symptomName').val().toLowerCase(),
    description: $('#symptomDescription').val(),
    intensity: $('#symptomIntensity').val(),
    startTimestamp: timestampSymptom,
    duration: $('#symptomDuration').val(),
    comments: $('#symptomComments').val()
  }

  // clear out the symptom addition space, now that we are done with it
  document.getElementById("symptom-addition-div").innerHTML = "";

  symptomRecord.symptoms.push(newSymptom);
  console.dir(symptomRecord);
  updateAddedSymptoms(newSymptom);
}

function updateAddedSymptoms(symp) {
  console.log('Updating added symptoms...');
  console.dir(symp);
  if (!document.getElementById("added-symptoms-div")) {
    renderPartial("main-div",
      `<div id="added-symptoms-div" class="row container"></div>`
    );
  }

  // here, we just pass the ndbno to reference in the remove function
  renderPartial("added-symptoms-div",
    `<div id="delete-${symp.name}" class="col s12">
      <h3>${symp.name}</h3>
      <a class="btn-floating btn-large waves-effect waves-light red" onclick="removeSymptomFromRecord(${symp.name});">
        <i class="material-icons">delete</i>
      </a>
    </div>`
  );

}

function removeSymptomFromRecord(sympName) {
  console.log('Removing a symptom...');
  var found = false;
  var count = 0;
  //console.dir(newMeal.foods);
  while(!found) {
    if (symptomRecord.symptoms[count].name == sympName) {
      // then, remove the relevant object
      symptomRecord.symptoms.splice(count, 1);
      found = true;
    }
    count++;
  }

  // delete parent div
  document.getElementById("delete-" + sympName).parentNode.removeChild(document.getElementById("delete-" + sympName));
}

function finishSymptomsRecord() {
  console.log('Finishing it all up!');
  socket.emit('_save_symptom_record_to_db', { symptomRecord: symptomRecord });
}
