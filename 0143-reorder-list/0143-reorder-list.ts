const reorderList = (head: ListNode | null): void => {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the list
    let slow: ListNode = head, fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let prev: ListNode | null = null, curr: ListNode | null = slow.next;
    slow.next = null; // Split the list into two halves
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Step 3: Merge the two halves
    let first: ListNode | null = head, second: ListNode | null = prev;
    while (second) {
        let temp1 = first!.next, temp2 = second.next;
        first!.next = second;
        second.next = temp1;
        first = temp1!;
        second = temp2;
    }
};
