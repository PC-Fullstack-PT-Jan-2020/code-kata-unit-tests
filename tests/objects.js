const test = require('ava')

test(`
Make a function that clones an object
`, t => {
    function cloneObject() {
        
    }
    const o = {name: 'a'}
    t.deepEqual(cloneObject(o), {name: 'a'})
    t.not(cloneObject(o), o)
})

test(`
Make a function that sets an object given that
object, a key, and value via mutation
`, t => {
    function mutateObject() {
        
    }
    t.deepEqual(mutateObject({name: 'a'}, 'age', 22), {name: 'a', age: 22})
})

test(`
Make a function that takes an object and key and will either get
the object value by key or default it to a third argument passed in
`, t => {
    function getProp() {
        
    }
    t.deepEqual(getProp({name: 'abc'}, 'name'), 'abc')
    t.deepEqual(getProp({name: 'abc'}, 'foo', 'john'), 'john')
})

test(`
Make a function letter count that takes an array of letters
and returns an object with a count of all the letters
`, t => {
    function letterCount() {
        
    }
    t.deepEqual(letterCount(['a', 'a', 'b', 'c']), {a: 2, b: 1, c: 1})
    t.deepEqual(letterCount(['a']), {a: 1})
})