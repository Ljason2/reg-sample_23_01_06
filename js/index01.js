let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

// 생성자 방식

// const reEx =new RegExp('the','g');
// console.log(str.match(reEx))

// 리터널 방식

const sample = /the/g ;
console.log(str.match(sample));







