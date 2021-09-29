/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var up = 0;
    var result = 0;
    var temp = 0;
    result = a ^ b;
    // 0001  0001 0111
    // 0010  0001 0001 
    //------ ---- ----
    // 0011  0000 0110

    up     = a & b;

    // 0001  0001 0111
    // 0010  0001 0001
    // ----  ---- ----
    // 0000  0001 0001

    console.log(result, up);
    while(up != 0)
    {
        up = up<<1;
        console.log(up, 'up');
        temp = result;
        result ^= up;  
        up &= temp;
    }
    
    return result;
};

var res = getSum(7, 1);

console.log(res);


var getSub = function(n1, n2) {
  var x = n1 ^ n2;

  var y = x ^ n2;

  
}