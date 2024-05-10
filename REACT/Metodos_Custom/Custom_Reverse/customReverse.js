
/*
function customReverse(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reverseArray = customReverse(originalArray);

console.log(reverseArray); // Output: [5, 4, 3, 2, 1]
*/

const arr = ['J','K','Q','A',]


function customReverse (array) {
    for (let initIndex = 0, endIndex = array.length - 1; initIndex < endIndex; initIndex++, endIndex--) {
    const element = array[initIndex];
    array[initIndex] = array[endIndex];
    array[endIndex] = element;
}
 return array
}

console.log(customReverse(arr));
