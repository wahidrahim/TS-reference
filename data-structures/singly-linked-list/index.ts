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

  pop() {
    if (!this.head) return undefined

    let currentNode = this.head
    let newTail = currentNode

    while (currentNode.next) {
      newTail = currentNode
      currentNode = currentNode.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    // List should be empty
    if (!this.length) {
      this.head = null
      this.tail = null
    }

    return currentNode
  }

  traverse() {
    let currentNode = this.head

    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}

const linkedList = new SinglyLinkedList()

linkedList.push('hi')
linkedList.push(1)
linkedList.push('hellooo!')

console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList)
