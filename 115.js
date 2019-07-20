/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
      var item = s[i];
      var temp = {};

      for (var j = 0; j < t.length; j++) {
        var jtem = t[j];

        if (item === jtem  && j == 0) {
          temp[j] = (map[j] || 0) + 1;
        }

        if (item === jtem && map[j -1]) {
          temp[j] = map[j] ? map[j] + map[j - 1] : map[j - 1];
        }
      }

      map = {
        ...map,
        ...temp
      }
    }

    return map[t.length - 1] || 0;
};


var ss = 'rabbbit';
var ts = 'rabbit';

console.log(numDistinct(ss, ts));
