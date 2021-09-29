/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     const len = digits.length;
//     let a = 1;
//     for (var i = len - 1; i > -1; i--) {
//       digits[i] += a;
//       if (digits[i] > 9) {
//         a = 1;
//         digits[i] = 0;
//         if (i === 0) {
//           digits.unshift(1);
//         }
//       } else {
//         return digits;
//         a = 0;
//       }
//     }
//     return digits;
// };

// var plusOne = function(digits) {
  // const len = digits.length;
  // for(let i = len - 1; i >= 0; i--) {
  //     digits[i]++;
      
  //     digits[i] %= 10;
  //     console.log(digits[i]);
  //     if(digits[i]!=0)
  //         return digits;
  // }
  // digits = [...Array(len + 1)].map(_=>0);;
  // digits[0] = 1;
  // return digits;
// };

var plusOne = function(digits) {
  return `${parseInt(digits.join('')) + 1}`.split('').map(item => parseInt(item));
};
console.log(plusOne([1,2,3,4]));