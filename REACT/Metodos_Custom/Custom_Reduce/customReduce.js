
function customReduce(array, callback, initialValue) {
    let startIndex = 0;
    let accumulator = initialValue;

    if (initialValue === undefined) {
        startIndex = 1;
        accumulator = array[0];
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const arr = [1, 2, 3, 4, 5];

// Sumar todos los elementos
const sum = customReduce(arr, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); //  15

// Concatenar todos los elementos como una cadena
const concatenar = customReduce(arr, (accumulator, currentValue) => accumulator + currentValue.toString(), '');
console.log(concatenar); // 12345'