/*
{
  "timestamp_of_meal": "", // timestamp-with-timezone
  "timestamp_of_recording": "", // timestamp-with-timezone
  "foods": [
    {
      "name": "",
      "serving_size": { "units":"", "value":"" },
      "amount_eaten": { "units":"", "value":"" },
      "calories": { "units":"", "value":"" }, // id 208
      "fat": { "units":"", "value":"" }, // id 204
      "protein": { "units":"", "value":"" }, // id 203
      "dietary_fiber": { "units":"", "value":"" }, // id 291
      "total_sugars": { "units":"", "value":"" }, // id 269
      "glucose": { "units":"", "value":"" }, // id 211
      "calcium": { "units":"", "value":"" }, // id 301
      "iron": { "units":"", "value":"" }, // id 303
      "sodium": { "units":"", "value":"" }, // id 307
      "vitamin_c": { "units":"", "value":"" }, // id 401
      "vitamin_a": { "units":"", "value":"" }, // id 337
      "vitamin_b12": { "units":"", "value":"" }, // id 418
      "aspartic_acid": { "units":"", "value":"" }, // id 514
      "glutamic_acid": { "units":"", "value":"" } // id 515
    }
  ]
}
*/

/* USDA Nutrition Report Example
{
    "report": {
        "sr": "28",
        "groups": "All groups",
        "subset": "All foods",
        "end": 1,
        "start": 0,
        "total": 1,
        "foods": [
            {
                "ndbno": "01009",
                "name": "Cheese, cheddar",
                "weight": 132.0,
                "measure": "1.0 cup, diced",
                "nutrients": [
                    {
                        "nutrient_id": "208",
                        "nutrient": "Energy",
                        "unit": "kcal",
                        "value": "533",
                        "gm": 404.0
                    },
                    {
                        "nutrient_id": "269",
                        "nutrient": "Sugars, total",
                        "unit": "g",
                        "value": "0.63",
                        "gm": 0.48
                    },
                    {
                        "nutrient_id": "204",
                        "nutrient": "Total lipid (fat)",
                        "unit": "g",
                        "value": "43.97",
                        "gm": 33.31
                    },
                    {
                        "nutrient_id": "205",
                        "nutrient": "Carbohydrate, by difference",
                        "unit": "g",
                        "value": "4.08",
                        "gm": 3.09
                    }
                ]
            }
        ]
    }
}
*/

//AFTER FOOD IS SELECTED IN MENU< NEW INTERFACE POPS UP WITH GOTTEN INFO AND STUFF, ALLOWS USER TO FILL OUT HOW MUCH THEY HAD


// returns a meal object given USDA nutrition information and basic meal info
// also, assumes that the objects in the foodsWithNutrition array are all drawn directly from the "foods" array in inidividual nutrition reports
function validateUSDAToMeal(timestampOfMeal, timestampOfRecording, amountEatenVal, amountEatenUnits foodsWithNutrition) {
  /*var foods = foodsWithNutrition;
  var vMeal = {
    "timestamp_of_meal": timestampOfMeal, // timestamp-with-timezone
    "timestamp_of_recording": timestampOfRecording, // get current timestamp with timezone from client side
    "foods": []
  };

  for(var food in foods) {

    // parsing for serving serving size
    // some default values
    var servingSize = 1.0;
    var servingSizeUnits = "g";

    var sizesFound = food.measure.match(/ \d*\.?\d /);
    if (sizesFound.length > 0) {
      servingSize = float.parse(sizesFound[0]);
    }

    var unitsFound = food.measure.match(/ oz|cups|g|mg| /);
    if(unitsFound.length > 0) {
      servingSizeUnits = unitsFound[0];
    }

    var nFood = {
      "name": food.name,
      "serving_size": { "units":servingSizeUnits, "value":servingSize },
      "amount_eaten": { "units":amountEatenUnits, "value":float.parse(amountEatenVal) },
      "calories": { "units":, "value":float.parse() }, // id 208
      "fat": { "units":"", "value":"" }, // id 204
      "protein": { "units":"", "value":"" }, // id 203
      "dietary_fiber": { "units":"", "value":"" }, // id 291
      "total_sugars": { "units":"", "value":"" }, // id 269
      "glucose": { "units":"", "value":"" }, // id 211
      "calcium": { "units":"", "value":"" }, // id 301
      "iron": { "units":"", "value":"" }, // id 303
      "sodium": { "units":"", "value":"" }, // id 307
      "vitamin_c": { "units":"", "value":"" }, // id 401
      "vitamin_a": { "units":"", "value":"" }, // id 337
      "vitamin_b12": { "units":"", "value":"" }, // id 418
      "aspartic_acid": { "units":"", "value":"" }, // id 514
      "glutamic_acid": { "units":"", "value":"" } // id 515
    }*/
  }
