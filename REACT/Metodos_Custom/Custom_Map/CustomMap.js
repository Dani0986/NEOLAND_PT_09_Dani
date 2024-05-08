

function mapCustom(array, callback) {
    const result = []
    for (let index = 0; index < array.length; index++) {
        result[index]=callback(array[index], index, array)
    }
    return result
}

const numbers = [1,4,6,10,12]

const map = mapCustom(numbers,(item, index, array)=>item+5)

console.log(map)