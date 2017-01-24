// send out emits for data for a plot
socket.emit('_grab_symptom_records', null);

socket.on('_returned_symptom_records', function(data) {

  console.log("Got the symptom records!");

  var x1 = [];
  var y1 = [];

  data.records.forEach(function(rec) {

    rec.symptoms.forEach(function(symp) {
      console.dir(symp);
      x1.push(convertToLocal(symp.startTimestamp));
      y1.push(symp.intensity);
    });

  });

  console.dir(x1);
  console.dir(y1);

  var trace1 = {
    x: x1,
    y: y1,
    //name: 'intensity',
    //autobinx: true,
    //histnorm: "count",
    /*marker: {
      color: "rgba(255, 100, 102, 0.7)",
      /*line: {
        color:  "rgba(255, 100, 102, 1)",
        width: 1
      }
    },*/
    opacity: 0.5,
    type: "scatter"
  };

  var layout = {
    xaxis: {
      showline: true,
      zeroline: true,
      title: "Time"
    },
    yaxis: {
      showline: true,
      zeroline: true,
      title: "Intensity"
    },
    title: "Symptom Intensity vs. Time"
  }

  var fig1 = {
    data: [trace1],
    layout: layout
  }

  Plotly.newPlot("main-div", fig1);

});
