class Node{
    //data = value
    //referece ==> next Node
    constructor(val){
        this.val = val
        this.next = null;
    }
}

//collection of Nodes
class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head =null
        this.tail =null
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            // if pushing e to  a-b-c-d
            // this.tail.next (NODE) >> d
            this.tail.next = newNode
            // (SinglyLinkedList)
            this.tail = newNode
        }
        this.length++
        return this
    }
}




let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
