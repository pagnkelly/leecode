
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const len = obstacleGrid.length;
    const len2 = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1) {
      return 0;
    } else {
      obstacleGrid[0][0] = 1
    }
    for (let i = 1; i< len2; i++) {
      obstacleGrid[0][i] = obstacleGrid[0][i] === 1 ? 0 : obstacleGrid[0][i - 1]
    }

    for (let i = 1; i < len; i++) {
      obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 : obstacleGrid[i-1][0]
    }

    for (let i = 1; i < len; i++) {
      for (let j = 1; j < len2; j++) {
        obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
    return obstacleGrid[len - 1][len2 - 1];
};



console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]));

