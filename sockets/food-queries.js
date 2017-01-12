var request = require('request');

module.exports = function(socket) {
  socket.on('_relevant_foods_request', function(data) {
    console.log(data);
    var foodQuery = data.foodQuery;
    // perform USDA API relevant food search here
    // get the food query from the query string
    var foodQuery = req.query.q;

    // api key
    var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";

    // build the search url
    var searchUrl = `http://api.nal.usda.gov/ndb/search/?format=json&q=${foodQuery}&sort=r&max=10&offset=0&api_key=${apiKey}`;

    // make the request
    request(searchUrl, function(err, response, body) {
      if (err) {
        console.error(err);
      } else if (response.statusCode == 200) {

        var parsedBody = JSON.parse(body);

        if (parsedBody.errors) {
          // error handling - if something non-fatal goes wrong, send it to the warnings page
          console.error(parsedBody.errors.error[0]);
          res.redirect('/warnings?m=' + parsedBody.errors.error[0].message);
        } else {
          var items = parsedBody.list.item;

          // pass the relevant foods back to the client
          socket.emit('_relevant_foods_returned', { items: items });

        } // end if-else regarding parsedBody.errors
      } // end if-else for response.statusCode
    }); // end request
  });
}
