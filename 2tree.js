const arr = ['A', 'B', 'E', null, 'C', null, 'F', null, null, 'D', null, 'G', null, null, null, null, null, null, null, null, null, 'H', 'K', null, null];

function treeNode(val) {
  this.val = val;
  this.left = this.right = null;
}