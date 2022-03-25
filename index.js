
const myEach = function(collection, callback) {
  for (let element in collection){
    callback(collection[element])
  }
  return collection
}

const myMap = function(collection, callback) {
  let modifiedArray = []
  for(let element in collection) {
    modifiedArray.push(callback(collection[element]))
  }
  return modifiedArray
}

const myReduce = function(collection, callback, acc) {
  let copy = [...collection]
  acc = acc || copy.shift()
  for (let element in copy){
    acc = callback(acc, copy[element], copy)
  }
  return acc
}

const myFind = function (collection, predicate){
  for (let element in collection){
    let copyElement = collection[element]
    if (predicate(copyElement)){
      return copyElement
    }
  }
}

const myFilter = function (collection, predicate){
  let selectedArray = []
  for (let element in collection){
    let copyElement = collection[element]
    if(predicate(copyElement)){
      selectedArray.push(copyElement)
    }
  }
  return selectedArray
}

const mySize = function (collection){
  return Object.keys(collection).length
}

const myFirst = function (collection, n = 1){
  let count = 1
  let array = []
  for(let element in collection){
    if(count <= n) {
      array.push(collection[element])
      count++
    }
  }
  return array.length > 1 ? array : array[0]
}

const myLast = function (collection, n = 1){
  let startingIndex = collection.length - n
  return n > 1 ? collection.slice(startingIndex, collection.length) : collection [startingIndex]
}

const myKeys = function (obj){
  return Object.keys(obj)
}

const  myValues = function (obj){
  return Object.values(obj)
}