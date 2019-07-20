/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var len = strs.length;
    var max = strs[0];
    for (var i = 1; i < len; i++) {
      var item = strs[i];
      var j = 0;
      while(max.charAt(j) === item.charAt(j)) {
        j++;
      }
      if (j < 1) {
        return '';
      }
      max = max.substr(0, j);
    }
    return max;
};
var arr = ["flower","flow","flight"];
console.log(longestCommonPrefix(arr));
