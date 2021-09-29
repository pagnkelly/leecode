/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var cn = n;
    var cm = m;
    while (cn > 0) {
      if (nums1[cm - 1] > nums2[cn - 1]) {
        nums1[cm + cn - 1] = nums1[cm - 1]
        cm--
      } else {
        nums1[cm + cn - 1] = nums2[cn - 1]
        cn--
      }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))