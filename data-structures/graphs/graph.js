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
}
