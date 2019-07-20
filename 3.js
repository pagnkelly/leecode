/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  var obj = {};
  var point = 0;
  var num = 0;
  if (!s) return 0;
  for (var i = 0; i < len; i++) {
    var letter = s.charAt(i);
    if (obj[letter] === undefined || obj[letter] < point) {
    } else {
      point = obj[letter] + 1;
    }
    num = i + 1 - point > num ? i + 1 - point : num;
    obj[letter] = i;
  }
  return num;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
