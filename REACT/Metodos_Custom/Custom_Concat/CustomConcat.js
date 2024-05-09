

/*function customConcat(...arrays) {
    const result = [];
    for (let arr of arrays) {
        for (let element of arr) {
            result.push(element);
        }
    }
    return result;
}

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'j'];

const array4 = customConcat(array1, array2, array3);

console.log(array4); // Salida: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
*/

function customConcat(...arrays) {
    const newArray = []
   // [
    //    [1,2,3],
   //     ['hola', 'adios'],
   //     ['buenos', 'dias']
   // ]

    for (let i=0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            newArray.push(currentArray[j])
        }
    }
    return newArray
}

const arr1 = [1,2,3]
const arr2 = [5,6,7]

const combine = customConcat(arr1, arr2)
console.log(combine)