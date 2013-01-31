
Tinytest.add("less - presence", function(test) {

  var d = OnscreenDiv(Meteor.render(function() {
    return '<p class="less-dashy-left-border"></p>'; }));
  d.node().style.display = 'block';

  var p = d.node().firstChild;
  var leftBorder = getStyleProperty(p, 'border-left-style');
  test.equal(leftBorder, "dashed");

  // test @import
  var leftBorderColor = getStyleProperty(p, 'border-left-color');
  test.equal(leftBorderColor, "rgb(50, 20, 86)");

  d.kill();
});
