//Intro Generators 
//Symbols (Maneira de gerar um identificador único)

const uniqueId = Symbol('Hello'); //Valor do symbol serve apenas para debug (Saber do que se trata, não altera realmente o valor)
const uniqueId2 = Symbol('Hello');

console.log (uniqueId === uniqueId2);

const obj1 = {
    [uniqueId]: 'Hello'
};
console.log(obj1);

//Well known symbols

Symbol.iterator; //Permite usar função iteradora em objeto

// const arr = [1, 2, 3, 4];
// const str = 'Digital Innovation One';

// for(let value of arr) {
//     console.log(value);
// };

// console.log(arr[Symbol.iterator]().next())

//Iterando objetos

// const obj = {
//     values: [1, 2, 3, 4],
//     [Symbol.iterator](){
//         let id = 0;

//         return {
//             next: () => {
//                 i++;
//                 return {
//                     value: this.value[i - 1],
//                     done: i > this.values.length
//                 };
//             };
//         };
//     }
// };

// const it = obj[Symbol.iterator]()
// console.log(it.next());

//MESMA FUNÇÃO ACIMA USANDO GENERATORS

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        };
    }
};
for (let value of obj) {
    console.log(value);
}



// Gerators - São funções com pausa, que despausam e retornam valores através de uma interface de iteração

function* hello(){ //Usa-se através do * 
    console.log('Hello');
    yield; //E colocando a palavra reservada yield;
    console.log('From');
    yield 2; //Posso até mesmo passar valores pra esse yield
    console.log('Function');
    
};

const it = hello();

console.log(it.next()); 
console.log(it.next());
console.log(it.next());

//Outro exemplo, um generator com números infinitos

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number ++;
    }
}
const it2 = naturalNumbers();
console.log(it2.next()); 
console.log(it2.next()); 
console.log(it2.next()); 




