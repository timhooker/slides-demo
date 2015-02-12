//----------  Slide Creator ----------

app.Slide = function(spec) {

  var collection = [];

  self = {
    title: spec.title,
    add: function(elem) {
      collection.push(elem);
    },
    remove: function(elem) {
      var index = 0;
      collection.some(function(item, i) {
        if (item.itemId === elem.itemId) {
          index = i;
          return true;
        }
      });
      collection.splice(index, 1);
    }
  };

  return self;
};

// receive and store all the elements in the slide
// keep track of the name and index of the particular slide
// assign an ID to this instance
