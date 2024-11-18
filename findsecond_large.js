function findSecondLargest(arr) {
    let max = -1;
    let secondMax = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
         max = arr[i];
        }
    }
    
     for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

      return secondMax === -1 ? -1 : secondMax;
}
const testArray = [12,35,1,10,34,1];
console.log("second large", findSecondLargest(testArray));