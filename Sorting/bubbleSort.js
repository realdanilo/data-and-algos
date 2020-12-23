function bubbleSort(arr){
    let count =0
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length -i; j++){
            if(arr[j+1] < arr[j] ){
                let temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1]= temp
            }
            count++
            // console.log(arr)
        }
    }
    return arr, count
}

function bubbleSortOptimized(arr){
    let count =0
    let noSwap = true
    for(let i = arr.length; i>0; i--){
        noSwap = true
        for(let j = 0; i-j; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j]= temp
                noSwap = false
            }
            count++
            if(noSwap) break
        }
    }
    return arr, count
}
console.log(bubbleSortOptimized([100,-2,4,99,5]))
console.log(bubbleSort([100,-2,4,99,5]))