class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return this
        }else{
            let current = this.root;
            while(true){
                if(value == current.value) return undefined
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode
                        return this
                    }
                    current = current.left;
                }else{
                    if(!current.right){
                        current.right = newNode
                        return this
                    }
                    current = current.right;
                }

            }
        }
    }
    find(value){
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left                
            }else if(value >current.right){
                current = current.right
            }else{
                found = true;
            }
        }
        if(!found) return false
        return current
    }
    myFind(value){
        if(!this.root) return -1;
        let current = this.root;
        while(true && current){
            if(value < current.val){
                current = current.left
            }else if(value > current.val){
                current= current.right
            }else if(value == current.val){
                return current
            }
        }
        return false
    }
    reverse(node){
        //get head
        if(!node) return 
        //get children
        let left = this.reverse(node.left)
        let right = this.reverse(node.right)

        //swap children
        node.left = right
        node.right = left 
        //return head
        return node
    }
    //breadth first search
    //arrays instead of queues
    BFS(){
        let data = [];
        let queue = [];
        let node = null;
        queue.push(this.root)
        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder(){
        // returns a flat q/array , as if we need to recreate the tree, root is 0 index
        let data =[];
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left) 
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
    DFSPostOrder(){
        // returns the bottom node(s) first, bottom-up flow
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data 
    }
    DFSInOrder(){
        //Returns data in sorting order, smallest to largest
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}
