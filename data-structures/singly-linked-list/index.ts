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

  /**
   * Add to the end of list
   * @param value
   */
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

  /**
   * Remove from the end of list
   */
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
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return currentNode
  }

  /**
   * Remove from the begining of list
   */
  shift() {
    if (!this.head) return undefined

    const currentHead = this.head

    this.head = currentHead.next
    this.length--

    // List should be empty
    if (this.length === 0) {
      this.tail = null
    }

    return currentHead
  }

  /**
   * Print list
   */
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

console.log(linkedList.shift())
console.log(linkedList.shift())
console.log(linkedList.shift())

console.log(linkedList)
