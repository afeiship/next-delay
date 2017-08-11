(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.delay = function (inInterval) {
    return new Promise(function (resolve) {
      var timeout = setTimeout(function () {
        resolve(timeout);
      }, inInterval);
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delay;
  }

}());
