const INF: number = 2147483647;

class dijkstra {
  V: any;
  adj:any;
  constructor(V: number) {
    this.V = V;
    this.adj = new Array(V);
    for (let i = 0; i < V; i++) {
      this.adj[i] = new Array();
    }
  }



  addEdge(source: number, target: number, val: number) {
    this.adj[source].push([target, val]);
    // this.adj[source].sort((a,b) => a[1]-b[1]); Comparator
    // this.adj[target].push([source, val]);
  }
  shortestPath(src: number) {
    let pq = [];
    let list = [];
    let verSel = [];
    let visited = [src];
    let dist = new Array(V).fill(INF);
    pq.push([0, src]);
    dist[src] = 0;

    while (pq.length > 0) {
      let source: number = pq[0][1];
      pq.shift();

      for (let i = 0; i < this.adj[source].length; i++) {
        let target = this.adj[source][i][0];
        let weight = this.adj[source][i][1];
        if(!visited.includes(source)){
          visited.push(source);
          verSel.push(source);
        }
        if (dist[target] > dist[source] + weight) {
          dist[target] = dist[source] + weight;
          pq.push([dist[target], target]);
          pq.sort((a, b) => {
            if (a[0] == b[0]) return a[1] - b[1];
            return a[0] - b[0];
          });
        }
      }
      // console.log(visited, verSel)
      list.push([...dist]);
    }
    return [list, visited, verSel];
  }
}
let V = 9;
let g = new dijkstra(V);
 
export default g;
