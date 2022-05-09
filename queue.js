function Queue() {

    this.items = []

    Queue.prototype.enqueue = function (element) {
        return this.items.push(element)
    }
    Queue.prototype.dequeue = function () {
        return this.items.shift()

    }
    Queue.prototype.front = function () {
        return this.items[0]

    }
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0

    }
    Queue.prototype.size = function () {
        return this.items.length

    }
    Queue.prototype.toString = function () {
        return this.items.join(' ')
    }
}

var q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.enqueue('d')
q.enqueue('e')

console.log(q)
q.dequeue()
console.log(q)
console.log(q.front())
console.log(q.isEmpty())
console.log(q.size())
console.log(q.toString())


function passGame(list, num) {
    var q = new Queue()

    for (let i = 0; i < list.length; i++) {
        q.enqueue(list[i])

    }

    while (q.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            q.enqueue(q.dequeue())
        }
        q.dequeue()
    }
    return q.front()
}




console.log(passGame([1, 2, 3, 4, 5], 5))
