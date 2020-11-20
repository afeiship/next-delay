(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.delay = function (inInterval) {
    return function (args) {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          resolve(args);
        }, inInterval);
      });
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delay;
  }
})();
