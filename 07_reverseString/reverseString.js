const reverseString = function(str) {
    let result = '';
    const length = str.length;

    for (let i = length - 1; i >= 0; i--) {
        result += str[i];
    }
    
    return result;

};

// Do not edit below this line
module.exports = reverseString;
