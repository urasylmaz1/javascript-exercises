const findTheOldest = function(array) {
    return array.reduce((oldest, current) =>  {
        return (oldest.yearOfDeath-oldest.yearOfBirth) < (current.yearOfDeath-current.yearOfBirth) ? current: oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
