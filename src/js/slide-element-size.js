//------------Size & Width for Slide Items------------

app.Size = function(spec) {
  return {
    height: spec.height,
    width: spec.width
  };
};

app.Position = function(spec) {
  return {
    top: spec.top,
    left: spec.left,
    zindex: spec.zindex
  };
};
