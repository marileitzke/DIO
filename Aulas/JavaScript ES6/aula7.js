//Callbacks e Promises

//Promises

const doSomethingPromise = new Promise((resolve, reject) =>{
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) =>{
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data));

//Status promise: Pending, fulfilled, rejected


//Callback (Old?)
function doSomething(callback) {
    setTimeout(function(){
        //did something
        callback('First data');
    }, 1000);
};

function doOtherThing(callback) {
    setTimeout(function(){
        //did other thing
        callback('Second data');
    }, 1000);
};

function doAll() {
    doSomething(function(data){
        var processedData = data.split('');
        doOtherThing(function(data2) {
        var processedData2 = data.split('');

        setTimeout(function(){
            console.log(processedData, processedData2);
        },1000)
        
    });
});
}

doAll();