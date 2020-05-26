const test = require('ava');

test(`
Make a function that receives an array
and value and mutates that array and adds the value
`, t => {
    const arr1 = [1]
    function mutateAdd(arr, value) {
        arr.push(value)
        return arr
    }
    t.deepEqual(mutateAdd(arr1, 2), [1, 2])
    t.deepEqual(arr1, [1, 2])
});

test(`
Make a function that receives an array
and value and copies the array with the value
`, t => {
    const arr1 = [1]
    function copyAdd(arr, value) {
        return [...arr, value]
    }
    t.deepEqual(copyAdd(arr1, 2), [1, 2])
    t.notDeepEqual(arr1, [1, 2])
});

test(`
Make a function that recieves an array
and returns only numbers that are greater than
5
`, t => {
    function greaterThan5(arr) {
        return arr.filter(i => i > 5)
    }
    t.deepEqual(greaterThan5([1,2,3,4,5,6]), [6])
})

test(`
Make a function that recieves a list of price objects
and returns the sum
IE: sumPrices([{price: 1.25}, {price: 2}]) === 3.25
`, t => {
    function sumPrices(arr) {
        return arr.reduce((a, b) => a + b.price, 0)
    }
    t.deepEqual(sumPrices([{price: 1}, {price: 2}]), 3)
})

test(`
Make a function that recieves a list of price objects
and returns the sum
IE: sumPrices([{price: 1.25}, {price: 2}]) === 3.25
`, t => {
    function sumPrices(arr) {
        return arr.reduce((a, b) => a + b.price, 0)
    }
    t.deepEqual(sumPrices([{price: 1}, {price: 2}]), 3)
})