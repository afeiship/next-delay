/*!
 * name: @feizheng/next-delay
 * description: Delay for next.
 * url: https://github.com/afeiship/next-delay
 * version: 1.0.0
 * date: 2020-01-06 20:20:56
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.delay = function(inInterval) {
    return function(args) {
      return new Promise(function(resolve) {
        return setTimeout(function() {
          resolve(args);
        }, inInterval);
      });
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delay;
  }
})();

//# sourceMappingURL=next-delay.js.map
