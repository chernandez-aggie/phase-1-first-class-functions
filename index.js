function Spy () {
    return 1 + 1;
}

function receivesAFunction (callback){
    return callback();
}

receivesAFunction(Spy);

function returnsANamedFunction (){
    return function named (){
        return 1 + 1;
    }
}

returnsANamedFunction();

function returnsAnAnonymousFunction (){
    return function(){
        return 1 + 1;
    }
}

returnsAnAnonymousFunction();