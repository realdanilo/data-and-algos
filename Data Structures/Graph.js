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
    DFS_iterative(vertex){
        let stack = []
        let result = []
        let visited = {}
        stack.push(vertex)
        while(stack.length >= 1){
            let point = stack.pop()
            if(!visited[point]){
                visited[point] = true
                result.push(point)
                // for(let n of adjacencyList[point]){
                //     stack.push(n)
                // } same as below
                stack.push(...this.adjacencyList[point])
            }
        }
        return result
    }
    DFS_iterative_optimized(vertex){
        let stack = []
        let result = []
        let visited = {}
        let point
        //optimization 1
        stack.push(vertex)
        visited[vertex] = true

        while(stack.length){
            point = stack.pop()
            result.push(point)
            this.adjacencyList[point].forEach(n => {
                //optimization 2
                if(!visited[n]){
                    visited[n] = true
                    stack.push(n)
                }
            })
        }
        return result
    }
    BFS(vertex){
        let q = []
        let point;
        let result = []
        let visited = {}
        q.push(vertex)
        //optimization 1
        visited[vertex] = true
        
        while(q.length){
            point = q.shift()
            result.push(point)
            this.adjacencyList[point].forEach(n => {
               //optimization 2
                if(!visited[n]){
                    visited[n] = true
                    q.push(n)
                }
            })
            
        }
        return result
    }
    BFS_recursive(vertex){
        let result = []
        let visited = {}
        let q =[vertex]
        visited[vertex] = true
        let current 
        let adjacencyList = this.adjacencyList

        function graph(){
            if(q.length){
                current = q.shift()
                result.push(current)
                adjacencyList[current].forEach(n=>{
                    if(!visited[n]){
                        visited=true 
                        q.push(n)
                    }
                })
                graph()
            }
        }
        graph()
        return result
    }
}