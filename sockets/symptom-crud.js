var symptomRecords = require('../db.js').symptom_records; //TODO - do this!

module.exports = function(socket) {
  socket.on('_save_symptom_record_to_db', function(data) {
    var newRecord = data.symptomRecord;

    symptomRecords.insert(newRecord, function(err, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
        socket.emit('_saved_symptom_record_to_db', null);
      }
    })
  });
}
