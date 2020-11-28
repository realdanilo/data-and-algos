class Node {
    constructor(value=null, next = null){
        this.value = value 
        this.next = next
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0
    }
    push(val){
        // add to end
        const createdNode = new Node(val)
        if(!this.head){
            this.head = createdNode
        }else{
            let current  = this.head
            while( current.next != null){
                current = current.next
            }
            current.next = createdNode
        }
        this.tail = createdNode
        this.length++
        return this
    }
   
    pop(){
        // removes last
        if(!this.head) return this
        let end = this.head 
        let prev = this.head
        while(end.next){
            prev = end 
            end = end.next
        }
        prev.next = null 
        this.tail = prev
        this.length--
        if(this.length == 0){
            this.tail = null 
            this.head= null
        }
        return end
    }
    shift(){
        // removes from beggining
        if(!this.head) return this 
        let head = this.head 
        this.head = head.next 
        this.length-- 
        if(this.length == 0){
            this.tail = null 
        }
        return head
    }
   unshift(val){
    //    add to beg
    if(val == null || val == undefined) return -1
    const newHead = new Node(val)
    const body = this.head 
    newHead.next = body 
    this.head = newHead
    this.length++
   }
    remove(n){
        if(n > this.length) return -1
        let count = 1
        let current = this.head
        while(count <n){
            current = current.next 
            count++
        }
        // still working
        console.log(current)
        console.log("to be romved")
        return 
    }
   
    
    
}



myList =  new SingleLinkedList()
myList.push(1)
myList.push(2)
myList.push(3)
myList.unshift(0)
console.log(myList)







