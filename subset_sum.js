function lucky_sevens ( numbers ) {
    var sums = [];
    var hashTable = {};
    for ( i = 0; i < numbers.length; i ++ ) {
        var sumMinusElement = 7 - numbers[i];
        if( hashTable[sumMinusElement.toString()] !== undefined ) {
            sums.push([numbers[i], sumMinusElement]);
        } 
        hashTable[numbers[i].toString()] = numbers[i];
    }
    return sums;
}

console.log(lucky_sevens([3, 5, 2, -4, 8, 11]));
