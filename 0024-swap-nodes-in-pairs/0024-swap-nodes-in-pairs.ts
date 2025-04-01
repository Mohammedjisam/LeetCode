function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let dummy = new ListNode(0, head);
    let prev = dummy;
    while (head && head.next) {
        let first = head;
        let second = head.next;
        first.next = second.next;
        second.next = first;
        prev.next = second;
        prev = first;
        head = first.next;
    }
    return dummy.next;
}