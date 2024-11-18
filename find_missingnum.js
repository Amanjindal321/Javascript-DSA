function findMissingNumber(arr, n){
    const sumN = (n*(n+1))/2;
    
    let sumArr = 0;
    for(let i = 0; i<arr.length; i++){
	sumArr += arr[i];
     }

      return sumN-sumArr;
 }
  const testArray = [1,2,3,5,6];
  const n = 6;
  console.log("missing num", findMissingNumber(testArray, n));