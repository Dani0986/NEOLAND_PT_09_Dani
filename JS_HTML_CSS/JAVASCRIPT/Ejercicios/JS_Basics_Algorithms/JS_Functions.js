function sum(numberOne, numberTwo) {
    console.log(numberOne > numberTwo ? numberOne : numberTwo);
}
sum(20, 10)

function sumar(A, B){
    console.log(Math.max(A, B));
}
sumar(20, 10)

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(marvel){
    let longestWord = marvel[0];
  
    for (let i = 1; i < marvel.length; i++) {
      const word = marvel[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }

const longestWord = findLongestWord(avengers);
console.log(longestWord); 


const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(arr) {
    let result = 0;
    arr.forEach (num =>{ 
        result += num;
    });
    return result;

}

console.log(sumAll(numbers))



const numeros = [1, 2, 3, 5, 45, 37, 58];
function average(myArray) {    
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
function averageWord(numLetras) {  
        let sumaNumeros = 0;
        let contar = 0;
      
        numLetras.forEach(elemento => {
          if (typeof elemento === "number") {
            sumaNumeros += elemento;
            contar++;
          }
        });
      
        if (contar === 0) {
          return 0; 
        }
      
        let totalMix = sumaNumeros / contar;
        return totalMix;
      }

let totalMix = averageWord(mixedElements);
console.log(totalMix);



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
  
  function removeDuplicates(comida) {
    const Food = new Set(comida);
    return Food;
}

const u = removeDuplicates(duplicates);
console.log(u);

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName (nombres, personas) {
    nombres.includes(personas)?
    console.log(`${nombres.includes(personas)} ${nombres.indexOf(personas)}`):
    console.log("false")
  }  

finderName(nameFinder,'Natasha')
finderName(nameFinder,'wanda')

