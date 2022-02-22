// // Aplicando conceitos Rest, Spread
// //Para somar itens ilimitados, antigamente se usava o parâmetro arguments dentro da função.
// function sumOld(a, b) {
//     var value = 0; 
//     for ( var i = 0; i < arguments.length; i++) {
//         value += arguments[i];
//     }
//     return value;
// };
// console.log (sumOld(5, 5, 10, 7, 5));

// //Com ES6, nesse caso usamos o rest operator (...)

// function sumRest(...args) {
//     return args.reduce((acc, value) => acc + value, 0);
// };
// console.log (sumRest(5, 5, 8, 9, 4));

// //Rest também pode ser usado com arrow functions para separar parâmetros num array, exemplo:

// const sumArray = (a, b, ...rest) => {
//     console.log(a, b, rest);
// };
// console.log (sumArray( 5, 5, 3, 2, 6));

// // Ou para fazer operações
// const multiplyArrow = (...args) => args.reduce((acc, value) => acc * value, 1)

// //console.log (multiplyArrow( 5, 5, 3, 2, 6));

// //Passar o Array de sum para mult com spread operator

// const sum = (...rest) => {
//     return multiplyArrow(...rest);
// }

// console.log (sum( 5, 5, 3, 2, 5));

//Spread operator (strings, arrays, literal objects e objetos iteraveis)

const str = 'Digital Inovation One';
const arr = [1, 2, 3, 4];

function logArgs () {
    console.log(arguments);
}
logArgs(...str); //Em string quebra em caracteres e joga para uma lista
logArgs(...arr);

//Spread tb pode ser usado para construir/combinar arrays
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

//Spread com objetos literais
const obj = {
    test: 123
};
const obj2 = {
    ...obj, test2: 'hello'
};
console.log(obj2);

