function rotateArray(arr) {
   if(arr.length === 0) 
     return arr;

   let lastElement = arr[arr.length - 1];

   for(let i = arr.length - 1; i > 0; i--) {
	arr[i] = arr[i-1];
   }

   arr[0] = lastElement;

   return arr;
 }
const testArray=[1,2,3,4,5];
console.log("corr array", rotateArray(testArray));