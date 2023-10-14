function sum(numberOne, numberTwo) {
    console.log(numberOne > numberTwo ? numberOne : numberTwo);
}
sum(20, 10)

function sumar(A, B){
    console.log(Math.max(A, B));
}
sumar(20, 10)




const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']; {
let findLongestWord = "";
let letras = 0;
avengers.forEach((element, index) => {
    if(element.length > letras) {
     //console.log(element.length);  
     //console.log(letras);  
     letras = element.length;
        findLongestWord = element;
    };
});
}

//console.log();