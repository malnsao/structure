function DoublyLinkedList() {
    this.head = null
    this.tial = null
    this.length = 0

    function Node(data) {
        this.data = data
        this.next = null
        this.prev = null
    }

    DoublyLinkedList.prototype.append = function (data) {
        var node = new Node(data)
        if (this.length === 0) {
            this.head = node
            this.tial = node
        } else {
            node.prev = this.tial
            this.tial.next = node
            this.tial = node
        }
        this.length++
    }

    DoublyLinkedList.prototype.toString = function () {
        return this.backwardString()
    }
    DoublyLinkedList.prototype.forwardString = function () {
        var current = this.tial
        var res = ''
        while (current) {
            res += current.data + ' '
            current = current.prev
        }
        return res
    }
    DoublyLinkedList.prototype.backwardString = function () {
        var current = this.head
        var res = ''
        while (current) {
            res += current.data + ' '
            current = current.next
        }
        return res
    }
    DoublyLinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false
        var node = new Node(data)
        if (this.length === 0) {
            // node.prev = this.head
            this.head = node
            this.tial = node
        } else {
            if (position === 0) {
                // node.prev = this.head
                this.head.prev = node
                node.next = this.head
                this.head = node

            } else if (position === this.length) {
                this.tial.next = node
                node.prev = this.tial
                this.tial = node
            }
            else {
                var current = this.head
                var index = 0
                while (index++ < position) {
                    current = current.next
                }
                node.prev = current.prev
                node.next = current
                current.prev.next = node
                current.prev = node
            }
        }

        this.length++
    }

}

var doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append('ssssssss')
doublyLinkedList.append('aaaaaa')
doublyLinkedList.append('vvvvvvv')
doublyLinkedList.append('bbbbbbbbb')
console.log(doublyLinkedList.toString())
console.log(doublyLinkedList.forwardString())
console.log(doublyLinkedList.backwardString())
doublyLinkedList.insert(1, 'mmmm')
console.log(doublyLinkedList.toString())
