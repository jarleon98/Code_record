// 链表 当前值.val 下一个值 .next

const mergeTwoLists = function (list1, list2) {
    //直接避免list1和list2都为空的情况
    if (!list1) return list2
    if (!list2) return list1
    // 每一项进行比较值
    if (list1.val < list2.val) {
        // list1下一位和list2当前位进行比较
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}
