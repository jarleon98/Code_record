/*
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
如果是，返回 true ；否则，返回 false 。

*/

/**
 * 找到中间节点，翻转链表变成两个链表，依次判断节点
 * 
 */
var isPalindrome = function(head) {
    if(head == null || head.next == null) {
        return true
    }
    // 找中间节点 用快慢指针，快指针是慢指针2倍
    let fast = head;
    let slow = head;
    let prev;

    while(fast && fast.next) {
        // prev跟随慢指针
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;

    }
    // 变成前后两个链表
    prev.next = null; 
    let head2 = null;
    // 翻转链表
    while(slow) {
        let tmp = slow.next;
        slow.next = head2;
        head2 = slow;
        slow = tmp;
    }
    while(head && head2) {
        if(head.val != head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    return true
};