var chocolateBars = ["snickers", "hundred grand", "kitakat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  var newarray = array.slice(1)
  return newarray
}

function removeElementFromEndOfArray(array) {
  var newarray = array.slice(0, array.length - 1)
  return newarray
}
