function Stack() {

    this.items = []

    Stack.prototype.push = function (element) {
        return this.items.push(element)
    }
    Stack.prototype.pop = function () {
        return this.items.pop()

    }
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]

    }
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0

    }
    Stack.prototype.size = function () {
        return this.items.length

    }
    Stack.prototype.toString = function () {
        return this.items.join(' ')
    }
}

var s = new Stack()

s.push(100)
s.push(1000)
s.push(10000)
s.push(100000)
console.log(s)

s.pop()
console.log(s)
console.log(s.peek())
console.log(s.size())
console.log(s.toString())

function dec2bin(decNumber) {
    var stack = new Stack()

    while (decNumber > 0) {
        stack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }

    var str = ''
    while (!stack.isEmpty()) {
        str += stack.pop()
    }
    return str
}

console.log(dec2bin(9999))