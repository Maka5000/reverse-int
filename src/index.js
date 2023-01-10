module.exports = function reverse (n) {
    let NumToArray = n.toString().split('');
    let reversedArray = [];

    for(let i = NumToArray.length -1; i >= 0; i--) {
        if (NumToArray[i] != '-'){
            reversedArray.push(NumToArray[i]);
        }
    };

    let ArrayToNumber = parseInt(reversedArray.join(''));
    
    return ArrayToNumber;
}