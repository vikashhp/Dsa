

let arr=[1,2,3,1];


for(let i=0;i<arr.length;i++){
    if(i==0 && arr[i]>arr[i+1]){
        console.log(i);
        break;
    }else if(i==arr.length-1 && arr[i]>arr[i-1]){
        console.log(i);
        break;
    }else if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        console.log(i);
        break
    }
}