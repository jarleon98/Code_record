let tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                }, {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                }, {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

/* 深度优先遍历 */
// 1. 访问根节点
// 2， 对根节点的children依次深度优先遍历
const dfs = (root) => {
    console.log(root);
    root.children.forEach(dfs);
}
console.log(dfs(tree));

/* 广度优先遍历 */
// 1. 新建队列，根节点入队
// 2. 队头节点出队并访问
// 3. 队头的children入队
// 4.重复2，3直到队列空
const bfs = (root) => {
    const queue = [root];
    while(queue.length) {
        let q = queue.shift();
        console.log(q.val);
        q.children.forEach(e => {
            queue.push(e);
        });
    }
}
console.log(bfs(tree));