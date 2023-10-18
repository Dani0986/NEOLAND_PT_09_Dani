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

//--------------------- constante numeros con bucle while (hay que ir con cuidado)
//   let i = 0, sum = 0, ArrayLen = myArray.length;
//   while (i < ArrayLen) {
 //     sum = sum + myArray[i++];
//    }
//   return sum / ArrayLen;
//}

//let a = average(numeros);
//console.log(a)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(numLetras) {
    if (numLetras.lenght === 0 ){
        return 0;
    }

    let todo = numLetras.reduce(function(acc, cadena) {
   if (typeof cadena === "string") {                 
      return acc + cadena.length;
    } else {
      return acc; 
    }
  }, 0);

    let promedio = todo / numLetras.length;
    return promedio;

}

let promedio = averageWord(mixedElements)
console.log(promedio)

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

 
