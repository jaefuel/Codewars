// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  let temp = value.toString().split("").map(e => Number(e));
  
  let num = temp.length;
  
  console.log(temp)
  
  let sum = temp.reduce((a,c) => a + c ** num,0);
  
  console.log(sum)
  
  if (sum == value)
  {
    return true;
  }
  
  return false;

}