const test = require('ava')

test(`
Make a function that clones an object
`, t => {
    function cloneObject(obj) {
        return {...obj}
    }
    const o = {name: 'a'}
    t.deepEqual(cloneObject(o), {name: 'a'})
    t.not(cloneObject(o), o)
})

test(`
Make a function that sets an object given that
object, a key, and value via mutation
`, t => {
    function mutateObject(obj, key, value) {
        obj[key] = value
        return obj
    }
    t.deepEqual(mutateObject({name: 'a'}, 'age', 22), {name: 'a', age: 22})
})

test(`
Make a function that takes an object and key and will either get
the object value by key or default it to a third argument passed in
`, t => {
    function getProp(obj, key, defaultValue) {
        if (key in obj) {
            return obj[key]
        }
        return defaultValue
    }
    t.deepEqual(getProp({name: 'abc'}, 'name'), 'abc')
    t.deepEqual(getProp({name: 'abc'}, 'foo', 'john'), 'john')
})

test(`
Make a function letter count that takes an array of letters
and returns an object with a count of all the letters
`, t => {
    function letterCount(arr) {
        let newObj = {}
        arr.forEach(x => {
            if (!newObj[x]) {
                newObj[x] = 0
            }
            newObj[x]++
        })
        return newObj
    }
    t.deepEqual(letterCount(['a', 'a', 'b', 'c']), {a: 2, b: 1, c: 1})
    t.deepEqual(letterCount(['a']), {a: 1})
})