function slideReorder() {

  $('.thumb-img').on('mousedown', function() {
    var item = $(this).closest('.slide-thumb');
    var switchpoint = item.height() / 2;

    item.addClass('reorder-thumb');

    // get position of slide-thumb
    var position = item.position();

    // $('body').on('mousedown', showNewPosition);
    $('body').on('mouseup', reorderSlide);

    // Disable text selection when dragging
    $(document).on('selectstart dragstart', cancelTextSelection);

    function cancelTextSelection(e) {
      e.preventDefault();
      return false;
    }

    function reorderSlide(e) {
      // slidesFollowMouse(e);
      // use e.pageY to compare position and reorder items
      if (shouldMoveUp(e.pageY)) {
        // move it up
        item.insertBefore(item.prev());
        allDone();
      } else if (shouldMoveDown(e.pageY)) {
        // move it down
        item.insertAfter(item.next());
        allDone();
      }
      return false;
    }

    function showNewPosition(e) {
      if (shouldMoveUp(e.pageY)) {
        // move it up
        console.log($(this));
      } else if (shouldMoveDown(e.pageY)) {
        // move it down
        console.log($(this));

      }
    }

    function shouldMoveUp(y) {
      var offset = item.prev().offset();
      return offset && offset.top > y - switchpoint;
    }
    function shouldMoveDown(y) {
      var nextSlide = item.next();
      var offset = nextSlide.offset();
      return offset && offset.top + nextSlide.height() < y + switchpoint;
    }
    function allDone() {
      item.removeClass('reorder-thumb');
      $('placeholder').hide();
      $('body').off('mouseup', allDone);
      $('body').off('mousemove', reorderSlide);
      $(document).off('selectstart dragstart', cancelTextSelection);
    }


  });
}
