class Node{
    constructor(value = null ,next = null, previous = null){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }else{
            let end = this.head
            while(end.next){
                end = end.next;
            }
            end.next = newNode;
            newNode.previous = end;
        }
        this.length++;
        this.tail = newNode;
        return this
    }
    //remove from end
    pop(){
        if(this.length===0) return -1;
        let popped = this.tail;
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
           this.tail = popped.previous;
           this.tail.next = null;
           //old node, previous
           popped.previous = null
        }
        this.length--;
        return popped;
    }
    //remove from beg
    shift(){
        if(!this.head) return -1
        let oldHead = this.head;
        if(this.length==1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            oldHead.next=null;
            this.head.previous=null;
        }
        this.length--;
        return oldHead;
    }
    //add to beg
    unshift(val){
        const newHead = new Node(val)
        if(this.length ==0){
            this.head= newHead;
            this.tail=newHead;
        }else{
            this.head.previous = newHead 
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++
        return this
    }
    //get 
    //at index x
    get(x){
        if(x<0 || x>=this.length) return -1 
        let counter;
        let current;
        if(x <= this.length/2){
            //if index is at far left
            current = this.head;
            while(counter != index){
                current = current.next;
                counter++;
            }
        }else{
            //if index is at far right
            counter = this.length-1;
            current = this.tail;
            while(counter !== index){
                current = current.previous;
                counter--;
            }
        }
        return current
    }
    set(index, val){
        let node = this.get(index);
        if(node <0) return -1
        node.value = val;
        return node
    }
    insert(index, val){
        if(index<0 || index > this.length) return -1
        if(index == 0) return this.unshift(val)
        if(index == this.length) return this.push(val)
        let newNode = new Node(val)
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        //
        beforeNode.next = newNode;
        newNode.previous = beforeNode;

        newNode.next = afterNode;
        afterNode.previous= newNode;
        this.length++;

        return newNode
    }
    remove(index){
        if(index<0 || x >=this.length) return -1
        if(index ==0 ) return this.shift();
        if(index == this.length-1) return this.pop();
        let targetNode = this.get(index);
        let beforeNode = targetNode.previous;
        let afterNode = targetNode.next;
        //
        beforeNode.next = afterNode;
        afterNode.previous = beforeNode;
        //
        targetNode.next = null;
        targetNode.prev = null;
        this.length--;
        return targetNode;
    }

}


