function PriorityQueue() {
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.items = []

    PriorityQueue.prototype.enqueue = function (element, priority) {
        var qe = new QueueElement(element, priority)
        if (this.items.length === 0) {
            this.items.push(qe)
        } else {
            var added = false
            for (let i = 0; i < this.items.length; i++) {
                if (qe.priority < this.items[i].priority) {
                    this.items.splice(i, 0, qe)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(qe)

            }
        }
    }

    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift()

    }
    PriorityQueue.prototype.front = function () {
        return this.items[0]

    }
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0

    }
    PriorityQueue.prototype.size = function () {
        return this.items.length
    }
    PriorityQueue.prototype.toString = function () {
        return this.items.map(item => `${item.element}-${item.priority}`)
    }

}

var pq = new PriorityQueue()

pq.enqueue('aaa', 10)
pq.enqueue('bbb', 101)
pq.enqueue('ccc', 1)
pq.enqueue('dddd', 5)
console.log(pq.toString())