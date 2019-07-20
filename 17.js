/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length < 1) return [];
    var dmp = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    };
    return digits.split('').map(item => dmp[item] || []).reduce((prev, next) => {
      const res = [];
      prev.forEach(p => {
        next.forEach(n => {
          res.push(p + n);
        });
      });
      return res;
    });
};

console.log(letterCombinations('234'));
