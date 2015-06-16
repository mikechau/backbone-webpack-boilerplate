module.exports = function() {
  this.given(/^the box is visible$/, (callback) => {
    callback();
  });

  this.then(/^the box contains the text 'The box'$/, (callback) => {
    callback();
  });
};
