export interface IGraphData {
  nodes: {
    id: string;
    group: number;
  }[];
  links: {
    source: string;
    target: string;
    value: number;
  }[];
}
