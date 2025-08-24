const fibonacci = function(a) {
    
    
    if (a < 0){
        return 'OOPS';
    }
    if(typeof a !== 'number'){
        a= parseInt(a);
    }

    if (a == 0){
        return 0;
    }
    

    let firstPrev=1;
    let secondPrev=0;
    for(let i=1;i<a;i++){
        let current= firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
}

// Do not edit below this line
module.exports = fibonacci;
