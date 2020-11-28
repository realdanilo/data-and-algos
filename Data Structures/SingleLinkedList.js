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
        return newHead
   }
   get(n){
        //    find node at index
        if(n>this.length) return null
        let count=0
        let current = this.head
        while(count < n){
            count++
            current = current.next
        }
        return current
   }
   set(position, value){
        let node = this.get(position)
        if(node){
           node.value = value 
           return node
        }
        return false
   }
   insert(position, value){
       if(position <0 || position > this.length) return false 
       if(position == this.length) return this.push(value)
       if(position ==0) return this.unshift(value)
    // else, index is in the middle
        let node = this.get(position-1)
        let temp = node.next
        let newNode = new Node(value)
        newNode.next = temp 
        node.next = newNode 
        this.length++
        return  true
   }
    
}



myList =  new SingleLinkedList()
myList.push("Hello")
myList.push("Good Bye")
myList.push("!")
myList.push("<3")
myList.push(":)")

myList.insert(5,"LAST")
console.log("------")
// console.log(myList)
// console.log(myList.head.next.next.next)








