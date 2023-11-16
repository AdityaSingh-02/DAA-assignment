import { IGraphData } from "@/types/IGraphData";

export const data: IGraphData = {
  nodes: [
    { id: "Boston", group: 1 },
    { id: "New York", group: 1 },
    { id: "Miami", group: 1 },
    { id: "New Orelands", group: 2 },
    { id: "Chicago", group: 2 },
    { id: "Los Angeles", group: 3 },
    { id: "Denver", group: 3 },
    { id: "San Fransisco", group: 3 },
  ],
  links: [
    { source: "Boston", target: "New York", value: 1 },
    { source: "New York", target: "Miami", value: 8 },
    { source: "New York", target: "New Orelands", value: 6 },
    { source: "Miami", target: "New Orelands", value: 6 },
    { source: "New York", target: "Chicago", value: 6 },
    { source: "Boston", target: "Chicago", value: 6 },
    { source: "New Orelands", target: "Los Angeles", value: 6 },
    { source: "Chicago", target: "Denver", value: 6 },
    { source: "Denver", target: "Los Angeles", value: 6 },
    { source: "Denver", target: "San Fransisco", value: 6 },
    { source: "San Fransisco", target: "Los Angeles", value: 6 },

  ],
};
