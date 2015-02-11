app.SlideItem = function(spec) {

  if (!spec.type) {
    console.log('put in a type dude');
    return;
  }

  var self = {
    type: spec.type,
    top: spec.top,
    left: spec.left,
    width: spec.width,
    height: spec.height,
    bgcolor: spec.bgcolor
  };
    if (spec.type === 'box') {
      self.scr = spec.src;
    } else if (spec.type === 'textbox') {
      self.text = spec.text;
      self.size = spec.size;
      self.textcolor = spec.textcolor;
    }

  return self;
};
