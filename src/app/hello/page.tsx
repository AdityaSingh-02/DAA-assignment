"use client";
import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { data } from "@/utils/misc";
import { IGraphData } from "@/types/IGraphData";
import g from "@/helper/dijkstra";
import BasicTable from "@/components/table";

const Hello = () => {
  const [linkData, setLinkData] = useState<IGraphData>();
  const [dijkstra, setDijkstra] = useState<any>();

  const insertVals = async (node: { node: string; id: number }) => {
    data.links.map((link: any) => {
      // g.addEdge(link.source.id, link.target.id, link.value)
      let a = link.source.id;
      let b = link.target.id;
      let c = link.value;
      g.addEdge(a, b, c);
    });
    g.shortestPath(node.id).then((res)=>{
      setDijkstra(res);
    })
    console.log(dijkstra)
  };

  const handleClick = (node: { node: string; id: number }) => {
    console.log(node.id);
  };

  useEffect(() => {
    setLinkData(data);
    // insertVals();
  }, [data]);

  return (
    <>
      <div className="flex flex-row-reverse w-auto justify-between">
        <div className="w-[50%] mx-auto my-auto">
          <BasicTable items = {dijkstra} />
        </div>
        <div className="">
          <ForceGraph2D
            graphData={data}
            backgroundColor="lightGray"
            nodeCanvasObjectMode={() => "after"}
            width={800}
            height={1000}
            warmupTicks={10}
            onNodeClick={insertVals}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.node;
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px sans-serif`;
              ctx.textAlign = "center";
              ctx.fillStyle = "Red";
              ctx.textBaseline = "middle";
              ctx.fillText(label, node.x!, node.y!);
            }}
            linkDirectionalArrowLength={5}
            linkWidth={2}
            linkAutoColorBy={"source"}
          />
        </div>
      </div>
    </>
  );
};

export default Hello;
