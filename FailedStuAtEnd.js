let arr=[1,-1,3,2,-7];


let left=0;
let right=arr.length-1;
while(left<=right){
    if(arr[left]<0 && arr[right]>0){
        let temp=arr[right];
        arr[right]=arr[left];
        arr[left]=temp;

    }
    left++
    right--
}

console.log(arr)