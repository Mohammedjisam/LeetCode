function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k <= 1) return head;

    let dummy = new ListNode(0, head);
    let prevGroupEnd = dummy;

    while (head) {
        let count = 0;
        let temp = head;
        while (temp && count < k) {
            temp = temp.next;
            count++;
        }

        if (count < k) break;

        let prev = null;
        let curr = head;
        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        prevGroupEnd.next = prev;
        head.next = curr;
        prevGroupEnd = head;
        head = curr;
    }

    return dummy.next;
}