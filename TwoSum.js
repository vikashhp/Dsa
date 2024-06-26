

let arr=[2,7,11,15];
let t=9;

let map=new Map();

let ans=[]


for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(map.get(num)==undefined){
        map.set(t-num,i)
    }else{
       ans.push(map.get(num),i)
    }
}

console.log(ans)