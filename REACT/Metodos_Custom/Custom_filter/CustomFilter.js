

const {pushCustom} = require('../Custom_Push/customPush')

function filterCustom (array, callback) {
    const resultado = []
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index], index, array) ){
            pushCustom(resultado, array[index])
        }
    }
    return resultado
}

const arrNums = [1,4,6,7,8,10]

const filtered = filterCustom(arrNums, (item, index, array)=>item > 6)

console.log("🚀 ~ arrNums:", arrNums)
console.log("🚀 ~ filtered:", filtered)