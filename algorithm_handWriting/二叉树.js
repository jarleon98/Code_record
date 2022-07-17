/*
二叉树遍历：
    深度优先遍历，先左子树，后又子树
*/

// 通用模版：
const Traversal = (root) => {
    const stack = [];
    while(root || root.length) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        // 左子树遍历完后，回到节点
        root = stack.pop();
        root = root.right;
    }
    return stack
}

// 前序遍历
const preOrderTraversal = (root) => {
    const res = [];
    // stack存储节点信息
    const stack = [];
    while(root || stack.length) {
        while(root) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return res
};

// 中序遍历
const midOrderTraversal = (root) => {
    const res = [];
    const stack = [];
    while(root || stack.length) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res
};

// 后序遍历
const postOrderTraversal = (root) => {
    const res = [];
    const stack = [];
    while(root || stack.length) {
        while(root) {
            stack.push(root);
            // 从后往前加
            res.unshift(root.val);
            root = root.right;
        }
        root = stack.pop();
        root = root.left;
    }
    return res
}