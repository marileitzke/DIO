// Function clássica
function sumOld(a, b) {
    return a + b;
};
console.log(sumOld(3, 3));

//Function Clássica atribuída a uma variável (não precisa de nome, o nome vira o da variável)
var sumOld = function(a, b) {
    return a + b;
};
console.log(sumOld(3, 3));

//Arrow functions => (Funções anônimas, só pode ser utilizada atribuindo a uma variável ou passando como parâmetro para outra função)

var sum = (a, b) =>  a + b //Caso não seja um return, necessita de chaves
console.log(sum(5, 5));

// var sum1 = (a, b) => {
//     
//     if (a > b){

//    return a + b;}
// }

//Criando objetos no js usando funções
//Antigo
function Car() {
    this.foo = 'bar'
};
console.log (new Car());

//Com arrow
var createObj = () => ({ test : 123}); 

console.log(createObj());

//Arrow function tem o this (o contexto) do que o envolve
var obj = {
    showContext: function showContext(){
        //this = obj
        setTimeout(() => {
            this.log ('after 1000ms');
        }, 1000);
    }, 
    log: function log(value){
        console.log(value); 
    }
};
obj.showContext();
