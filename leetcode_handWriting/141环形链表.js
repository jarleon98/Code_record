/*
给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

*/

// 1， map
// 存入map，当遇到重复的就判定为环 
var hasCycle1 = function(head) {
    let map = new Map();
    while(head) {
        if(map.has(head))
            return true
        map.set(head, true);
        head = head.next;
    };
    return false
};

// 2. 双指针 快的=慢的 则表示有环
const hasCycle = (head) => {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow) {
            return true
        }
    };
    return false
};