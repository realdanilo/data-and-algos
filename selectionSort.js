function selectionSort(arr){
    for(let i =0; i<arr.length; i++){
        let lowestIndex = i;
        for(let j = i+1; j <arr.length; j++){
            if( arr[j]< arr[lowestIndex]){
                lowestIndex = j
            }
        }
        if(i !=lowestIndex){

            let temp = arr[lowestIndex]
            arr[lowestIndex] = arr[i]
            arr[i]= temp
        }
    }
    return arr
}
console.log(selectionSort([45,0,3,-200,5,-13,-8]))