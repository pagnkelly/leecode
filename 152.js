/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = -Infinity; 
    var imax = 1;
    var imin = 1;


    nums.forEach(item => {
        if (item < 0) {
            [imax, imin] = [imin, imax];
        } 
        imax = Math.max(item * imax, item);
        imin = Math.min(item * imin, item);

        max = Math.max(imax, max);
    });

    return max;
};
const a = [
    0, 1, 2, 3, 0 ,-1, 2, 3, -2,2121
]
console.log(maxProduct(a));