function filterEven(arr) {
    if(arr.length===0)
     return [];
  
    const [first, ...rest] = arr;
  
    if(first % 2 === 0) {
  
      return [first, ...filterEven(rest)];
     } else {
      return filterEven(rest);
     }
  }

  const testArr = [1,2,3,4,5,6];
  console.log("filter even num", filterEven(testArr));