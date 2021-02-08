class Node{
    constructor(val, priority){
        this.value= val
        this.priority = priority
    }
}
//MinBinaryHeap
//lower number = critical
class PriorityQueue{
    constructor(){
        this.values =[]
    }
    bubbleUp(){
        let lastIdx = this.values.length -1;
        let lastNode  = this.values[lastIdx]
        while(lastIdx > 0){
            let parentIdx = Math.floor((lastIdx-1)/2)
            let parentNode = this.values[parentIdx]
            
            //parent node priority, allways minor
            if(lastNode.priority >= parentNode.priority) break; 
            
            this.values[parentIdx] = lastNode
            this.values[lastIdx] = parentNode

            //update idx
            lastIdx = parentIdx
        }
        return this.values
    }
    //insert
    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        return this.bubbleUp()
    }

    //removes root, then sinkDown
    dequeue(){
        let priority = this.values[0]
        let last = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = last
            this.sinkDown()
        }
        return priority
    }
    sinkDown(){
       
        let parentNode = this.values[0]
        let parentIdx = 0 
        while(true){

            let rightIdx = 2*parentIdx+1
            let leftIdx = 2*parentIdx+2
            let swapIdx = null
            let leftNode, rightNode
            
            //check child bounds
            if(leftIdx < this.values.length){
                leftNode = this.values[leftIdx]
                if(leftNode.priority <= parentNode.priority ){
                    swapIdx = leftIdx
                }
            }
            if(rightIdx < this.values.length){
                rightNode = this.values[rightIdx]
                if(
                    (swapIdx ===null && rightNode.priority<=parentNode.priority)||
                    (swapIdx !==null && rightNode.priority<= leftNode.priority)
                ){
                    swapIdx = rightIdx
                }
            }
            
            //swap 
            if(swapIdx ===null) break;
            this.values[parentIdx] = this.values[swapIdx]
            this.values[swapIdx] = parentNode
            parentIdx = swapIdx 
        }
    }
}