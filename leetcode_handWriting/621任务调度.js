/*
操作系统资源调度

给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。

然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的 最短时间 。

输入：tasks = ["A","A","A","B","B","B"], n = 2
输出：8

*/

const leastInterval = (tasks, n) => {
    let obj = {};
    let max = 0, maxTime = 0;
    for(let i = 0; i < tasks.length; i++) {
        obj[tasks[i]] = (obj[tasks[i]] || 0) + 1;
        // 获取最多字母的值
        max = Math.max(max, obj[tasks[i]]);
    }
    // 查看有几个满足最多值的字母
    for(let task in tasks) {
        if(obj[task] === max)
            maxTime++;
    }
    // 核心
    // 时间= 前max-1次最小时间 + 最后一次时间
    // 频率最高的字母 的间隔时间大小
    // 前max-1次时间：(max-1)(1+n)
    let time = (max - 1) * (1 + n) + maxTime;
    return Math.max(time, tasks.length)
}