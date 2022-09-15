

const maxValue = (matrix) => {
    let row = matrix.length, col = matrix[0].length;
    for(let i = 1; i < row; i++) {
        matrix[0][i] += matrix[0][i-1];
    } 
    for(let j = 1; j < col; j++) {
        matrix[j][0] += matrix[j][j-1];
    }
    for(let i = 1; i < row; i++) {
        for(let j = 1; j < col; j++) {
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
        }
    }
    return matrix[row-1][col-1];
}