/*
给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，
这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。
你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

*/

// 方向数组 dx[-1, 1, 0, 0] dy[0, 0, 1, -1] 
// 1. DFS
var maxAreaOfIsland1 = function(grid) {
    let row = grid.length, col = grid[0].length;
    let res = 0;
    function dfs(x, y) {
        if(x < 0 || x >= row || y < 0 || y >= col || grid[x][y] == 0) {
            return 0
        }
        // 将岛屿点置0
        grid[x][y] = 0;
        let ans = 1;
        let dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];
        for(let i = 0; i < dx.length; i++) {
            ans += dfs(x + dx[i], y + dy[i]);
        }
        return ans
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            res = Math.max(res, dfs(i,j));
        }
    }
    return res
};

// 2. BFS
var maxAreaOfIsland2 = function(grid) {
    let res = 0;
    let row = grid.length, col = grid[0].length;
    let dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[x][y] == 0)
                continue;
            // 队列加入岛屿为1的值
            let queue = [[i,j]], curr = 0;
            while(queue.length > 0) {
                // 拿出来坐标值
                let [x, y] = queue.shift();
                if(x < 0 || x >= row || y < 0 || y >= col || grid[x][y] == 0) {
                    continue;
                }
                // 岛屿数量++
                ++curr;
                // 遍历过的点置0
                gird[x][y] = 0;
                // 周围遍历 
                for (let k = 0; k < dx.length; k++) {//上下左右遍历，把下一层的节点加入队列
                    queue.push([x + dx[k], y + dy[k]]);
                }
            }
            res = Math.max(res, curr);
        }
    } 
    return res
};