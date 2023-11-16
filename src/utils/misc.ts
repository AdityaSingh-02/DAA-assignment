import { IGraphData } from "@/types/IGraphData";


export const data: IGraphData = {
  nodes: [
    { node: "Boston", id: 5 },
    { node: "New York", id: 6 },
    { node: "Miami", id: 7 },
    { node: "New Orelands", id: 8 },
    { node: "Chicago", id: 4 },
    { node: "Los Angeles", id: 1 },
    { node: "Denver", id: 3 },
    { node: "San Fransisco", id: 2 },
  ],
  links: [
    { source: 5, target: 6, value: 1 },
    { source: 6, target: 7, value: 8 },
    { source: 6, target: 8, value: 2 },
    { source: 7, target: 8, value: 1 },
    { source: 6, target: 4, value: 7 },
    { source: 5, target: 4, value: 8 },
    { source: 8, target: 1, value: 88 },
    { source: 4, target: 3, value: 78 },
    { source: 3, target: 1, value: 67 },
    { source: 3, target: 2, value: 68 },
    { source: 2, target: 1, value: 69 },
  ],
};

// export const data: IGraphData = {
//   nodes: [
//     { node: "Boston", id: 5 },
//     { node: "New York", id: 6 },
//     { node: "Miami", id: 7 },
//     { node: "New Orelands", id: 8 },
//     { node: "Chicago", id: 4 },
//     { node: "Los Angeles", id: 1 },
//     { node: "Denver", id: 3 },
//     { node: "San Fransisco", id: 2 },
//   ],
//   links: [
//     { source: "Boston", target: "New York", value: 1 },
//     { source: "New York", target: "Miami", value: 8 },
//     { source: "New York", target: "New Orelands", value: 2 },
//     { source: "Miami", target: "New Orelands", value: 1 },
//     { source: "New York", target: "Chicago", value: 7 },
//     { source: "Boston", target: "Chicago", value: 8 },
//     { source: "New Orelands", target: "Los Angeles", value: 88 },
//     { source: "Chicago", target: "Denver", value: 78 },
//     { source: "Denver", target: "Los Angeles", value: 67 },
//     { source: "Denver", target: "San Fransisco", value: 68 },
//     { source: "San Fransisco", target: "Los Angeles", value: 69 },

//   ],
// };
