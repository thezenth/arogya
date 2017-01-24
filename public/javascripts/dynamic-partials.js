function renderPartial(parentId, partial) {
  console.log(`Rendering partial under parent ${parentId} with the following HTML code: ${partial}`);
  $('#' + parentId).append(
    ejs.render(partial)
  );
}

function renderPartialWithData(parentId, partial, data) {
  $('#' + parentId).append(
    ejs.render(partial, data)
  );
}
