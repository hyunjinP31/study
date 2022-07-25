let hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((res, req) => {
    setTimeout(() => {
        res('1초');
    }, 1000);
});
timeoutPromise.then(console.log);
import add from './util.js';
const value = add(1, 5);
console.log(value);
//tsc [파일명] [옵션]
// tsc hello.ts
