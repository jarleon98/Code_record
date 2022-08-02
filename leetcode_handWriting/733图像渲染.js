var floodFill = function(image, sr, sc, color) {
    const row = image.length;
    const col = image[0].length;
    const oldColor = image[sr][sc];
    if(oldColor == color)
        return image
    const fill = (x, y) => {
        if(x < 0 || x >= row || y < 0 || y >= col || image[x][y] != oldColor) {
            return;
        }
        image[x][y] = color;
        fill(x-1, y);
        fill(x+1, y);
        fill(x, y-1);
        fill(x, y+1);
    };
    fill(sr, sc);
    return image
};