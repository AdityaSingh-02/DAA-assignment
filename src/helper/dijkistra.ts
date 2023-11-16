const INF: number = 2147483647;

class dijkistra {
  V: any;
  adj:any;
  constructor(V: number) {
    this.V = V;
    this.adj = new Array(V);
    for (let i = 0; i < V; i++) {
      this.adj[i] = new Array();
    }
  }

  addEdge(u: number, v: number, w: number) {
    this.adj[u].push([v, w]);
    this.adj[v].push([u, w]);
  }
  shortestPath(src: number) {
    let pq = [];
    let dist = new Array(V).fill(INF);
    pq.push([0, src]);
    dist[src] = 0;

    while (pq.length > 0) {
      let u: number = pq[0][1];
      pq.shift();

      for (let i = 0; i < this.adj[u].length; i++) {
        let v = this.adj[u][i][0];
        let weight = this.adj[u][i][1];

        if (dist[v] > dist[u] + weight) {
          dist[v] = dist[u] + weight;
          pq.push([dist[v], v]);
          pq.sort((a, b) => {
            if (a[0] == b[0]) return a[1] - b[1];
            return a[0] - b[0];
          });
        }
      }
    }
    return dist;
  }
}
let V = 9;
let g = new dijkistra(V);
 
// making above shown graph
// g.addEdge(0, 1, 4);
// g.addEdge(0, 7, 8);
// g.addEdge(1, 2, 8);
// g.addEdge(1, 7, 11);
// g.addEdge(2, 3, 7);
// g.addEdge(2, 8, 2);
// g.addEdge(2, 5, 4);
// g.addEdge(3, 4, 9);
// g.addEdge(3, 5, 14);
// g.addEdge(4, 5, 10);
// g.addEdge(5, 6, 2);
// g.addEdge(6, 7, 1);
// g.addEdge(6, 8, 6);
// g.addEdge(7, 8, 7);
 
// Function call
export default g;
