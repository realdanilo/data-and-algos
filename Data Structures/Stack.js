class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
//LIFO
class Stack{
    constructor(){
        this.size=0;
        this.first = null;
        this.last = null;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++
        return this
    }
    pop(){
        if(!this.first) return null
        let deleted = this.first;
        if(this.size ==1){
            this.first = null;
            this.last = null;
        }else{
            let next = deleted.next;
            this.first = next;
        }
        this.size--;
        deleted.next =null;
        return this
    }
}