function sum(numberOne, numberTwo) {
    console.log(numberOne > numberTwo ? numberOne : numberTwo);
}
sum(20, 10)

function sumar(A, B){
    console.log(Math.max(A, B));
}
sumar(20, 10)


function findLongestWord(strings){
    let mayor = strings[0];
    for(i=1;i<strings.length;i++){
        if(strings[i].length>mayor.length){
            mayor = strings[i];
        }
    }
       return mayor;
    }

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
console.log(findLongestWord(avengers));


const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(arr) {
    let result = 0;
    arr.forEach (num=>{ 
        result += num;
    });
    return result;

}

console.log(sumAll(numbers))



const numeros = [1, 2, 3, 5, 45, 37, 58];
function average(myArray) {    
    if (myArray.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i<myArray.length; i++){
        sum += myArray[i];
    }
    
    let A = sum / myArray.length;
    return A;
}
let result = average(numeros);
console.log(result);


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(numLetras) {}


