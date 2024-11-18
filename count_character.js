function countCharacter(arr){
    if(arr.length === 0){
     return 0;
    }
 
    return arr[0].length + countCharacter(arr.slice(1));
 }

 const testArray=["hello","ram"];
 console.log("total characters", countCharacter(testArray));