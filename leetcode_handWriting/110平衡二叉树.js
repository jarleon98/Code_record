
var isBalanced = function (root) {
    if(!root)
        return true
    //查看左右子树的深度
    let leftTree = maxDepth(root.left);
    let rightTree = maxDepth(root.right);
    return Math.abs(leftTree - rightTree) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

//求最大深度的函数 *
var maxDepth = (root) => {
    if(!root)
        return 0
    else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        //层数加1
        return Math.max(left, right) + 1
    }
}
