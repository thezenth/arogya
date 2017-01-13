function callPartial() {

  var reader = new FileReader();
  var partialStr = reader.readAsText('/partials/test.ejs');

  $("body").append(
    ejs.render(partialStr, { msg: "Hello! I'm a partial!" });
  );
}
