// Objetos Literais (Funções nos objetos)

// Maneiera clássica de escrever
var obj1 = {
    prop1: 'Digital Innovation One'
};
console.log(obj1);

//Clássica referenciando uma variável

var prop2 = 'Digital Innovation Two';

var obj2 = {
    prop2: prop2
};

console.log(obj2);

//Com ES6, você pode fazer referência a uma variável sem repitir caso a propriedade tenha o mesmo nome
var prop3 = 'Um pônei';

var obj3 = {
    prop3
};
console.log(obj3);

//Isso também pode ser usado com funções

function method1(){
    console.log('method called')
}
var obj4 = {
    method1
};
obj4.method1();

//Outra forma de utilizar funções nos objetos

var obj5 = {
    sum: function sum(a, b){
        return a + b;
    }
};

console.log(obj5.sum(1, 3));

// OU
var obj6 = {
    sum(a, b){
        return a + b;
    }
};

console.log(obj6.sum(2, 4));

// Concatenar valores dentro da propriedade ?
var propName = 'test';
var obj7 = {
    [propName + 'concatenar']: 'prop value'
};
console.log(obj7);
