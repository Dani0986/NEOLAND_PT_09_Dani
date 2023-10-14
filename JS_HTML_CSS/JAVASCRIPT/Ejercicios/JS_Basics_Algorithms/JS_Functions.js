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






