function insertionSort(arr){
    // newOne starts at 1 bc we will compare if (j-1) aka array cannot be -1 if (0-1)
    for(let newOne = 1; newOne < arr.length; newOne++){
        for(let j = newOne; j > 0; j--){
            console.log(arr)
            if(arr[j] < arr[j-1]){
                let temp =arr[j]
                arr[j] = arr[j-1]
                arr[j-1]= temp
            }
        }
        console.log("next")
    }
    return arr
}
console.log(insertionSort([3,1,100,-8,0])) 