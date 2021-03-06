const test = require('ava')

test.only(`
Make a function that receives an array
and value and mutates that array and adds the value
`, t => {
    const arr1 = [1]
    function mutateAdd(arr, v) {
        arr.push(v)
        return arr
    }
    t.deepEqual(mutateAdd(arr1, 2), [1, 2])
    t.deepEqual(arr1, [1, 2])
});

test.only(`
Make a function that receives an array
and value and copies the array with the value
`, t => {
    const arr1 = [1]
    function copyAdd() {
        
    }
    t.deepEqual(copyAdd(arr1, 2), [1, 2])
    t.notDeepEqual(arr1, [1, 2])
});

test(`
Make a function that recieves an array
and returns only numbers that are greater than
5
`, t => {
    function greaterThan5() {
        
    }
    t.deepEqual(greaterThan5([1,2,3,4,5,6]), [6])
})

test(`
Make a function that recieves a list of price objects
and returns the sum
IE: sumPrices([{price: 1.25}, {price: 2}]) === 3.25
`, t => {
    function sumPrices() {
        
    }
    t.deepEqual(sumPrices([{price: 1}, {price: 2}]), 3)
})

test(`
Make a function that takes a list of strings and 
converts it into a list of objects with a
value key and the value of the string
`, t => {
    function sumPrices() {
        
    }
    t.deepEqual(sumPrices(['a', 'b', 'c']), [{value: 'a'}, {value: 'b'}, {value: 'c'}])
})

test(`
Make a function that takes a list of objects and
removes one based on id property
`, t => {
    function filterById() {
        
    }
    t.deepEqual(filterById([{id: 1}], 1), [])
    t.deepEqual(filterById([{id: 1}, {id: 2}], 2), [{id: 1}])
})

test(`
Make a function that takes a array, key and value 
and returns an object if it is found
`, t => {
    function getObject() {
        
    }
    const arrToSearch = [{name: 'john', age: 22}, {name: 'mark', age: 55}]
    t.deepEqual(getObject(arrToSearch, 'name', 'john'), {name: 'john', age: 22})
    t.deepEqual(getObject(arrToSearch, 'age', 55), {name: 'mark', age: 55})
    t.deepEqual(getObject(arrToSearch, 'sdsd', 55), undefined)
})

