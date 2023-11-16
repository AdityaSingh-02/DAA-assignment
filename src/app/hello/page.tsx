"use client";
import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { data } from "@/utils/misc";
import { IGraphData } from "@/types/IGraphData";

const Hello = () => {
  const [linkData, setLinkData] = useState<IGraphData>();

  useEffect(() => {
    setLinkData(data);
  }, [data]);

  return (
    <>
      <ForceGraph2D
        graphData={data}
        backgroundColor="lightGray"
        nodeCanvasObjectMode={() => "after"}
        onNodeClick={(node) => console.log(node.id)}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
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
