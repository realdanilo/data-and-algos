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
    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return -1
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(x => x !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x !== vertex1)
        return this.adjacencyList

    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return -1
        let edges = this.adjacencyList[vertex]
        for(let i of edges){
            this.removeEdge(vertex, i)
        }
        //delete key
        delete this.adjacencyList[vertex]
        return this.adjacencyList
    }
    DFS_recursive(vertex){
        let result =[]
        let visited = {}
        let adjacencyList = this.adjacencyList

        function graph(point){
            visited[point] = true 
            result.push(point)
            for(let p of adjacencyList[point]){
                 if(!visited[p])  graph(p)
            }            
        }
        graph(vertex)
        return result 
    }
}