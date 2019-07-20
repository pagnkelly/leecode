/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     var num1 = parseInt(l1.reverse().join(''));
//     var num2 = parseInt(l2.reverse().join(''));
//     var num3 = num1 + num2;
//     var str3 = num3 + "";
//     var arr3 = str3.split('').reverse();
//     return arr3.map((item) => parseInt(item));
// };

var addTwoNumbers = function(l1, l2) {
  var len1 = l1.length;
  var len2 = l2.length;
  var maxLen = Math.max(len1, len2);
  var maxL = maxLen === len1 ? l1 : l2;
  var minL = maxLen === len1 ? l2 : l1;
  var res = [];
  var needAdd = false;
  for (var i = 0; i < maxLen; i++) {
    if (!minL[i]) minL[i] = 0;
    var sum = needAdd ? maxL[i] + minL[i] +1 : maxL[i] + minL[i];
    if (sum > 9) {
      res.push(sum - 10);
      needAdd = true;
    } else {
      res.push(sum);
      needAdd = false;
    }
  }

  return res;
}

console.log(addTwoNumbers([2,4,3],[5,6,4]));
