function swapPairs(head: ListNode | null): ListNode | null {
    // If the list is empty or has only one node, return as is
    if (!head || !head.next) return head;

    // Initialize a dummy node to simplify swapping
    let dummy = new ListNode(0, head);
    let prev = dummy;

    while (head && head.next) {
        let first = head;
        let second = head.next;

        // Swapping nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move pointers forward
        prev = first;
        head = first.next;
    }

    return dummy.next;
}