class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort()
        return this.values
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b)=> a.priority-b.priority)
    }
}


class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] ? null : this.adjacencyList[vertex] = [] 
    }
    addEdge(vertex1, vertex2, weight){
        if(!weight || weight ===0) return -1
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return -1
        this.adjacencyList[vertex1].push({node:vertex2, weight})
        this.adjacencyList[vertex2].push({node:vertex1, weight})
    }
    //Dijkstra
    shortestPath(start,end){
        let shortestDistances = {}
        let nodes = new PriorityQueue()
        let shortestPrevious = {}
        let currentSmallest
        let path = []

        //initial state
       for(let vertex in this.adjacencyList){
           vertex === start ? shortestDistances[vertex] = 0 : shortestDistances[vertex] = Infinity
           vertex === start ? nodes.enqueue(vertex,0) : nodes.enqueue(vertex,Infinity)
           shortestPrevious[vertex] = null
       }
       
       while(nodes.values.length){
           currentSmallest = nodes.dequeue().val // val : "A"
           if(currentSmallest == end){
               while(shortestPrevious[currentSmallest]){
                   path.push(currentSmallest)
                   currentSmallest = shortestPrevious[currentSmallest]
               }
               path.push(start)
               return path.reverse()
           }
           this.adjacencyList[currentSmallest].forEach( neighbor => {
                //adding paths
                let potential = shortestDistances[currentSmallest] + neighbor.weight
                console.log(currentSmallest,neighbor.node)

                //if path is smaller than before, then update to new one
                //neighbor.node : "B"
                if(potential < shortestDistances[neighbor.node]){
                    shortestDistances[neighbor.node] = potential 
                    shortestPrevious[neighbor.node] = currentSmallest
                    //enque 
                    nodes.enqueue(neighbor.node , potential)

                }
           })

       }
    }
}