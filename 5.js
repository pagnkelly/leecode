/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var map = {};
    var strs = [];
    for (var i = 0; i < s.length; i++) {
      var item = s.charAt(i);
      if (!map[item]) {
        map[item] = [i];
      } else {
        map[item].forEach(idx => {
          strs.push(s.substring(idx, i+1));
        });
        map[item].push(i);
      }
    }
    var res = '';
    strs.forEach(item => {
      if (check(item) && item.length > res.length) {
        res = item;
      }
    });
    if (!res) {
      return s.charAt(0);
    }
    return res;
};

var check = function(s) {
  if (s.length === 1) return true;
  for (var i=0; i < Math.floor(s.length / 2); i++) {
    if (!(s.charAt(i) === s.charAt(s.length - 1 - i))) {
      return false
    }
  }
  return true;
}


const sa = (s) => {
  const len = s.length;
  let start = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    if (i == 0) {
      max = 1;
    } else {

      let ji = 1;
      let m=1;
      while (s.charAt(i - m) && s.charAt(i+m) && s.charAt(i - m) === s.charAt(i+m)) {
        ji += 2;
        m++
      }

      let ou = 0;
      let n = 1;
      while (s.charAt(i - n) && s.charAt(i+n-1) && s.charAt(i - n) === s.charAt(i+n-1)) {
        ou += 2;
        n++
      }
      let max = Math.max(ji, ou);
      if (max > end - start) {
        start = i - parseInt(max/2);
        end = i + parseInt((max-1) / 2);
      }

    }
  }
  return s.substring(start, end + 1);
}

var dp = function (s) {
  var len = s.length;
  var d = [];
  for (var i = 0; i < len; i++) {
    d.push([]);
  }
  var maxLen = -1;
  var start = 0;
  for (var i = 0; i < len; i++) {
    var x = 0, y = i;
    for (var j = 0; j < len - i; j++) {
      if (y - x < 2) {
        d[x][y] = s.charAt(x) === s.charAt(y);
      } else {
        d[x][y] = d[x + 1][y -1] && s.charAt(x) === s.charAt(y);
      }

      if (d[x][y] && y - x + 1 > maxLen) {
        start = x;
        maxLen = y - x + 1;
      }
      x++;
      y++;
    }
  }
  return s.substr(start, maxLen);
}
console.log(dp('acac'));
