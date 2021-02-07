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
    extractMax(){
        let max = this.values[0]
        let last = this.values.pop()
        // [12] >> max, and last
        //do not add last to link again || Edge
        if(this.values.length > 0){
            this.values[0] = last
            //check the newest element to their children, then swap the biggest
            this.sinkDown()
        }
        return max
    }
    sinkDown(){
        let index = 0
        const length = this.values.length
        let element = this.values[0]

        while(true){
            let leftChildIndex = 2 * index +1
            let rightChildIndex = 2 * index +2
            
            let leftChildElement, rightChildElement
            let swap = null

            //make sure childs are in bound/exists
            if(leftChildIndex < length){
                leftChildElement = this.values[leftChildIndex]
                //if leftValue > value, swap = leftIndex
                if(leftChildElement > element){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length){
                rightChildElement = this.values[rightChildIndex]
                if(rightChildElement > element && rightChildElement > leftChildElement){
                    swap = rightChildIndex
                }
            }


            if(swap === null) break;
            //swap =left or right index
            this.values[index] = this.values[swap]
            this.values[swap] = element

            //update index
            index = swap

        }
    }

}
