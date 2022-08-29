let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

/* 二叉树前序遍历 */
// 1. 访问根节点
// 2. 对根节点左子树前序遍历
// 3. 对根节点右子树前序遍历
const preOrder = (root) => {
    if(!root) return
    console.log(root.val);
    preOrder(root.left);
    preOrder(toot.right);
}
console.log(preOrder(tree));

/* 二叉树中序遍历 */
// 1. 对根节点左子树中序遍历
// 2. 访问根节点
// 3. 对根节点右子树中序遍历
const midOrder = root => {
    if(!root) return
    midOrder(root.left);
    console.log(root.val);
    midOrder(root.right);
}
console.log(midOrder(tree));

/* 二叉树后序遍历 */
// 1. 对根节点左子树后序遍历
// 2. 对根节点右子树后序遍历
// 3. 访问根节点
const postOrder = root => {
    if(!root) return
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}
console.log(midOrder(tree));