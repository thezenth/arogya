function renderPartial(parentId, partial) {
  $('#' + parentId).append(
    ejs.render(partial)
  );
}

function renderPartialWithData(parentId, partial, data) {
  $('#' + parentId).append(
    ejs.render(partial, data)
  );
}
