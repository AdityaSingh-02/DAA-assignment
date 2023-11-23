"use client";
import React, { useState } from "react";
import { data } from "@/utils/misc";
import g from "@/helper/dijkstra";
import dynamic from "next/dynamic";
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});
const BasicTable = dynamic(() => import("@/components/table"), { ssr: false });

const Hello = () => {
  const [dijkstra, setDijkstra] = useState<any>(null);

  const insertVals = async (node: { node: string; id: number }): Promise<void> =>  {
    data.links.map((link: any) => {
      let a = link.source.id;
      let b = link.target.id;
      let c = link.value;
      g.addEdge(a, b, c);
    });
    g.shortestPath(node.id).then((res) => {
      setDijkstra(res);
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row-reverse w-auto md:justify-between">
        <div className="w-[100%] md:w-[100%] mx-auto my-auto">
          {dijkstra && <BasicTable items={dijkstra} />}
        </div>
        <div className="">
          <ForceGraph2D
            graphData={data}
            backgroundColor="lightGray"
            nodeCanvasObjectMode={() => "after"}
            width={800}
            height={1000}
            warmupTicks={10}
            // @ts-ignore
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
