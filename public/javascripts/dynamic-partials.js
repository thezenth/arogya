function callPartial() {
  $("body").append(
    ejs.render("<% include ./partials/test.ejs %>");
  );
}
