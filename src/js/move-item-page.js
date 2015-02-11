// Make a page with slides that can be moved around
app.slidemaker = function ()  {
  $('.slide-item').on('mousedown', function(e) {
    e.preventDefault();
    var item = $(this);
    // capture the positions of the text or image div
    var startPosition = item.position();

    // capture the position of the mouse relative to the body
    var moveX = e.pageX - startPosition.left;
    var moveY = e.pageY - startPosition.top;

    // add listeners to
    // track the mouse and move the items based up the offset and former positions
    $('body').on('mousemove', moveItem);
    $('body').on('mouseup', cancelTrack);

    $('body').mouseleave(function() {
      cancelTrack();
    });

    // on mouseup we'll shut down the listeners
    function cancelTrack() {
      $('body').off('mousemove', moveItem);
      $('body').off('mouseup', cancelTrack);
    }

    // adjust the positions and sizes using css selectors
    function moveItem(e) {
      e.preventDefault();
      var top = e.pageY - moveY;
      var left = e.pageX - moveX;
      var maxX = $('.slide-maker').width() - item.width();
      var maxY = $('.slide-maker').height() - item.height();

      top < 0 ? top = 0 : true;
      top > maxY ? top = maxY : true;
      left < 0 ? left = 0 : true;
      left > maxX ? left = maxX : true;

      item.css({
        top: top,
        left: left
      });
    }
  });
};
