class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] ? null : this.adjacencyList[vertex] = [] 
    }
    addEdge(vertex1,vertex2){
        //if vertexes exists
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return -1
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this.adjacencyList
    }
}