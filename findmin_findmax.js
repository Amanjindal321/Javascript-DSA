function findMin(array) {
    let minVal = array[0];
    
    for(let num of array){
     if(num<minVal) {
       minVal = num;
     }
     }
      return minVal;
  }
 
   function findMax(array) {
     let maxVal = array[0];
 
     for(let num of array) {
     if(num > maxVal) {
        maxVal = num;
     }
      }
      return maxVal;
  }
 
const testArr = [4,1,3,1,5,9,6,2];
console.log("Minimum Value:", findMin(testArr)); 
console.log("Maximum Value:", findMax(testArr));
