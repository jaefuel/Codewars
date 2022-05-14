// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers)
{
    numbers.splice(0,0,"(");
    numbers.splice(4,0,")");
    numbers.splice(5,0," ");
    numbers.splice(9,0,"-");

    let str = numbers.join("");

    return str;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
 // => returns "(123) 456-7890"