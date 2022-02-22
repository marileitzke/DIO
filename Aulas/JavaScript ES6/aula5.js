// Destructuring Assignment

//Forma antiga de pegar uma variável num array
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Utilizando Destructuring para arrays
var[apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange',  ['Tomato']];

console.log(apple, apple2);
console.log (tomato, tomato2);


// Forma antiga de pegar uma variável num objeto
var obj = {
    name: 'Roberto',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var name = obj.name;
var age =obj.props.age;
var color1 = obj.props.favoriteColors[0];
console.log(name);
console.log(age);
console.log(color1);

//Utilizando Destructuring para objetos
var obj = {
    name: 'Rodrigo',
    props: {
        age: 32,
        favoriteColors: ['black', 'blue']
    }
};

var {name} = obj;
var {props: { age, favoriteColors:[color1, color2] }} = obj;
console.log(name);
console.log(age); 
console.log(color2);

//OU

var {name: name2} = obj;
var {props: { age: age2 }} = obj;
name2 = 'Henrique'; //Não altera o primeiro objeto, também faz um "clone"
console.log(name2);
console.log(age2);
console.log(name); //Não altera o primeiro objeto


//Exemplo Simples

var arr = [{name: 'Apple', type: 'fruit'}];
var fruit1 = arr[0].name; //Normalmente
var [{name: fruit}] = arr; //Destructuring

console.log(fruit);
console.log(fruit1);

//Functions c destructuring
function sum([a, b] = []) {
    return a + b;
}
console.log(sum([5, 5]));

//Pode utilizar Default values
function sum([a, b] = [0, 0]) {
    return a + b;
}
console.log(sum());


