/*
给你一个整数数组 nums ，其中元素已经按 升序 排列，
请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足
「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
*/

var sortedArrayToBST = function(nums) {
    return toBST(nums, 0, nums.length-1)
};

const toBST  = (nums, l, r) => {
    if(l > r)
        return null;
    const mid = l + r >> 1; 
    const root = new TreeNode(nums[mid]);
    root.left = toBST(nums, l, mid-1);
    root.right = toBST(nums, mid+1, r);

    return root
};
