var longestCommonPrefix = function(arr) {
    if(arr.length === 0)
     return -1;
 
    let prefix = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
 
     while(arr[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix ===" ")
         return "-1";
     }
      }
       return prefix;
  };
const testArr=["flower","flow","flight"];
console.log("longest common prefix", longestCommonPrefix(testArr)); 