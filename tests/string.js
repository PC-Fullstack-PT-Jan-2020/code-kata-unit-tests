const test = require('ava')

test(`
Make a function that takes a string
and gets the first character
`, t => {
    function getFirstChar() {

    }
    t.deepEqual(getFirstChar('abc'), 'a')
})

test(`
Make a function that takes a string
and gets the character at an index
`, t => {
    function getCharAtLocation() {
        
    }
    t.deepEqual(getCharAtLocation('abc', 1), 'b')
})

test(`
Make a function that takes a string
and return the count of characters
`, t => {
    function getCharCount() {
        
    }
    t.deepEqual(getCharCount('abc'), 3)
})

test(`
Make a function that takes a string
and returns a new string reversed
using a for loop
`, t => {
    function reverseString() {
        
    }
    t.deepEqual(reverseString('abc'), 'cba')
})

test(`
Make a function that takes a sentence and counts the words in it
`, t => {
    function reverseString() {
        
    }
    t.deepEqual(reverseString('hello there'), 2)
})