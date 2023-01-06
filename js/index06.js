let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
http://www.naver.com
https://www.naver.com
htp://www.naver.com
hap://www.naver.com
h2p://www.naver.com
`

// ^ $ . |


// ^ 시작
// console.log(str.match(/^01/gm))
// console.log(str.match(/^010?/gm))
// console.log(str.match(/^01./gm))
// console.log(str.match(/for|to|abc/gm));

// $ 끝
// console.log(str.match(/g$/gm));
// console.log(str.match(/m$/gm));
// . 아무거나
// console.log(str.match(/h.p/gm))
// console.log(str.match(/h..p/gm))
// console.log(str.match(/h..ps?/gm))
// console.log(str.match(/f.....?/gm))