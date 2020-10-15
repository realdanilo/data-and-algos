function merge(rightArr,leftArr){
    let rightIndex=0;
    let leftIndex=0;
    let final =[]
    while(leftIndex < leftArr.length && rightIndex<rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            final.push(leftArr[leftIndex])
            leftIndex++
        }else{
            final.push(rightArr[rightIndex])
            rightIndex++
        }
    }
    while(leftIndex < leftArr.length){
        final.push(leftArr[leftIndex])
        leftIndex++
    }
    while(rightIndex < rightArr.length){
        final.push(rightArr[rightIndex])
        rightIndex++
    }
    return final
}

function mergeSort(arr){
    if(arr.length <= 1) return arr

    let middle = Math.floor(arr.length-1/2)
    let left = mergeSort(arr.slice(0,middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left,right)
}
console.log(mergeSort([4,-2,10,-80,1,99,-3,121,-1231,55,3,-1]))