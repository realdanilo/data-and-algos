function quickSort(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    if(left.length > 0 && right.length >0){
        return [...quickSort(left),pivot,...quickSort(right)]
    }else if(left.length >0){
        return [...quickSort(left),pivot]
    }else{
        //right > 0
        return [pivot, ...quickSort(right)]
    }
}
let test = [...Array(50)].map(i => Math.floor(Math.random()*100)+1)
console.log(quickSort(test))