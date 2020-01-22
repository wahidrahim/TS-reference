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
   * Add to the begining of list
   * @param value
   */
  unshift<T>(value: T) {
    const newNode = new ListNode(value)

    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  /**
   * Get the node at a given index
   * @param index
   */
  get(index: number) {
    if (index < 0 || index > this.length) return null

    let currentNode = this.head

    for (let i = 1; i <= index; i++) {
      currentNode = currentNode!.next
    }

    return currentNode
  }

  set<T>(value: T, index: number) {
    const nodeAtIndex = this.get(index)

    if (nodeAtIndex) {
      nodeAtIndex.value = value
      return true
    }

    return false
  }

  /**
   * Insert a node at `index` position
   * @param value
   * @param index
   */
  insert<T>(value: T, index: number) {
    // Trying to insert out of bounds
    if (index < 0 || index > this.length) {
      return false
    }

    // Inserting at the beginning
    if (index === 0) {
      return !!this.unshift(value)
    }

    // Inserting at the end
    if (index === this.length) {
      return !!this.push(value)
    }

    const newNode = new ListNode(value)
    const prevNode = this.get(index - 1)
    const nextNode = prevNode!.next

    prevNode!.next = newNode
    newNode.next = nextNode

    this.length++

    return true
  }

  /**
   * Removes a node from the `index` position
   * @param index
   */
  remove(index: number) {
    // Trying to remove from out of bounds
    if (index < 0 || index > this.length) {
      return undefined
    }

    // Remove from the beginning
    if (index === 0) {
      return this.shift()
    }

    // Remove from the end
    if (index === this.length - 1) {
      return this.pop()
    }

    const prevNode = this.get(index - 1)
    const deleteNode = this.get(index)

    prevNode!.next = deleteNode!.next

    this.length--

    return deleteNode
  }

  /**
   * Print list
   */
  traverse() {
    let currentNode = this.head

    while (currentNode) {
      console.log(currentNode?.value)
      currentNode = currentNode.next
    }
  }
}

const ll = new SinglyLinkedList()

ll.push(1)
ll.push(2)
ll.push(3)

ll.traverse()
console.log('---')
ll.remove(1)
ll.traverse()
console.log('---')
ll.remove(1)
ll.traverse()
console.log('---')
ll.remove(0)
ll.traverse()
console.log('---')
ll.remove(0)
ll.traverse()
