const test = require('ava')

test(`
Make a function that tells if a number
is even using recursion
`, t => {
    function isEven(num) {
        if (num === 0) {
            return true
        }
        if (num === 1) {
            return false
        }
        return isEven(num - 2)
    }
    t.deepEqual(isEven(1), false)
})

test(`
Make a function that gives back the 
factorial of a number using recursion
IE 4! === 4 * 3 * 2 * 1
`, t => {
    function factorial(num) {
        if (num === 1 || num === 0) {
            return 1
        }
        return num * factorial(num - 1)
    }
    t.deepEqual(factorial(3), 6)
})