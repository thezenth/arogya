function callPartial() {
  $("body").append(
    ejs.render("<%- include partials/test %>", { msg: "Hello! I'm a partial!" }, { filename: './partials/test.ejs'})
  );
}
