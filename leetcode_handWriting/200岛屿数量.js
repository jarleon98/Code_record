
// dfs
var numIslands = function(grid) {
    let count = 0;
    let row = grid.length, col = grid[0].length;
    const dfs = (i, j) => {
        if(i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0')
            return
        // 为1的情况，置0，避免重复计算
        grid[i][j] = '0';
        // 检查上下左右
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i, j-1);
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] == '1') {
                dfs(i,j);
                count++;
            }
        }
    }
    return count 
};