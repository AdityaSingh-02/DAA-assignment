"use client";
import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { data } from "@/utils/misc";
import { IGraphData } from "@/types/IGraphData";
import g from "@/helper/dijkistra";

const Hello = () => {
  const [linkData, setLinkData] = useState<IGraphData>();

  const insertVals = () => {
    data.links.map((link:any)=> {
      // g.addEdge(link.source.id, link.target.id, link.value)
      let a = link.source.id;
      let b = link.target.id;
      let c = link.value;
      g.addEdge(a,b,c);
      // console.log(`Source - ${ln.source.id} , target - ${ln.target.id} , value ${ln.value}`);
    })
  }

  const handleClick = (node: {node: string, id:number}) => {
    console.log(node.id)
  }

  useEffect(() => {
    setLinkData(data);
    // insertVals();
  }, [data]);

  return (
    <>
      <ForceGraph2D
        graphData={data}
        backgroundColor="lightGray"
        nodeCanvasObjectMode={() => "after"}
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
    </>
  );
};

export default Hello;
