var countPairs = function(arr, target) {
    const n = arr.length;
    let count = 0;
 
    for (let i = 0; i<n; i++) {
     
     for(let j = i+1; j<n; j++) {
 
        if(arr[i] + arr[j] === target)
         count++;
     }
      }
       return count;
 }
const testArray = [1,2,3,4,3];
const target = 6;
console.log("number of pairs", countPairs(testArray, target)); 