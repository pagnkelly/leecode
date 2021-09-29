/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1;
    var b = 1;

    for (var i = 2; i <= n; i++) {
        let temp = b;
        b = a + b
        a = temp
    }

    return b;
};

console.log(climbStairs(5));

// d(n) = d(n-1) + d(n-2)