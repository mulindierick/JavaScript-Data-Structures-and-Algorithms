class Graph {
  constructor() {
    this.graph = {};
  }
  addVertex(v) {
    if (!this.graph[v]) this.graph[v] = [];
  }
  addEdge(v1, v2) {
    this.graph[v1].push(v2);
    this.graph[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.graph[v1] = this.graph[v1].filter((v) => v !== v2);
    this.graph[v2] = this.graph[v2].filter((v) => v !== v1);
  }
  removeVertex(v) {
    while (this.graph[v].length) {
      let edge = this.graph[v].pop();
      this.removeEdge(v, edge);
    }
    delete this.graph[v];
  }
  DFSRecursive(v) {
    result = [];
    visited = {};
    let graph = this.graph;

    (function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      graph[vertex].forEach((v) => {
        if (!visited[v]) {
          return dfsHelper(v);
        }
      });
    })(v);

    return result;
  }

  // DFS - use a stack
  DFSIterative(v) {
    let result = [v];
    let visited = {};
    let stack = [];
    let currVertext;

    visited[v] = true;

    while (stack.length) {
      currVertext = stack.pop();
      result.push(currVertext);

      this.graph[currVertext].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  // BFS - use a queue
  BFSIterative(v) {
    let result = [];
    let visited = {};
    let queue = [v];
    let currVertext;

    visited[v] = true;

    while (queue.length) {
      currVertext = queue.shift();
      result.push(currVertext);

      this.graph[currVertext].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}
