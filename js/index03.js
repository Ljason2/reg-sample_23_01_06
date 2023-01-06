
let str2='aaa@daum.net';
const sam01=/daum/gi;
console.log(str2)
// console.log(str2.replace(sam01,"gmail"));
// console.log(str2)
let sam02 = str2.replace(sam01,"gmail");
console.log(sam02)

// 원본을 바꾸려면 이렇게 하면된다.
str2 = str2.replace(sam01,"gmail");
console.log(str2);