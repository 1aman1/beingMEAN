
const arr = [1, 2, 3, 4, 15, 25, 35]


/***
 * length
 * not a function, holds the current length of array
 */

result = arr.length
console.log('length of array' + result)


/***
 * every
 * checks if all the items hold true for any given condition
 */

console.log('is every element > 10 ' + arr.every(test_every_10))

function test_every_10(curr_item) {
    return curr_item > 10
}

console.log('is every element > 0 ' + arr.every(test_every_0))

function test_every_0(curr_item) {
    return curr_item > 0
}


/***
 * fill
 * intuitive, and it takes custom index too
 */

newArray = [1, 2, 3, 4, 5]

newArray.fill(101, 0, newArray.length)
console.log('newArray ' + newArray)

newArray.fill(-101, 2, newArray.length - 2)
console.log('newArray ' + newArray)



/***
 * filter
 * creates a new array, of the elements that hold true for given condition
 */

filter_on_newArray = newArray.filter(filter_func)

function filter_func(curr_item) {
    return curr_item < 0
}

console.log(filter_on_newArray)



/***
 * find
 * return first occurence when a given condition is met.
 */

found_sth_in_newArray = newArray.find(is_5_present)
console.log('found > 5 ? ' + found_sth_in_newArray)

function is_5_present(curr_item) {
    return curr_item > 5;
}

found_sth_in_newArray = newArray.find(is_5_present, 2, 3)
console.log('found > 5 in 0-length? ' + found_sth_in_newArray)



/***
 * push
 * inserts an element in array
 */

newArray.push(102)
console.log('newArray ' + newArray)

/**
 * findIndex
 * return index where a condition is mets
 */

function find_102(curr_item) {
    return curr_item === 102
}

find_index_of_102 = newArray.findIndex(find_102)
console.log('index for 102 in newArray : ' + find_index_of_102)


/**
 * forEach
 * each element of the array
 */

function doSthwithEach(curr_item, index, arr) {
    arr[index] = curr_item * 2
}

newArray.forEach(doSthwithEach)

console.log('for each in newArray : ' + newArray)



/***
 * includes
 */

console.log('newArray ' + newArray)

result = newArray.includes(202)

console.log('newArray has 202? ' + result)


/**
 * indexOf
 */

index = newArray.indexOf(-202)

console.log('index of -202? ' + index)

lastIndex = newArray.lastIndexOf(-202)

console.log('last index of -202? ' + lastIndex)



/**
 * isArray
 */

console.log('is newArray really an array ' + Array.isArray(newArray))




/***
 * join
 */

smallArray = [1, 2, 3]
joinedOutput = smallArray.join();

console.log(joinedOutput + ' of length ' + joinedOutput.length)


/**
 * map
 */

console.log('small array ' + smallArray)

function again_do_sth(curr_item) {
    return curr_item * 2
}

result = smallArray.map(again_do_sth)
console.log('map applied on small array ' + result)


/**
 * pop
 */

smallArray.pop()
console.log('small array ' + smallArray)


/***
 * prototypes
 */

smallArray.protoype.myCustomFunc = function () {
    this.forEach((curr_item) => {
        curr_item = 200
    })
}

smallArray.myCustomFunc();
console.log('small array ' + smallArray)
