app.slideReorder = function() {

  $('.slide-thumb').on('mousedown', function() {
    var item = $(this);
    var switchpoint = item.width() / 2;
    item.before('<li class="placeholder"></li>');
    var placeholder = $('.placeholder');

    $('body').on('mousemove', showReorder);
    $('body').on('mouseup', allDone);


    function showReorder(e) {
      e.preventDefault();
      if (shouldMoveUp(e.pageY)) {
            // move it up
        placeholder.insertBefore(placeholder.prev());
      } else if (shouldMoveDown(e.pageY)) {
        // move it down
        placeholder.insertAfter(placeholder.next());
      }
      return false;
    }

      function reorderSlide(e) {
        // slidesFollowMouse(e);
        // use e.pageY to compare position and reorder items
        if (shouldMoveUp(e.pageY)) {
          // move it up
          // item.insertBefore(item.prev());
          allDone();
        } else if (shouldMoveDown(e.pageY)) {
          // move it down
          // item.insertAfter(item.next());
          allDone();
        }
        return false;
      }

    function shouldMoveUp(y) {
      var offset = placeholder.prev().offset();
      return offset && offset.top + switchpoint > y;
    }

    function shouldMoveDown(y) {
      var offset = placeholder.next().offset();
      return offset && offset.top + switchpoint < y;
    }

    function allDone() {
      placeholder.replaceWith(item);
      $('body').off('mousemove', showReorder);
      $('body').off('mouseup', allDone);
      // $(document).off('selectstart dragstart', cancelTextSelection);
    }

  });
};
