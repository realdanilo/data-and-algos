const test = require("./test")
// let test = [123456,12345,1234,123,12,1,0]
//only works with integers
function getDigit(number, value){
    return Math.floor(Math.abs(number)/Math.pow(10,value)) % 10;
}

function digitCount(number){
    let n = `${number}`.length
    return n
}

function mostDigits(arr){
    let maxDigits = 0
    for(let i =0;i<arr.length;i++){
        let n = digitCount(arr[i])
        if(maxDigits <n){
            maxDigits =n
        }        
    }
    return maxDigits
}

function radixSort(arr){
    let maxLength = mostDigits(arr)
    for(let i =0; i<maxLength;i++){
        let buckets = Array.from({length:10},()=> [])

        for(let j =0; j<arr.length; j++){
            let indexPush = getDigit(arr[j],i)
            buckets[indexPush].push(arr[j])
        }
        arr = buckets.flat()
    }
    return arr
}

console.log(radixSort(test))
