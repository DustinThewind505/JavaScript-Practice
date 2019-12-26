//Factorialize a number

function factorialize(number){
    let factorial = 0 
    for(factorial =0; factorial <= number; factorial++){
        factorial *= number;
    };
    return factorial;
};

console.log(factorialize(5));

//==============================================================================================================================================

//Reverse a number

const reverseNumber = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

reverseNumber(-12345600.00)

//======================================================================================================================================================================

//Reverse a string

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

//===============================================================================================================================================

//Longest string

function longestString(arr) {
  let sortedArray = arr.sort((a,b) => b.length - a.length);
  return sortedArray[0];
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1));
