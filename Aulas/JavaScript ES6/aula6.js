//Intro Generators 
//Symbols (Maneira de gerar um identificador único)

const uniqueId = Symbol('Hello'); //Valor do symbol serve apenas para debug (Saber do que se trata, não altera realmente o valor)
const uniqueId2 = Symbol('Hello');

console.log (uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj);

