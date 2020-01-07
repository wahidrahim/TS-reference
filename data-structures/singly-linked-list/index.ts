class ListNode<T> {
  value: T
  next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  head: ListNode<any> | null
  tail: ListNode<any> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push<T>(value: T) {
    const newNode = new ListNode(value)

    if (this.tail) {
      // Non-empty list
      this.tail.next = newNode
      this.tail = newNode
    } else {
      // Empty list
      this.head = newNode
      this.tail = this.head
    }

    this.length++

    return this
  }
}

const linkedList = new SinglyLinkedList()

linkedList.push('hi')
linkedList.push(1)
linkedList.push('hellooo!')

console.log(linkedList)
