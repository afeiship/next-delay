/*!
 * name: @jswork/next-delay
 * description: Delay for next.
 * homepage: https://github.com/afeiship/next-delay
 * version: 1.0.0
 * date: 2020-11-20 22:01:44
 * license: MIT
 */

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
