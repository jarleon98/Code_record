//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}