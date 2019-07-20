/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var xs = '';
    var fuhao = true;
    if (x < 0) {
      x = -x;
      fuhao = false;
    }
    xs = x + '';
    var len = xs.length;
    for (var i = 0; i < len; i++) {
      if (i >= len - i - 1) break;
      xs = exchange(i, len - i - 1, xs);
    }
    var num = fuhao ? parseInt(xs, 10) : -parseInt(xs, 10);
    return num >= Math.pow(-2, 31) && num <= Math.pow(2, 31) -1 ? num : 0;
};

var exchange = (a, b, str) => {
    var sa = str.charAt(a);
    var sb = str.charAt(b);
    return str.substring(0, a) + sb + str.substring(a+1, b) + sa + str.substring(b+1, str.length);
}

//


var r = (num) => {
  var rev = 0;
  while (num !=0) {
    var pop = num % 10;
    num = parseInt(num / 10, 10);
    rev = rev * 10 + pop;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) -1) {
      return 0;
    }
  }
  return rev;
}
// console.log(reverse(1534236469));
// console.log(9646324351> Math.pow(2, 31) -1)
console.log(r(1534236469));
