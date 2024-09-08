const array = [3, 5, 3, 5];
//Q1 expected output is [5,3]
//array.pop();
//const newArray = array.slice(1);
//console.log(newArray);

/*
//solution1------------------------------------------------------------------
function removeDuplicates(array) {
  let unique = [];
  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(array));
*/
//solution 2------------------------------------

function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates(array));
//------------------------------------------------------

//Q2 expected [5,3,5,3]----------------------------------
//solution-----------------------------------------------
const arrayReversed = array.reverse();
console.log(arrayReversed);
//--------------------------------------------------------

//Q3-----------------------------------------------------
const newArray = [2, 1];

const arrayConcatenated = arrayReversed.concat(newArray);
console.log(arrayConcatenated);
//----------------------------------------------------------
