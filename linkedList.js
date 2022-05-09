function LinkedList() {
    function Node(data) {
        this.data = data
        this.next = null
    }
    this.head = null
    this.length = 0

    LinkedList.prototype.append = function (data) {
        var node = new Node(data)
        if (this.length === 0) {
            this.head = node
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    LinkedList.prototype.toString = function () {
        var current = this.head
        var res = ''
        while (current) {
            res += current.data + ' '
            current = current.next
        }
        return res
    }
    LinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false
        var node = new Node(data)
        if (position === 0) {
            node.next = this.head
            this.head = node
        } else {
            var current = this.head
            var index = 0
            var previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.length++
    }
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return false
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    LinkedList.prototype.indexOf = function (data) {
        var index = 0
        var current = this.head
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    LinkedList.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return false
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = data
        return true
    }

    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return false
        var current = this.head
        if (position === 0) {
            this.head = this.head.next
        } else {
            var index = 0
            var previous = null

            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            return current.data
        }

        this.length--
    }

    LinkedList.prototype.remove = function (data) {
        var position = this.indexOf(data)
        return this.removeAt(position)
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0

    }
    LinkedList.prototype.size = function () {
        return this.length
    }
}

var linkedList = new LinkedList()

linkedList.append('abc')
linkedList.append('sss')
linkedList.append('ddd')
linkedList.append('fff')
console.log(linkedList)
console.log(linkedList.toString())
linkedList.insert(4, 'mmmm')
console.log(linkedList.toString())

console.log(linkedList.get(3))
console.log(linkedList.indexOf('fff'))

linkedList.update(1, 'vvvv')
console.log(linkedList.toString())
linkedList.removeAt(1)
console.log(linkedList.toString())

linkedList.remove('mmmm')
console.log(linkedList.toString())
