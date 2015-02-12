//--------- Slide Item Parent Class ----------//

app.SlideItem = function(spec) {

  var self = {
    position: app.Position(spec),
    size: app.Size(spec),
    itemId: Date.now()
  };

  return self;
};

    // if (spec.type === 'box') {
    //   self.scr = spec.src;
    // } else if (spec.type === 'textbox') {
    //   self.text = spec.text;
    //   self.size = spec.size;
    //   self.textcolor = spec.textcolor;
    // }
/*

var newSlide = {
  height: 200,
  width: 200,
  top: 40,
  left: 100,
  text: 'hello world'
}

  Create a class for

  presentation class
    current slide
      elements collection

    slides

  slide store or collection

  slide object

  slide elements
    (may want to add a z-index)
    slide image
    slide text

*/
