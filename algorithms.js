function factorialize(number){
    let factorial = 0 
    for(factorial =0; factorial <= number; factorial++){
        factorial *= number;
    };
    return factorial;
};

console.log(factorialize(5));

//======================================================================================================================================================================

const reverseString = str => str.split('').reverse().join('');

function theRev(str) {
    let reveresedString = "";
    for(let i = str.length - 1; i >= 0; i--){
        reveresedString += str[i];
    }
    return reveresedString;
}

console.log(theRev('Caviar King'));

console.log(reverseString('Marlin 2 Jungle'));
