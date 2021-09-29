/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  if (nums.length == 0) return -1;
  return find(start, end, nums, target);

};

var find = function(start, end, nums, target) {
  if (start === end) return nums[start] === target ? start : -1;
  var mid = parseInt((start + end) / 2);
  if (nums[start] < nums[mid]) {
    if (target < nums[mid]) {
      return twoSearch(start, mid, nums, target)
    } else {
      return find(mid, end, nums, target)
    }
  } else {
    if (target > nums[mid]) {
      return twoSearch(mid, end, nums, target)
    } else {
      return find(start, mid, nums, target)
    }
  }
}

var twoSearch = function(l, r, nums, target) {
  while (l <= r) {
    var mid = parseInt((r + l) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

// console.log(search([1], 0));



//

function ss (nums, target) {
  var len = nums.length;
  var m = parseInt(len / 2);
  var mid = nums[m];
  if (target === mid) return m;
  // 1 两边都是升序
  // 2 左边升序
  // 3 右边升序
  var status = 0;
  if (nums[0] <= mid) {
    status += 2
  }

  if (mid <= nums[len -1]) {
    status += 3
  }

  if (status === 5) {
    if (target > mid) {
      // 2
      return twoSearch(m, len - 1, nums, target);
    } else {
      // 2
      return twoSearch(0, m, nums, target);
    }
  }


  if (status === 2) {
    if (target <= mid && target >= nums[0]) {
      // 2
      return twoSearch(0, m, nums, target);
    } else {
      // ss
      var a = ss(nums.slice(m+1, len), target);
      if (a === -1) {
        return -1;
      }
      return m+1 + a
    }
  }

  if (status === 3) {
    if (target >= mid && target <= nums[len-1]) {
      // 2
      return twoSearch(m, len - 1, nums, target);
    } else {
      // ss
      return ss(nums.slice(0, m), target)
    }
  }
  return -1;
}

var aaaa= ss([4,5,6,7,0,1,2], 0)
console.log(aaaa);