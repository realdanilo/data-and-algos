class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
//FIFO
class Queue{
    constructor(){
        this.size=0;
        this.first=null;
        this.last=null;
    }
    //add at the end
    Enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            //O(N)<< REVIEW
            //Needs to be O(1)
            // let cur = this.first;
            // while(cur.next){
            //     cur = cur.next
            // }
            // cur.next = newNode;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this

    }
    //remove this.first
    Dequeue(){
        if(!this.first) return null 
        let temp = this.first;
        if(this.size ==1){
            this.first= null;
            this.last=null;
        }else{
            let next = temp.next;
            this.first = next;            
        }
        this.size--;
        return this
    }
}