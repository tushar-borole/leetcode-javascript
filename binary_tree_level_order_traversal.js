
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null){
        return []
    }
    let finalOut=[]
    let queue = [root]
    while(queue.length > 0){
        let out = []
        let next =[]
        for(let val of queue){
            if(val) {
                out.push(val.val)
                if (val.left) {
                    next.push(val.left)
                }
                if (val.right) {
                    next.push(val.right)
                }
            }
        }
        queue = next
        finalOut.push(out.slice())
    }
    return finalOut
};


const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);


 levelOrder(tree) //?



