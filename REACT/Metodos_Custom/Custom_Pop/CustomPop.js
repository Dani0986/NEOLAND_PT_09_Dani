


function popCustom(array) {
    // Verificar si el array está vacío
    if (array.length === 0) {
        return undefined; // Si el array está vacío, devolvemos undefined
    }
    
    const lastIndex = array.length - 1; // Índice del último elemento del array
    const popElement = array[lastIndex]; // Almacenamos el elemento que vamos a eliminar

    // Reducimos la longitud del array para eliminar el último elemento
    array.length = lastIndex;

    return popElement; // Devolvemos el elemento eliminado
}

const myArray = [1, 2, 3, 4, 5];
const eliminar = popCustom(myArray);

console.log("Elemento eliminado:", eliminar); // Imprime el elemento eliminado
console.log("Array después de la eliminación:", myArray);