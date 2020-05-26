const test = require('ava')

test(`
Make a function that takes a string
and gets the first character
`, t => {
    function getFirstChar(str) {
        return str.charAt(0)
    }
    t.deepEqual(getFirstChar('abc'), 'a')
})

test(`
Make a function that takes a string
and gets the character at an index
`, t => {
    function getFirstChar(str, index) {
        return str.charAt(index)
    }
    t.deepEqual(getFirstChar('abc', 1), 'b')
})

test(`
Make a function that takes a string
and return the count of characters
`, t => {
    function getCharCount(str) {
        return str.length
    }
    t.deepEqual(getCharCount('abc'), 3)
})

test(`
Make a function that takes a string
and returns a new string reversed
using a for loop
`, t => {
    function reverseString(str) {
        let newStr = ''
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str.charAt(i)
        }
        return newStr
    }
    t.deepEqual(reverseString('abc'), 'cba')
})