/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var max = n - 1;
    for (i = 2; i < n; i++) {
      var a = n % i;
      if (a == 1 && (i + 1) !== n) {
        a = i + 1;
      }

      var b = (n - a) / i;
      var num = Math.pow(i, b);
      if (a) {
        num *= a;
      }
      max = Math.max(max, num);
    }

    return max;
};

console.log(integerBreak(3));
