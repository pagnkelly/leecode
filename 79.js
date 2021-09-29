/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var x = board.length;
    if (x === 0) return false;
    var y = board[0].length;
    const d = [
      [-1, 0], [1, 0], [0, 1], [0, -1]
    ]
    var mark = Array.from({ length: x }, () => new Array(y))
    var dfs = function (posi, posj, start) {
      if (start === word.length -1) {
        return board[posi][posj] == word[start];
      }
      
      if (word[start] === board[posi][posj]) {
        mark[posi][posj] = true;
        for (let i =0 ; i< 4; i++) {
          let ox = posi + d[i][0]
          let oy = posj + d[i][1]
          if(ox >=0 && ox < x && oy >=0 && oy < y && !mark[ox][oy] && dfs(ox, oy, start + 1)) {
            return true
          }
        }
        mark[posi][posj] = false;
      }

      return false;
    }

    for (var i = 0; i < x; i++) {
      for (var j = 0; j < y; j++) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
    return false;
};

console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], 'AB'));