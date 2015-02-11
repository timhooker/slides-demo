app.resizeItems = function() {

  slideReorder();

  $('.slide-item').on('dblclick', resizeItems);

  function resizeItems(e) {
    var item = $(this);
    var resize = item.children('.resize');
    resize.toggle();

    var tl = $('.top-left');
    var tr = $('.top-right');
    var bl = $('.bottom-left');
    var br = $('.bottom-right');

    $('body').on('mousedown', '.bottom-right', resizeItemBR);

    function resizeItemBR() {
      $('body').off('mousemove');
      $('body').on('mousemove', newSize);
      $('body').on('mouseup', cancelTrack);


      function cancelTrack() {
        $('body').off('mousemove', newSize);
        $('body').off('mouseup', cancelTrack);
        app.slidemaker();
      }
      function newSize(event) {
        event.preventDefault();
        var slidePosition = item.offset();
        item.off('mousedown');
        var height = event.pageY - slidePosition.top;
        var width = event.pageX - slidePosition.left;

        item.css ({
          height: height,
          width: width
        });
      }
    }
  }
};
