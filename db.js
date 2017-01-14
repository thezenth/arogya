var cloudant = {
  url: "https://5e2a3253-651f-411b-8c00-76b0dd7ed0af-bluemix:440cbbceccfa7f47580095a88bc001926a0deac672f1a76f9b07f7f11beae71e@5e2a3253-651f-411b-8c00-76b0dd7ed0af-bluemix.cloudant.com"
};

if (process.env.hasOwnProperty("VCAP_SERVICES")) {
  var env = JSON.parse(process.env.VCAP_SERVICES);

  cloudant = env['cloudantNoSQLDB'][0].credentials;
}

var nano = require('nano')(cloudant.url);
var db = nano.db;

module.exports = {
  db: db,
  diet_data: db.use('diet-data'),
  food_data: db.use('food-data')
}
