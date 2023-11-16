// export interface IGraphData {
//   nodes: {
//     id: string;
//     nodeVal: number;
//   }[];
//   links: {
//     source: string;
//     target: string;
//     value: number;
//   }[];
// }

export interface IGraphData {
  nodes: {
    node: string;
    id: number;
  }[];
  links: {
    source: number;
    target: number;
    value: number;
  }[];
}
