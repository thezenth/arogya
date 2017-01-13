function renderPartial(parentId, partial, data) {
  $(parentId).append(
    ejs.render(partial, data)
  );
}
