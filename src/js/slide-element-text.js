//--------- Slide Item - Text Child Class ----------//

app.SlideTextItem = function(spec) {
  var self = app.SlideItem(spec);
  self.text = spec.text;
  self.fontSize = spec.fontSize;
  self.font = spec.font || 'sans-serif';
  self.color = spec.color || 'black';
  return self;

};
/*

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
