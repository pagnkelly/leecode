/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length || 0;
    var len2 = nums2.length || 0;
    var countLen = len1 + len2;
    if (countLen < 2) {
      return nums1[0] || nums2[0];
    }
    var count = countLen % 2 === 1 ? Math.ceil(countLen / 2) : (countLen / 2) + 1;

    var temp = [], idx1=0, idx2=0;
    for (var i = 0; i < countLen; i++) {
      if (nums1[idx1] < nums2[idx2]) {
        if (nums1[idx1] !== undefined) {
          temp.push(nums1[idx1]);
          idx1 += 1;
        } else {
          temp.push(nums2[idx2]);
          idx2 += 1;
        }
      } else {
        if (nums2[idx2] !== undefined) {
          temp.push(nums2[idx2]);
          idx2 += 1;
        } else {
          temp.push(nums1[idx1]);
          idx1 += 1;
        }
      }
      if (temp.length === count) {
        if (countLen % 2 === 1) {
          return temp.pop();
        }
        return (temp.pop() + temp.pop()) / 2;
      }
    }
};


function findMedianSortedArrays1(A, B) {
    var m = A.length;
    var n = B.length;
    if (m > n) { // to ensure m<=n
        var temp = A; A = B; B = temp;
        var tmp = m; m = n; n = tmp;
    }
    var iMin = 0, iMax = m, halfLen = parseInt((m + n + 1) / 2);
    while (iMin <= iMax) {
        var i = parseInt((iMin + iMax) / 2);
        var j = parseInt(halfLen - i);
        if (i < iMax && B[j-1] > A[i]){
            iMin = i + 1; // i is too small
            console.log('iMin', iMin);
        }
        else if (i > iMin && A[i-1] > B[j]) {
            iMax = i - 1; // i is too big
            console.log('iMax', iMin);
        }
        else { // i is perfect
            var maxLeft = 0;
            if (i == 0) { maxLeft = B[j-1]; }
            else if (j == 0) { maxLeft = A[i-1]; }
            else { maxLeft = Math.max(A[i-1], B[j-1]); }
            if ( (m + n) % 2 == 1 ) { return maxLeft; }

            var minRight = 0;
            if (i == m) { minRight = B[j]; }
            else if (j == n) { minRight = A[i]; }
            else { minRight = Math.min(B[j], A[i]); }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
}

console.log(findMedianSortedArrays1([1, 2, 3], [1]));
