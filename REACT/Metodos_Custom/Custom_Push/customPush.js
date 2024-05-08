


function pushCustom(array, ...elementos) {
    for (let index = 0; index < elementos.length; index++) {
        array[array.length] = elementos[index]
    }
    return array.length
}

const arr = [1,2,3]
const response = pushCustom(arr,1)

module.exports = { pushCustom };



