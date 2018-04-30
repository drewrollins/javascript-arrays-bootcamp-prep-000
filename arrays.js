var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  return [...element, array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return array.shift(0);
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(0);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  return chocolateBars.pop();
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}



