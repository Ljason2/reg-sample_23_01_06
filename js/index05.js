// g, i, m : multi line

let str =`
010-1234-5678
Edit the Expression & Text to see matches.
Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg.
aaa@naver.com
abc@gmail.com
`

// . -> text \. $ : 끝이라는 의미
const re2 = /\.$/gm;
console.log(str.match(re2))

