function bubbleSort(list) {
    console.log(list)
    function swap(m, n) {
        var temp = list[m]
        list[m] = list[n]
        list[n] = temp
    }

    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (list[j] > list[j + 1]) {
                swap(j, j + 1)
            }
        }
    }
    console.log(list)

}
// bubbleSort([1, 2, 5, 11, 3, 4])

function selectSort(list) {
    console.log(list)
    function swap(m, n) {
        var temp = list[m]
        list[m] = list[n]
        list[n] = temp
    }

    for (let i = 0; i < list.length - 1; i++) {
        var min = i
        for (let j = min + 1; j < list.length; j++) {
            if (list[min] > list[j]) {
                min = j
            }
        }
        swap(min, i)
    }
    console.log(list)

}
// selectSort([1, 2, 5, 11, 3, 4])

function insertionSort(list) {
    console.log(list)
    for (let i = 1; i < list.length; i++) {
        var temp = list[i]
        var j = i
        while (list[j - 1] > temp && j > 0) {
            list[j] = list[j - 1]
            j--
        }
        list[j] = temp
    }
    console.log(list)

}
// insertionSort([1, 2, 5, 11, 3, 4])

function shellSort(list) {
    console.log(list)

    var gap = Math.floor(list.length / 2)
    while (gap >= 1) {
        for (let i = gap; i < list.length; i++) {
            var temp = list[i]
            var j = i
            while (list[j - gap] > temp && j > gap - 1) {
                list[j] = list[j - gap]
                j -= gap
            }
            list[j] = temp
        }
        gap = Math.floor(gap / 2)
    }

    console.log(list)

}
// shellSort([1, 2, 5, 11, 3, 4])



function quikeSort(list) {
    if (list.length <= 1) return list
    var pivotIndex = Math.floor(list.length / 2)
    var pivot = list.splice(pivotIndex, 1)[0]
    let arrLeft = []
    let arrRight = []

    for (var i = 0; i < list.length; i++) {
        if (list[i] < pivot) {
            arrLeft.push(list[i])
        } else {
            arrRight.push(list[i])
        }
    }
    return quikeSort(arrLeft).concat([pivot], quikeSort(arrRight))
}




// console.log(quikeSort([1, 2, 5, 11, 3, 4]))


function c(arr) {
    let obj = {}
    arr = arr.reduce((b, c) => {
        obj[c.id] ? '' : obj[c.id] = true && b.push(c)
        return b
    }, [])
    console.log(arr)
}

// c([{ id: 2, name: 'p' }, { id: 4 }, { id: 2 }, { id: 55 }])

var value = 'outer'
varmyObj = {
    value: 'ttt',
    a: function () {
        function b() {
            console.log(this.value)
        }
        b()
    },
    c: function () {
        console.log(this.value)
    }
}

varmyObj.a()
let d = varmyObj.c
d()