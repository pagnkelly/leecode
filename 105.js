/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const map = {}
  inorder.forEach((item, index) => {
    map[item] = index
  })

  function mybuild (preorder, inorder, pl, pr, il, ir) {
    if (pl > pr) return;

    const root = new TreeNode(preorder[pl])
    const inRoot = map[preorder[pl]]
    const leftLen = inRoot - il

    root.left = mybuild(preorder, inorder, pl+1, pl + leftLen, il, inRoot - 1)
    root.right = mybuild(preorder, inorder, pl + leftLen + 1, pr, inRoot + 1, ir)
    return root;
  }

  return mybuild(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1)

};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder))