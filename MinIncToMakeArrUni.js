

let arr=[3,2,1,2,1,7];
arr.sort()
let count=0
for(let i=1;i<arr.length;i++){
    if(arr[i-1]>=arr[i]){
        let val=arr[i-1]-arr[i]+1;
        count+=val;
        arr[i]=arr[i-1]+1
    }
}

console.log(arr)