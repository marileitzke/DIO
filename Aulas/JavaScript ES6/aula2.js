//Default functions arguments

function mult(a, b) {
    // b = b || 1; Quando o usuário esquece de digitar o segundo parametro, o valor se torna 1 (Para não dar NaN), mas não funciona com 0
    b =typeof b ==='undefined' ? 1 : b; //Esse funciona com 0
    return a * b;
}
console.log (mult(5));

//Com ES6, pode-se definir um valor padrão para quando o usuário não digita, diminuindo o código

function mult2(a = 1, b = a) { //Ordem é importante
    return a * b;
};
console.log(mult2(7));


//Lazy evaluation

function randomNumber () {
    console.log('Generating a random number...')
    return Math.random() * 10;
}

function multRandom(a = 1, b = randomNumber()) { //Ordem é importante
    return a * b;
};

console.log(multRandom(7));
console.log(multRandom(7));