function rearrangeArray(arr) {
    let j = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { 
          if (i !== j) {
               
            [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            j++; 
      }
    }
    return arr;
}
const testArr=[1,3,-2,-4];
console.log("rearranged", rearrangeArray(testArr))