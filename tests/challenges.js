const test = require('ava')

test(`
Make a function that tells if a number
is even using recursion
`, t => {
    function isEven() {

    }
    t.deepEqual(isEven(1), false)
})

test(`
Make a function that gives back the 
factorial of a number using recursion
IE 4! === 4 * 3 * 2 * 1
`, t => {
    function factorial() {

    }
    t.deepEqual(factorial(3), 6)
    t.deepEqual(factorial(4), 24)
})