/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const hash = {};
  nums2.forEach((item, idx) => {
    hash[item] = typeof nums2[idx + 1] !== 'undefined' ? nums2[idx + 1] : -1;
  });
  return nums1.map(item => {
    return item < hash[item] ? hash[item] : -1;
  })
};

const a = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(a);
const b = nextGreaterElement([2, 4], [1, 2, 3, 4]);
console.log(b);


console.log('------');

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let s = '';
  for(var i = 0; i <= n; i++) {
    s += i;
  }

  s = s.replace(/[^1]/g, '');
  return s.length;
};

var countDigitOne2 = function(n) {
  var count = 0;
  for (var i = 0; i <= n; i++) {
    var b = i;
    while (b) {
      if (b % 10 == 1) {
        count += 1;
      };
      b = parseInt(b / 10, 10);
    }
  }

  return count;
}

console.log(countDigitOne(13));
console.log(countDigitOne2(13));
console.log('------');

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var hash = {};
  for (var i = 0; i < S.length; i++) {
    if (hash[S[i]]) {
      hash[S[i]] += 1;
    } else {
      hash[S[i]] = 0;
    }
  }
  var sum = 0;
  for (var j = 0; j < J.length; j++) {
    sum += hash[J[i]];
  }

  return sum;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZZZ"));