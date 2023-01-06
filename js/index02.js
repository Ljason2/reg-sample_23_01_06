let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`


// match

const re=/see/gi;
const re1=/naber/gi;
const re2=/gmail/gi;
console.log(str.match(re))
console.log(str.match(re1))
console.log(str.match(re2))


// test
console.log(re1.test(str))
console.log(re2.test(str))


// replace (출력물만 바뀌고 원본은 바뀌지 않는다.)
let re3 = /naver/gi;
console.log(re3.test(str))
console.log(str.replace(re3,'gmail'))
console.log(str)


