function eleOccur(arr,n,x) {
    let result = 0;
    for(let i = 0; i<n; i++) {
     if(x == arr[i]) {
        result++;
     }
      }
 
        return result;
   }

   const testCase = { arr: [1,2,3,2,7,2], n:6, x:2};

   console.log("Element to count", testCase.x);
   console.log("Occurrences",eleOccur(testCase.arr, testCase.n, testCase.x));
   

   
 