function renderPartial(parentId, partial) {
  $('#' + parentId).append(
    ejs.render(partial)
  );
}
