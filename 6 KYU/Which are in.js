//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  let arr = [];
  
  array1.forEach(e=>{
    
    let test = false;
    
    array2.forEach(a =>{
      if (a.indexOf(e) != -1)
      {
        test = true;
      }
    })
    
    if (test)
    {
      arr.push(e)
    }
  })
  arr.sort()
  return arr
}