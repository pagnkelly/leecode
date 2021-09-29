/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// [ left, root, right ]
// [ left, right, root ]
var buildTree = function(inorder, postorder) {
  let map = {}
  inorder.forEach((item, index) => {
    map[item] = index
  })
  function track(inorder, postorder, il, ir, pl, pr) {
    if (pl > pr) return null;
    const root = new TreeNode(postorder[pr])
    const inRootIndex = map[postorder[pr]]
    const len = inRootIndex - il
    root.left = track(inorder, postorder, il, il + len - 1, pl, pl + len - 1)
    root.right = track(inorder, postorder, il + len + 1, ir, pl + len, pr - 1)
    return root
  }
  
  return track(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1)
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]

console.log(buildTree(inorder, postorder))