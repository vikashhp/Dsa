

let s='anagram';

let t='nagaram';

let ans=s.split("").sort().join(" ");
let ans1=t.split("").sort().join(" ");

if(ans===ans1){
    console.log(true)
}else{
    console.log(false)
}