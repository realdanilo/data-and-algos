//Binary Heap
class MaxBinaryHeap{
    constructor(){
        this.values = [41,29,33,18,27,12]

    }
    bubbleUp(){
        let lastIndex = this.values.length-1
        let lastElement = this.values[lastIndex]
        while(lastIndex > 0){
            //get values
            let parentIndex = Math.floor((lastIndex -1)/2)
            let parentElement =  this.values[parentIndex]
            //if new element is less than parent, leave it
            if(lastElement <= parentElement) break;
            //else, swap
            this.values[parentIndex] = lastElement
            this.values[lastIndex] = parentElement
            //udate last index, to check again
            lastIndex = parentIndex 
            
        }
        return this.values

    }
    insert(value){
        this.values.push(value)
        return this.bubbleUp()

    }

}
