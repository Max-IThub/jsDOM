let n = 0;
function clck(){
    console.log(`Click ${++n} times`   )
}

const getNumber = function(a, b){
    return Math.floor(Math.random() * (a-b) + b)
}