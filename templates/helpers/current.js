module.exports = function findCurrent (obj, options) {
  var current;
  if (obj.id === options.data.root.current || (obj.tree && obj.tree.id === options.data.root.current)) {
    current = true;
    return current && 'current';
  } else {
    if (obj.children) {
      for (var i = 0; i < obj.children.length; i++) {
        current = findCurrent(obj.children[i], options);
        if (current) {
          break;
        }
      }
      return current && 'checked';
    }
  }
};
