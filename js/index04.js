let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`




const re4 = /the/gi;
const num= str.match(re4);


console.log(num);
console.log(num[2]);

num[2]='sample'
console.log(num);

console.log(str);


