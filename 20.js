/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
    var tmp = [];
    for (var i = 0; i< s.length; i++) {
       var str = s[i];
       if (tmp[tmp.length - 1] && map[tmp[tmp.length - 1]] === str) {
         tmp.pop();
       } else if (map[str]) {
         tmp.push(str);
       } else {
         return false;
       }
    }
    return tmp.length === 0;
};
console.log(isValid('{}'));
console.log(isValid(''));
console.log(isValid('{}}'))
console.log(isValid('{[]}{}'))
console.log(isValid('{[}]'))
