$(function () {
  var page = $('body').data('page');
  app[page]();
  app.resizeItems();
  app.slideReorder();
});
