function reverseWords(str) {
    
  
    let words = str.split('.').filter(word => word);
    words.reverse();
    
    return words.join('.');
}

let str = "..hello..ram.hello.";
console.log(reverseWords(str));