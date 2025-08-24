const palindromes = function (string) {
    string = string.toLowerCase();
    let reversedString = string.split('').reverse().join('');
    if (string === reversedString)
        return true
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
