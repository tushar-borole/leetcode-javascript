// create a graph class
// https://www.geeksforgeeks.org/implementation-graph-javascript/
// https://www.youtube.com/watch?v=pcKY4hjDrxk
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    let values = this.AdjList.keys(); //?

    for (let i of values) {
      let edge = i; //?
      this.AdjList.get(edge); //?
    }
  }

  bfs(startingNode) {
    let queue = [startingNode];
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
