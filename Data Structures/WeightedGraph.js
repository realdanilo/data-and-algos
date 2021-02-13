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
}